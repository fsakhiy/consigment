/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 's.gravatar.com',
                pathname: '/avatar/**', // Allow Gravatar avatars
            },
            {
                protocol: 'https',
                hostname: 'cdn.auth0.com',
                pathname: '/avatars/**', // Allow Auth0 avatar fallback images
            },
        ],
    },

};

export default nextConfig;