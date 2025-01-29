const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/HUSH' : '',
  assetPrefix: isProd ? '/HUSH/' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
};