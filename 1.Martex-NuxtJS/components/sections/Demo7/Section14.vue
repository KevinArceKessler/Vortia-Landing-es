<template>
    <section class="pt-100 ct-08 content-section division onboarding-section">
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-9">
            <div class="section-title mb-70">
              <!-- Title -->
              <h2 class="s-50 w-700 titulo-principal">EVERYTHING READY IN JUST 4 WEEKS</h2>
              <!-- Text -->
              <h6 class="s-21 subtitulo-principal">Onboarding Process</h6>
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
                    <h6>Week 1: Design</h6>
                    <p>We dive into your sales and business processes to tailor Vortia to your specific needs.</p>
                  </div>
                  
                  <div class="col-md-3 step-text-box">
                    <h6>Week 2: Create</h6>
                    <p>We develop AI agents aligned with your business goals, ready to deliver real results.</p>
                  </div>
                  
                  <div class="col-md-3 step-text-box">
                    <h6>Week 3: Integrate</h6>
                    <p>We connect seamlessly with your existing tools and CRM to ensure a smooth workflow.</p>
                  </div>
                  
                  <div class="col-md-3 step-text-box">
                    <h6>Week 4: Optimize</h6>
                    <p>We continuously monitor and fine-tune our agents to keep everything running at peak performance.</p>
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