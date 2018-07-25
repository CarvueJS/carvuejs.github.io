module.exports = {
  // baseUrl: process.env.NODE_ENV === 'production'
  //   ? '/carvuejs-website/dist/'
  //   : '/',
  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .tap(options => {
        return {
          raw: true,
        }
      })
      .end()
  },
}
