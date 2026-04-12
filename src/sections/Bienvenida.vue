<script setup>
import { Motion, useScroll, useTransform } from 'motion-v';
import { Sparkles, ArrowRight } from '@lucide/vue'; // Asegúrate de tener lucide-vue-next
import { ref } from 'vue';

const heroRef = ref(null)
const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"]
});

const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
</script>

<template>
  <div class="bg-black">
    <section ref="heroRef" class="relative v-hero-section overflow-hidden bg-black">
      <Motion as="div" :style="{ y: heroY, opacity: heroOpacity }" class="absolute-bg z-0">
        <div class="gradient-overlay"></div>
        <v-img
          src="../assets/telas.jpg"
          alt="Tienda textil" cover class="fill-height w-100" />
      </Motion>

      <div class="relative fill-height d-flex align-center justify-center px-6 content-container">
        <div class="text-center" style="max-width: 1000px;">

          <Motion :initial="{ opacity: 0, y: 40 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.2 }"
            class="d-inline-flex align-center py-2 px-4 rounded-pill badge-experience mb-8">
            <Sparkles :size="16" class="text-red-darken-2 mr-2" />
            <span class="text-caption font-weight-medium text-white">Más de 30 años de experiencia</span>
          </Motion>

          <Motion as="h1" :initial="{ opacity: 0, y: 40 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.4 }" class="fuente text-white leading-tight tracking-tighter mb-6">
            Creatividad
            <br />
            <span class="text-red-darken-3">Sin Límites</span>
          </Motion>

          <Motion as="p" :initial="{ opacity: 0, y: 40 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.6 }" class="text-h6 text-white bg-black mb-12 mx-auto badge-experience rounded-pill"
            style="max-width: 600px;">
            Telas, hilos, mercería y máquinas profesionales para dar vida a tus ideas
          </Motion>

          <Motion as="div" :initial="{ opacity: 0, y: 40 }" :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8, delay: 0.8 }">
            <v-btn color="#DC143C" size="x-large" rounded="pill" to="#productos"
              class="px-10 py-8 text-white font-weight-bold cta-button" flat>
              Explorar Productos
            </v-btn>
          </Motion>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.v-hero-section {
  position: relative;
  height: 86vh;
  width: 100%;
}

.content-container {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 20;
  /* Por encima de la imagen */
}

.absolute-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Al fondo */
}

.fuente {
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 1000;
  line-height: 0.9;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(220, 20, 60, 0.4), transparent, rgba(0, 0, 0, 0.6));
  mix-blend-mode: multiply;
  z-index: 10;
}

.badge-experience {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-button :deep(.v-btn__content) {
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow-icon {
  transform: translateX(5px);
}

/* Mouse Indicator Styles */
.mouse-indicator {
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.mouse-wheel {
  width: 6px;
  height: 6px;
  background: white;
  border-radius: 50%;
}

.bottom-8 {
  bottom: 32px;
}

.left-50 {
  left: 50%;
}

.-translate-x-50 {
  transform: translateX(-50%);
}
</style>