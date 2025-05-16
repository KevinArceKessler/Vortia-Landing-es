<template>
  <section class="agents-section">
    <!-- Título de sección -->
    <h4 class="section-title">
      Agentes de IA que responden como tus mejores colaboradores
    </h4>

    <!-- Grid 2x2 fijo -->
    <div class="agents-container">
      <!-- Card 1 -->
      <div class="agent-card card-inmobiliaria">
        <h5 class="card-title">INMOBILIARIAS</h5>
        <p class="card-desc">
          Interactúa con un asistente que responde como si fuera parte de tu equipo. Consultas reales, respuestas inteligentes. Pruébalo en acción.
        </p>
        <div class="card-buttons">
          <span class="flaticon-whatsapp btn-whatsapp"></span>
          <button class="btn-trial">Probalo gratis ahora!</button>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="agent-card card-concesionaria">
        <h5 class="card-title">CONSECIONARIAS</h5>
        <p class="card-desc">
          Desde modelos hasta planes de financiación. Experimenta un asistente que acelera tus ventas.
        </p>
        <div class="card-buttons">
          <span class="flaticon-whatsapp btn-whatsapp"></span>
          <button class="btn-trial">Probalo gratis ahora!</button>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="agent-card card-viajes">
        <h5 class="card-title">AGENCIAS DE TURISMO</h5>
        <p class="card-desc">
          Consulta destinos, paquetes y fechas.  Un asistente que guía la experiencia como un experto en viajes.
        </p>
        <div class="card-buttons">
          <span class="flaticon-whatsapp btn-whatsapp"></span>
          <button class="btn-trial">Probalo gratis ahora!</button>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="agent-card card-postventa">
        <h5 class="card-title">SERVICIOS POST VENTA</h5>
        <p class="card-desc">
          Reclamos, consultas técnicas, manuales de usuario. Descubre cómo tu cliente recibe atención inmediata, sin esfuerzo.
        </p>
        <div class="card-buttons">
          <span class="flaticon-whatsapp btn-whatsapp"></span>
          <button class="btn-trial">Probalo gratis ahora!</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AiAgentsSection",
};
</script>

<style scoped>
/* Sección general con fondo */
.agents-section {
  width: 100%;
  padding: 80px 20px;
  box-sizing: border-box;
  background-image: url('/public/assets/images/imagen-section3.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Título */
.section-title {
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #0f0f0f;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

/* Grid fijo 2x2 */
.agents-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Cada card con recuadro y fondo semi-transparente */
.agent-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 25px;
  min-height: 280px;
  box-sizing: border-box;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Hover effect para las cards */
.agent-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.12);
}

/* Fondos específicos para cada card */
.card-inmobiliaria {
  background-color: #727376 !important;
}

.card-concesionaria {
  background-color: #727376 !important;;
}

.card-viajes {
  background-color: #727376 !important;;
}

.card-postventa {
  background-color: #727376 !important;;
}

/* Título de card */
.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 15px;
  color:#f0f0f0;
}

/* Descripción */
.card-desc {
  display: flex;
  flex: 1;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 25px;
  color: #f0f0f0;
}

/* Botones */
.card-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
}

/* WhatsApp redondo */
.btn-whatsapp {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: #B7F38A;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}

/* Icono de WhatsApp */
.whatsapp-icon {
  width: 26px;
  height: 26px;
}

/* Probar gratis con bordes más redondeados */
.btn-trial {
  padding: 10px 20px;
  background-color: #B7F38A; /* Verde más opaco */
  border: none;
  border-radius: 30px; /* Más redondeado */
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
}



.btn-trial:hover {
  background-color: #348d44; /* Ligeramente más oscuro al hover */
  transform: translateY(-2px);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
}


/* Ajustes responsivos */
@media (max-width: 992px) {
  .section-title {
    font-size: 48px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 36px;
  }
  
  .agents-container {
    grid-template-columns: 1fr;
  }
  
  .card-title {
    font-size: 1.3rem;
  }
}
</style>