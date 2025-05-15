<template>
  <section id="video-section" class="shape--bg shape--white-500 pt-100">
    <div class="hero-background"></div>
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <!-- VIDEO SECTION -->
        <div class="col-md-6">
          <div class="text-block">
            <!-- Title -->
            <h2 class="s-46 w-700 text-title">Conversaciones reales. Respuestas instantáneas. Resultados extraordinarios.</h2>
            
            <a 
              class="btn-demo" 
              :class="{ active: isActive }"
              @click="isActive = !isActive"
              href="https://wa.me/15557245821?text=Me%20gustar%C3%ADa%20agendar%20una%20reuni%C3%B3n%20para%20saber%20m%C3%A1s%20sobre%20Vortia" 
              target="_blank"
            >
            ¡Agendá tu demo gratis!
            </a>
          </div>
        </div>
  
        <!-- TEXT SECTION -->
        
        <div class="col-md-6 d-flex justify-content-center">
          <div class="video-wrapper" ref="videoWrapper">
            <div class="video-container position-relative">
              <!-- Video con miniatura -->
              <video
                ref="videoPlayer"
                class="video-element rounded"
                src="/public/assets/VIDEO_AVI.mp4"
                poster=""
                preload="metadata"
                muted
                @click="toggleVideo"
                @ended="resetVideo"
              ></video>
              
              <!-- Overlay con degradado mejorado -->
              <div class="gradient-overlay" :class="{ 'fade-out': isPlaying }"></div>
              
              <!-- Botón play personalizado visible solo cuando el video está pausado -->
              <div 
                v-show="!isPlaying" 
                class="play-btn-container position-absolute top-50 start-50 translate-middle"
                @click="playVideo"
              >
                <div class="play-btn-circle">
                  <div class="play-btn-icon">
                    <i class="fas fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      isPlaying: false,
      isActive: false,
      observer: null
    };
  },
  methods: {
    playVideo() {
      const video = this.$refs.videoPlayer;
      if (video) {
        video.muted = false; // Desactivar el mute cuando el usuario da clic explícitamente
        video.controls = true;
        video.play();
        this.isPlaying = true;
      }
    },
    resetVideo() {
      this.isPlaying = false;
      const video = this.$refs.videoPlayer;
      if (video) {
        video.controls = false;
        video.currentTime = 0;
      }
    },
    toggleVideo(event) {
      // Prevenir que el clic en el botón de play active este evento
      if (event.target.closest('.play-btn-container')) {
        return;
      }
      
      const video = this.$refs.videoPlayer;
      if (video) {
        if (video.paused) {
          this.playVideo();
        } else {
          video.pause();
          this.isPlaying = false;
        }
      }
    },
    handleIntersect(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // El video está visible en el viewport
          const video = this.$refs.videoPlayer;
          if (video && !this.isPlaying && video.paused) {
            // Autoplay muted para cumplir con políticas de navegadores
            video.muted = true;
            video.play();
            this.isPlaying = true;
          }
        } else {
          // El video ya no está visible
          const video = this.$refs.videoPlayer;
          if (video && !video.paused) {
            video.pause();
            this.isPlaying = false;
          }
        }
      });
    }
  },
  mounted() {
    // Asegurarse de que los controles estén desactivados al inicio
    const video = this.$refs.videoPlayer;
    if (video) {
      video.controls = false;
    }
    
    // Configurar Intersection Observer para la reproducción automática
    this.observer = new IntersectionObserver(this.handleIntersect, {
      root: null,
      threshold: 0.5, // Cuando al menos 50% del video esté visible
    });
    
    if (this.$refs.videoWrapper) {
      this.observer.observe(this.$refs.videoWrapper);
    }
  },
  beforeDestroy() {
    // Limpiar el observer al desmontar el componente
    if (this.observer) {
      this.observer.disconnect();
    }
  }
};
</script>
  
<style scoped>
/* Estilos para el fondo */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/public/assets/images/imagen-section2.png');
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0.9;
}

/* Estilos mejorados para el video */
.video-wrapper {
  position: relative;
  margin: 2rem 0;
  width: 60%; 
  border-radius: 15px;
  overflow: hidden;
}


.video-container {
  position: relative;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
}

.video-element {
  display: block;
  width: 100%;
  border-radius: 15px;
  cursor: pointer;
}

/* Overlay mejorado con degradado */
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.4) 100%);
  z-index: 2;
  transition: opacity 0.3s ease;
}

.gradient-overlay.fade-out {
  opacity: 0;
}

/* Estilo mejorado para botón de play */
.play-btn-container {
  z-index: 3;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.play-btn-container:hover {
  transform: translate(-50%, -50%) scale(1.1);
}

.play-btn-circle {
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.play-btn-icon {
  width: 50px;
  height: 50px;
  background: #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.play-btn-icon i {
  color: white;
  font-size: 20px;
  margin-left: 4px; /* Para centrar visualmente el ícono de play */
}

.play-btn-container:hover .play-btn-icon {
  background: #2563eb;
}

/* Estilos para el texto */
.text-block {
  padding: 20px;
}

.text-title {
  line-height: 1.3;
  font-size: 3.3rem;
  margin-bottom: 1.5rem;
  background: #000000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Estilos para el botón de demo */
.btn-demo {
  display: inline-block;
  padding: 12px 28px;
  background: #B7F38A;
  color: #000000;
  font-weight: 300 !important;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 30px;
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
  background: #94E05A;
  transition: all 0.3s ease;
  z-index: -1;
}


.btn-demo:hover:before {
  width: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .video-wrapper {
    width: 100%;
    margin: 1rem 0;
  }
  
  .text-title {
    font-size: 1.8rem;
    margin-top: 1.5rem;
  }
  
  .play-btn-circle {
    width: 50px;
    height: 50px;
  }
  
  .play-btn-icon {
    width: 40px;
    height: 40px;
  }
  
  .play-btn-icon i {
    font-size: 18px;
  }
  
  .btn-demo {
    padding: 10px 24px;
    font-size: 0.9rem;
  }
}
</style>