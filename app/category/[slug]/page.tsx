'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Product {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  current_price: number;
  original_price?: number;
  discount_percentage?: number;
  rating: number;
  review_count: number;
}

interface Category {
  name: string;
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    const fetchData = async () => {
      const { data: catData } = await supabase
        .from('categories')
        .select('name')
        .eq('slug', params.slug)
        .single();

      if (catData) {
        setCategory(catData);
      }

      let query = supabase
        .from('products')
        .select('id, name, slug, image_url, current_price, original_price, discount_percentage, rating, review_count')
        .eq('category_id', (await supabase.from('categories').select('id').eq('slug', params.slug).single()).data?.id);

      if (minRating > 0) {
        query = query.gte('rating', minRating);
      }

      const { data: productsData } = await query;
      let items = (productsData || []).filter(
        (p) => p.current_price >= priceRange[0] && p.current_price <= priceRange[1]
      );

      if (sortBy === 'price-low') items.sort((a, b) => a.current_price - b.current_price);
      else if (sortBy === 'price-high') items.sort((a, b) => b.current_price - a.current_price);
      else if (sortBy === 'rating') items.sort((a, b) => b.rating - a.rating);
      else if (sortBy === 'discount') items.sort((a, b) => (b.discount_percentage || 0) - (a.discount_percentage || 0));

      setProducts(items);
      setLoading(false);
    };

    fetchData();
  }, [params.slug, priceRange, minRating, sortBy]);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8 capitalize">
          {category?.name || 'Products'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    ${priceRange[0]} - ${priceRange[1]}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Min Rating</h3>
                <div className="space-y-2">
                  {[0, 3, 4, 4.5].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        value={rating}
                        checked={minRating === rating}
                        onChange={(e) => setMinRating(Number(e.target.value))}
                        className="w-4 h-4"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-400">
                        {rating === 0 ? 'Any' : `${rating}+ stars`}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Showing {products.length} products
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Sort <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortBy('relevance')}>
                    Relevance
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('price-low')}>
                    Price: Low to High
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('price-high')}>
                    Price: High to Low
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('rating')}>
                    Highest Rating
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('discount')}>
                    Biggest Discount
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-slate-600 dark:text-slate-400">Loading products...</p>
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-600 dark:text-slate-400">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
