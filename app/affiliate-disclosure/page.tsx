import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AffiliateDisclosure() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Affiliate Disclosure
          </h1>

          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                What is an Affiliate Link?
              </h2>
              <p>
                TechDeals participates in various affiliate marketing programs, including the Amazon Associates Program and other retailer affiliate networks. This means that when you click on a product link on our website and make a purchase, we may earn a small commission at no additional cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                How Does This Work?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>When you click on a product link from TechDeals, you are directed to a retailer's website</li>
                <li>If you purchase the product (or other products) within a certain timeframe, we receive a commission</li>
                <li>This commission is paid by the retailer, not by you</li>
                <li>Your purchase price remains the same whether you arrive via our affiliate link or directly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Commitment to You
              </h2>
              <p>
                We are committed to providing honest, unbiased product reviews and recommendations. Our affiliate relationships do not influence our editorial decisions. We include products based on their quality, value, and relevance to our audience, not because of affiliate commissions.
              </p>
              <p className="mt-3">
                We disclose our affiliate relationships transparently and comply with all applicable regulations, including FTC guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Affiliate Programs We Participate In
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Amazon Associates Program</li>
                <li>Best Buy Affiliate Program</li>
                <li>Newegg Affiliate Program</li>
                <li>And other technology retailers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Questions?
              </h2>
              <p>
                If you have any questions about our affiliate relationships or how they work, please contact us at{' '}
                <a href="mailto:info@techdeals.com" className="text-teal-600 dark:text-teal-400 hover:underline">
                  info@techdeals.com
                </a>
                .
              </p>
            </section>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="text-sm text-blue-900 dark:text-blue-300">
                <strong>Last Updated:</strong> February 2024. This policy is subject to change at any time. Please review it regularly for updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
