// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@prisma/nuxt", "@sentry/nuxt/module", "@pinia/nuxt"],

  sentry: {
    sourceMapsUploadOptions: {
      org: "lightwave-labs",
      project: "javascript-nuxt"
    },

    autoInjectServerSentry: "top-level-import"
  },

  sourcemap: {
    client: "hidden"
  }
})