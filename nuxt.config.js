const pageInfo = {
  name: "TeenTiPs",
  url: "https://example.com/", // 「/」で終わる
  description: "多くの高校生(Teen世代)の「可能性」の幅を広げるため、全国の高校の生徒会長で運営するWeb記事媒体「TeenTiPs」"
} // TODO
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TeenTiPs',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pageInfo.description},
      {name: 'format-detection', content: 'telephone=no'},
      {hid: 'og:site_name', property: 'og:site_name', content: pageInfo.name},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: pageInfo.url},
      {hid: 'og:title', property: 'og:title', content: pageInfo.name},
      {hid: 'og:description', property: 'og:description', content: pageInfo.description},
      {hid: 'og:image', property: 'og:image', content: `${pageInfo.url}logo.png`},
      {name: 'twitter:card', content: 'summary'}
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/images/favicon.png'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: [
    '~/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-fontawesome'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  generate: {
    routes: require(__dirname + "/static/data/pages.json").map(name => `/articles/${name}`)
  },

  loading: {
    color: 'blue',
    height: '5px',
    continuous: true
  },

  fontawesome: {
    component: "fa",
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["faBars", "faXmark"]
      }
    ]
  }
}
