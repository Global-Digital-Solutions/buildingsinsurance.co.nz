import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { ArrowRight, AlertTriangle, Calculator, CheckCircle, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Underinsurance NZ | Are You Underinsured? Buildings Insurance Guide',
  description: 'NZ rebuild costs have risen 35–45% since 2019. Millions of NZ homes are now underinsured. Find out if your sum-insured is high enough — and what happens if it\'s not.',
  alternates: { canonical: 'https://buildingsinsurance.co.nz/underinsurance/' },
  openGraph: {
    title: 'Underinsurance NZ | Are You Underinsured?',
    description: 'With NZ rebuild costs up 35–45% since 2019, your 2020 sum-insured may leave you $100,000+ short after a total loss. Find out how to check.',
    url: 'https://buildingsinsurance.co.nz/underinsurance/',
  },
};

const underinsuranceStats = [
  { value: '35–45%', label: 'NZ construction cost increase since 2019 (RLB)' },
  { value: '~45%', label: 'of NZ homes estimated to be underinsured (IAG 2024)' },
  { value: '$300K', label: 'NHCover cap — well below average NZ rebuild cost' },
  { value: '$150K+', label: 'Average shortfall per affected home at total loss' },
];

const costRiseDrivers = [
  { label: 'Construction labour shortage', detail: 'Post-COVID labour market tightening pushed tradesperson rates up 25–40% between 2020 and 2023 alone.' },
  { label: 'Building material inflation', detail: 'Global supply chain disruptions caused structural timber, steel, and concrete prices to spike. Costs remain elevated through 2025.' },
  { label: 'Christchurch rebuild effect', detail: 'The decade-long rebuild absorbed significant South Island construction capacity, keeping labour costs structurally higher across NZ.' },
  { label: 'Cyclone Gabrielle reconstruction', detail: 'The Hawke\'s Bay rebuild from February 2023 is putting additional pressure on contractor availability and pricing in the region.' },
  { label: 'Consent and compliance cost increases', detail: 'Building consent fees and compliance costs have risen as councils adapt to increasing workloads and new regulatory requirements.' },
];

const scenarios = [
  {
    title: 'Scenario A: Adequately insured',
    sumInsured: '$720,000',
    rebuildCost: '$710,000',
    nhcPays: '$300,000',
    insurerPays: '$410,000',
    shortfall: '$0',
    outcome: 'good',
    outcomeLabel: 'Home is rebuilt in full',
  },
  {
    title: 'Scenario B: Underinsured by 25%',
    sumInsured: '$520,000',
    rebuildCost: '$700,000',
    nhcPays: '$300,000',
    insurerPays: '$220,000',
    shortfall: '$180,000',
    outcome: 'bad',
    outcomeLabel: 'Homeowner funds $180,000 gap personally',
  },
  {
    title: 'Scenario C: Seriously underinsured',
    sumInsured: '$380,000',
    rebuildCost: '$700,000',
    nhcPays: '$300,000',
    insurerPays: '$80,000',
    shortfall: '$320,000',
    outcome: 'critical',
    outcomeLabel: 'Property may not be rebuilt — financial distress',
  },
];

const checklist = [
  'When did you last update your sum-insured?',
  'Was your sum-insured set before 2020? (costs up 35–45% since then)',
  'Does your sum-insured include professional fees, consents, and demolition (add ~12%)?',
  'Is your garage, deck, pool, or retaining wall included in the sum?',
  'Have you renovated since setting the sum-insured?',
  'Has your insurer offered a free sum-insured review or calculator?',
];

const schemaUnderinsurance = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://buildingsinsurance.co.nz/" },
      { "@type": "ListItem", "position": 2, "name": "Underinsurance NZ", "item": "https://buildingsinsurance.co.nz/underinsurance/" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://buildingsinsurance.co.nz/underinsurance/",
    "name": "Are You Underinsured? NZ Buildings Insurance Guide",
    "description": "With NZ rebuild costs up 35-45% since 2019, many homes are underinsured. Find out what that means at claim time.",
    "inLanguage": "en-NZ",
    "isPartOf": { "@id": "https://buildingsinsurance.co.nz/#website" }
  }
];

