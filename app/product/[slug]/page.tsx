'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Star, TrendingDown, ExternalLink, Check, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string;
  current_price: number;
  original_price?: number;
  discount_percentage?: number;
  rating: number;
  review_count: number;
  specs?: Record<string, string>;
  pros?: string[];
  cons?: string[];
  affiliate_disclosure?: string;
}

interface Retailer {
  name: string;
  price: number;
  affiliate_url: string;
  in_stock: boolean;
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [retailers, setRetailers] = useState<Retailer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data: productData } = await supabase
        .from('products')
        .select('id, name, description, image_url, current_price, original_price, discount_percentage, rating, review_count, specs, pros, cons, affiliate_disclosure')
        .eq('slug', params.slug)
        .single();

      if (productData) {
        setProduct(productData);

        const { data: retailerData } = await supabase
          .from('product_retailers')
          .select('price, in_stock, affiliate_url, retailers(name)')
          .eq('product_id', productData.id);

        const formattedRetailers = (retailerData || []).map((item: any) => ({
          name: item.retailers.name,
          price: item.price,
          affiliate_url: item.affiliate_url,
          in_stock: item.in_stock,
        }));

        setRetailers(formattedRetailers);
      }

      setLoading(false);
    };

    fetchProduct();
  }, [params.slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-950">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <p className="text-slate-600 dark:text-slate-400">Loading product...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-950">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <p className="text-slate-600 dark:text-slate-400">Product not found.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.discount_percentage && product.discount_percentage > 0 && (
              <Badge className="absolute top-4 right-4 bg-red-500 text-white text-base py-2 px-3 flex items-center gap-2">
                <TrendingDown className="w-4 h-4" />
                {product.discount_percentage}% off
              </Badge>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
                {product.name}
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-slate-900 dark:text-white">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                ({product.review_count.toLocaleString()} reviews)
              </span>
            </div>

            <div className="space-y-3 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  ${product.current_price.toFixed(2)}
                </span>
                {product.original_price && product.original_price > product.current_price && (
                  <>
                    <span className="text-xl text-slate-500 dark:text-slate-400 line-through">
                      ${product.original_price.toFixed(2)}
                    </span>
                    <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                      Save ${(product.original_price - product.current_price).toFixed(2)}
                    </span>
                  </>
                )}
              </div>
            </div>

            <Button size="lg" className="w-full bg-teal-600 hover:bg-teal-700">
              View Best Price
            </Button>

            {product.affiliate_disclosure && (
              <p className="text-xs text-slate-500 dark:text-slate-500 p-3 bg-slate-50 dark:bg-slate-900 rounded">
                {product.affiliate_disclosure}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Specifications</h2>
              <dl className="space-y-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key}>
                    <dt className="text-sm font-medium text-slate-600 dark:text-slate-400 capitalize">
                      {key.replace(/_/g, ' ')}
                    </dt>
                    <dd className="text-sm font-semibold text-slate-900 dark:text-white">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {product.pros && product.pros.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Pros</h2>
              <ul className="space-y-2">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {product.cons && product.cons.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Cons</h2>
              <ul className="space-y-2">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {retailers.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Where to Buy</h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Retailer</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Availability</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {retailers.map((retailer, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{retailer.name}</TableCell>
                      <TableCell>${retailer.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={retailer.in_stock ? 'default' : 'secondary'}>
                          {retailer.in_stock ? 'In Stock' : 'Out of Stock'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <a
                          href={retailer.affiliate_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium"
                        >
                          Visit <ExternalLink className="w-4 h-4" />
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
