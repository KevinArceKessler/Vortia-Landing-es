import { resolve } from "path";
export default defineNuxtConfig({
  alias: {
      "@": resolve(__dirname, "/")
  },

  app: {
      head: {
          meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
          title: "Vortia",
          script: []
      }
  },

  css: [
    "~/assets/css/vendors/bootstrap.min.css",
    "~/assets/css/vendors/flaticon.css",
    "~/assets/css/vendors/menu.css",
    "~/assets/css/vendors/fade-down.css",
    "~/assets/css/vendors/magnific-popup.css",
    "~/assets/css/vendors/animate.css",
    "~/assets/css/main.scss",
    "~/assets/css/responsive.scss",
  ],

  modules: [
      [
          "@nuxtjs/google-fonts",
          {
              families: {
                  Rubik: {
                      wght: [300, 400, 500, 600, 700]
                  },
                  "Plus+Jakarta+Sans": {
                      wght: [400, 500, 600, 700]
                  },
                  Inter: {
                      wght: [400, 500, 600, 700, 800]
                  },
                  download: true,
                  inject: true
              }
          }
      ],
      "nuxt-swiper"
  ],

  compatibilityDate: "2025-04-10",
});