<template>
  <section id="hero-7" class="hero-section">
    <div class="hero-background"></div>
    <div class="hero-overlay">
      <div class="container">
        <div class="row d-flex align-items-center">
          <!-- HERO TEXT -->
          <div class="col-md-6">
            <div class="hero-content">
              <!-- Title -->
              <h1 class="s-50 w-700 title-animated" style="margin-bottom: 13px; color: #2D4F2B;">
                Your customers don't wait. Vortia always responds
              </h1>
              <!-- Text --> 
              <h6 class="p-lg subtitle-animated" style="color: #0f0f0f">Natural language. Accurate Answers. Sales That Scale.n</h6>
              <!-- Botón Agenda Tu Demo -->
              <a 
                class="btn-demo button-animated" 
                :class="{ active: isActive }"
                @click="isActive = !isActive"
                href="https://wa.me/15557245821?text=Me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20para%20saber%20m%C3%A1s%20sobre%20Vortia" 
                target="_blank"
              >
              SCHEDULE YOUR DEMO
              </a>
            </div>
          </div>
          <!-- END HERO TEXT -->
          
          <!-- HERO IMAGE -->
          <div class="col-md-6">
            <div class="hero-7-img text-center">
              <img class="img-fluid robot-animated" src="/public/assets/images/robot_graficos.png" alt="hero-image" />
            </div>
          </div>
        </div>
        <!-- End row -->
        
        <!-- BRANDS CAROUSEL -->
        <div class="row mt-5">
          <div class="col-12">
            <div class="brands-carousel-container fade-in-up">
              <ClientOnly>
                <swiper-container ref="containerRef" :init="false" class="brand-swiper">
                  <!-- Primera imagen -->
                  <swiper-slide>
                    <div class="brand-logo">
                      <img 
                        src="/public/assets/images/Logos/google.png" 
                        alt="Logo marca 1" 
                        class="img-fluid brand-image"
                      />
                    </div>
                  </swiper-slide>
                  
                  <!-- Segunda imagen -->
                  <swiper-slide>
                    <div class="brand-logo">
                      <img 
                        src="/public/assets/images/Logos/meta.png" 
                        alt="Logo marca 2" 
                        class="img-fluid brand-image"
                      />
                    </div>
                  </swiper-slide>
                  
                  <!-- Tercera imagen -->
                  <swiper-slide>
                    <div class="brand-logo">
                      <img 
                        src="/public/assets/images/Logos/mongodb.png" 
                        alt="Logo marca 3" 
                        class="img-fluid brand-image"
                      />
                    </div>
                  </swiper-slide>
                  
                  <!-- Cuarta imagen -->
                  <swiper-slide>
                    <div class="brand-logo">
                      <img 
                        src="/public/assets/images/Logos/nextjs.png" 
                        alt="Logo marca 4" 
                        class="img-fluid brand-image"
                      />
                    </div>
                  </swiper-slide>
                  
                  <!-- Quinta imagen -->
                  <swiper-slide>
                    <div class="brand-logo">
                      <img 
                        src="/public/assets/images/Logos/pinecone.png" 
                        alt="Logo marca 5" 
                        class="img-fluid brand-image"
                      />
                    </div>
                  </swiper-slide>
                  
                  <!-- Sexta imagen -->
                  <swiper-slide>
                    <div class="brand-logo">
                      <img 
                        src="/public/assets/images/Logos/python.png" 
                        alt="Logo marca 6" 
                        class="img-fluid brand-image"
                      />
                    </div>
                  </swiper-slide>
                </swiper-container>
              </ClientOnly>
            </div>
          </div>
        </div>
        <!-- END BRANDS CAROUSEL -->
      </div>
      <!-- End container -->
    </div>
    <!-- End hero-overlay -->
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isActive = ref(false)
const containerRef = ref(null)

// Usar el composable de Nuxt para Swiper
const swiper = useSwiper(containerRef, {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 20 },
    640: { slidesPerView: 3, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 30 },
    1024: { slidesPerView: 5, spaceBetween: 30 }
  }
})

