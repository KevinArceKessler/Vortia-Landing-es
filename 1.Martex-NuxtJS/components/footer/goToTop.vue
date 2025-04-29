<template>
    <span :class="['go-to-top', { show: showGoToTop }]" @click="scrollToTop">
    </span>
</template>
<script>
export default {
    data() {
        return {
            showGoToTop: false
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollY = window.scrollY;
            this.showGoToTop = scrollY > 200;
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }
};
</script>

