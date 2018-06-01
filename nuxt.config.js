module.exports = {
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    }
  },
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/gh/Joungkyun/font-d2coding@1.31.0/d2coding.css"
      }
    ],
    title: "9X년생 개발자 모임🌟"
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Customize app manifest
  */
  manifest: {
    name: "9X년생 개발자 모임🌟",
    author: "9XDP Organization",
    description: "나만의 프로젝트를 모두와 시작해보세요",
    theme_color: "#3B8070",
    lang: "ko"
  },
  /*
  ** Modules
  */
  modules: [
    "@nuxtjs/pwa",
    "@nuxtjs/toast",
    "@nuxtjs/axios",
    "@nuxtjs/font-awesome",
    "@nuxtjs/bulma",
    "@nuxtjs/toast",
    [
      "nuxt-validate",
      {
        lang: "ko"
      }
    ],
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-120142054-1"
      }
    ],
    "@nuxtjs/sitemap"
  ],

  toast: {
    duration: 2000
  },

  router: {
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      } else {
        let position = {}

        if (to.matched.length < 2) {
          position = { x: 0, y: 0 }
        } else if (
          to.matched.some(r => r.components.default.options.scrollToTop)
        ) {
          position = { x: 0, y: 0 }
        }

        if (to.hash) {
          position = { selector: to.hash }
        }
        return position
      }
    }
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://9xdp.github.io",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Enable me when using nuxt generate,
    routes: [
      {
        url: "/",
        changefreq: "daily",
        priority: 1
      },
      {
        url: "/intro/meetup",
        changefreq: "weekly",
        priority: 0.8
      }
    ]
  }
}
