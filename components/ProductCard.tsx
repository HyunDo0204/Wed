import Link from 'next/link';
import { Star, TrendingDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
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

export function ProductCard({
  name,
  slug,
  image_url,
  current_price,
  original_price,
  discount_percentage,
  rating,
  review_count,
}: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`}>
      <div className="group relative bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300">
        <div className="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-700">
          <img
            src={image_url}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount_percentage !== undefined && discount_percentage > 0 && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-1">
                <TrendingDown className="w-3 h-3" />
                {discount_percentage}% off
              </Badge>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-slate-900 dark:text-white line-clamp-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">
            {name}
          </h3>

          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="ml-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                {rating.toFixed(1)}
              </span>
            </div>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              ({review_count.toLocaleString()})
            </span>
          </div>

          <div className="mt-3 space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-slate-900 dark:text-white">
                ${current_price.toFixed(2)}
              </span>
              {original_price && original_price > current_price && (
                <span className="text-sm text-slate-500 dark:text-slate-400 line-through">
                  ${original_price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
