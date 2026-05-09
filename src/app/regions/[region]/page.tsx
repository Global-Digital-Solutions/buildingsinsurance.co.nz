import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { regions, getRegionBySlug } from '@/data/regions';
import { MapPin, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return regions.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region: slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) return {};
  return {
    title: region.metaTitle,
    description: region.metaDescription,
    alternates: { canonical: `https://buildingsinsurance.co.nz/regions/${region.slug}/` },
    openGraph: {
      title: region.metaTitle,
      description: region.metaDescription,
      url: `https://buildingsinsurance.co.nz/regions/${region.slug}/`,
      images: [region.heroImage],
    },
  };
}

const riskBadge: Record<string, string> = {
  'High': 'bg-red-100 text-red-700 border-red-200',
  'Moderate-High': 'bg-amber-100 text-amber-700 border-amber-200',
  'Moderate': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'Low-Moderate': 'bg-emerald-100 text-emerald-700 border-emerald-200',
};

const riskBar: Record<string, string> = {
  'High': 'bg-red-500',
  'Moderate-High': 'bg-amber-500',
  'Moderate': 'bg-yellow-400',
  'Low-Moderate': 'bg-emerald-500',
};

const riskWidth: Record<string, string> = {
  'High': 'w-full',
  'Moderate-High': 'w-3/4',
  'Moderate': 'w-1/2',
  'Low-Moderate': 'w-1/4',
};

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region: slug } = await params;
  const region = getRegionBySlug(slug);
  if (!region) notFound();

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-900" style={{ minHeight: '60vh' }}>
        <Image
          src={region.heroImage}
          alt={`${region.name} buildings insurance`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />

        <div className="relative flex flex-col justify-center h-full min-h-[60vh] max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/regions" className="hover:text-white transition-colors">Regions</Link>
            <span>/</span>
            <span className="text-slate-200">{region.name}</span>
          </nav>

          {/* Location pill */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 text-sm font-semibold text-white mb-5 w-fit">
            <MapPin className="h-4 w-4 text-emerald-400" />
            {region.region}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            {region.tagline}
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed mb-8">
            {region.intro.split('.')[0]}. Speak with a licensed NZ adviser today.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-900/40"
            >
              Get My Quote <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── RISK SNAPSHOT ── */}
      <section className="bg-white border-b border-slate-200 py-10 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Overall Risk</p>
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-bold ${riskBadge[region.riskLevel]}`}>
                <AlertTriangle className="h-3.5 w-3.5" />
                {region.riskLevel}
              </div>
              <div className="mt-2 h-2 bg-slate-100 rounded-full w-32">
                <div className={`h-2 rounded-full ${riskBar[region.riskLevel]} ${riskWidth[region.riskLevel]}`} />
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Typical Premium</p>
              <p className="text-xl font-bold text-slate-900">{region.avgPremiumRange}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Median Home Value</p>
              <p className="text-xl font-bold text-slate-900">{region.avgHomeValue}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">NHCover Levy</p>
              <p className="text-xl font-bold text-slate-900">$480/yr</p>
              <p className="text-xs text-slate-500 mt-1">Included in your premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT + FORM ── */}
      <section className="py-16 lg:py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: content */}
            <div className="lg:col-span-3 space-y-12">

              {/* Intro */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Buildings Insurance in {region.name}
                </h2>
                <p className="text-slate-600 leading-relaxed">{region.intro}</p>
              </div>

              {/* Key Risks */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Key Risks for {region.shortName} Homeowners
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {region.keyRisks.map((risk, i) => (
                    <div key={i} className="rounded-2xl border-2 border-slate-200 bg-white p-5 hover:border-emerald-300 hover:shadow-md transition-all">
                      <div className="text-3xl mb-3">{risk.icon}</div>
                      <h3 className="font-bold text-slate-900 mb-2">{risk.label}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{risk.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Context */}
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Local Property Context
                </h2>
                <p className="text-slate-600 leading-relaxed mb-5">{region.localContext}</p>
                <div className="grid grid-cols-2 gap-4">
                  {region.commonBuildingTypes.map((type, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                      {type}
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Facts */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-5">
                  {region.shortName} Insurance: By the Numbers
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {region.localFacts.map((fact, i) => (
                    <div key={i} className="rounded-xl bg-white border border-slate-200 p-5">
                      <p className="text-2xl font-extrabold text-emerald-600 mb-1">{fact.value}</p>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{fact.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advisory Note */}
              <div className="rounded-2xl bg-amber-50 border-2 border-amber-200 p-6">
                <div className="flex gap-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-amber-900 mb-2">Adviser Note: {region.shortName}-Specific Considerations</p>
                    <p className="text-sm text-amber-800 leading-relaxed">{region.advisoryNote}</p>
                  </div>
                </div>
              </div>

              {/* Nearby Areas */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Also Serving Nearby Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {region.nearbyAreas.map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Quote Form */}
            <div id="quote-form" className="lg:col-span-2 scroll-mt-20">
              <div className="sticky top-8">
                <div className="mb-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-center">
                  <p className="text-sm font-semibold text-emerald-800">
                    🏠 {region.shortName} homeowners — our advisers know your local market
                  </p>
                </div>
                <QuoteForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-gradient-to-r from-slate-900 to-emerald-900 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to protect your {region.shortName} home?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Submit your details above — a licensed NZ adviser will be in touch within 24 hours with options tailored to your property.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote-form" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all">
              Get My Quote <ArrowRight className="h-5 w-5" />
            </a>
            <Link href="/regions" className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-all">
              View All Regions
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
