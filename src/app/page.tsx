import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedStats from '@/components/AnimatedStats'
import HowItWorks from '@/components/HowItWorks'
import QuoteForm from '@/components/QuoteForm'
import { faqs } from '@/data/faqs'
import {
  Shield,
  CheckCircle,
  Star,
} from 'lucide-react'

export const metadata: Metadata = {
  title:
    'Buildings Insurance NZ | Compare & Save | BuildingsInsurance.co.nz',
  description:
    'Compare buildings insurance quotes from NZ leading insurers. Get instant quotes, save time and money on your home insurance cover.',
  alternates: { canonical: 'https://buildingsinsurance.co.nz/' },
  openGraph: {
    title:
      'Buildings Insurance NZ | Compare & Save | BuildingsInsurance.co.nz',
    description:
      'Compare buildings insurance quotes from NZ leading insurers. Get instant quotes, save time and money on your home insurance cover.',
    url: 'https://buildingsinsurance.co.nz/',
  },
}

export default function HomePage() {
  const propertyTypes = [
    {
      id: 'residential',
      title: 'Residential Homes',
      description: 'Comprehensive cover for your family home — fire, flood, earthquake and more.',
      tag: 'Most Popular',
      tagColor: 'bg-emerald-500',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop',
      href: '/sectors/residential',
    },
    {
      id: 'commercial',
      title: 'Commercial Buildings',
      description: 'Specialist cover for offices, retail, and industrial premises — EQC doesn\'t apply.',
      tag: 'EQC Exempt',
      tagColor: 'bg-sky-600',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
      href: '/sectors/commercial',
    },
    {
      id: 'landlords',
      title: 'Landlord Properties',
      description: 'Investment property cover including tenant damage and loss of rental income.',
      tag: 'Investors',
      tagColor: 'bg-violet-600',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
      href: '/sectors/landlords',
    },
    {
      id: 'bodyc',
      title: 'Body Corporate',
      description: 'Mandatory building cover for unit title properties under the Unit Titles Act.',
      tag: 'Required by Law',
      tagColor: 'bg-amber-600',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      href: '/sectors/body-corporate',
    },
  ]

  const whyFeatures = [
    {
      title: 'Natural Disaster Protection',
      description:
        'Protection against earthquake, flood, storm damage and other natural disasters common in New Zealand',
      items: ['Earthquake cover', 'Flood protection', 'Storm & wind damage'],
    },
    {
      title: 'Financial Security',
      description:
        'Ensure you can rebuild without financial hardship in case of a major incident',
      items: ['Rebuild cost coverage', 'Contents temporary accommodation', 'Mortgage requirements met'],
    },
    {
      title: 'Legal & Mortgage Requirements',
      description:
        'Satisfy banking covenants and body corporate obligations with compliant cover',
      items: ['Bank requirements satisfied', 'Body corporate obligations', 'Legal protection'],
    },
  ]

  const testimonials = [
    {
      name: 'Rachel M.',
      role: 'Homeowner',
      city: 'Auckland',
      quote:
        'After the earthquakes, I realised how important good buildings insurance is. This site helped me find the right cover for peace of mind.',
      stars: 5,
    },
    {
      name: 'David K.',
      role: 'Landlord',
      city: 'Wellington',
      quote:
        'As a landlord with multiple properties, comparing policies here saved me hundreds and ensured I had the right cover for each investment.',
      stars: 5,
    },
    {
      name: 'Sarah T.',
      role: 'Body Corporate Chair',
      city: 'Christchurch',
      quote:
        'Managing insurance for our complex building was difficult until I found this resource. Clear information and easy to compare options.',
      stars: 5,
    },
  ]

  const displayFaqs = faqs.slice(0, 6)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Buildings Insurance Co.nz',
            url: 'https://buildingsinsurance.co.nz',
            description:
              'Compare buildings insurance quotes from leading NZ insurers',
            areaServed: 'NZ',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '82vh' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&h=900&fit=crop"
            alt="Beautiful NZ home exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/55 to-slate-900/20" />
          {/* Fade to dark at the bottom so trust badges sit cleanly */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-900/80 to-transparent" />
        </div>

        {/* Main hero content */}
        <div className="relative z-10 flex h-full flex-col items-start justify-center px-6 pt-24 pb-36 sm:px-12 lg:px-20">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-4 py-1.5 text-sm font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              NZ&apos;s Buildings Insurance Specialists
            </div>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Buildings Insurance<br className="hidden sm:block" /> Without the Fuss
            </h1>
            <p className="mb-8 text-base text-slate-200 sm:text-lg max-w-xl">
              Our hand-picked brokers compare NZ&apos;s top insurers for you — often saving up to 26%.
              No obligation, no hard sell. Just the right cover for your home.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#quote-form" className="rounded-lg bg-emerald-500 px-8 py-3.5 font-bold text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:-translate-y-0.5 shadow-lg shadow-emerald-600/30">
                Get a Free Quote
              </Link>
              <Link href="/compare" className="rounded-lg border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white/10 hover:border-white">
                Compare Insurers
              </Link>
            </div>
          </div>
        </div>

        {/* Trust badges — overlaid just above the page fold */}
        <div className="absolute bottom-0 inset-x-0 z-10 px-6 pb-6 sm:px-12 lg:px-20">
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {[
              { icon: '✓', text: 'Hand-Picked NZ Brokers' },
              { icon: '✓', text: 'Save Up to 26%' },
              { icon: '✓', text: '$0 Broker Fees' },
              { icon: '✓', text: 'No Obligation' },
              { icon: '✓', text: 'Response Within 24 Hours' },
              { icon: '✓', text: '6 Major NZ Insurers' },
            ].map((badge) => (
              <div
                key={badge.text}
                className="flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 px-4 py-2 text-sm font-semibold text-white"
              >
                <span className="text-emerald-400 font-bold">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* How It Works */}
      <HowItWorks />

      {/* Property Types Section */}
      <section className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Buildings Insurance by Property Type
            </h2>
            <p className="text-lg text-slate-600">
              Find specialised cover tailored to your property and situation
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {propertyTypes.map((type) => (
              <Link
                key={type.id}
                href={type.href}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
                style={{ minHeight: '320px' }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay - heavier at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/10" />
                </div>

                {/* Tag */}
                <div className="relative z-10 p-5">
                  <span className={`inline-flex items-center rounded-full ${type.tagColor} px-3 py-1 text-xs font-bold text-white shadow`}>
                    {type.tag}
                  </span>
                </div>

                {/* Content at bottom */}
                <div className="relative z-10 mt-auto p-5">
                  <h3 className="mb-2 text-xl font-bold text-white leading-snug">
                    {type.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {type.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm transition-all group-hover:gap-3">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buildings Insurance Section */}
      <section className="relative overflow-hidden px-6 py-20 sm:px-12 lg:px-20">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop"
            alt="New Zealand home"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Why Buildings Insurance is Essential
            </h2>
            <p className="text-lg text-slate-300">
              New Zealand&apos;s unique natural disaster risk makes proper cover non-negotiable
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-8 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mb-6 text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-200 text-sm">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Fact Callout */}
          <div className="mt-10 rounded-2xl border border-emerald-500/40 bg-emerald-500/15 backdrop-blur-sm p-8">
            <div className="flex gap-4">
              <Shield className="h-8 w-8 flex-shrink-0 text-emerald-400" />
              <div>
                <h4 className="mb-2 font-semibold text-white">Key Fact About EQC</h4>
                <p className="text-slate-300">
                  The Earthquake Commission (EQC) covers natural disasters up to $300,000 plus GST for
                  residential properties. Most homeowners also need private insurance to cover amounts
                  above this threshold and additional protections not included in EQC cover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white px-6 py-20 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Trusted by NZ Homeowners
            </h2>
            <p className="text-lg text-slate-600">
              See what homeowners, landlords and body corporate chairs say about us
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 p-8 shadow-md transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="mb-6 text-lg italic text-slate-700">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-slate-600">
                    {testimonial.role}, {testimonial.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="bg-slate-50 px-6 py-20 sm:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to common questions about buildings insurance in New Zealand
            </p>
          </div>

          <div className="space-y-4">
            {displayFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-lg border border-slate-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-semibold text-slate-900 transition-all hover:bg-slate-50">
                  <span>{faq.q}</span>
                  <span className="transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="border-t border-slate-200 px-6 py-4 text-slate-700">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 font-semibold text-emerald-600 transition-all hover:gap-3"
            >
              View all FAQs <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote-form" className="bg-white px-6 py-20 sm:px-12 lg:px-20 scroll-mt-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-slate-600">
              Compare personalised quotes from top insurers in minutes
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  )
}
