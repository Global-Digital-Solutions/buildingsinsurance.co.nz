import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { ArrowRight, CheckCircle, TrendingDown, Shield, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cheap Buildings Insurance NZ | How to Reduce Your Premium',
  description: 'Looking for affordable buildings insurance in NZ? Find out what drives premiums up, how to legitimately reduce your cost, and why the cheapest policy isn\'t always the best value.',
  alternates: { canonical: 'https://buildingsinsurance.co.nz/cheap-buildings-insurance/' },
  openGraph: {
    title: 'Cheap Buildings Insurance NZ | How to Reduce Your Premium',
    description: 'Compare NZ buildings insurance and find ways to lower your premium without sacrificing the cover you actually need.',
    url: 'https://buildingsinsurance.co.nz/cheap-buildings-insurance/',
  },
};

const premiumDrivers = [
  { label: 'Location / seismic zone', impact: 'High', detail: 'Wellington and Christchurch properties typically pay 20–35% more than equivalent properties in Auckland or Hamilton due to earthquake risk.' },
  { label: 'Sum insured / rebuild value', impact: 'High', detail: 'A higher sum-insured means a higher premium. However, underinsuring to save money creates serious financial risk — get the balance right.' },
  { label: 'Excess level', impact: 'Medium', detail: 'Choosing a $2,500–$5,000 excess instead of the standard $500–$1,000 can reduce premiums by 10–20%. Only viable if you can absorb the excess at claim time.' },
  { label: 'Age and construction of building', impact: 'Medium', detail: 'Pre-1980 homes, monolithic cladding, and weathertight risk can attract higher premiums. Modern homes with compliant construction are cheaper to insure.' },
  { label: 'Claims history', impact: 'Medium', detail: 'A claims-free history can attract no-claims discounts of up to 15% with some insurers. Repeated small claims can push premiums up significantly.' },
  { label: 'Flood / liquefaction zone', impact: 'High', detail: 'Properties in FEMA or council-identified flood zones may pay significantly more, or face sub-limits on flood cover.' },
  { label: 'Multi-policy discount', impact: 'Low–Medium', detail: 'Bundling buildings, contents, and car insurance with the same insurer can yield 5–15% multi-policy discounts.' },
];

const savingTips = [
  { tip: 'Compare multiple insurers', detail: 'Premiums for identical cover can vary by 20–40% between NZ insurers. An adviser compares across the whole market — not just one provider.', icon: TrendingDown },
  { tip: 'Review your sum-insured annually', detail: 'Over-insuring adds unnecessary cost. Use a rebuild cost estimator and keep your sum-insured accurate — not inflated as a safety buffer.', icon: Shield },
  { tip: 'Increase your excess', detail: 'Moving from a $500 to a $2,500 excess can save $150–$400/year in premiums, depending on your property and location. Best for those who can self-fund smaller claims.', icon: TrendingDown },
  { tip: 'Make your home more resilient', detail: 'Some insurers offer discounts for modern roofing materials, monitored alarms, and homes that meet current building codes. Ask your adviser what qualifies.', icon: CheckCircle },
  { tip: 'Maintain a claims-free record', detail: 'Avoid claiming for minor damage. Multiple small claims can raise your premium substantially in subsequent years, far outweighing the claim benefit.', icon: Shield },
  { tip: 'Ask about loyalty and direct discounts', detail: 'Long-term customers and those who pay annually (vs monthly) often qualify for discounts. An adviser can negotiate on your behalf.', icon: TrendingDown },
];

const warningFlags = [
  'No earthquake or natural disaster cover — a serious omission in NZ',
  'Flood excluded entirely (check if your area has flood risk)',
  'Very low sum-insured to keep premiums down (underinsurance risk)',
  'High sub-limits on specific events like storm or landslip',
  'Agreed value instead of replacement cost without checking rebuild cost',
  'No loss of rent cover for investment properties',
];

const schemaCheap = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildingsinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Affordable Buildings Insurance', item: 'https://buildingsinsurance.co.nz/cheap-buildings-insurance/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://buildingsinsurance.co.nz/cheap-buildings-insurance/',
    name: 'Affordable Buildings Insurance NZ | How to Reduce Your Premium',
    description: 'What drives NZ buildings insurance premiums and 6 legitimate ways to reduce your cost without sacrificing cover.',
    inLanguage: 'en-NZ',
    isPartOf: { '@id': 'https://buildingsinsurance.co.nz/#website' },
  },
];

