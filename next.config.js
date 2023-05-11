/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  pageExtensions: ["jsx", "js", "ts", "tsx"],
  distDir: "build"
};

module.exports = nextConfig;
