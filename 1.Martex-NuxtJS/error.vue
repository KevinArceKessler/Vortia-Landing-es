<template>
  <section id="page-404" class="bg--white-300 division">
    <div class="container">
      <div class="row justify-content-center">
        <!-- 404 PAGE TEXT -->
        <div class="col-md-9 col-lg-8">
          <div class="page-404-txt text-center">
            <!-- Image -->
            <div class="rel page-404-img">
              <img
                class="img-fluid"
                alt="error-404-img"
              />
            </div>

            <!-- Text -->
            <h2 class="s-56 w-700 color--dark">Error.</h2>
            <h6 class="s-22 color--grey">
              En este momento nos encontramos realizando tareas de mantenimiento. En breve podrás seguir conociendo más de VORTIA.
            </h6>

            <!-- Button -->
            <a href="/" class="btn btn--theme hover--theme"
            @click="handleError" >Inicio</a
            >
          </div>
        </div>
        <!-- END 404 PAGE TEXT -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
  <hr class="divider divider-light" />

</template>


<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>
