/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd3iss7bcwsd2ji.cloudfront.net'
            }    
        ],
    },
}

module.exports = nextConfig