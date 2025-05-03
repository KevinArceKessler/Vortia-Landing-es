<template>
  <section id="section5" class="features-section">
    <!-- Título de la sección -->
    <div class="section-header">
      <h2 class="section-title">Características que transforman ventas</h2>
      <p class="section-subtitle">Descubre cómo Vortia revoluciona la atención al cliente con inteligencia artificial</p>
    </div>
    
    <div class="features-container">
      <!-- Card 1 -->
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>Atención 24/7 en todos tus canales</h3>
          </div>
          <div class="flip-card-back">
            <p>Nunca más una consulta sin respuesta.</p>
            <p>Tu asistente responde al instante, todos los días, a toda hora. En WhatsApp, web o redes... donde esté tu cliente, ahí está Vortia.</p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>Inteligencia conversacional avanzada</h3>
          </div>
          <div class="flip-card-back">
            <p>Habla como una persona. Vende como un experto.</p>
            <p>Comprende intenciones y responde con naturalidad. Guía al cliente con precisión hacia el cierre. Siempre claro, siempre orientado a vender.</p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>Monitoreo en tiempo real</h3>
          </div>
          <div class="flip-card-back">
            <p>Supervisa cada conversación al instante.</p>
            <p>Accede en vivo a lo que ocurre con tu asistente. Detecta oportunidades, ajusta mensajes, toma el control. Mejora tu estrategia con datos accionables al momento.</p>
          </div>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h3>Aumenta la tasa de conversión</h3>
          </div>
          <div class="flip-card-back">
            <p>Diseñado para vender en cada interacción.</p>
            <p>Hasta un 30% más de cierres, sin intervención humana. Resultados medibles. Crecimiento real.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AiFeaturesSection",
};
</script>

<style scoped>
/* Contenedor general */
.features-section {
  width: 100%;
  padding: 100px 20px; /* Mayor padding vertical para aumentar la altura */
  display: flex;
  flex-direction: column;
  background-image: url('/assets/images/fondo_hero_solo.png');
  align-items: center;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

/* Título de la sección */
.section-header {
  text-align: center;
  margin-bottom: 50px;
  max-width: 900px; /* Aumentado el ancho máximo */
}

.section-title {
  font-size: 47px; /* Tamaño aumentado desde 40px */
  font-weight: 900;
  color: #a9bd4f; /* Cambiado de #0f0f0f a un verde que combina con los cards */
  margin-bottom: 15px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* Sombra sutil para mejorar legibilidad */
}

.section-subtitle {
  font-size: 23px;
  color: #333;
  max-width: 900px; /* Aumentado para que quepa en una línea */
  margin: 0 auto;
  white-space: nowrap; /* Fuerza a que esté en una sola línea */
  overflow: hidden;
  text-overflow: ellipsis; /* Por si el texto es muy largo en móviles */
}

/* Grid responsivo */
.features-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columnas fijas en desktop */
  gap: 25px;
  max-width: 1300px;
  width: 100%;
}

/* Estructura flip-card */
.flip-card {
  perspective: 1000px;
  height: 340px; /* Altura fija para todas las tarjetas */
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%; /* Usa la altura completa del contenedor */
  transition: transform 0.8s ease-in-out;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Caras del card */
.flip-card-front,
.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px; /* Padding aumentado */
  box-sizing: border-box;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Frente */
.flip-card-front {
  background-color: #B8B68F; /* Verde medio */
  color: #fff;
}

.flip-card-front h3 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.3;
}

/* Reverso */
.flip-card-back {
  background-color: #222605; /* Verde oscuro más profundo */
  color: #e0e0e0;
  transform: rotateY(180deg);
  flex-direction: column;
  font-size: 0.95rem; /* Reducimos un poco */
  line-height: 1.4;   /* Más compacto */
  overflow-y: hidden; /* Oculta el scroll */
}

.flip-card-back p {
  font-size: 0.95rem; /* Menor tamaño general */
  margin-bottom: 0.8rem;
}

.flip-card-back p:first-child {
  font-weight: 600;
  font-size: 1.05rem; /* Reducido desde 1.2rem */
  color: #a9bd4f;
}

.flip-card-back p:last-child {
  margin-bottom: 0;
}

/* Responsivo */
@media (max-width: 1200px) {
  .features-container {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tablets */
  }
  
  .section-subtitle {
    white-space: normal; /* Permitir que el subtítulo se ajuste en tablets */
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem; /* Aumentado desde 2rem para mantener la proporción */
  }
  
  .section-subtitle {
    font-size: 1.1rem;
    white-space: normal; /* Permitir wrap en móviles */
  }

  .features-container {
    grid-template-columns: 1fr; /* 1 columna en móviles */
  }
  
  .flip-card {
    height: 300px; /* Altura reducida en móviles */
  }
  
  .flip-card-front h3 {
    font-size: 1.4rem;
  }
  
  .flip-card-back p {
    font-size: 1rem;
  }
}
</style>