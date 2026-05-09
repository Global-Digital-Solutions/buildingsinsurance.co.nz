'use client';

import { useState } from 'react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { ArrowRight, Calculator, CheckCircle, AlertTriangle } from 'lucide-react';

const buildingTypes = [
  { label: 'Standard weatherboard (pre-1980)', baseRate: 2200 },
  { label: 'Modern weatherboard (post-2000)', baseRate: 2600 },
  { label: 'Brick / masonry veneer', baseRate: 2800 },
  { label: 'Concrete block', baseRate: 2900 },
  { label: 'Timber frame (post-earthquake spec)', baseRate: 2750 },
  { label: 'Steel frame / mixed', baseRate: 3100 },
];

const qualityLevels = [
  { label: 'Standard fit-out', multiplier: 1.0 },
  { label: 'Mid-range (renovated kitchen / bathrooms)', multiplier: 1.2 },
  { label: 'High-spec / premium (custom joinery, stone benchtops)', multiplier: 1.45 },
];

const regionFactors = [
  { label: 'Auckland', factor: 1.05 },
  { label: 'Wellington', factor: 1.12 },
  { label: 'Christchurch', factor: 1.08 },
  { label: 'Hamilton', factor: 1.00 },
  { label: 'Tauranga', factor: 1.03 },
  { label: 'Dunedin', factor: 1.02 },
  { label: 'Hawke\'s Bay', factor: 1.01 },
  { label: 'Queenstown', factor: 1.18 },
  { label: 'Nelson', factor: 1.00 },
  { label: 'Other NZ', factor: 1.00 },
];

