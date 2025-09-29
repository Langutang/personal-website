/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export
  images: {
    unoptimized: true, // needed for static export
  },
};

module.exports = nextConfig;
