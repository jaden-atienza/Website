const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true, // ✅ safe and recommended
  basePath: isProd ? '/Website' : '',
  assetPrefix: isProd ? '/Website/' : '',
  trailingSlash: true, // ✅ needed for GitHub Pages
}