export default function RebuildCostCalculatorPage() {
  const [floorArea, setFloorArea] = useState('');
  const [buildingType, setBuildingType] = useState(0);
  const [quality, setQuality] = useState(0);
  const [region, setRegion] = useState(0);
  const [extras, setExtras] = useState({ garage: false, deck: false, pool: false, retaining: false });
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const area = parseFloat(floorArea);
    if (!area || area <= 0) return;
    const base = area * buildingTypes[buildingType].baseRate;
    const withQuality = base * qualityLevels[quality].multiplier;
    const withRegion = withQuality * regionFactors[region].factor;
    const extrasTotal =
      (extras.garage ? 35000 : 0) +
      (extras.deck ? 18000 : 0) +
      (extras.pool ? 55000 : 0) +
      (extras.retaining ? 22000 : 0);
    const professional = (withRegion + extrasTotal) * 0.12;
    const total = withRegion + extrasTotal + professional;
    setResult(Math.round(total / 1000) * 1000);
  }

  const formatted = result ? new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD', maximumFractionDigits: 0 }).format(result) : null;

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden py-20 lg:py-24 px-6">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Rebuild Cost Calculator</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-6">
            <Calculator className="h-4 w-4" /> NZ Rebuild Cost Estimator
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            Home Rebuild Cost Calculator NZ
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
            NZ rebuild costs have risen 35–45% since 2019. Use this estimator to check whether your buildings insurance sum-insured still reflects your true rebuild cost — and close any underinsurance gap.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#calculator" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-900/40">
              Use Calculator <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="py-16 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Calculator widget */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Calculator className="h-5 w-5" /> Rebuild Cost Estimator
                  </h2>
                  <p className="text-emerald-100 text-sm">Based on Rider Levett Bucknall 2024 NZ construction rates</p>
                </div>
                <div className="p-6 space-y-6">

                  {/* Floor area */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Total floor area (m²) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={floorArea}
                      onChange={(e) => setFloorArea(e.target.value)}
                      placeholder="e.g. 180"
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none px-4 py-3 text-slate-900"
                    />
                    <p className="text-xs text-slate-500 mt-1">Include all habitable floors. Exclude garage unless it's integral to the structure.</p>
                  </div>

                  {/* Building type */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Building construction type</label>
                    <select
                      value={buildingType}
                      onChange={(e) => setBuildingType(Number(e.target.value))}
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none px-4 py-3 text-slate-900 bg-white"
                    >
                      {buildingTypes.map((t, i) => (
                        <option key={t.label} value={i}>{t.label} (${t.baseRate.toLocaleString()}/m²)</option>
                      ))}
                    </select>
                  </div>

                  {/* Quality */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Interior fit-out quality</label>
                    <select
                      value={quality}
                      onChange={(e) => setQuality(Number(e.target.value))}
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none px-4 py-3 text-slate-900 bg-white"
                    >
                      {qualityLevels.map((q, i) => (
                        <option key={q.label} value={i}>{q.label} (×{q.multiplier})</option>
                      ))}
                    </select>
                  </div>

                  {/* Region */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Region</label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(Number(e.target.value))}
                      className="w-full rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none px-4 py-3 text-slate-900 bg-white"
                    >
                      {regionFactors.map((r, i) => (
                        <option key={r.label} value={i}>{r.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Extras */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">Extras on the property</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { key: 'garage', label: 'Attached garage (~$35k)' },
                        { key: 'deck', label: 'Large deck (~$18k)' },
                        { key: 'pool', label: 'Swimming pool (~$55k)' },
                        { key: 'retaining', label: 'Retaining walls (~$22k)' },
                      ].map(({ key, label }) => (
                        <label key={key} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={extras[key as keyof typeof extras]}
                            onChange={(e) => setExtras(prev => ({ ...prev, [key]: e.target.checked }))}
                            className="w-4 h-4 rounded accent-emerald-600"
                          />
                          <span className="text-sm text-slate-700">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={calculate}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-colors text-lg"
                  >
                    Calculate Rebuild Cost
                  </button>

                  {/* Result */}
                  {formatted && (
                    <div className="rounded-xl bg-emerald-50 border-2 border-emerald-300 p-6 text-center">
                      <p className="text-sm font-semibold text-emerald-700 mb-1">Estimated Rebuild Cost</p>
                      <p className="text-4xl font-extrabold text-emerald-700">{formatted}</p>
                      <p className="text-xs text-emerald-600 mt-2">Includes 12% for professional fees, consents & demolition</p>
                      <p className="text-xs text-slate-500 mt-3">This is an estimate only — actual costs vary by site, design, and market conditions. Speak with an adviser to get an accurate sum-insured assessment.</p>
                    </div>
                  )}

                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800">This calculator provides indicative estimates only. It does not constitute financial or insurance advice. Actual rebuild costs depend on site access, geotechnical conditions, and prevailing market rates at the time of a loss. Always seek professional advice when setting your sum-insured.</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4">What's Included in Your Rebuild Cost?</h3>
                <ul className="space-y-2">
                  {[
                    'Structural rebuild (foundation to roof)',
                    'Interior fit-out (kitchens, bathrooms, flooring)',
                    'Professional fees (architect, engineer)',
                    'Council consents and compliance',
                    'Demolition of damaged structure',
                    'Site clearance and debris removal',
                    'External structures (where included in policy)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold mb-3">Talk to an Adviser</h3>
                <p className="text-slate-300 text-sm mb-4">Not sure if this estimate is right for your property? A licensed NZ adviser can review your current policy and recommend the right sum-insured.</p>
                <a href="#quote-form" className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-4 py-3 rounded-xl transition-colors">
                  Get My Quote
                </a>
              </div>

              <QuoteForm />

              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-3">Further Reading</h3>
                <ul className="space-y-2">
                  {[
                    { title: 'Underinsurance in NZ: Are You Covered?', href: '/underinsurance/' },
                    { title: 'Full Replacement vs Agreed Value', href: '/blog/full-replacement-vs-agreed-value/' },
                    { title: 'Top 5 Claims NZ Homeowners Face', href: '/blog/top-5-claims-nz-homeowners-face/' },
                    { title: 'Earthquake Insurance NZ', href: '/earthquake-insurance/' },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1">
                        <ArrowRight className="h-3 w-3" /> {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="bg-white py-14 px-6 border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Getting Your Sum-Insured Right Matters</h2>
          <div className="prose prose-slate prose-sm max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>Buildings insurance in New Zealand is typically sold on a <strong className="text-slate-900">sum-insured basis</strong> — meaning you nominate the maximum the insurer will pay to rebuild your home. If that figure is too low, you're underinsured and will face an out-of-pocket shortfall after a major loss like an earthquake, fire, or flood.</p>
            <p>NZ rebuild costs have increased dramatically since 2019 due to supply chain disruptions, material cost inflation, and the Christchurch rebuild effect on construction labour. Homes insured in 2018 or 2019 based on then-current rates may now be 30–45% undervalued on their sum-insured.</p>
            <p>The Natural Hazards Commission (NHC) pays up to $300,000 for a residential building — but the average NZ rebuild cost for a standard 180m² home now sits well above $400,000 in most main centres, and considerably higher in Queenstown or Wellington.</p>
            <p>A licensed insurance adviser can review your current coverage, compare policies from multiple insurers, and make sure your sum-insured matches your true rebuild cost. <Link href="/contact/" className="text-emerald-600 hover:text-emerald-700 font-medium">Request a review today.</Link></p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to Fix Your Sum-Insured?</h2>
          <p className="text-emerald-100 mb-8">Our advisers compare policies from all major NZ insurers and can recommend the right coverage level for your home.</p>
          <Link href="/contact/" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-8 py-3.5 rounded-xl hover:bg-emerald-50 transition-colors shadow">
            Get My Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
