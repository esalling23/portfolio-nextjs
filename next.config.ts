import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
