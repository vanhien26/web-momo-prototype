import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@momo-webplatform/mobase"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
