/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static export for Netlify / any static host
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
