/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com", "img.daisyui.com", "localhost"],
  },
};

export default nextConfig;
