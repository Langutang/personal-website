/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static HTML export
  images: { unoptimized: true }, // disable image optimization (required for export)
  assetPrefix: './', // crucial for relative paths
};

module.exports = nextConfig;
