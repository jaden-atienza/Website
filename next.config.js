module.exports = {
    reactStrictMode: true
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  basePath: isProd ? '/Website' : '',
  assetPrefix: isProd ? '/Website/' : '',
}
