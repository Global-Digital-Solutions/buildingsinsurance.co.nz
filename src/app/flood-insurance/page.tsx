import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { ArrowRight, CheckCircle, AlertTriangle, CloudRain, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Flood & Storm Insurance NZ | Home Flood Cover Guide',
  description: 'Flood and storm insurance for NZ homes. What standard buildings insurance covers, what it doesn\'t, how to check your flood risk, and what to do after a weather event.',
  alternates: { canonical: 'https://www.buildingsinsurance.co.nz/flood-insurance/' },
  openGraph: {
    title: 'Flood & Storm Insurance NZ | Home Flood Cover Guide',
    description: 'Cyclone Gabrielle, Auckland floods 2023, and Bay of Plenty events — NZ storm damage is on the rise. Is your buildings insurance ready?',
    url: 'https://buildingsinsurance.co.nz/flood-insurance/',
  },
};

const coverageBreakdown = [
  { item: 'Stormwater flooding (river, sea, or surface runoff)', covered: 'Usually covered', note: 'Most standard policies — check sub-limits for high-risk flood zones' },
  { item: 'Rainwater ingress through roof or walls', covered: 'Usually covered', note: 'Provided the damage results from a sudden weather event, not long-term wear' },
  { item: 'Wind damage to roof, cladding, fences', covered: 'Usually covered', note: 'Standard buildings cover — some exclusions for pre-existing deterioration' },
  { item: 'Landslip caused by storm', covered: 'NHC + private', note: 'NHCover applies up to $300,000; private insurer covers the excess amount' },
  { item: 'Flooding from gradual water table rise', covered: 'Often excluded', note: 'Slow groundwater rise is not a sudden event — check your policy wording carefully' },
  { item: 'Storm surge (coastal flooding)', covered: 'Varies', note: 'Some policies exclude storm surge; coastal properties should confirm cover explicitly' },
  { item: 'Damage from blocked or broken drains', covered: 'Often excluded', note: 'Maintenance-related failures are typically excluded from storm cover' },
  { item: 'Contents damaged by flood', covered: 'Separate policy needed', note: 'Buildings insurance only covers the structure — contents require a separate policy' },
];

const highRiskRegions = [
  { region: 'Hawke\'s Bay', detail: 'Cyclone Gabrielle (Feb 2023) caused $1.4B+ in insured losses. Esk Valley, Westshore, and flat Heretaunga Plains carry ongoing flood risk.', href: '/regions/hawkes-bay/' },
  { region: 'Gisborne', detail: 'Wainui and coastal lowlands experienced Gabrielle flooding. River catchments at ongoing risk.', href: '/regions/gisborne/' },
  { region: 'Auckland (West and South)', detail: 'January 2023 Auckland Anniversary floods caused $480M+ in losses. West Auckland streams prone to flash flooding.', href: '/regions/auckland/' },
  { region: 'Nelson / Marlborough', detail: 'August 2022 floods caused widespread damage to Nelson and Motueka. Top of the South is increasingly storm-affected.', href: '/regions/nelson/' },
  { region: "Manawatū / Palmerston North", detail: 'Manawatū River flood plains; multiple flood events in past decade. Some areas face premium loading or sub-limits.', href: '/regions/palmerston-north/' },
  { region: 'Westland / Buller (West Coast)', detail: 'Highest rainfall in NZ; recurring flood events. Some properties may face difficulty getting flood cover at standard rates.' , href: '/regions/' },
];

const claimSteps = [
  { step: '01', title: 'Make it safe', detail: 'Do not enter a flood-damaged property until it has been assessed as structurally safe. Turn off power at the mains if safe to do so.' },
  { step: '02', title: 'Document the damage', detail: 'Photograph and video all damage before any cleanup begins. This evidence is essential for your insurance claim.' },
  { step: '03', title: 'Notify your insurer', detail: 'Contact your private insurer immediately — they manage both the private claim and the NHC claim on your behalf. You do not need to contact NHC directly.' },
  { step: '04', title: 'Prevent further damage', detail: 'You have a duty to mitigate further loss. Cover roof openings, remove standing water, and engage emergency repairs as directed by your insurer.' },
  { step: '05', title: 'Keep receipts', detail: 'All emergency repair costs, temporary accommodation, and mitigation expenses should be documented. Many policies cover these costs.' },
];

const schemaFlood = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildingsinsurance.co.nz/' },
      { '@type': 'ListItem', position: 2, name: 'Flood & Storm Insurance', item: 'https://buildingsinsurance.co.nz/flood-insurance/' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://buildingsinsurance.co.nz/flood-insurance/',
    name: 'Flood & Storm Insurance NZ | Home Flood Cover Guide',
    description: 'What NZ buildings insurance covers for flood and storm damage, high-risk regions, and what to do after a weather event.',
    inLanguage: 'en-NZ',
    isPartOf: { '@id': 'https://buildingsinsurance.co.nz/#website' },
  },
];

