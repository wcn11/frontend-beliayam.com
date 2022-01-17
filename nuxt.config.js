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
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/static/vendor/slick/slick.min.css',
    // '@/static/vendor/slick/slick-theme.min.css',
    // '@/static/icons/css/all.min.css',
    // '@/static/vendor/icons/icofont.min.css',
    // '@/static/vendor/bootstrap/css/bootstrap.min.css',
    // '@/static/css/style.css',
    // '@/static/vendor/sidebar/demo.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
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
  },
  target: 'static',

  router: {
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  }
}
