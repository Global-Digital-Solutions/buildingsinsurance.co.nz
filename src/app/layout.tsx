import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Buildings Insurance NZ | Compare & Save | BuildingsInsurance.co.nz',
  description: 'Find the best buildings insurance for your NZ home. Compare quotes from top insurers, understand EQC coverage, and protect your property with our expert guides.',
  metadataBase: new URL('https://www.buildingsinsurance.co.nz'),
  keywords: ['buildings insurance nz', 'house insurance new zealand', 'home insurance comparison', 'buildings insurance quotes', 'eqc cover', 'earthquake insurance nz', 'property insurance nz', 'landlord insurance nz', 'commercial buildings insurance', 'body corporate insurance'],
  alternates: {
    canonical: 'https://www.buildingsinsurance.co.nz',
  },
  openGraph: {
    title: 'Buildings Insurance NZ | Compare & Save',
    description: 'Find the best buildings insurance for your NZ home. Compare quotes from top insurers, understand EQC coverage, and protect your property.',
    url: 'https://www.buildingsinsurance.co.nz',
    siteName: 'BuildingsInsurance.co.nz',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Buildings Insurance NZ - Compare & Save on Home Insurance',
      },
    ],
    type: 'website',
    locale: 'en_NZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buildings Insurance NZ | Compare & Save',
    description: 'Find the best buildings insurance for your NZ home. Compare quotes from top insurers, understand EQC coverage, and protect your property.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'pending-verification-code',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'FinancialService'],
  '@id': 'https://www.buildingsinsurance.co.nz/#organization',
  name: 'BuildingsInsurance.co.nz',
  legalName: 'Buildings Insurance New Zealand',
  url: 'https://www.buildingsinsurance.co.nz',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.buildingsinsurance.co.nz/logo.png',
    width: 200,
    height: 60,
  },
  image: 'https://www.buildingsinsurance.co.nz/og-image.png',
  description: 'New Zealand\'s independent buildings insurance broker referral service. We connect NZ homeowners, landlords, and commercial property owners with licensed local insurance advisers.',
  email: 'hello@cover4you.co.nz',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'hello@cover4you.co.nz',
    areaServed: 'NZ',
    availableLanguage: 'English',
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:30',
    },
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NZ',
    addressRegion: 'Auckland',
  },
  areaServed: {
    '@type': 'Country',
    name: 'New Zealand',
  },
  knowsAbout: [
    'Buildings Insurance',
    'Home Insurance New Zealand',
    'Earthquake Insurance NZ',
    'Natural Hazards Commission',
    'Landlord Insurance',
    'Body Corporate Insurance',
    'Commercial Buildings Insurance',
  ],
  serviceType: 'Insurance Broker Referral',
  sameAs: [],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.buildingsinsurance.co.nz/#website',
  name: 'BuildingsInsurance.co.nz',
  url: 'https://www.buildingsinsurance.co.nz',
  description: 'Compare buildings insurance quotes from leading NZ insurers. No-obligation quotes for residential, commercial, landlord, and body corporate properties.',
  inLanguage: 'en-NZ',
  publisher: {
    '@id': 'https://www.buildingsinsurance.co.nz/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.buildingsinsurance.co.nz/blog/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased bg-white text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
