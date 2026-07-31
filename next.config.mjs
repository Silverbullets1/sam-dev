/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    optimizePackageImports: ["lucide-react", "@react-three/drei"],
  },
  transpilePackages: ["three"],
};

export default nextConfig;
