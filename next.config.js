/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      // Direct redirect to avoid two-hop chain (/faq → /faq/ → /faqs/)
      {
        source: '/faq',
        destination: '/faqs/',
        permanent: true,
      },
      {
        source: '/faq/',
        destination: '/faqs/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
