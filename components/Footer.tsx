import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">TechDeals</h3>
            <p className="text-sm">
              Find the best deals on technology products and electronics.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/laptops" className="hover:text-white transition">Laptops</Link></li>
              <li><Link href="/category/smartphones" className="hover:text-white transition">Smartphones</Link></li>
              <li><Link href="/category/tablets" className="hover:text-white transition">Tablets</Link></li>
              <li><Link href="/category/gaming" className="hover:text-white transition">Gaming</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/affiliate-disclosure" className="hover:text-white transition">Affiliate Disclosure</Link></li>
              <li><Link href="/price-disclaimer" className="hover:text-white transition">Price Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm">
              Questions? Email us at<br />
              <a href="mailto:info@techdeals.com" className="text-teal-400 hover:text-teal-300">
                info@techdeals.com
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <p className="text-sm text-center">
            2024 TechDeals. All rights reserved. Prices and availability subject to change.
          </p>
        </div>
      </div>
    </footer>
  );
}
