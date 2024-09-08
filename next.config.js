/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL | 'http://cms:1337'
const nextConfig = {
    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 'storage.yandexcloud.net'
            },
            {
                protocol: 'http',
                hostname: 'cms:1337',
                pathname: '**'
            },
        ],
        async rewrites() {
            return [{
                source: '/api/:path*',
                destination: `${API_URL}/:path*`,
            }, ]
        },
    },
}

module.exports = nextConfig