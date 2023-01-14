export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'universal',
  loading: '~/components/Preloader.vue',
  head: {
    title: 'UAB Elistroy - statybų paslaugos už gerą kainą!',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'preload',
        href: '/fonts/BeVietnamPro.woff2',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous'
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/icofont.min.css',
    '@/assets/css/aos.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    { src: '~/plugins/vue-owl-carousel.js', mode: 'client' },
    '~plugins/vue-fragment',
    '~plugins/vue-side-menu',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/header'],
  },
  target: 'static',
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/style-resources',
    '@nuxt/image',
  ],

  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      'vue-sidebar-menu/src/scss/vue-sidebar-menu.scss',
      '~/assets/scss/style.scss',
    ],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // configuration for server to serve form subfolder
  router: {
    trailingSlash: true,
  },

  generate: {
    minify: {
      collapseWhitespace: false,
    },
  },
}
