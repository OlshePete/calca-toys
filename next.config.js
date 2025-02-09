/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    images: {
        remotePatterns: [{
                protocol: 'https',
                hostname: 'storage.yandexcloud.net'
            }, {
                protocol: 'https',
                hostname: 'calca-toys.ru'
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                pathname: '**'
            },
            {
                protocol: 'http',
                hostname: 'cms',
                pathname: '**'
            },
        ]
    },
}

module.exports = nextConfig