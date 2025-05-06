<template>
    <footer id="footer-3" class="pt-100 footer">
        <div class="container">
            <!-- FOOTER CONTENT -->
            <div class="row">
                <!-- LADO IZQUIERDO: LOGO (SIN LEMA) -->
                <div class="col-12 col-md-6 col-xl-4 mb-4 mb-xl-0">
                    <div class="footer-info d-flex align-items-center justify-content-center justify-content-md-start py-3">
                        <img class="footer-logo img-fluid" src="/public/assets/images/3.png" alt="footer-logo" />
                    </div>
                </div>
                <!-- COLUMNA 1: EMPRESA -->
                <div class="col-6 col-md-3 col-xl-4 mb-4 mb-md-0">
                    <div class="footer-links fl-1">
                        <!-- Title -->
                        <h6 class="s-17 w-700">Empresa</h6>
                        <!-- Links -->
                        <ul class="foo-links clearfix">
                            <li>
                                <p><a href="#" @click.prevent="scrollToSection('section5')">Solutions</a></p>
                            </li>
                            <li>
                                <p><NuxtLink to="/sobrenosotros">About Us</NuxtLink></p>
                            </li>
                            <li>
                                <p><NuxtLink to="/blog">Blog</NuxtLink></p>
                            </li>
                            <li>
                                <p><a href="#" @click.prevent="scrollToSection('section16')">Contact</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- COLUMNA 2: LEGALES -->
                <div class="col-6 col-md-3 col-xl-4">
                    <div class="footer-links fl-3">
                        <!-- Title -->
                        <h6 class="s-17 w-700">Legal</h6>
                        <!-- Links -->
                        <ul class="foo-links clearfix">
                            <li>
                                <p><NuxtLink to="/privacidaddatos">Privacy policy</NuxtLink></p>
                            </li>
                            <li>
                                <p><NuxtLink to="/terminoscondiciones">Terms and Conditions</NuxtLink></p>
                            </li>
                            <li>
                                <p><NuxtLink to="/legales">Legal Notice</NuxtLink></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- END FOOTER CONTENT -->
            <hr class="mt-4" />
            <!-- FOOTER DIVIDER LINE -->
            <!-- BOTTOM FOOTER -->
            <div class="bottom-footer py-3">
                <div class="row d-flex align-items-center">
                    <!-- FOOTER COPYRIGHT -->
                    <div class="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <div class="footer-copyright">
                            <p class="p-sm">&copy; 2025 Vortia - Todos los derechos reservados.</p>
                        </div>
                    </div>
                    <!-- REDES SOCIALES -->
                    <div class="col-12 col-md-6">
                        <ul class="footer-socials d-flex justify-content-center justify-content-md-end gap-3 clearfix">
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

<style scoped>
/* Estilos base para todos los dispositivos */
.footer {
    min-height: auto;
    padding-bottom: 1rem;
}

.footer-logo {
    max-width: 200px;
    height: auto;
}

@media (min-width: 768px) {
    .footer-logo {
        max-width: 250px;
    }
}

@media (min-width: 1200px) {
    .footer-logo {
        max-width: 280px;
    }
}

.foo-links li {
    margin-bottom: 0.5rem;
}

/* Estilos para dispositivos móviles pequeños (hasta 576px) */
@media (max-width: 575.98px) {
    .pt-100 {
        padding-top: 60px !important;
    }
    
    .footer-links h6 {
        margin-bottom: 0.75rem;
    }
    
    .footer-socials {
        margin-top: 0.5rem;
    }
}

/* Estilos para dispositivos móviles medianos (576px - 767px) */
@media (min-width: 576px) and (max-width: 767.98px) {
    .pt-100 {
        padding-top: 70px !important;
    }
}

/* Estilos para tablets (768px - 991px) */
@media (min-width: 768px) and (max-width: 991.98px) {
    .pt-100 {
        padding-top: 80px !important;
    }
}

/* Estilos para desktops pequeños (992px - 1199px) */
@media (min-width: 992px) and (max-width: 1199.98px) {
    .pt-100 {
        padding-top: 90px !important;
    }
}

/* Estilos para desktops grandes (1200px en adelante) */
@media (min-width: 1200px) {
    .pt-100 {
        padding-top: 100px !important;
    }
}

</style>