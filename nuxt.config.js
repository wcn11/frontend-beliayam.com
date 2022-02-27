
import { resolve } from 'path'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  env: {
  },
  server: {
    port: 3000,
  },
  loading: {
    color: '#ce0000',
    height: '5px',
    continuous: true
  },

  loadingIndicator: {
    name: 'chasing-dots',
    color: '#3B8070',
    background: 'white'
  },

  router: {
    prefetchLinks: false
  },

  pageTransition: "fade",

  scrollToTop: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Situs Beli Ayam Pedaging Murah Beliayam.com | Ayam Murah Semakin Mudah | Gratis Ongkir',
    htmlAttrs: {
      lang: 'id'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Situs Beli Ayam Pedaging Murah Beliayam.com' },
      { hid: 'keywords', name: 'description', content: 'ayampotong,ayamkampung,ayambroiler,ayam,pahafillet,paha,dadaayam,cekerayam,toko,daging,unggas' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCJQqL0o0LF8YYdQTXvtrou_KHmrRDMQaM&libraries=places',
        async: "",
        defer: ""
      },
    ]
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/vendor/slick/slick.min.css',
    '@/static/vendor/slick/slick-theme.min.css',
    '@/static/icons/css/all.min.css',
    '@/static/vendor/bootstrap/css/bootstrap.min.css',
    '@/static/vendor/sidebar/demo.css',
    '@/static/fonts/css/all.min.css',
    '@/static/css/style.css',
    'animate.css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/static/js/rocket-loader.min.js',
      mode: 'client',
      defer: "",
      'data-cf-settings': "81ad158f85df8c34c29ba781-|49"
    },
    {
      src: '~/static/js/beacon.min.js',
      mode: 'client'
    },
    { src: '~plugins/vue-final-modal.js' },
    { src: '~/plugins/underscore', ssr: false },
    {
      src: './plugins/vuex-persistedstate',
      mode: 'client'
    },
    './plugins/vuex-persistedstate',
    './plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    ['@nuxtjs/dotenv', { filename: `.env.${process.env.NODE_ENV}` }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // With default plugin options
    "vue-toastification/nuxt",
    '@nuxtjs/axios',

    // You can also pass plugin options
    ["vue-toastification/nuxt", {
      timeout: 1000,
      draggable: false
    }],
    ['cookie-universal-nuxt', { parseJSON: false }],
  ],

  axios: {
    // proxy: true
    // proxyHeaders: false
  },
  router: {
    middleware: ['authenticated', 'alreadyAuthenticated', 'getUser']
  },

  toast: {
    position: "top-center",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: false,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    rtl: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: ['hc-offcanvas-nav'],
    transpile: ['vue-final-modal']
  },
  target: 'static',

  router: {
  },

  alias: {
    'Modal': resolve(__dirname, './components/_partials/Modal.vue')
  },

  publicRuntimeConfig: {
    baseURL: process.env.NUXT_ENV_BASE_URL,
    baseApi: process.env.NUXT_ENV_BASE_URL_API,
    baseApiVersion: process.env.NUXT_ENV_BASE_URL_API_VERSION
  }
}
