import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'schoolcal.co',
          },
        ],
        destination: 'https://schoolcal.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.schoolcal.co',
          },
        ],
        destination: 'https://schoolcal.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.schoolcal.com',
          },
        ],
        destination: 'https://schoolcal.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
