import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { ArrowRight, CheckCircle, AlertTriangle, Home, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'New Build Insurance NZ | Buildings Insurance for New Homes',
  description: 'Buildings insurance for new builds and newly constructed homes in NZ. What you need during construction, when it starts, and how new builds differ from existing homes.',
  alternates: { canonical: 'https://buildingsinsurance.co.nz/new-build-insurance/' },
  openGraph: {
    title: 'New Build Insurance NZ | Buildings Insurance for New Homes',
    description: 'Buying or building a new home in NZ? Find out exactly what insurance you need, when you need it, and how to make sure you\'re covered from day one.',
    url: 'https://buildingsinsurance.co.nz/new-build-insurance/',
  },
};

const phases = [
  {
    phase: 'During construction',
    icon: '🏗️',
    who: 'Builder / developer',
    cover: 'Contract Works Insurance',
    detail: 'The builder\'s contract works (or construction all-risk) policy covers the build during construction. Confirm this is in place before work starts. Ask for a Certificate of Insurance.',
    action: 'Confirm builder has active contract works insurance before settlement.',
  },
  {
    phase: 'At settlement / completion',
    icon: '🔑',
    who: 'Homeowner (you)',
    cover: 'Buildings Insurance',
    detail: 'The moment legal title transfers to you, you\'re responsible for insuring the property. Buildings insurance must be in place from settlement date — mortgage lenders require this.',
    action: 'Arrange buildings insurance to start on settlement date.',
  },
  {
    phase: 'Post-settlement',
    icon: '🏠',
    who: 'Homeowner',
    cover: 'Buildings + Contents',
    detail: 'Ongoing buildings insurance covers the structure. Add contents insurance for your belongings. New builds often attract better rates due to modern construction standards.',
    action: 'Review annually; new build discounts may apply for the first few years.',
  },
];

const newBuildAdvantages = [
  'Built to current Building Code standards — lower risk for insurers',
  'Modern materials with better weathertightness than pre-2000 builds',
  'No weathertight issues (monolithic cladding risk absent)',
  'Full documentation available (code compliance certificates)',
  'Accurate rebuild cost known from build contract',
  'Some insurers offer new build premium discounts for 1–5 years',
  'NHC/NHCover included automatically with your policy',
];

const watchPoints = [
  {
    heading: 'Set the right sum-insured from day one',
    detail: 'Use your build contract as the basis for your sum-insured, then add 10–15% for professional fees, demolition, and consent costs. Don\'t forget garaging, decks, and landscaping if covered.',
  },
  {
    heading: 'Check the defects liability period',
    detail: 'New builds come with a defects liability period (typically 12 months). This covers builder workmanship faults, but is NOT the same as insurance. You still need buildings insurance from settlement.',
  },
  {
    heading: 'Weathertight warranty vs. insurance',
    detail: 'Builders Warranty insurance (via Master Build or other schemes) covers defects and structural failure for up to 10 years. This complements — but doesn\'t replace — buildings insurance.',
  },
  {
    heading: 'Body corporate buildings cover (for townhouses/apartments)',
    detail: 'If you\'re buying a new build in a unit-titled development, the body corporate usually arranges buildings insurance for the whole complex. You may only need contents insurance.',
  },
];

const firstHomeTips = [
  { tip: 'Insure from settlement, not from possession', detail: 'Settlement is when you own the property — even if you don\'t move in immediately, you need insurance from that date.' },
  { tip: 'Your lender requires it', detail: 'All NZ mortgage lenders require buildings insurance as a condition of the loan. Proof of insurance is required at settlement.' },
  { tip: 'Don\'t copy your landlord\'s policy', detail: 'Renters insurance is contents-only. As a homeowner, you need a full buildings insurance policy covering the structure.' },
  { tip: 'Check the developer\'s sunset clause', detail: 'For off-the-plan purchases, the settlement date may shift. Have insurance ready to start on the confirmed settlement date, not a projected one.' },
];

