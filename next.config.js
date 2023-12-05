/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fl0jfk.s3.eu-west-3.amazonaws.com'
            }    
        ],
    },
}

module.exports = nextConfig