/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ghost-dso8k808400okgkc80wss8s0.digimedic.cz',
      'www.gravatar.com',
      'utfs.io'
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
    };
    return config;
  },
  transpilePackages: ['react-email-starter'],
  experimental: {
    externalDir: true,
  },
};
export default nextConfig;