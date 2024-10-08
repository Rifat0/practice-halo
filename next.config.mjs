/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '127.0.0.1',
  //       port: '8000',
  //       pathname: '/**',
  //     },
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clinic.googchecker.com',
        port: '80',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
