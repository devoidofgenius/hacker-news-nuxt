module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'news-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** CSS
  */
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss' },
    'tachyons/css/tachyons.min.css',
    // 'tachyons-debug/css/tachyons-debug.min.css'
  ],
  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/filters'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios']
  }
}
