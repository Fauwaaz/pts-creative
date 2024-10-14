/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    output: process.env.NODE_ENV !== "development" ? "export" : "standalone",
    reactStrictMode: true, 
    rewrites: () => [],
};
  
export default nextConfig