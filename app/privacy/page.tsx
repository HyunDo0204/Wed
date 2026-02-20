import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Introduction
              </h2>
              <p>
                TechDeals ("we", "us", "our") operates the TechDeals website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Information Collection and Use
              </h2>
              <p>
                We collect several different types of information for various purposes to provide and improve our service to you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usage Data: Browser type, IP address, pages visited, and time spent</li>
                <li>Cookies: We use cookies to enhance your browsing experience</li>
                <li>Analytics: We may use third-party services to analyze website usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Use of Data
              </h2>
              <p>
                TechDeals uses the collected data for various purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To understand and analyze how you use our website</li>
                <li>To monitor the effectiveness of our content</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Cookies
              </h2>
              <p>
                Cookies are files with a small amount of data that can include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. We use cookies to enhance your experience on our site.
              </p>
              <p className="mt-3">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some parts of our website may not function properly if you disable cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Third-Party Links
              </h2>
              <p>
                Our website contains links to external sites that are not operated by us. Please note that we have no control over the content and practices of these sites and cannot accept responsibility for them. We strongly advise you to check the privacy policies of these websites before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Security of Data
              </h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the bottom of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:info@techdeals.com" className="text-teal-600 dark:text-teal-400 hover:underline">
                  info@techdeals.com
                </a>
                .
              </p>
            </section>

            <div className="mt-12 p-6 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-sm text-green-900 dark:text-green-300">
                <strong>Last Updated:</strong> February 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
