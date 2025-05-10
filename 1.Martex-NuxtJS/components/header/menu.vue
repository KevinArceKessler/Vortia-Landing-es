<template>
  <header :class="['custom-navbar', { 'hidden': isHidden }]">
    <div class="container">
      <!-- LOGO -->
      <NuxtLink to="/" class="logo">
        <img src="/assets/images/logo-nav.png" alt="Vortia" />
      </NuxtLink>
      
      <!-- HAMBURGER MENU (visible solo en móvil) -->
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <!-- NAVIGATION -->
      <nav :class="['nav-menu', { 'active': menuActive }]">
        <div class="close-menu" @click="toggleMenu">×</div>
        
        <!-- Sección Soluciones (redirecciona a section5) -->
        <a href="#" @click.prevent="scrollToSection('section5'); closeMenu()">Solutions</a>
        
        <!-- Sección Sobre nosotros (redirecciona a página) -->
        <NuxtLink to="/sobrenosotros" @click="closeMenu()">About Us</NuxtLink>
        
        <!-- Sección Blog (redirecciona a página) -->
        <NuxtLink to="/blog" @click="closeMenu()">Blog</NuxtLink>
        
        <!-- Sección Contacto (redirecciona a section16) -->
        <a href="#" @click.prevent="scrollToSection('section18'); closeMenu()">Contact</a>
        
        <!-- Iniciar sesión (redirecciona a página externa) -->
        <a href="https://vortia-admin.com/home" target="_blank" @click="closeMenu()">Login</a>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isHidden: false,
      lastScrollPosition: 0,
      menuActive: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleScroll() {
      // No ocultar el navbar cuando el menú móvil está activo
      if (this.menuActive) return;
      
      const currentScrollPosition = window.pageYOffset;
      
      // Ocultar el navbar si el usuario scrollea hacia abajo
      if (currentScrollPosition > this.lastScrollPosition && currentScrollPosition > 100) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
      
      // Actualizar la posición del scroll
      this.lastScrollPosition = currentScrollPosition;
    },
    
    // Alternar el menú móvil
    toggleMenu() {
      this.menuActive = !this.menuActive;
      
      // Bloquear el scroll del body cuando el menú está activo
      if (this.menuActive) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    
    // Cerrar el menú
    closeMenu() {
      this.menuActive = false;
      document.body.style.overflow = '';
    },
    
    // Manejar cambios de tamaño de ventana
    handleResize() {
      // Cerrar el menú móvil si la pantalla se hace más grande
      if (window.innerWidth > 768 && this.menuActive) {
        this.closeMenu();
      }
    },
    
    // Método para desplazarse a una sección específica
    scrollToSection(sectionId) {
      // Verifica si estamos en la página principal
      if (this.$route.path !== '/') {
        // Si no estamos en la página principal, redirigir a la página principal y luego a la sección
        this.$router.push('/').then(() => {
          // Esperar a que se complete la navegación
          this.$nextTick(() => {
            setTimeout(() => {
              const element = document.getElementById(sectionId);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }, 300); // Pequeño retraso para asegurar que la página se ha cargado
          });
        });
      } else {
        // Si ya estamos en la página principal, desplazarse a la sección
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }
};
</script>

<style scoped>
/* Navbar base */
.custom-navbar {
  background-color: #CECECE;
  padding: 18px 25px;
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
  position: relative;
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

/* Asegurar que todos los links se vean consistentes */
.nav-menu a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

a:hover{
  text-decoration: underline;
}

/* Botón de cerrar en el menú móvil */
.close-menu {
  display: none;
  font-size: 32px;
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
}

/* Hamburger menu (inicialmente oculto) */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  z-index: 10;
}

.hamburger span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: #333;
  transition: all 0.3s ease;
}

/* Media queries para diseño responsive */
@media (max-width: 768px) {
  /* Mostrar hamburger menu */
  .hamburger {
    display: flex;
  }
  
  /* Estilo para el menú móvil */
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: rgba(179, 184, 184, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    transition: right 0.3s ease;
    padding: 50px 20px;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
  
  /* Mostrar menú cuando está activo */
  .nav-menu.active {
    right: 0;
  }
  
  /* Mostrar botón de cerrar en móvil */
  .close-menu {
    display: block;
  }
  
  /* Hacer los elementos de menú más grandes en móvil */
  .nav-menu a {
    font-size: 18px;
  }
  
  /* Ajustar padding del navbar para diseño móvil */
  .custom-navbar {
    padding: 15px 20px;
  }
  
  /* Hacer logo más pequeño en móvil */
  .logo img {
    height: 50px;
  }
}

/* Para pantallas muy pequeñas */
@media (max-width: 480px) {
  .nav-menu {
    width: 85%;  /* Menú más ancho */
  }
  
  .logo img {
    height: 40px;  /* Logo aún más pequeño */
  }
}
</style>