const schemaNewBuild = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildingsinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'New Build Insurance', item: 'https://buildingsinsurance.co.nz/new-build-insurance/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://buildingsinsurance.co.nz/new-build-insurance/',
    name: 'Buildings Insurance for New Builds NZ',
    description: 'What insurance you need at each stage when buying or building a new home in NZ — from construction through to settlement.',
    inLanguage: 'en-NZ',
    isPartOf: { '@id': 'https://buildingsinsurance.co.nz/#website' },
  },
];

export default function NewBuildInsurancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {schemaNewBuild.map((s, i) => (
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
                <span className="text-slate-200">New Build Insurance</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-6">
                <Home className="h-4 w-4" /> Insurance for New Homes
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Buildings Insurance for<br className="hidden sm:block" /> New Builds in NZ
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Buying or building a brand-new home? Insurance for new builds works differently from established properties. Here's exactly what you need, when you need it, and how to get the right cover from day one.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote-form" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-900/40">
                  Get My Quote <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div id="quote-form" className="lg:col-span-2 scroll-mt-20">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Phase timeline */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Insurance at Each Stage of Your New Build</h2>
          <p className="text-slate-600 mb-8">Different insurance types apply at different stages. Here's who is responsible for what:</p>
          <div className="space-y-5">
            {phases.map((p) => (
              <div key={p.phase} className="bg-white rounded-2xl border-2 border-slate-200 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <p className="font-bold text-slate-900">{p.phase}</p>
                    <p className="text-xs text-slate-500">Responsibility: {p.who}</p>
                  </div>
                  <span className="ml-auto text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">{p.cover}</span>
                </div>
                <div className="px-6 py-5">
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{p.detail}</p>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-slate-800">{p.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white py-16 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Why New Builds Can Be Cheaper to Insure</h2>
          <p className="text-slate-600 mb-8">New builds often attract better premium rates than older homes. Here's why:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {newBuildAdvantages.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch points */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Key Things to Watch For</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {watchPoints.map((w) => (
              <div key={w.heading} className="bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-emerald-300 transition-all">
                <Shield className="h-7 w-7 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{w.heading}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First home tips */}
      <section className="bg-white py-16 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Clock className="h-7 w-7 text-emerald-600" />
            <h2 className="text-2xl font-bold text-slate-900">Tips for First Home Buyers</h2>
          </div>
          <div className="space-y-4">
            {firstHomeTips.map((item) => (
              <div key={item.tip} className="flex gap-5 bg-slate-50 rounded-xl border border-slate-200 p-5">
                <div className="w-2 bg-emerald-500 rounded-full flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">{item.tip}</p>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/blog/buildings-insurance-first-home-buyers-nz/" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
              Read our First Home Buyer Insurance Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-slate-50 py-12 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Rebuild Cost Calculator', href: '/rebuild-cost-calculator/', desc: 'Set the right sum-insured for your new home' },
              { title: 'Coverage Explained', href: '/coverage/', desc: 'What buildings insurance covers in NZ' },
              { title: 'Sectors: Residential', href: '/sectors/residential/', desc: 'Residential homeowner insurance guide' },
              { title: 'Sectors: Landlords', href: '/sectors/landlords/', desc: 'Buying a new build as a rental?' },
              { title: 'Auckland New Builds', href: '/regions/auckland/', desc: 'Insurance guide for Auckland homeowners' },
              { title: 'Compare Insurers', href: '/compare/', desc: 'See how NZ insurers compare' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group block rounded-xl border border-slate-200 bg-white hover:border-emerald-400 hover:bg-emerald-50 p-4 transition-all">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Insure Your New Home with Confidence</h2>
          <p className="text-emerald-100 mb-8">Our licensed NZ advisers specialise in new build insurance. Get the right cover in place before settlement — and compare rates from multiple insurers at once.</p>
          <a href="#quote-form" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-50 transition-colors shadow">
            Get My Quote <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

    </main>
  );
}
