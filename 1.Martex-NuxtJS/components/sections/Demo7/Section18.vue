<template>
  <section id="section18" class="features-section">
      <div class="form-container">
          <h2 class="form-title">Contáctanos</h2>
          <p class="form-subtitle">¿Tienes preguntas sobre nuestro asistente de IA?</p>
          
          <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                  <label for="name">Nombre</label>
                  <input 
                      type="text" 
                      id="name" 
                      v-model="formData.name" 
                      placeholder="Tu nombre"
                      required
                  />
              </div>
              
              <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input 
                      type="email" 
                      id="email" 
                      v-model="formData.email" 
                      placeholder="tu@correo.com"
                      required
                  />
              </div>
              
              <div class="form-group">
                  <label for="message">Consulta</label>
                  <textarea 
                      id="message" 
                      v-model="formData.message" 
                      placeholder="¿En qué podemos ayudarte?"
                      rows="4"
                      required
                  ></textarea>
              </div>
              
              <button type="submit" class="submit-button">
                  Enviar
              </button>
          </form>
      </div>
  </section>
</template>

<script>
export default {
  data() {
      return {
          formData: {
              name: '',
              email: '',
              message: ''
          }
      }
  },
  methods: {
      submitForm() {
          // Aquí podrías agregar el código para enviar el formulario a un backend
          console.log('Formulario enviado:', this.formData);
          
          // Limpiar los campos después de enviar
          this.formData.name = '';
          this.formData.email = '';
          this.formData.message = '';
          
          // Opcionalmente, mostrar algún mensaje de confirmación
          alert('¡Gracias por tu mensaje!');
      }
  }
}
</script>

<style scoped>
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

.form-container {
background-color: rgba(255, 255, 255, 0.9);
border-radius: 8px;
padding: 25px;
max-width: 450px;
width: 100%;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.form-title {
color: #333;
font-size: 22px;
margin-bottom: 5px;
text-align: center;
}

.form-subtitle {
color: #666;
font-size: 15px;
margin-bottom: 20px;
text-align: center;
}

.contact-form {
display: flex;
flex-direction: column;
gap: 15px;
}

.form-group {
display: flex;
flex-direction: column;
gap: 5px;
}

.form-group label {
font-size: 14px;
font-weight: 500;
color: #444;
}

.form-group input,
.form-group textarea {
padding: 10px;
border-radius: 4px;
border: 1px solid #ddd;
font-size: 15px;
}

.form-group input:focus,
.form-group textarea:focus {
outline: none;
border-color: #3a56d4;
}

.submit-button {
background-color: #3a56d4;
color: white;
padding: 12px;
border: none;
border-radius: 4px;
font-size: 16px;
cursor: pointer;
transition: background-color 0.2s;
margin-top: 5px;
}

.submit-button:hover {
background-color: #2a46c4;
}

@media (max-width: 768px) {
.form-container {
  padding: 20px;
  max-width: 90%;
}
}
</style>