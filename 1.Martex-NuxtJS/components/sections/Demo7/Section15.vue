<template>
    <section id="ai-agent" class="ai-agent-section">
        <div class="hero-background"></div>
        <div class="content-wrapper">
            <h6 class="subtitle">Publicita. Respondemos. Vendes.</h6>
            <h2 class="main-title">
              TU PUBLICIDAD MERECE UNA RESPUESTA INTELIGENTE
            </h2>
        </div>
    </section>
</template>

<script>
export default {
    name: "AiAgentSection",
};
</script>

<style scoped>
.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('/public/assets/images/imagen-section2.png');
    background-size: cover;
    background-position: center;
    z-index: -1;
    opacity: 0.9;
}

/* Fondo de pantalla completa */
.ai-agent-section {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
    overflow: hidden;
}

/* Contenedor interno */
.content-wrapper {
    width: 90%;
    max-width: 1800px;
    display: flex;
    flex-direction: column;
    align-items: center;
}


/* Título principal */
.main-title {
    font-size: 110px;
    font-weight: 900;
    color: #0f0f0f;
    width: 100%;
    margin: 0;
}

.subtitle {
  color: #0f0f0f;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

@media (max-width: 1200px) {
  .content-wrapper {
    width: 85%;
  }
}

@media (max-width: 768px) {
  .subtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .main-title {
    font-size: clamp(2.5rem, 8vw, 5rem);
  }
}

@media (max-width: 480px) {
  .content-wrapper {
    width: 95%;
  }
  
  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  .main-title {
    font-size: clamp(2rem, 7vw, 4rem);
  }
}
</style>