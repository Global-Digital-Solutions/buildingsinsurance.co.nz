import type { Metadata } from 'next';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: 'Buildings Insurance FAQs | Common Questions Answered',
  description: 'Answers to common questions about buildings insurance — coverage, excess, EQC, rebuild costs, landlord policies, and how to compare insurers.',
  alternates: {
    canonical: 'https://www.buildingsinsurance.co.nz/faqs/',
  },
};

export default function FAQsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Buildings Insurance FAQs
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Common questions about buildings insurance — answered clearly.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="divide-y divide-slate-200">
            {faqs.map((faq, i) => (
              <details key={i} className="group py-6">
                <summary className="flex justify-between items-start cursor-pointer list-none gap-4">
                  <h2 className="text-lg font-semibold text-slate-900 group-open:text-emerald-700 transition-colors">
                    {faq.q}
                  </h2>
                  <span className="flex-shrink-0 w-6 h-6 text-slate-400 group-open:text-emerald-600 group-open:rotate-180 transition-transform duration-200">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-600 mb-6">
              Our advisers can walk you through your coverage options and find the right policy for your property.
            </p>
            <a
              href="/contact"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