export default function CheapBuildingsInsurancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {schemaCheap.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden py-20 lg:py-28 px-6">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-slate-200">Affordable Buildings Insurance</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-6">
                <TrendingDown className="h-4 w-4" /> Save on Your Premium
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Affordable Buildings Insurance NZ
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                NZ building insurance premiums rose sharply between 2021–2023. The market softened in 2024–2025, creating real savings opportunities for homeowners who shop around. Here's how to find genuine value without cutting essential cover.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote-form" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-900/40">
                  Compare My Options <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div id="quote-form" className="lg:col-span-2 scroll-mt-20">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Market context */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The NZ Insurance Market in 2025: A Buyer's Window</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            After three years of premium increases — driven by reinsurance cost spikes following global catastrophes — the NZ home insurance market entered a softening cycle in late 2024. IAG, Suncorp, and QBE all reported improved profits in their last financial years, and global reinsurance capacity has increased as capital markets normalise.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            This means 2025 is one of the better years in recent memory to shop around. Insurers competing for market share are more willing to negotiate, especially for low-risk properties and customers with strong claims histories. An independent adviser gives you access to this competitive pressure across multiple underwriters at once.
          </p>
          <Link href="/blog/nz-buildings-insurance-market-2026-soft-cycle/" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
            Read: NZ Buildings Insurance Market Outlook 2025–2026 <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Premium drivers */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">What Drives Your Buildings Insurance Premium</h2>
          <p className="text-slate-600 mb-8">Understanding what insurers price on helps you target the levers that actually move the needle:</p>
          <div className="space-y-3">
            {premiumDrivers.map((d) => (
              <div key={d.label} className="bg-white rounded-xl border border-slate-200 p-5 flex gap-4">
                <div className="flex-shrink-0">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    d.impact === 'High' ? 'bg-red-100 text-red-700' :
                    d.impact === 'Medium' ? 'bg-amber-100 text-amber-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>{d.impact}</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{d.label}</p>
                  <p className="text-sm text-slate-600">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Saving tips */}
      <section className="bg-white py-16 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">6 Ways to Legitimately Reduce Your Premium</h2>
          <p className="text-slate-600 mb-8">These are the approaches that work without sacrificing cover that matters:</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {savingTips.map(({ tip, detail, icon: Icon }) => (
              <div key={tip} className="rounded-2xl border-2 border-slate-200 bg-slate-50 hover:border-emerald-300 hover:bg-white transition-all p-6">
                <Icon className="h-8 w-8 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{tip}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-amber-50 border-2 border-amber-200 p-8">
            <div className="flex gap-4">
              <AlertTriangle className="h-8 w-8 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl font-bold text-amber-900 mb-3">Watch Out For: Red Flags in Cheap Policies</h2>
                <p className="text-amber-800 text-sm mb-5">The cheapest policy is rarely the best value. Watch for these warning signs when comparing buildings insurance:</p>
                <ul className="space-y-2">
                  {warningFlags.map((flag) => (
                    <li key={flag} className="flex items-start gap-2 text-sm text-amber-800">
                      <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5 text-amber-600" />
                      {flag}
                    </li>
                  ))}
                </ul>
                <p className="text-amber-800 text-sm mt-5 font-medium">A licensed adviser reads the fine print for you — ensuring the savings you make are real, not created by coverage gaps you'll only discover at claim time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-12 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Compare and Learn More</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Compare NZ Insurers', href: '/compare/', desc: 'Side-by-side comparison of major NZ providers' },
              { title: 'Rebuild Cost Calculator', href: '/rebuild-cost-calculator/', desc: 'Check if your sum-insured is accurate' },
              { title: 'Underinsurance Risk', href: '/underinsurance/', desc: 'Why cutting the sum-insured is risky' },
              { title: 'Coverage Explained', href: '/coverage/', desc: 'What NZ buildings insurance covers' },
              { title: 'Making a Claim', href: '/claims/', desc: 'How the claims process works' },
              { title: 'First Home Buyer Guide', href: '/blog/buildings-insurance-first-home-buyers-nz/', desc: 'Insurance for new owners' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group block rounded-xl border border-slate-200 bg-slate-50 hover:border-emerald-400 hover:bg-emerald-50 p-4 transition-all">
                <p className="font-semibold text-slate-900 group-hover:text-emerald-700 text-sm mb-1">{link.title}</p>
                <p className="text-xs text-slate-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Find Out How Much You Could Save</h2>
          <p className="text-emerald-100 mb-8">Our advisers compare buildings insurance from all major NZ insurers. Tell us about your property and we'll find the best value cover for your budget.</p>
          <a href="#quote-form" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-50 transition-colors shadow">
            Compare My Options <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

    </main>
  );
}
