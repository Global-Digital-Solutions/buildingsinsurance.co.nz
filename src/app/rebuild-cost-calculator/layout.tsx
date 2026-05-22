import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Rebuild Cost Calculator NZ | Buildings Insurance Sum-Insured',
  description: 'Estimate your NZ home rebuild cost. With construction costs up 35–45% since 2019, many homes are underinsured. Use our calculator to check your sum-insured is still accurate.',
  alternates: { canonical: 'https://www.buildingsinsurance.co.nz/rebuild-cost-calculator/' },
  openGraph: {
    title: 'Home Rebuild Cost Calculator NZ | Check Your Sum-Insured',
    description: 'NZ rebuild costs have risen 35–45% since 2019. Use this estimator to check whether your buildings insurance sum-insured still reflects your true rebuild cost.',
    url: 'https://www.buildingsinsurance.co.nz/rebuild-cost-calculator/',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
