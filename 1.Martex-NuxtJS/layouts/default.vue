<template>
  <div>
    <HeaderVue />

    <!-- aquí inyecta la página -->
    <NuxtPage />

    <FooterVue />
  </div>
</template>
  
  <script>
  import HeaderVue from '~/components/header/menu.vue'
  import FooterVue from '~/layouts/footer-2.vue'
  
  export default {
    components: {
      HeaderVue,
      FooterVue
    }
  }
  </script>