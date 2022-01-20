const webpack = require("webpack");


export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

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
        src: '/vendor/jquery/jquery.min.js',
        async: true,
        mode: 'client'
      },
      // {
      //   src: '/vendor/sidebar/hc-offcanvas-nav.js',
      //   defer: ""
      // },
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
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/static/vendor/bootstrap/js/bootstrap.bundle.min.js',
      mode: 'client',
      async: true
    },
    {
      src: '~/static/js/rocket-loader.min.js',
      mode: 'client',
      defer: "",
      'data-cf-settings': "81ad158f85df8c34c29ba781-|49"
    },
    // {
    //   src: '~/static/vendor/sidebar/hc-offcanvas-nav.js',
    //   mode: 'client',
    //   type: "81ad158f85df8c34c29ba781-text/javascript"
    // },
    {
      src: '~/static/js/beacon.min.js',
      mode: 'client'
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // vendor: ['hc-offcanvas-nav'],
  },
  target: 'static',

  router: {
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  }
}
