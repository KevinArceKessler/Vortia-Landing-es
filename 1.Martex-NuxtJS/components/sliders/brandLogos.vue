<template>
  <section class="slider-section">
    <div class="background-image"></div>
    <div class="brands-carousel-container">
      <h3 class="section-title">Tecnologías que usamos</h3>
      <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="5"
        :space-between="30"
        :loop="true"
        :speed="3000"
        :autoplay="{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false
        }"
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 30 }
        }"
        class="brand-swiper"
      >
        <!-- Primera imagen -->
        <SwiperSlide>
          <div class="brand-logo">
            <img 
              src="/public/assets/images/Logos/google.png" 
              alt="Logo marca 1" 
              class="img-fluid brand-image"
            />
          </div>
        </SwiperSlide>

        <!-- Segunda imagen -->
        <SwiperSlide>
          <div class="brand-logo">
            <img 
              src="/public/assets/images/Logos/meta.png" 
              alt="Logo marca 2" 
              class="img-fluid brand-image"
            />
          </div>
        </SwiperSlide>

        <!-- Tercera imagen -->
        <SwiperSlide>
          <div class="brand-logo">
            <img 
              src="/public/assets/images/Logos/mongodb.png" 
              alt="Logo marca 3" 
              class="img-fluid brand-image"
            />
          </div>
        </SwiperSlide>

        <!-- Cuarta imagen -->
        <SwiperSlide>
          <div class="brand-logo">
            <img 
              src="/public/assets/images/Logos/nextjs.png" 
              alt="Logo marca 4" 
              class="img-fluid brand-image"
            />
          </div>
        </SwiperSlide>

        <!-- Quinta imagen -->
        <SwiperSlide>
          <div class="brand-logo">
            <img 
              src="/public/assets/images/Logos/pinecone.png" 
              alt="Logo marca 5" 
              class="img-fluid brand-image"
            />
          </div>
        </SwiperSlide>

        <!-- Sexta imagen -->
        <SwiperSlide>
          <div class="brand-logo">
            <img 
              src="/public/assets/images/Logos/python.png" 
              alt="Logo marca 6" 
              class="img-fluid brand-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const SwiperAutoplay = Autoplay;
</script>

<style scoped>
.slider-section {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 3rem 0;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/public/assets/images/fondo_hero_solo.png');
  background-size: cover;
  background-position: center;
  opacity: 0.9;
  z-index: -1;
}

.section-title {
  text-align: center;
  color: #fff;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.brands-carousel-container {
  position: relative;
  overflow: hidden;
  padding: 1rem 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.brand-swiper {
  width: 100%;
}

.brand-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.brand-image {
  max-width: 100%;
  max-height: 60px;
  filter: brightness(0) invert(1);
  opacity: 0.9;
  transition: all 0.3s ease;
}

@media (max-width: 767px) {
  .slider-section {
    padding: 2rem 0;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .brand-logo {
    height: 70px;
  }
  
  .brand-image {
    max-height: 50px;
  }
}
</style>