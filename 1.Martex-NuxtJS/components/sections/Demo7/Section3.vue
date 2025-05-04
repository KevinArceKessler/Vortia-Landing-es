<template>
  <section class="agents-section">
    <!-- Título de sección -->
    <h4 class="section-title">
      AI agents that respond like your best team members
    </h4>

    <!-- Grid 2x2 fijo -->
    <div class="agents-container">
      <!-- Card 1 -->
      <div class="agent-card card-inmobiliaria">
        <h5 class="card-title">REAL ESTATE</h5>
        <p class="card-desc">
          Engage with an assistant that feels like part of your team. Real inquiries, intelligent answers. Try it in action.
        </p>
        <div class="card-buttons">
          <span class="flaticon-whatsapp btn-whatsapp"></span>
          <button class="btn-trial">Try it for free now!</button>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="agent-card card-concesionaria">
        <h5 class="card-title">CAR DEALERSHIP</h5>
        <p class="card-desc">
          From models to financing plans. Experience an assistant that accelerates your sales.
        </p>
        <div class="card-buttons">
          <span class="flaticon-whatsapp btn-whatsapp"></span>
          <button class="btn-trial">Try it for free now!</button>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="agent-card card-viajes">
        <h5 class="card-title">TRAVEL AGENCY</h5>
        <p class="card-desc">
          Inquire about destinations, packages, and dates. An assistant that guides the experience like a travel expert.
        </p>
        <div class="card-buttons">
          <span class="flaticon-whatsapp btn-whatsapp"></span>
          <button class="btn-trial">Try it for free now!</button>
        </div>
      </div>

      <!-- Card 4 -->
      <div class="agent-card card-postventa">
        <h5 class="card-title">AFTER-SALES SERVICE</h5>
        <p class="card-desc">
          Claims, technical inquiries, user manuals. Discover how your customer receives immediate attention, effortlessly.
        </p>
        <div class="card-buttons">
          <span class="flaticon-whatsapp btn-whatsapp"></span>
          <button class="btn-trial">Try it for free now!</button>
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
  background-image: url('/assets/images/fondo_hero_solo.png');
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
  background-color: #B8B68F !important;
}

.card-concesionaria {
  background-color: #B8B68F !important;;
}

.card-viajes {
  background-color: #B8B68F !important;;
}

.card-postventa {
  background-color: #B8B68F !important;;
}

/* Título de card */
.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 15px;
  color:#000000;
}

/* Descripción */
.card-desc {
  display: flex;
  flex: 1;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 25px;
  color: #0f0f0f;
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
  background-color: #25D366;
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
  background-color: #3fa550; /* Verde más opaco */
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