<template>
    <div>
      <!-- El contenido principal de la página -->
      <div class="container py-5">
        <h1 class="text-center mb-5">Sobre Nosotros</h1>
        
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <p class="mb-4">
              Somos Vortia, una empresa dedicada a [descripción de la empresa y su misión].
              Fundada en [año], hemos crecido para convertimos en líderes en [industria/sector].
            </p>
            
            <p class="mb-4">
              Nuestra visión es [descripción de la visión de la empresa] y nuestra misión
              es [descripción de la misión de la empresa].
            </p>
            
            <h2 class="mt-5 mb-4">Nuestros Valores</h2>
            <ul class="mb-4">
              <li><strong>Valor 1:</strong> Descripción del valor</li>
              <li><strong>Valor 2:</strong> Descripción del valor</li>
              <li><strong>Valor 3:</strong> Descripción del valor</li>
              <li><strong>Valor 4:</strong> Descripción del valor</li>
            </ul>
            
            <h2 class="mt-5 mb-4">Nuestro Equipo</h2>
            <p class="mb-4">
              Contamos con un equipo de profesionales dedicados y apasionados por lo que hacen.
              Cada miembro aporta un conjunto único de habilidades y experiencias que nos permiten
              ofrecer soluciones innovadoras y de alta calidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SobreNosotrosPage',
    head() {
      return {
        title: 'Sobre Nosotros | Vortia',
        meta: [
          { hid: 'description', name: 'description', content: 'Conoce más sobre Vortia, nuestra historia, valores y equipo.' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para la página Sobre Nosotros */
  </style>