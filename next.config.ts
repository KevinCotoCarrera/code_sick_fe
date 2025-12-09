import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  eslint: {
    // Warning instead of error during builds
    ignoreDuringBuilds: process.env.ESLINT_SILENCE === "true",
  },
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    return config;
  },
  // Add other Next.js config options here as needed
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
