import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/information-final',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
