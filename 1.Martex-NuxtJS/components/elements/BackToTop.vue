<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)

function toggleVisibility() {
    visible.value = window.scrollY > 300
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', toggleVisibility)
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', toggleVisibility)
})
</script>

<template>
    <transition name="fade">
        <div 
            v-show="visible" 
            class="back-to-top" 
            @click="scrollToTop"
            aria-label="Volver arriba"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
        </div>
    </transition>
</template>

<style scoped>
.back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #B7F38A;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}

.back-to-top:hover {
    background-color: #94E05A;
    transform: translateY(-2px);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>