/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // typedRoutes will be enabled in Phase 2 once all dynamic routes exist.
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
