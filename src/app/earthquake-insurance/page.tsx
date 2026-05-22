import { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { AlertTriangle, CheckCircle, ArrowRight, Shield, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Earthquake Insurance NZ | Buildings Cover for Seismic Risk',
  description: 'Understand earthquake insurance for NZ homes. How EQC / NHCover works, what private insurer top-up covers, and how to make sure your home is fully protected after a quake.',
  alternates: { canonical: 'https://www.buildingsinsurance.co.nz/earthquake-insurance/' },
  openGraph: {
    title: 'Earthquake Insurance NZ | Buildings Cover for Seismic Risk',
    description: 'New Zealand sits on the Pacific Ring of Fire. Find out how EQC NHCover and private buildings insurance work together — and how to close the gaps.',
    url: 'https://buildingsinsurance.co.nz/earthquake-insurance/',
  },
};

const faultLines = [
  { region: 'Wellington', risk: 'Extreme', note: 'Wellington Fault capable of Mw 7.5+ event directly under the city', color: 'text-red-600 bg-red-50 border-red-200' },
  { region: 'Christchurch / Canterbury', risk: 'High', note: 'Hidden fault lines proved by the 2010–2011 sequence; ongoing liquefaction risk', color: 'text-orange-600 bg-orange-50 border-orange-200' },
  { region: 'Hawke\'s Bay', risk: 'High', note: 'Napier 1931 Mw 7.8; Hikurangi subduction zone offshore', color: 'text-orange-600 bg-orange-50 border-orange-200' },
  { region: 'Auckland', risk: 'Moderate', note: 'Volcanic rather than tectonic; some alpine fault risk from distant events', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { region: 'Nelson / Marlborough', risk: 'High', note: 'Wairau Fault (Alpine Fault system) — capable of large magnitude events', color: 'text-orange-600 bg-orange-50 border-orange-200' },
  { region: 'Southland / Otago', risk: 'Moderate', note: 'Lower frequency but proximity to Alpine Fault system means major events possible', color: 'text-amber-600 bg-amber-50 border-amber-200' },
];

const nhcLimits = [
  { label: 'NHCover cap (from 1 July 2024)', value: '$300,000', note: 'Per residential building (GST inclusive), replacing old EQC $150,000 cap' },
  { label: 'Standard excess', value: '$1,000 flat', note: 'Fixed flat excess, replacing the old 1% of sum-insured variable excess' },
  { label: 'Contents cover', value: 'Removed', note: 'NHC no longer covers home contents — private insurer only from 2024' },
  { label: 'Land cover', value: 'Yes (limited)', note: 'Residential land covered for certain natural hazard damage up to defined caps' },
];

const privateCoversEarthquake = [
  'Rebuild costs above the $300,000 NHCover cap',
  'Full replacement value for modern high-spec homes',
  'Loss of rent while your property is being repaired',
  'Emergency accommodation costs',
  'Temporary repairs to make the home habitable',
  'Professional fees (architects, engineers, consents)',
  'Demolition and debris removal costs',
  'Retaining walls, fences, and driveways (varies by policy)',
];

const faqs = [
  {
    q: 'Do I still need private buildings insurance if I have EQC / NHC?',
    a: 'Yes — NHCover only pays up to $300,000 per building and doesn\'t cover the full cost of rebuilding most NZ homes. Private buildings insurance covers the gap between the NHC payout and your full rebuild cost, plus loss of rent and other expenses the NHC doesn\'t cover.',
  },
  {
    q: 'What changed with the Natural Hazards Commission in 2024?',
    a: 'From 1 July 2024, EQC became the Natural Hazards Commission Toka Tū Ake. Key changes: the residential building cap rose from $150,000 to $300,000 (GST inclusive); the excess moved to a flat $1,000 (from 1% of sum-insured); contents cover was removed entirely; and a new Code of Insured Persons\' Rights was introduced.',
  },
  {
    q: 'How do I make a claim for earthquake damage?',
    a: 'Notify your private insurer first — they manage the claim and liaise with the Natural Hazards Commission on your behalf. You no longer need to contact NHC directly. Document all damage with photos before any repairs begin.',
  },
  {
    q: 'Is liquefaction damage covered?',
    a: 'Liquefaction is a natural hazard covered by NHC for residential buildings and land (within defined caps). Your private insurer\'s policy should cover damage above NHC limits. Check your policy wording carefully, as terms vary between insurers.',
  },
  {
    q: 'What is the NHC levy on my insurance premium?',
    a: 'The NHC levy (formerly EQC levy) is approximately $480 per year for residential buildings and is collected by your private insurer as part of your premium. It funds the NHC and provides your NHCover automatically.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buildingsinsurance.co.nz/' },
    { '@type': 'ListItem', position: 2, name: 'Earthquake Insurance', item: 'https://buildingsinsurance.co.nz/earthquake-insurance/' },
  ],
};

export default function EarthquakeInsurancePage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden py-20 lg:py-28 px-6">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-slate-200">Earthquake Insurance</span>
              </nav>
              <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-red-400 mb-6">
                <AlertTriangle className="h-4 w-4" /> NZ Seismic Risk Guide
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Earthquake Insurance<br className="hidden sm:block" /> in New Zealand
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                New Zealand experiences over 15,000 earthquakes a year. Understanding how EQC's Natural Hazards Cover (NHCover) works alongside your private buildings insurance — and where the gaps are — is essential for every NZ homeowner.
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

      {/* NHC explainer */}
      <section className="bg-white border-b border-slate-200 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-8">
            <Info className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-amber-900 mb-1">Important: EQC became NHC on 1 July 2024</p>
              <p className="text-sm text-amber-800">The Earthquake Commission has been replaced by the Natural Hazards Commission Toka Tū Ake (NHC) under the Natural Hazards Insurance Act 2023. Your cover now works differently — the building cap doubled to $300,000 but contents cover has been removed entirely.</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">How NHCover Works in 2024–2025</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {nhcLimits.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-xl font-bold text-emerald-600 mb-1">{item.value}</p>
                <p className="text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600 leading-relaxed">
            Your private buildings insurance policy automatically includes NHCover for earthquake, volcanic eruption, tsunami, storm, flood, and landslip. The NHC levy (~$480/yr) is collected by your insurer and funds this cover. You don't need a separate EQC/NHC policy — it's bundled with your buildings insurance.
          </p>
        </div>
      </section>

      {/* What private insurer covers */}
      <section className="py-16 lg:py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">What Private Buildings Insurance Covers (Above NHC)</h2>
          <p className="text-slate-600 mb-8">NHCover pays up to $300,000. If your rebuild cost is higher — and for many NZ homes it is — your private insurer covers the rest. Private cover also extends to expenses NHC doesn't touch:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {privateCoversEarthquake.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl border border-slate-200 p-4">
                <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-900 rounded-2xl p-8 text-white">
            <Shield className="h-8 w-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">The Critical Gap: Underinsurance</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              With NZ rebuild costs rising 35–45% since 2019 (Rider Levett Bucknall, 2024), many homeowners who set their sum-insured years ago are now significantly underinsured. If your sum-insured is $500,000 but the true rebuild cost is $750,000, you'd face a $250,000 shortfall after a total loss — even after NHC pays its maximum.
            </p>
            <Link href="/blog/home-underinsurance-nz-rebuild-cost-guide/" className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
              Read our underinsurance guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Regional risk */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Earthquake Risk by NZ Region</h2>
          <p className="text-slate-600 mb-8">Risk — and therefore premiums — vary significantly by location. Insurers use detailed seismic hazard models; properties in high-risk zones can pay substantially more for earthquake cover.</p>
          <div className="space-y-3 mb-10">
            {faultLines.map((f) => (
              <div key={f.region} className={`rounded-xl border p-5 ${f.color}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-bold">{f.region}</p>
                    <p className="text-sm mt-1 opacity-80">{f.note}</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide whitespace-nowrap px-2.5 py-1 rounded-full border border-current opacity-70">{f.risk}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">See region-specific guides:&nbsp;
            <Link href="/regions/wellington/" className="text-emerald-600 hover:text-emerald-700 font-medium">Wellington</Link>,&nbsp;
            <Link href="/regions/christchurch/" className="text-emerald-600 hover:text-emerald-700 font-medium">Christchurch</Link>,&nbsp;
            <Link href="/regions/hawkes-bay/" className="text-emerald-600 hover:text-emerald-700 font-medium">Hawke's Bay</Link>,&nbsp;
            <Link href="/regions/nelson/" className="text-emerald-600 hover:text-emerald-700 font-medium">Nelson / Marlborough</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="bg-white py-12 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-5">Related Guides</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Understanding Buildings Insurance NZ', href: '/blog/understanding-buildings-insurance-nz/', desc: 'Complete overview of how buildings insurance works' },
              { title: 'NHC Changes 2024 Explained', href: '/blog/eqc-natural-hazards-commission-changes-2024/', desc: 'What the NHI Act means for your cover' },
              { title: 'Home Underinsurance Guide', href: '/blog/home-underinsurance-nz-rebuild-cost-guide/', desc: 'How to calculate your true rebuild cost' },
              { title: 'Full Replacement vs Agreed Value', href: '/blog/full-replacement-vs-agreed-value/', desc: 'Choosing the right sum-insured basis' },
              { title: 'What\'s Covered in Your Policy', href: '/coverage/', desc: 'Full breakdown of standard buildings cover' },
              { title: 'Compare Insurers', href: '/compare/', desc: 'See how NZ insurers stack up on price and claims' },
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Is Your Home Properly Protected Against Earthquakes?</h2>
          <p className="text-slate-300 mb-8">A licensed NZ adviser will review your current sum-insured, check for coverage gaps, and source the right policy for your property and location.</p>
          <a href="#quote-form" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all">
            Get My Quote <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

    </main>
  );
}
