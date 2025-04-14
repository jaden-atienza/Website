/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  basePath: isProd ? '/Website' : '',
  assetPrefix: isProd ? '/Website/' : '',
  trailingSlash: true,
  output: 'export',
}

module.exports = nextConfig
