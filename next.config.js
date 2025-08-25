/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    BUILD_TIME_VAR: process.env.BUILD_TIME_VAR, 
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  
  serverRuntimeConfig: {
    API_URL: process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.yandexcloud.net',
      },
      {
        protocol: 'https',
        hostname: 'calca-toys.ru',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**',
      },
      {
        protocol: 'http',
        hostname: 'cms',
        pathname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"]
    // missingSuspenseWithCSRBailout: false,
  }
};

module.exports = nextConfig;
