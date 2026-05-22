/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: '/faq',
        destination: '/faqs',
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
