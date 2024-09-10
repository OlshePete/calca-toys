/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL | 'http://cms:1337'
const nextConfig = {
    output: "standalone",
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
        ]
    },
}

module.exports = nextConfig