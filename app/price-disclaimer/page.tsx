import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PriceDisclaimer() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Price Disclaimer
          </h1>

          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Important Notice About Pricing
              </h2>
              <p>
                All prices and product information displayed on TechDeals are provided as-is for informational purposes only. While we strive to provide accurate and current information, prices and availability change frequently.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Price Accuracy
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prices are subject to change without notice and may vary from retailer to retailer</li>
                <li>We update prices regularly, but delays may occur</li>
                <li>The final price at the retailer's website takes precedence over prices shown on TechDeals</li>
                <li>Sales tax, shipping fees, and other charges are not included in listed prices</li>
                <li>Special promotional prices may only be available at specific times or locations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Product Information
              </h2>
              <p>
                Product specifications, features, images, and descriptions are provided by retailers or manufacturers. While we make every effort to ensure accuracy, we cannot guarantee that all information is completely accurate or current.
              </p>
              <p className="mt-3">
                Product availability may be limited and stock levels change frequently. Confirmation of availability should be obtained from the retailer directly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Discount and Deal Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Discount percentages are calculated based on the original and current prices</li>
                <li>Not all products may be eligible for all stated discounts or promotions</li>
                <li>Coupons, rebates, and promotional codes may have specific terms and conditions</li>
                <li>Limited-time deals expire at specified dates and times</li>
                <li>Deals may be retailer-specific and may not be available in all regions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                No Warranty
              </h2>
              <p>
                TechDeals makes no warranties, express or implied, regarding the accuracy, completeness, or reliability of any information, prices, or product listings. Your reliance on any such information is entirely at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Verification Recommended
              </h2>
              <p>
                Before making a purchase, we strongly recommend that you verify all product information, pricing, and availability directly with the retailer. Visit the retailer's website or contact their customer service to confirm details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Regional Variations
              </h2>
              <p>
                Prices, availability, and promotions may vary significantly by region, country, and retailer. International customers should note that pricing displayed may be for US retailers and may not be available or applicable in other regions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p>
                TechDeals shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, whether incurred directly or indirectly, arising from inaccurate pricing, product information, or availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p>
                If you notice any pricing errors or inaccuracies, please let us know immediately at{' '}
                <a href="mailto:info@techdeals.com" className="text-teal-600 dark:text-teal-400 hover:underline">
                  info@techdeals.com
                </a>
                .
              </p>
            </section>

            <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
              <p className="text-sm text-amber-900 dark:text-amber-300">
                <strong>Last Updated:</strong> February 2024. This disclaimer is subject to change at any time. Please review it regularly for updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
