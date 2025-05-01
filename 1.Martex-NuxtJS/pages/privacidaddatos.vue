<template>
    <div>
      <!-- Contenido principal -->
      <div class="container py-5">
        <h1 class="text-center mb-5">Política de Privacidad de Datos</h1>
        
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <p class="mb-4">
              Última actualización: 30 de abril, 2025
            </p>
            
            <h2 class="mt-5 mb-3">1. Introducción</h2>
            <p class="mb-4">
              En Vortia, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad 
              le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre 
              sus derechos de privacidad y cómo la ley lo protege.
            </p>
            
            <h2 class="mt-5 mb-3">2. Datos que recopilamos sobre usted</h2>
            <p class="mb-4">
              Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted que hemos 
              agrupado de la siguiente manera:
            </p>
            <ul class="mb-4">
              <li><strong>Datos de identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.</li>
              <li><strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de correo electrónico y números de teléfono.</li>
              <li><strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), datos de inicio de sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utiliza para acceder a este sitio web.</li>
            </ul>
            
            <h2 class="mt-5 mb-3">3. Cómo utilizamos sus datos personales</h2>
            <p class="mb-4">
              Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus datos personales en las siguientes circunstancias:
            </p>
            <ul class="mb-4">
              <li>Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o que hemos celebrado con usted.</li>
              <li>Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos fundamentales no anulen esos intereses.</li>
              <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
            </ul>
            
            <h2 class="mt-5 mb-3">4. Sus derechos legales</h2>
            <p class="mb-4">
              Bajo ciertas circunstancias, usted tiene derechos bajo las leyes de protección de datos en relación con sus datos personales, incluyendo el derecho a:
            </p>
            <ul class="mb-4">
              <li>Solicitar acceso a sus datos personales.</li>
              <li>Solicitar la corrección de sus datos personales.</li>
              <li>Solicitar la eliminación de sus datos personales.</li>
              <li>Objetar el procesamiento de sus datos personales.</li>
              <li>Solicitar la restricción del procesamiento de sus datos personales.</li>
              <li>Solicitar la transferencia de sus datos personales.</li>
              <li>Retirar el consentimiento.</li>
            </ul>
            
            <h2 class="mt-5 mb-3">5. Contacto</h2>
            <p class="mb-4">
              Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos en:
            </p>
            <p>
              Email: privacy@vortia.com<br>
              Teléfono: +1 234 567 890<br>
              Dirección: Calle Principal 123, Ciudad, País
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SectionUno from '~/components/sections/Demo7/Section1.vue'
  import SectionTres from '~/components/sections/Demo7/Section3.vue'
  export default {
    name: 'PrivacidadDatosPage',
    head() {
      return {
        title: 'Política de Privacidad de Datos | Vortia',
        meta: [
          { hid: 'description', name: 'description', content: 'Política de privacidad de datos de Vortia - Cómo recopilamos, usamos y protegemos sus datos personales.' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  
  /* Estilos específicos para la página de Privacidad de Datos */
  </style>