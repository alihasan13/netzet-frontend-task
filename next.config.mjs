/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true, // Enable styled-components SWC transform
  },
  // You can add other Next.js configurations here if needed
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/, // Only apply to SVGs imported from JS/TS files
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;