export default function FloodInsurancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {schemaFlood.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden py-20 lg:py-28 px-6">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-slate-200">Flood & Storm Insurance</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-blue-400 mb-6">
                <CloudRain className="h-4 w-4" /> Weather Events & Flood Cover
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Flood & Storm Insurance<br className="hidden sm:block" /> for NZ Homeowners
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Cyclone Gabrielle and the 2023 Auckland floods put NZ flood risk firmly on the map. Understanding exactly what your buildings insurance covers — and where the gaps are — is more important than ever.
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

      {/* Stats bar */}
      <section className="bg-white border-b border-slate-200 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '$1.4B+', label: 'Cyclone Gabrielle insured losses' },
            { value: '$480M+', label: 'Auckland anniversary flood losses (Jan 2023)' },
            { value: '40%', label: 'Increase in NZ weather-related claims 2021–2023' },
            { value: '3×', label: 'More likely: severe rain events by 2050 (NIWA)' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-extrabold text-emerald-600 mb-1">{stat.value}</p>
              <p className="text-xs text-slate-500 font-medium leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's covered table */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">What's Covered — and What's Not</h2>
          <p className="text-slate-600 mb-8">NZ buildings insurance typically includes flood and storm cover, but the details matter. Here's how common scenarios break down:</p>
          <div className="space-y-3">
            {coverageBreakdown.map((row) => (
              <div key={row.item} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900 text-sm">{row.item}</p>
                    <p className="text-xs text-slate-500 mt-1">{row.note}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap self-start ${
                    row.covered === 'Usually covered' ? 'bg-emerald-100 text-emerald-700' :
                    row.covered === 'Often excluded' ? 'bg-red-100 text-red-700' :
                    row.covered === 'Separate policy needed' ? 'bg-slate-100 text-slate-600' :
                    'bg-amber-100 text-amber-700'
                  }`}>{row.covered}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">Coverage terms vary by insurer and policy. Always read your policy wording and ask your adviser to confirm flood cover before you purchase.</p>
        </div>
      </section>

      {/* High risk regions */}
      <section className="bg-white py-16 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">High Flood-Risk Areas in NZ</h2>
          <p className="text-slate-600 mb-8">Properties in these regions may face premium loading, sub-limits on flood cover, or specific conditions. Always disclose your property's flood history when getting a quote.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {highRiskRegions.map((r) => (
              <div key={r.region} className="rounded-xl border-2 border-slate-200 bg-slate-50 hover:border-blue-300 transition-all p-5">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <CloudRain className="h-4 w-4 text-blue-500" /> {r.region}
                </h3>
                <p className="text-sm text-slate-600 mb-3">{r.detail}</p>
                <Link href={r.href} className="text-xs text-emerald-600 font-semibold hover:text-emerald-700 flex items-center gap-1">
                  View region guide <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 rounded-2xl p-6 text-white">
            <Shield className="h-8 w-8 text-emerald-400 mb-3" />
            <h3 className="font-bold mb-2">How to Check Your Flood Risk</h3>
            <p className="text-slate-300 text-sm leading-relaxed">Your regional council maintains flood hazard maps — search for your council's GIS portal or hazard viewer. LINZ flood plain data is also publicly available. Insurers use their own internal flood modelling, which may differ from council maps, so ask your adviser to disclose how your property has been rated.</p>
          </div>
        </div>
      </section>

      {/* After a flood */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">What to Do After a Flood or Storm</h2>
          <div className="space-y-4">
            {claimSteps.map((s) => (
              <div key={s.step} className="flex gap-5 bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-3xl font-extrabold text-emerald-200 w-10 flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/claims/" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
              Read our full claims guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-12 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Severe Weather Claims Guide', href: '/blog/severe-weather-home-damage-claims-guide-nz/', desc: 'Step-by-step after a weather event' },
              { title: 'NHC Changes 2024', href: '/blog/eqc-natural-hazards-commission-changes-2024/', desc: 'New natural hazards cover explained' },
              { title: 'Hawke\'s Bay Insurance', href: '/regions/hawkes-bay/', desc: 'Flood risk guide for HB homeowners' },
              { title: 'What\'s Covered', href: '/coverage/', desc: 'Full buildings insurance coverage breakdown' },
              { title: 'Earthquake Insurance', href: '/earthquake-insurance/', desc: 'Seismic risk and NHCover explained' },
              { title: 'Making a Claim', href: '/claims/', desc: 'How the NZ claims process works' },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Is Your Home Covered for Flood and Storm Damage?</h2>
          <p className="text-slate-300 mb-8">A licensed NZ adviser will review your policy, check for flood exclusions, and source the right cover for your property's location and risk profile.</p>
          <a href="#quote-form" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all">
            Get My Quote <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

    </main>
  );
}
