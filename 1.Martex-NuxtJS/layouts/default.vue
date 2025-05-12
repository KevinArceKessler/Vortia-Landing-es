<template>
  <div>
    <HeaderVue />

    <!-- aquí inyecta la página -->
    <NuxtPage />
    <BackToTop />
    <FooterVue />
  </div>
</template>
  
  <script>
  import HeaderVue from '~/components/header/menu.vue'
  import FooterVue from '~/layouts/footer-2.vue'
  import BackToTop from '~/components/elements/BackToTop.vue';
  
  export default {
    components: {
      HeaderVue,
      FooterVue,
      BackToTop
    }
  }
  </script>