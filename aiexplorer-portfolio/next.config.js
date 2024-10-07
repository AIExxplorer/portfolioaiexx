/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        pathname: '/**', // Aceita qualquer caminho após o domínio
      },
    ],
  },
};

module.exports = nextConfig;
