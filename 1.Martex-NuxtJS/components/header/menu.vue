<template>
    <header :class="['custom-navbar', { 'hidden': isHidden }]">
      <div class="container">
        <!-- LOGO -->
        <NuxtLink to="/" class="logo">
          <img src="/assets/images/logo-nav.png" alt="Vortia" />
        </NuxtLink>
  
        <!-- NAVIGATION -->
        <nav class="nav-menu">
          <NuxtLink to="/">Inicio</NuxtLink>
          <NuxtLink to="/servicios">Soluciones</NuxtLink>
          <NuxtLink to="/nosotros">Sobre nosotros</NuxtLink>
          <NuxtLink to="/nosotros">Blog</NuxtLink>
          <NuxtLink to="/contacto">Contacto</NuxtLink>
          <NuxtLink to="/contacto">Iniciar sesión</NuxtLink>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isHidden: false,
        lastScrollPosition: 0
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        const currentScrollPosition = window.pageYOffset;
        
        // Ocultar el navbar si el usuario scrollea hacia abajo
        if (currentScrollPosition > this.lastScrollPosition) {
          this.isHidden = true;
        }
        
        // Mostrar el navbar solo si el usuario está en la parte superior
        if (currentScrollPosition === 0) {
          this.isHidden = false;
        }
        
        // Actualizar la posición del scroll
        this.lastScrollPosition = currentScrollPosition;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Navbar base */
  .custom-navbar {
    background-color: rgba(179, 184, 184);
    padding: 25px 30px;
    position: sticky;
    top: 0;
    z-index: 100;
    transition: all 0.3s ease;
  }
  
  /* Efecto de desvanecimiento al scrollear */
  .custom-navbar.hidden {
    transform: translateY(-100%);
  }
  
  /* Contenedor principal */
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
  }
  
  /* Logo */
  .logo img {
    height: 65px;
    transition: transform 0.3s;
  }
  
  
  /* Menú de navegación */
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 25px; /* Espacio reducido entre botones */
    font-weight: 500;  /* Mayor grosor en la tipografía */
  }

  a:hover{
    text-decoration: underline;
  }
  


  </style>
  