export default function UnderinsurancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {schemaUnderinsurance.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden py-20 lg:py-28 px-6">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-slate-200">Underinsurance</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6">
                <AlertTriangle className="h-4 w-4" /> Critical Risk for NZ Homeowners
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Are You Underinsured?<br className="hidden sm:block" /> The NZ Guide
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                An estimated 45% of NZ homes are underinsured — meaning their sum-insured is too low to fully rebuild after a total loss. With construction costs up 35–45% since 2019, a policy set in 2020 may leave you $100,000–$300,000 short.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote-form" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-900/40">
                  Review My Cover <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div id="quote-form" className="lg:col-span-2 scroll-mt-20">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-200 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {underinsuranceStats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-amber-600 mb-1">{s.value}</p>
              <p className="text-xs text-slate-500 font-medium leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it happened */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Why NZ Rebuild Costs Have Exploded</h2>
          <p className="text-slate-600 mb-8">It's not just inflation — there are specific structural reasons why NZ construction costs have risen so sharply since 2019:</p>
          <div className="space-y-3">
            {costRiseDrivers.map((d) => (
              <div key={d.label} className="bg-white rounded-xl border border-slate-200 p-5 flex gap-4">
                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 mb-1">{d.label}</p>
                  <p className="text-sm text-slate-600">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="bg-white py-16 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">What Underinsurance Looks Like at Claim Time</h2>
          <p className="text-slate-600 mb-8">These scenarios use a typical NZ home with a true rebuild cost of $700,000 (a 180m² home in Auckland, 2025 rates):</p>
          <div className="space-y-5">
            {scenarios.map((s) => (
              <div key={s.title} className={`rounded-2xl border-2 overflow-hidden ${
                s.outcome === 'good' ? 'border-emerald-300' :
                s.outcome === 'bad' ? 'border-amber-300' : 'border-red-300'
              }`}>
                <div className={`px-6 py-4 font-bold text-white ${
                  s.outcome === 'good' ? 'bg-emerald-600' :
                  s.outcome === 'bad' ? 'bg-amber-600' : 'bg-red-600'
                }`}>{s.title}</div>
                <div className="bg-white px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Sum Insured</p>
                    <p className="font-bold text-slate-900">{s.sumInsured}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">NHC pays</p>
                    <p className="font-bold text-slate-900">{s.nhcPays}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Insurer pays</p>
                    <p className="font-bold text-slate-900">{s.insurerPays}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Shortfall</p>
                    <p className={`font-bold ${s.shortfall === '$0' ? 'text-emerald-600' : 'text-red-600'}`}>{s.shortfall}</p>
                  </div>
                </div>
                <div className={`px-6 py-3 text-sm font-semibold ${
                  s.outcome === 'good' ? 'bg-emerald-50 text-emerald-700' :
                  s.outcome === 'bad' ? 'bg-amber-50 text-amber-700' : 'bg-red-50 text-red-700'
                }`}>Outcome: {s.outcomeLabel}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">These are illustrative scenarios. Actual claim outcomes depend on policy terms, insurer assessment, and specific loss circumstances. Rebuild cost is assumed at $700,000 for a 180m² Auckland home using 2025 construction rates.</p>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 text-white mb-8">
            <h2 className="text-xl font-bold mb-6">Your Underinsurance Checklist</h2>
            <p className="text-slate-300 text-sm mb-6">Answer "yes" to any of these? You may need to review your sum-insured:</p>
            <ul className="space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-200 text-sm">
                  <AlertTriangle className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border-2 border-emerald-200 p-6">
              <Calculator className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Use Our Rebuild Cost Calculator</h3>
              <p className="text-sm text-slate-600 mb-4">Get an indicative rebuild cost estimate based on your home's size, construction type, and location.</p>
              <Link href="/rebuild-cost-calculator/" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700">
                Open Calculator <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl border-2 border-slate-200 p-6">
              <Shield className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-2">Talk to an Adviser</h3>
              <p className="text-sm text-slate-600 mb-4">A licensed NZ adviser can review your current policy, compare alternatives, and recommend the right sum-insured for your property.</p>
              <a href="#quote-form" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700">
                Get a Policy Review <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-12 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Home Underinsurance Deep Dive', href: '/blog/home-underinsurance-nz-rebuild-cost-guide/', desc: 'Detailed guide to calculating your rebuild cost' },
              { title: 'Rebuild Cost Calculator', href: '/rebuild-cost-calculator/', desc: 'Estimate your sum-insured online' },
              { title: 'Full Replacement vs Agreed Value', href: '/blog/full-replacement-vs-agreed-value/', desc: 'Which policy basis protects you best' },
              { title: 'Earthquake Insurance', href: '/earthquake-insurance/', desc: 'NHCover gaps and seismic risk' },
              { title: 'Cheap Buildings Insurance', href: '/cheap-buildings-insurance/', desc: 'How to save without underinsuring' },
              { title: 'Compare NZ Insurers', href: '/compare/', desc: 'Find better cover at better rates' },
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
      <section className="bg-gradient-to-r from-slate-900 to-emerald-900 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Don't Wait Until Claim Time to Find Out</h2>
          <p className="text-slate-300 mb-8">A licensed NZ adviser will review your sum-insured, compare it against current rebuild cost data, and recommend the right level of cover for your property.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote-form" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all">
              Review My Cover <ArrowRight className="h-5 w-5" />
            </a>
            <Link href="/rebuild-cost-calculator/" className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-all">
              Try the Calculator
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
