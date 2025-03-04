import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/portfolio-nextjs',
  output: "export",
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
