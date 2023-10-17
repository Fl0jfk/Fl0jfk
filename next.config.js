/** @type {import('next').NextConfig} */

const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")

const nextConfig = {

    images: {
        domains: ['fl0jfk.s3.eu-west-3.amazonaws.com'],
    },
}

module.exports = nextConfig

