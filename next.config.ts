import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: undefined, // Disable turbopack which can cause instability
  },
  // Add stability settings
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
