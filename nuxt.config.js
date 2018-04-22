module.exports = {
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/Joungkyun/font-d2coding@1.31.0/d2coding.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/font-awesome',
    '@nuxtjs/bulma'
  ]
}
