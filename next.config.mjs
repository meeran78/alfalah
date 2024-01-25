/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: "www.pexels.com",
        }]
    },
    // output: "export",
};

export default nextConfig;
