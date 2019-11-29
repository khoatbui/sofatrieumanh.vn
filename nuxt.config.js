module.exports = {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    timing: false,
  },
  serverMiddleware: [
    {
      path: '/',
      handler: '~/api/index.js',
    },
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    __dangerouslyDisableSanitizers: ['script'],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/custom.css',
    '@/assets/scss/main.scss',
    { src: 'animate.css/animate.min.css', lang: 'css' },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: 'plugins/owl.js', ssr: false },
    { src: '~/plugins/zoomer.js', mode: 'client' },
    'plugins/vuesax.js',
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~plugins/tawl.js', mode: 'client' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/moment',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/sentry',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faCouch',
              'faMapMarkerAlt',
              'faPhoneAlt',
              'faShoppingBasket',
            ],
          },
        ],
      },
    ],
  ],
  sentry: {
    dsn: 'https://a6009493c5504aed8029e22c50339c9c@sentry.io/1838225', // Enter your project's DSN here
    config: {}, // Additional config
  },
  styleResources: {
    scss: ['./assets/scss/vars/*.scss', './assets/scss/abstracts/_mixins.scss'],
  },
  script: [
    { src: '/js/jquery.elevatezoom.js' },
    {
      src:
        'https://cdn.jsdelivr.net/gh/elPoeta/zoom-hover-image@v1.1/components/zoom-hover.js',
    },
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: ['vue-product-zoomer'],
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true,
        },
      });
    },
  },
};