onMounted(() => {
  if (swiper.instance) {
    console.log('Swiper instance initialized:', swiper.instance)
  }
  
  // Asegurarse de que las animaciones se ejecuten después de que la página se cargue
  setTimeout(() => {
    document.querySelector('.robot-animated').classList.add('active')
    document.querySelector('.title-animated').classList.add('active')
    
    // Agregar delay para el subtítulo y botón
    setTimeout(() => {
      document.querySelector('.subtitle-animated').classList.add('active')
      
      // Agregar delay para el botón
      setTimeout(() => {
        document.querySelector('.button-animated').classList.add('active')
        
        // Finalmente animar el carrusel de marcas
        setTimeout(() => {
          document.querySelector('.fade-in-up').classList.add('active')
        }, 300)
      }, 200)
    }, 200)
  }, 300)
})
</script>

<style>
/* Hero Section */
.hero-section {
  position: relative;
  overflow: hidden;
  min-height: 700px; /* Incrementado para dar espacio al carrusel */
  display: flex;
  align-items: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/public/assets/images/fondo_hero_solo.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.hero-overlay {
  width: 100%;
  padding: 60px 0;
  position: relative;
  z-index: 1;
}

/* Robot Animation */
.robot-animated {
  width: 100%;
  max-width: 500px;
  filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15));
  opacity: 0;
  transform: translateX(50px);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.robot-animated.active {
  opacity: 1;
  transform: translateX(0);
  animation: float 3s ease-in-out infinite;
  animation-delay: 0.5s;
}

/* Floating effect */
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

/* Title Animation */
.title-animated {
  opacity: 0;
  transform: translateY(-20px);
  transition: all 0.8s ease-out;
}

.title-animated.active {
  opacity: 1;
  transform: translateY(0);
}

/* Subtitle Animation */
.subtitle-animated {
  opacity: 0;
  transform: translateY(-15px);
  transition: all 0.7s ease-out;
  transition-delay: 0.2s;
}

.subtitle-animated.active {
  opacity: 1;
  transform: translateY(0);
}

/* Button Animation */
.button-animated {
  opacity: 0;
  transform: translateY(15px);
  transition: all 0.6s ease-out;
  transition-delay: 0.4s;
}

.button-animated.active {
  opacity: 1;
  transform: translateY(0);
}

/* Brands Carousel Animation */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
  transition-delay: 0.6s;
}

.fade-in-up.active {
  opacity: 1;
  transform: translateY(0);
}

/* Botón estilo robot */
.btn-demo {
  display: inline-block;
  padding: 12px 28px;
  background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 30px;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.35);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-top: 1.5rem;
}

.btn-demo:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
  transition: all 0.3s ease;
  z-index: -1;
}

.btn-demo:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
}

.btn-demo:hover:before {
  width: 100%;
}

.btn-demo.active {
  transform: scale(0.98);
  box-shadow: 0 2px 10px rgba(59, 130, 246, 0.3);
}

/* Hero content wrapper para las animaciones */
.hero-content {
  max-width: 600px;
}

/* Brands Carousel */
.brands-carousel-container {
  overflow: hidden;
  width: 100%;
  position: relative;
  margin-top: 20px;
}

.brand-swiper {
  width: 100%;
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
}

.brand-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0.5rem;
  border-radius: 8px;
  backdrop-filter: blur(3px);
}

.brand-image {
  max-width: 100%;
  max-height: 60px;
}

/* Responsive */
@media (max-width: 991px) {
  .hero-section {
    min-height: auto;
    padding-bottom: 40px;
  }
  
  .robot-animated {
    max-width: 80%;
    margin: 30px auto 0;
  }
  
  .brands-carousel-container {
    margin-top: 40px;
  }
}

@media (max-width: 767px) {
  .brand-logo {
    height: 70px;
  }
  
  .brand-image {
    max-height: 50px;
  }
  
  /* Ajustes para las animaciones en móvil */
  .robot-animated {
    transform: translateY(50px);
  }
  
  .robot-animated.active {
    transform: translateY(0);
  }
}
</style>