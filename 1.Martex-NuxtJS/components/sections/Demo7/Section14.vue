<template>
    <section class="pt-100 ct-08 content-section division onboarding-section">
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-9">
            <div class="section-title mb-70">
              <!-- Title -->
              <h2 class="s-50 w-700 titulo-principal">TODO LISTO EN SOLO 4 SEMANAS</h2>
              <!-- Text -->
              <h6 class="s-21 subtitulo-principal">Proceso de implementación</h6>
            </div>
          </div>
        </div>
        
        <!-- ONBOARDING PROCESS -->
        <div class="row">
          <div class="col">
            <div class="onboarding-process wow fadeInUp">
              <!-- Desktop version -->
              <div class="onboarding-steps-desktop">
              </div>
              
              <!-- Mobile version -->
              <div class="onboarding-steps-mobile">
              </div>
              
              <!-- Text content -->
              <div class="onboarding-text-container">
                <div class="row">
                  <div class="col-md-3 step-text-box">
                    <h6>Semana 1: Diseñar</h6>
                    <p>Nos sumergimos en tus procesos comerciales y de ventas para adaptar VORTIA a tus necesidades.</p>
                  </div>
                  
                  <div class="col-md-3 step-text-box">
                    <h6>Semana 2: Crear</h6>
                    <p>Creamos los agentes de IA para que cumplan con tus objetivos específicos de negocio.</p>
                  </div>
                  
                  <div class="col-md-3 step-text-box">
                    <h6>Semana 3: Integrar</h6>
                    <p>Nos integramos con tus herramientas y CRM existentes, lo que garantiza un flujo de trabajo fluido.</p>
                  </div>
                  
                  <div class="col-md-3 step-text-box">
                    <h6>Semana 4: Optimizar</h6>
                    <p>Supervisamos a nuestros agentes periódicamente para asegurarnos de que todo funcione sin problemas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End container -->
    </section>
  </template>
  
  <style scoped>
  .onboarding-section {
    background-image: url('/public/assets/images/imagen-section2.png');
    background-size: cover;
    background-position: center;
    padding-bottom: 0px;
  }
  
  /* Desktop Version */
  .onboarding-steps-desktop {
    display: flex;
    justify-content: center;
    background-image: url('/public/assets/images/fondo-onboarding.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 230px;
    padding: 30px 0;
    margin-bottom: 40px;
  }
  
  /* Mobile Version */
  .onboarding-steps-mobile {
    display: none;
    background-image: url('/public/assets/images/fondo-onboarding-mobile.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 500px;
    margin-bottom: 40px;
  }
  
  /* Text styles */
  .onboarding-text-container {
    text-align: center;
    margin-top: 20px;
  }
  
  .step-text-box {
    margin-bottom: 30px;
  }
  
  .step-text-box h6 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .step-text-box p {
    font-size: 14px;
    line-height: 1.5;
  }

  .titulo-principal{
    font-size: 50px;
  }

  .subtitulo-principal{
    font-size: 30px;
    margin-top: 15px;
  }
  
  /* Responsive */
  @media (max-width: 991px) {
    .onboarding-steps-desktop {
      display: none;
    }
    
    .onboarding-steps-mobile {
      display: block;
    }
    
    .step-text-box h6 {
      font-size: 16px;
    }
    
    .step-text-box p {
      font-size: 13px;
    }
  }
  
  @media (max-width: 767px) {
    .onboarding-steps-mobile {
      min-height: 400px;
    }
  }
  
  @media (max-width: 575px) {
    .section-title h2 {
      font-size: 32px !important;
    }
    
    .section-title h6 {
      font-size: 18px !important;
    }
    
    .onboarding-steps-mobile {
      min-height: 300px;
    }
  }
  </style>