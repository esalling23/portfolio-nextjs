import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eron-portfolio.s3.amazonaws.com'
      },
    ],
  },
};

export default nextConfig;
