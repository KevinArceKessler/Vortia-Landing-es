<template>
    <section id="section18" class="features-section">
      <div class="split-container">
        <!-- Lado izquierdo: Imagen y frase -->
        <div class="image-side">
          <div class="image-container">
            <img src="../../../public/redondo.png" alt="VORTIA AI" class="vortia-image">
          </div>
          <h2 class="ai-tagline">Empower your business with AI that understands your needs</h2>
          <p class="ai-description">VORTIA's intelligent solutions transform how you connect with customers, optimize operations, and drive growth.</p>
        </div>
        
        <!-- Lado derecho: Formulario -->
        <div class="form-container">
          <h2 class="form-title">Contact Us</h2>
          <p class="form-subtitle">Questions about our AI assistant?</p>
          
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name" 
                placeholder="Your name"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email" 
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                placeholder="How can we help you?"
                rows="4"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="submit-button">
              Send Message
            </button>
          </form>
        </div>
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
        // Here you could add code to send the form to a backend
        console.log('Form submitted:', this.formData);
        
        // Clear fields after submission
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
        
        // Optionally show a confirmation message
        alert('Thank you for your message!');
      }
    }
  }
  </script>
  
  <style scoped>
  .features-section {
    width: 100%;
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    background-image: url('/public/assets/images/imagen-section1.png');
    align-items: center;
    box-sizing: border-box;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
  
  .split-container {
    display: flex;
    width: 100%;
    max-width: 1200px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  /* Left side with image and tagline */
  .image-side {
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #f5f7ff 0%, #e8ecff 100%);
    text-align: center;
  }
  
  .image-container {
    width: 240px;
    height: 240px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }
  
  .vortia-image {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    object-fit: contain;
  }
  
  .ai-tagline {
    color: #333;
    font-size: 24px;
    margin-bottom: 15px;
    line-height: 1.4;
  }
  
  .ai-description {
    color: #666;
    font-size: 16px;
    line-height: 1.6;
  }
  
  /* Right side with form */
  .form-container {
    flex: 1;
    padding: 40px;
    background-color: white;
  }
  
  .form-title {
    color: #333;
    font-size: 24px;
    margin-bottom: 5px;
    text-align: center;
  }
  
  .form-subtitle {
    color: #666;
    font-size: 16px;
    margin-bottom: 25px;
    text-align: center;
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .form-group label {
    font-size: 14px;
    font-weight: 500;
    color: #444;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #ddd;
    font-size: 15px;
    transition: border-color 0.3s;
  }
  
  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #3a56d4;
    box-shadow: 0 0 0 2px rgba(58, 86, 212, 0.1);
  }
  
  .submit-button {
    background-color: #B7F38A;
    color: white;
    padding: 14px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 10px;
  }
  
  .submit-button:hover {
    background-color: #94E05A;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(42, 70, 196, 0.2);
    color: black;
  }
  
  /* Responsive adjustments */
  @media (max-width: 900px) {
    .split-container {
      flex-direction: column;
      max-width: 600px;
    }
    
    .image-side, .form-container {
      width: 100%;
      padding: 30px;
    }
    
    .image-container {
      width: 180px;
      height: 180px;
      margin-bottom: 20px;
    }
    
    .ai-tagline {
      font-size: 20px;
    }
  }
  
  @media (max-width: 600px) {
    .features-section {
      padding: 40px 15px;
    }
    
    .image-side, .form-container {
      padding: 25px 20px;
    }
    
    .image-container {
      width: 140px;
      height: 140px;
    }
    
    .form-title {
      font-size: 22px;
    }
    
    .ai-tagline {
      font-size: 18px;
    }
  }
  </style>