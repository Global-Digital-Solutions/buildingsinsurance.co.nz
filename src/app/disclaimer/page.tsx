import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | BuildingsInsurance.co.nz',
  description: 'Important disclaimer about the nature of BuildingsInsurance.co.nz as a broker referral service. We connect you with licensed NZ insurance advisers — we do not provide financial advice.',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-emerald-50 text-lg">
            Last updated: 9 May 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="prose prose-lg max-w-none">

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              1. Referral Service Only
            </h2>
            <p className="text-slate-700 mb-4">
              BuildingsInsurance.co.nz is a broker referral and information service. We are not an insurance
              company, insurer, or Financial Advice Provider (FAP). We do not underwrite, issue, or administer
              insurance policies, and we do not provide personalised financial or insurance advice.
            </p>
            <p className="text-slate-700 mb-4">
              When you submit a quote request through this website, your details are passed to a licensed
              insurance adviser or broker who will contact you directly to discuss your needs and provide
              a quote. Any advice given and any policy arranged will be between you and that licensed adviser
              or insurer — not BuildingsInsurance.co.nz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              2. Licensed Advisers
            </h2>
            <p className="text-slate-700 mb-4">
              The insurance advisers and brokers we refer you to are licensed Financial Advice Providers (FAPs)
              or operate under a FAP licence, as required under the Financial Markets Conduct Act 2013 (FMCA).
              They are regulated by the Financial Markets Authority (FMA) and are required to act in your best
              interests when providing financial advice.
            </p>
            <p className="text-slate-700 mb-4">
              Before engaging with any referred adviser, we encourage you to request and review their disclosure
              statement, which will set out their services, any conflicts of interest, and how they are
              remunerated.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              3. General Information Only
            </h2>
            <p className="text-slate-700 mb-4">
              All content published on BuildingsInsurance.co.nz — including articles, guides, FAQs, and
              coverage summaries — is provided for general informational purposes only. It does not constitute
              financial advice, insurance advice, or a recommendation to purchase any particular product.
            </p>
            <p className="text-slate-700 mb-4">
              Insurance needs vary significantly between individuals and properties. We strongly recommend
              consulting with a licensed adviser before making any insurance decision. Do not rely solely on
              the information on this website when deciding on coverage.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              4. Pricing Information
            </h2>
            <p className="text-slate-700 mb-4">
              Any premium ranges, pricing examples, or cost estimates published on this website are indicative
              only and are based on general market data. They should not be relied upon as accurate quotes for
              your specific situation. Actual premiums are determined by insurers based on individual risk
              assessments and may differ significantly from any figures displayed on this site.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              5. Provider Information
            </h2>
            <p className="text-slate-700 mb-4">
              References to insurance providers, products, or companies on this website are for informational
              purposes only. BuildingsInsurance.co.nz is not affiliated with, endorsed by, or an authorised
              representative of any specific insurer unless explicitly stated. Provider information, product
              details, and policy terms are subject to change — always verify directly with the insurer or
              your adviser.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              6. No Guarantee of Cover
            </h2>
            <p className="text-slate-700 mb-4">
              Submitting a quote request through this website does not guarantee that insurance cover will
              be offered, approved, or available for your property. Cover is subject to the insurer&apos;s
              underwriting criteria, acceptance of your application, and payment of any applicable premium.
            </p>
            <p className="text-slate-700 mb-4">
              BuildingsInsurance.co.nz accepts no liability for any loss or damage arising from a failure
              to obtain insurance cover, whether or not a quote request was submitted through this website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              7. External Links
            </h2>
            <p className="text-slate-700 mb-4">
              This website may contain links to third-party websites. These links are provided for your
              convenience only. BuildingsInsurance.co.nz does not control, endorse, or accept responsibility
              for the content of any linked website. We recommend reviewing the terms and privacy policy of
              any third-party site you visit.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              8. Contact Us
            </h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about this disclaimer or the nature of our service, please contact us:
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mt-4">
              <p className="text-slate-900 font-semibold mb-2">BuildingsInsurance.co.nz</p>
              <p className="text-slate-700 mb-2">Email: <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 hover:underline">hello@cover4you.co.nz</a></p>
              <p className="text-slate-700 mb-2">Phone: 0800 COVER 4U (0800 268 37 48)</p>
              <p className="text-slate-700 mb-4">Auckland, New Zealand</p>
              <p className="text-slate-600 text-sm">
                Complaints about financial advice provided by a referred adviser can be directed to the
                Insurance and Financial Services Ombudsman (IFSO) at{' '}
                <a href="https://www.ifso.nz" className="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">www.ifso.nz</a>.
              </p>
            </div>
          </section>

        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
