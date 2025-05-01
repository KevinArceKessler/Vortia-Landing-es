<template>
    <footer id="footer-3" class="pt-100 footer" style="height: 400px;">
        <div class="container">
            <!-- FOOTER CONTENT -->
            <div class="row">
                <!-- LADO IZQUIERDO: LOGO (SIN LEMA) -->
                <div class="col-xl-4">
                    <div class="footer-info d-flex align-items-center h-100">
                        <img class="footer-logo img-fluid" src="/public/assets/images/3.png" alt="footer-logo" />
                    </div>
                </div>
                <!-- COLUMNA 1: EMPRESA -->
                <div class="col-sm-6 col-md-4 col-xl-4">
                    <div class="footer-links fl-1">
                        <!-- Title -->
                        <h6 class="s-17 w-700">Empresa</h6>
                        <!-- Links -->
                        <ul class="foo-links clearfix">
                            <li>
                                <p><a href="#" @click.prevent="scrollToSection('section5')">Soluciones</a></p>
                            </li>
                            <li>
                                <p><NuxtLink to="/sobrenosotros">Sobre Nosotros</NuxtLink></p>
                            </li>
                            <li>
                                <p><NuxtLink to="/blog">Blog</NuxtLink></p>
                            </li>
                            <li>
                                <p><a href="#" @click.prevent="scrollToSection('section16')">Contacto</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- COLUMNA 2: LEGALES -->
                <div class="col-sm-6 col-md-4 col-xl-4">
                    <div class="footer-links fl-3">
                        <!-- Title -->
                        <h6 class="s-17 w-700">Legales</h6>
                        <!-- Links -->
                        <ul class="foo-links clearfix">
                            <li>
                                <p><NuxtLink to="/privacidaddatos">Privacidad de Datos</NuxtLink></p>
                            </li>
                            <li>
                                <p><NuxtLink to="/terminoscondiciones">Términos y condiciones</NuxtLink></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- END FOOTER CONTENT -->
            <hr />
            <!-- FOOTER DIVIDER LINE -->
            <!-- BOTTOM FOOTER -->
            <div class="bottom-footer">
                <div class="row d-flex align-items-center justify-content-between">
                    <!-- FOOTER COPYRIGHT -->
                    <div class="col-md-6">
                        <div class="footer-copyright">
                            <p class="p-sm">&copy; 2025 Vortia - Todos los derechos reservados.</p>
                        </div>
                    </div>
                    <!-- REDES SOCIALES -->
                    <div class="col-md-6">
                        <ul class="footer-socials d-flex justify-content-end gap-3 clearfix">
                            <li>
                                <a href="#"><span class="flaticon-twitter"></span></a>
                            </li>
                            <li>
                                <a href="#"><span class="flaticon-facebook"></span></a>
                            </li>
                            <li>
                                <a href="#"><span class="flaticon-instagram"></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- End row -->
            </div>
            <!-- END BOTTOM FOOTER -->
        </div>
    </footer>
    <FooterGoToTop />
</template>

<script>
export default {
    methods: {
        // Método para desplazarse a una sección específica
        scrollToSection(sectionId) {
            // Verifica si estamos en la página principal
            if (this.$route.path !== '/') {
                // Si no estamos en la página principal, redirigir a la página principal y luego a la sección
                this.$router.push('/').then(() => {
                    // Esperar a que se complete la navegación
                    this.$nextTick(() => {
                        setTimeout(() => {
                            const element = document.getElementById(sectionId);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 300); // Pequeño retraso para asegurar que la página se ha cargado
                    });
                });
            } else {
                // Si ya estamos en la página principal, desplazarse a la sección
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    }
};
</script>