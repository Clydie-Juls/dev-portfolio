/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com', 'pbs.twimg.com', 'images.unsplash.com'],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
