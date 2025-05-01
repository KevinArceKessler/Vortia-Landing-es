<template>
    <div>
      <!-- Contenido principal -->
      <div class="container py-5">
        <h1 class="text-center mb-5">Blog</h1>
        
        <div class="row">
          <!-- Artículo de Blog 1 -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <!-- <img src="/public/assets/images/placeholder.jpg" class="card-img-top" alt="Imagen de artículo"> -->
              <div class="card-body">
                <h5 class="card-title">Título del Artículo 1</h5>
                <p class="card-text">Breve descripción del artículo que capte la atención del lector y lo invite a leer más.</p>
                <p class="text-muted">Fecha: 28 de abril, 2025</p>
                <a href="#" class="btn btn-primary">Leer más</a>
              </div>
            </div>
          </div>
          
          <!-- Artículo de Blog 2 -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <!-- <img src="/public/assets/images/placeholder.jpg" class="card-img-top" alt="Imagen de artículo"> -->
              <div class="card-body">
                <h5 class="card-title">Título del Artículo 2</h5>
                <p class="card-text">Breve descripción del artículo que capte la atención del lector y lo invite a leer más.</p>
                <p class="text-muted">Fecha: 15 de abril, 2025</p>
                <a href="#" class="btn btn-primary">Leer más</a>
              </div>
            </div>
          </div>
          
          <!-- Artículo de Blog 3 -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <!-- <img src="/public/assets/images/placeholder.jpg" class="card-img-top" alt="Imagen de artículo"> -->
              <div class="card-body">
                <h5 class="card-title">Título del Artículo 3</h5>
                <p class="card-text">Breve descripción del artículo que capte la atención del lector y lo invite a leer más.</p>
                <p class="text-muted">Fecha: 5 de abril, 2025</p>
                <a href="#" class="btn btn-primary">Leer más</a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Paginación -->
        <nav aria-label="Navegación de blog" class="mt-5">
          <ul class="pagination justify-content-center">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
            </li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">Siguiente</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogPage',
    head() {
      return {
        title: 'Blog | Vortia',
        meta: [
          { hid: 'description', name: 'description', content: 'Blog de Vortia - Artículos, noticias y actualizaciones sobre nuestra empresa y servicios.' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para la página de Blog */
  .card {
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  </style>