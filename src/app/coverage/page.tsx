import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import QuoteForm from '@/components/QuoteForm'
import { Check, X, AlertCircle, Shield, Home, FileText, TrendingUp, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: "Buildings Insurance Coverage NZ | What's Covered",
  description:
    "Understand buildings insurance coverage options in New Zealand. Compare coverage tiers, learn what is and isn't covered, and find the right protection for your property.",
  alternates: { canonical: 'https://buildingsinsurance.co.nz/coverage/' },
  openGraph: {
    title: "Buildings Insurance Coverage NZ | What's Covered",
    description:
      "Understand buildings insurance coverage options in New Zealand. Compare coverage tiers, learn what is and isn't covered, and find the right protection for your property.",
    url: 'https://buildingsinsurance.co.nz/coverage/',
  },
}

export default function CoveragePage() {
  const coverageTiers = [
    {
      amount: '$300K',
      name: 'Starter',
      range: '$150–$300/yr',
      description: 'Entry-level cover aligned with EQC threshold',
      suitableFor: ['Small apartments', 'Studio homes', 'First-time buyers'],
      example: 'One-bedroom apartment in Auckland',
    },
    {
      amount: '$500K',
      name: 'Standard',
      range: '$250–$500/yr',
      description: 'Average New Zealand home protection',
      suitableFor: ['3–4 bedroom homes', 'Moderate value properties', 'Typical NZ families'],
      example: 'Average 3-bed suburban home',
    },
    {
      amount: '$750K',
      name: 'Popular',
      range: '$400–$700/yr',
      description: 'Most popular coverage level for mid-range homes',
      suitableFor: ['Renovated properties', 'Family homes', 'Good value security'],
      example: 'Modern 4-bed family home',
      popular: true,
    },
    {
      amount: '$1M',
      name: 'Enhanced',
      range: '$600–$900/yr',
      description: 'Comprehensive protection for larger homes',
      suitableFor: ['Large properties', 'Higher rebuild costs', 'Valuable constructions'],
      example: 'Large 5+ bed executive home',
    },
    {
      amount: '$2M+',
      name: 'Premium',
      range: '$1,200–$2,000+/yr',
      description: 'Full protection for high-value properties',
      suitableFor: ['Luxury homes', 'Historic properties', 'High-end investments'],
      example: 'Multi-million dollar waterfront property',
    },
  ]

  const coverageCategories = [
    {
      name: 'Natural Disaster',
      icon: '🌊',
      color: 'from-blue-600 to-sky-500',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      items: ['Earthquake damage', 'Flood damage', 'Storm & wind damage', 'Volcanic activity'],
      description: 'Protection against natural disasters common in New Zealand — the most critical cover for NZ homeowners.',
      example: 'Your home sustains significant damage during an earthquake or severe storm.',
      limit: 'Up to sum insured (less excess)',
    },
    {
      name: 'Fire & Explosion',
      icon: '🔥',
      color: 'from-red-600 to-orange-500',
      bg: 'bg-red-50',
      border: 'border-red-200',
      items: ['Fire damage', 'Explosion damage', 'Lightning strike', 'Smoke damage'],
      description: 'Comprehensive cover for fire-related damage and explosions, including associated smoke and water damage from firefighting.',
      example: 'A fire breaks out in your kitchen and spreads; cover includes rebuilding and all repairs.',
      limit: 'Up to sum insured (less excess)',
    },
    {
      name: 'Water Damage',
      icon: '💧',
      color: 'from-cyan-600 to-teal-500',
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      items: ['Burst pipes', 'Overflowing gutters', 'Blocked drains', 'Water leaks'],
      description: 'Cover for unintentional water damage from burst pipes, leaking roofs, and drainage issues.',
      example: 'A burst water pipe causes ceiling damage — repair costs are covered.',
      limit: 'Up to sum insured (less excess)',
    },
    {
      name: 'Theft & Vandalism',
      icon: '🔒',
      color: 'from-violet-600 to-purple-500',
      bg: 'bg-violet-50',
      border: 'border-violet-200',
      items: ['Break-ins and theft', 'Vandalism damage', 'Malicious damage', 'Forced entry damage'],
      description: 'Protection against criminal damage to your building, including break-in repairs and vandalism.',
      example: 'Vandals damage your property or thieves break in — costs are covered for all repairs.',
      limit: 'Up to sum insured (less excess)',
    },
    {
      name: 'Temporary Accommodation',
      icon: '🏨',
      color: 'from-amber-600 to-yellow-500',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      items: ['Temporary housing costs', 'Accommodation expenses', 'Related living costs'],
      description: 'While your home is being repaired, temporary accommodation and living costs are covered.',
      example: 'Your home requires 3 months of repairs — accommodation in a rental property is covered.',
      limit: 'Typically 10–20% of sum insured',
    },
    {
      name: 'Landlord Protection',
      icon: '🔑',
      color: 'from-emerald-600 to-teal-500',
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      items: ['Loss of rental income', 'Tenant default', 'Legal liability', 'Landlord protection'],
      description: 'Specialised coverage for landlords including loss of rental income if the property becomes uninhabitable.',
      example: 'Property is damaged and unrentable for 2 months — lost rental income is covered.',
      limit: 'Typically 12 months rent',
    },
    {
      name: 'Legal Costs',
      icon: '⚖️',
      color: 'from-slate-600 to-slate-500',
      bg: 'bg-slate-50',
      border: 'border-slate-200',
      items: ['Legal defence costs', 'Recovery costs', 'Dispute resolution', 'Professional fees'],
      description: 'Cover for legal costs associated with claims, disputes, and building-related legal matters.',
      example: 'You need legal representation regarding a damage claim — legal fees are covered.',
      limit: 'Typically $10K–$25K',
    },
    {
      name: 'Gradual Damage (Optional)',
      icon: '🔧',
      color: 'from-pink-600 to-rose-500',
      bg: 'bg-pink-50',
      border: 'border-pink-200',
      items: ['Wear and tear', 'Weathering', 'Gradual subsidence', 'Slow deterioration'],
      description: 'Optional add-on cover for gradual damage — not usually included in standard policies but available on request.',
      example: 'Your building slowly subsides — this optional cover would apply.',
      limit: 'Depends on add-on selected',
    },
  ]

  const notCovered = [
    { title: 'General Wear and Tear', description: 'Damage from everyday use, aging, and normal deterioration is not covered.', icon: AlertCircle },
    { title: 'Deliberate Damage', description: 'Intentional damage caused by you or someone acting with your permission is excluded.', icon: X },
    { title: 'Pre-Existing Damage', description: 'Damage that existed before the policy was issued or known at the time of application.', icon: FileText },
    { title: 'Unoccupied Property (60+ days)', description: 'Extended unoccupancy may void or limit coverage unless declared to your insurer.', icon: Home },
    { title: 'Illegal Activity', description: "Damage resulting from criminal activity you're involved in or that occurs on your property illegally.", icon: Shield },
    { title: 'Gradual Land Movement', description: 'Gradual subsidence, landslip, or ground movement unless specifically added as an optional extra.', icon: TrendingUp },
  ]

  const premiumFactors = [
    { factor: 'Location / Earthquake Zone', impact: 'Highest', bar: 100, color: 'bg-red-500', description: 'High-risk areas (e.g., Wellington, Christchurch) have significantly higher premiums.' },
    { factor: 'Building Age & Materials', impact: 'Very High', bar: 85, color: 'bg-red-400', description: 'Older buildings or certain materials (unreinforced masonry) cost more to insure.' },
    { factor: 'Sum Insured / Rebuild Cost', impact: 'High', bar: 70, color: 'bg-orange-500', description: 'Higher coverage amounts naturally result in higher premiums.' },
    { factor: 'Claims History', impact: 'High', bar: 65, color: 'bg-orange-400', description: 'Multiple claims increase risk and premiums; a clean history reduces cost.' },
    { factor: 'Security Features', impact: 'Moderate', bar: 40, color: 'bg-yellow-500', description: 'Alarms, locks, and security systems can reduce your premium by 5–15%.' },
    { factor: 'Excess Level Chosen', impact: 'Moderate', bar: 35, color: 'bg-emerald-500', description: 'A higher excess (your contribution per claim) lowers the annual premium significantly.' },
  ]

  const eqcInfo = [
    {
      num: '01',
      title: 'What EQC Covers',
      description: 'The Earthquake Commission (Toka Tū Ake EQC) covers natural disasters up to $300,000 plus GST.',
      points: ['Earthquake, volcanic eruption, landslide, hydrothermal activity', 'Covers residential land and buildings', '$300K + GST cap per event', 'Applies to most homeowners and some landlords'],
    },
    {
      num: '02',
      title: 'EQC + Private Insurance',
      description: 'EQC and private insurance work in layers to give you comprehensive protection.',
      points: ['EQC covers up to $300K + GST; private insurer covers above that', 'EQC is the first responder; private insurer handles the excess', 'You claim on both policies separately', 'No coverage gap when policies are correctly aligned'],
    },
    {
      num: '03',
      title: 'Recent EQC Changes',
      description: 'EQC has undergone significant reforms that all homeowners should know about.',
      points: ['Now covers all natural hazard events (not just earthquake)', 'Increased focus on insurable interest and residential-only cover', 'Changes to claim processes and assessment timelines', 'New opt-out arrangements for some property owners'],
    },
    {
      num: '04',
      title: 'Filing an EQC Claim',
      description: 'Step-by-step process for lodging a claim with the Earthquake Commission.',
      points: ['Report damage within 3 months of the event', 'Gather documentation and photos of damage', 'Complete EQC claim form online or by phone (0800 326 243)', 'EQC will assess and respond within set timeframes'],
    },
  ]

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
            alt="Modern NZ home exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/20" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-slate-900/70 to-transparent" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 pt-24 pb-32 sm:px-12 lg:px-20">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-4 py-1.5 text-sm font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Coverage Guide — Updated May 2026
            </div>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              What Does Buildings<br className="hidden sm:block" /> Insurance Cover?
            </h1>
            <p className="mb-8 text-base text-slate-200 sm:text-lg max-w-xl">
              Everything you need to know about NZ buildings insurance coverage — tiers, inclusions, exclusions, and how EQC fits in.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#coverage-tiers" className="rounded-lg bg-emerald-500 px-8 py-3.5 font-bold text-white hover:bg-emerald-400 transition-all shadow-lg">
                View Coverage Tiers
              </Link>
              <Link href="#quote-form" className="rounded-lg border-2 border-white/70 px-8 py-3.5 font-semibold text-white hover:bg-white/10 transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Trust pills */}
        <div className="absolute bottom-0 inset-x-0 z-10 px-6 pb-6 sm:px-12 lg:px-20">
          <div className="flex flex-wrap gap-3">
            {['Licensed NZ Brokers', '$0 Broker Fees', 'No Obligation', '6 Major Insurers'].map((b) => (
              <div key={b} className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 text-sm font-semibold text-white">
                <span className="text-emerald-400 font-bold">✓</span>{b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE TIERS ── */}
      <section id="coverage-tiers" className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Sum Insured Guide</span>
            <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">Choose Your Coverage Level</h2>
            <p className="text-lg text-slate-600">Select the sum insured that matches your home&apos;s rebuild cost</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {coverageTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-b from-emerald-600 to-emerald-700 text-white shadow-2xl shadow-emerald-600/30 scale-105'
                    : 'bg-white shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 inset-x-0 text-center py-2 text-xs font-bold tracking-widest text-emerald-200 uppercase bg-emerald-800/40">
                    ★ Most Popular
                  </div>
                )}
                <div className={`p-6 ${tier.popular ? 'pt-10' : ''}`}>
                  <p className={`text-sm font-bold uppercase tracking-wider mb-1 ${tier.popular ? 'text-emerald-300' : 'text-emerald-600'}`}>{tier.name}</p>
                  <h3 className={`text-4xl font-black mb-1 ${tier.popular ? 'text-white' : 'text-slate-900'}`}>{tier.amount}</h3>
                  <p className={`text-sm font-semibold mb-4 ${tier.popular ? 'text-emerald-200' : 'text-slate-500'}`}>{tier.range} / year</p>
                  <p className={`text-sm mb-5 ${tier.popular ? 'text-emerald-100' : 'text-slate-600'}`}>{tier.description}</p>

                  <div className={`space-y-2 mb-5 pt-4 border-t ${tier.popular ? 'border-emerald-500/40' : 'border-slate-100'}`}>
                    {tier.suitableFor.map((item, i) => (
                      <div key={i} className={`flex items-center gap-2 text-sm ${tier.popular ? 'text-emerald-100' : 'text-slate-700'}`}>
                        <Check className={`h-4 w-4 flex-shrink-0 ${tier.popular ? 'text-emerald-300' : 'text-emerald-500'}`} />
                        {item}
                      </div>
                    ))}
                  </div>

                  <p className={`text-xs italic rounded-lg p-3 mb-4 ${tier.popular ? 'bg-emerald-800/40 text-emerald-200' : 'bg-slate-50 text-slate-600'}`}>
                    e.g. {tier.example}
                  </p>

                  <Link
                    href="#quote-form"
                    className={`block text-center rounded-xl py-2.5 text-sm font-bold transition-all ${
                      tier.popular
                        ? 'bg-white text-emerald-700 hover:bg-emerald-50'
                        : 'bg-emerald-600 text-white hover:bg-emerald-700'
                    }`}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S COVERED ── */}
      <section className="bg-white px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Policy Inclusions</span>
            <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">What&apos;s Covered in Your Policy</h2>
            <p className="text-lg text-slate-600">Detailed breakdown of coverage categories and protection limits</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {coverageCategories.map((cat, idx) => (
              <div key={idx} className={`rounded-2xl border-2 ${cat.border} bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                {/* Coloured top accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${cat.color}`} />
                <div className={`p-6 ${cat.bg}`}>
                  <div className="text-4xl mb-3">{cat.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.name}</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cat.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-emerald-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`rounded-lg bg-gradient-to-r ${cat.color} px-3 py-2`}>
                    <p className="text-xs font-bold text-white">Limit: {cat.limit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S NOT COVERED ── */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-12 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-800/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">
              <X className="h-4 w-4" /> Important Exclusions
            </span>
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">What&apos;s NOT Covered</h2>
            <p className="text-lg text-slate-400">Know your exclusions before you need to make a claim</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {notCovered.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex gap-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 transition-all">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6 flex gap-4">
            <AlertCircle className="h-6 w-6 flex-shrink-0 text-amber-400 mt-0.5" />
            <p className="text-sm text-amber-200 leading-relaxed">
              <strong className="text-amber-300">Tip:</strong> Always read the full policy wording before purchasing. Your licensed adviser will walk you through exactly what is and isn&apos;t covered for your specific property — ask us for a plain-English explanation when we call.
            </p>
          </div>
        </div>
      </section>

      {/* ── PREMIUM FACTORS ── */}
      <section className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <span className="inline-block text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-2">Pricing Factors</span>
            <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">What Affects Your Premium</h2>
            <p className="text-lg text-slate-600">The key factors that drive your annual insurance cost</p>
          </div>

          <div className="space-y-4">
            {premiumFactors.map((factor, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 text-sm font-bold w-6">{String(idx + 1).padStart(2, '0')}</span>
                    <h3 className="font-bold text-slate-900">{factor.factor}</h3>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    factor.bar >= 80 ? 'bg-red-100 text-red-700' :
                    factor.bar >= 60 ? 'bg-orange-100 text-orange-700' :
                    factor.bar >= 40 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-emerald-100 text-emerald-700'
                  }`}>{factor.impact}</span>
                </div>
                <div className="mb-3 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${factor.color} transition-all`}
                    style={{ width: `${factor.bar}%` }}
                  />
                </div>
                <p className="text-sm text-slate-600 pl-9">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQC SECTION ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-6 py-20 sm:px-12 lg:px-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-4 py-1.5 text-sm font-semibold text-emerald-400 mb-4">
              <Shield className="h-4 w-4" /> Government Cover
            </div>
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Understanding EQC Cover</h2>
            <p className="text-lg text-slate-400">How the Earthquake Commission works alongside your private insurance</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            {eqcInfo.map((section, idx) => (
              <div key={idx} className="relative group rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300">
                <div className="text-5xl font-black text-white/5 absolute top-4 right-5 leading-none select-none">{section.num}</div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 mb-4">
                  <span className="text-emerald-400 font-bold text-sm">{section.num}</span>
                </div>
                <h3 className="font-bold text-white mb-2">{section.title}</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed">{section.description}</p>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="h-4 w-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm p-6 flex gap-4">
            <AlertCircle className="h-6 w-6 flex-shrink-0 text-amber-400 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-300 mb-1">Check Your EQC Eligibility</h4>
              <p className="text-sm text-amber-200/80 leading-relaxed">
                EQC cover is automatic for residential properties but has changed significantly in recent years. Some property owners may be able to opt out. Check your eligibility at{' '}
                <a href="https://eqc.govt.nz" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300">eqc.govt.nz</a>{' '}
                or discuss with your adviser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ── */}
      <section id="quote-form" className="bg-white px-6 py-20 sm:px-12 lg:px-20 scroll-mt-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">Ready to Get Covered?</h2>
            <p className="text-lg text-slate-600">Our hand-picked advisers will compare NZ&apos;s top insurers for your property</p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* ── FOOTER LINKS ── */}
      <section className="border-t border-slate-200 bg-slate-50 px-6 py-12 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 font-semibold text-slate-900">More Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">Insurance Blog & Guides</Link></li>
              <li><a href="https://eqc.govt.nz" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">EQC Website</a></li>
              <li><Link href="/claims" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">Making a Claim</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-900">Property Types</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sectors/residential" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">Residential Homes</Link></li>
              <li><Link href="/sectors/commercial" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">Commercial Buildings</Link></li>
              <li><Link href="/sectors/body-corporate" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">Body Corporate</Link></li>
              <li><Link href="/sectors/landlords" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">Landlord Properties</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-slate-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compare" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">Compare Insurers</Link></li>
              <li><Link href="/about" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">About Us</Link></li>
              <li><Link href="/contact" className="text-emerald-600 hover:text-emerald-700 hover:underline transition-all">Contact</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
