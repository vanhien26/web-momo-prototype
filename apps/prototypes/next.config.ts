import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile mobase-next để Next.js bundle đúng
  transpilePackages: ["@momo-webplatform/mobase-next"],

  // Cho phép iframe load từ cùng origin
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },

  reactStrictMode: false,
};

export default nextConfig;
