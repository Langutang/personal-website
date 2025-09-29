// next.config.js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  assetPrefix: './', // <-- crucial for static export
};
module.exports = nextConfig;
