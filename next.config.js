const isProd = process.env.NODE_ENV === 'production'
 // still may need editing and adjusting
module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/github.com/ericoulster/Sticker/' : ''
}
