import type { NextConfig } from "next";
import type { Configuration } from "webpack";

/** @type {NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ["placehold.co"],
  },
  webpack(config: Configuration) {
    if (!config.module) {
      config.module = { rules: [] };
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
