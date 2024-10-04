/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    output: "export",
    reactStrictMode: true, 
    rewrites: () => [],
};
  
export default nextConfig