const colors = require("tailwindcss/colors");

const appEnv = process.env.NODE_ENV || 'development';


export default {
  publicRuntimeConfig: {
    apiUrl:
      appEnv === "development"
        ? "http://localhost:1337"
        : "https://core.lanamagallanica.cl",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Lana Magallánica",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/lana-favicon.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/youtube.js', ssr: false },
    { src: '@/plugins/fontawesome.js', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, ctx) {
      config.resolve.symlinks = false
    }
  },

  vuetify: {
    customVariables: ["~/assets/variables.scss", "~/assets/theme_fonts.scss"],
  },

  tailwindcss: {
    config: {
      theme: {
        colors: {
          cafe: "#937651",
          black: colors.black,
          slate: colors.slate,
          zinc: colors.zinc,
          green: colors.green,
          neutral: colors.neutral,
          white: colors.white,
          amber: colors.amber,
          gray: colors.gray,
          emerald: colors.emerald,
          indigo: colors.indigo,
          yellow: colors.yellow,
          orange: colors.orange,
          red: colors.red,
        },
      },
      variants: {
        padding: ["responsive"],
      },
    },
  },

  devServerHandlers: [],
};
