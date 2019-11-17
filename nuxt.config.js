module.exports = {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost,
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
    script: [
      {
        innerHTML: `<!--Start of Tawk.to Script-->
      <script type="text/javascript">
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/5dc77a8d43be710e1d1c9020/default';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
      })();
      </script>
      <!--End of Tawk.to Script-->`,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
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
    { src: '~/plugins/vue-product-zoomer.js', mode: 'client' },
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
  devModules: ['@nuxtjs/eslint-module'],
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
