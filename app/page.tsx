import { Zap } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';

async function getFeaturedProducts() {
  const { data } = await supabase
    .from('products')
    .select('id, name, slug, image_url, current_price, original_price, discount_percentage, rating, review_count')
    .order('discount_percentage', { ascending: false })
    .limit(6);
  return data || [];
}

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      <section className="relative bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Best Tech Deals Today</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Find Amazing Tech Deals
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Discover the hottest deals on the latest gadgets and electronics. Save big on premium tech products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Featured Deals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
