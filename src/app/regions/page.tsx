import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { regions } from '@/data/regions';
import { MapPin, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Buildings Insurance by Region | NZ City & Area Guides',
  description: 'Find buildings insurance information specific to your New Zealand city or region. Local risk guides for Auckland, Wellington, Christchurch, and 12 more areas.',
  alternates: { canonical: 'https://www.buildingsinsurance.co.nz/regions/' },
  openGraph: {
    title: 'Buildings Insurance by Region | NZ City & Area Guides',
    description: 'Local buildings insurance guides for every major NZ city and region — from Auckland\'s volcanic risk to Wellington\'s earthquake zone.',
    url: 'https://buildingsinsurance.co.nz/regions/',
  },
};

const riskBadge: Record<string, string> = {
  'High': 'bg-red-100 text-red-700',
  'Moderate-High': 'bg-amber-100 text-amber-700',
  'Moderate': 'bg-yellow-100 text-yellow-700',
  'Low-Moderate': 'bg-emerald-100 text-emerald-700',
};

export default function RegionsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden py-20 lg:py-28 px-6">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-6">
            <MapPin className="h-4 w-4" /> Local Expertise Across New Zealand
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Buildings Insurance<br className="hidden sm:block" /> by Region
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Every part of New Zealand has a unique risk profile. From Wellington's earthquake fault to Hawke's Bay's post-Gabrielle flood zones — find guides and expert advisers for your area.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-900/40"
          >
            Get a Quote for My Area <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Region Grid */}
      <section className="py-16 lg:py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Choose Your Region
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Select your city or region for local risk information, premium ranges, and to connect with a licensed adviser who knows your area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <Link
                key={region.slug}
                href={`/regions/${region.slug}`}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-white hover:border-emerald-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={region.heroImage}
                    alt={region.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                  {/* Risk badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${riskBadge[region.riskLevel]}`}>
                      <AlertTriangle className="h-3 w-3" />
                      {region.riskLevel} Risk
                    </span>
                  </div>

                  {/* Region name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-slate-300">{region.region}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{region.name}</h3>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {region.intro.substring(0, 140)}…
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Typical Premium</p>
                      <p className="text-sm font-bold text-slate-800">{region.avgPremiumRange}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      View Guide <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Not Sure Which Cover You Need?
          </h2>
          <p className="text-emerald-100 mb-8">
            Our licensed NZ advisers cover every region. Tell us about your property and we'll match you with the right insurer for your area.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-50 transition-colors shadow"
          >
            Get My Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
