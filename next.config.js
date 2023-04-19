/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
      typedRoutes: true,
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '**',
         },
         {
            protocol: 'https',
            hostname: 'picsum.photos',
            port: '',
            pathname: '**',
         },
      ],

      // domains: ['cdn.sanity.io', 'picsum.photos'],
   },
};

module.exports = nextConfig;
