/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'ghost-dso8k808400okgkc80wss8s0.digimedic.cz',
      'www.gravatar.com'
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  postcss: {
    plugins: [
      'tailwindcss',
      'autoprefixer',
    ],
  },
}

export default nextConfig