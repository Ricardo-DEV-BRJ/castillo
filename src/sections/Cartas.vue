<script setup>
import { Motion } from 'motion-v';
import { ArrowRight } from '@lucide/vue'; 
</script>

<template>
  <section class="py-16 py-md-32 px-0 px-md-6 bg-white">
    <div class="max-w-7xl mx-auto">

      <Motion :initial="{ opacity: 0, y: 30 }" :while-in-view="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
        :transition="{ duration: 0.6 }" class="mb-15">
        <h2 class="text-h2-fluid text-black mb-4">
          Nuestro Catálogo
        </h2>
        <div class="linea-decorativa" />
      </Motion>

      <v-row>
        <v-col cols="12" lg="8">
          <Motion :initial="{ opacity: 0, y: 40 }" :while-in-view="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
            :transition="{ duration: 0.6 }" class="relative h-600 group overflow-hidden rounded-xl-3">
            <v-img src="../assets/fondo.jpg" alt="Telas" cover class="w-100 h-100 image-zoom" />
            <div class="overlay-gradient" />
            <div class="absolute bottom-0 left-0 right-0 pa-6 pa-md-12 content-text">
              <div class="text-red-darken-2 font-weight-bold d-flex align-center ga-2">
                <div class="linea-badge" />
                DESTACADO
              </div>
              <h1 class="text-white text-h3-fluid">Telas</h1>
              <p class="text-white ma-0 text-opacity-80 text-lg">
                Más de 500 variedades de telas premium importadas y nacionales
              </p>
              <v-btn variant="text" class="text-white font-weight-bold">
                Ver Colección
                <ArrowRight :size="20" class="arrow-icon" />
              </v-btn>
            </div>
          </Motion>
        </v-col>

        <v-col cols="12" lg="4" class="d-flex flex-column ga-6">
          <Motion :initial="{ opacity: 0, y: 40 }" :while-in-view="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
            :transition="{ duration: 0.6, delay: 0.1 }" class="relative h-290 group overflow-hidden rounded-xl-3">
            <v-img src="../assets/hilos.jpg" alt="Hilos" cover class="w-100 h-100 image-zoom" />
            <div class="overlay-gradient-small" />
            <div class="absolute bottom-0 left-0 right-0 pa-8 content-text">
              <h3 class="text-h3-fluid text-white mb-2">Hilos</h3>
              <p class="text-white text-opacity-70 text-sm">Todas las tonalidades</p>
            </div>
          </Motion>

          <Motion :initial="{ opacity: 0, y: 40 }" :while-in-view="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
            :transition="{ duration: 0.6, delay: 0.2 }" class="relative h-290 group overflow-hidden rounded-xl-3">
            <v-img src="../assets/merceria.jpg" alt="Mercería" cover class="w-100 h-100 image-zoom" />
            <div class="overlay-gradient-small" />
            <div class="absolute bottom-0 left-0 right-0 pa-8 content-text">
              <h3 class="text-white mb-2 text-h3-fluid">Mercería</h3>
              <p class="text-white text-opacity-70 text-sm">Botones y accesorios</p>
            </div>
          </Motion>
        </v-col>

        <v-col cols="12">
          <Motion :initial="{ opacity: 0, y: 40 }" :while-in-view="{ opacity: 1, y: 0 }" :viewport="{ once: true }"
            :transition="{ duration: 0.6, delay: 0.3 }"
            class="relative full-card-height group overflow-hidden rounded-xl-3 bg-red-darken-3">
            <v-row no-gutters class="fill-height">
              <v-col cols="12" md="6" class="d-flex align-center justify-center pa-8 pa-md-16">
                <div>
                  <h3 class="text-h3-fluid text-white mb-6">
                    Máquinas de Coser
                  </h3>
                  <p class="text-white text-opacity-90 text-xl mb-8 max-w-lg">
                    Equipos profesionales e industriales de las mejores marcas
                  </p>
                  <v-btn variant="flat" color="white" class="text-red-darken-3 font-weight-bold rounded-pill px-8"
                    height="56">
                    Ver Modelos
                    <ArrowRight :size="20" class="ml-2" />
                  </v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="relative overflow-hidden">
                <v-img src="../assets/maquinas.jpg" alt="Máquina de coser" cover class="fill-height image-zoom" />
              </v-col>
            </v-row>
          </Motion>
        </v-col>

      </v-row>
    </div>
  </section>
</template>

<style scoped>
.content-text {
  z-index: 20;
  /* Por encima de la imagen y el overlay */
}

.max-w-7xl {
  max-width: 80%;
}

.max-w-lg {
  max-width: 32rem;
}

/* Tipografía fluida */
.text-h2-fluid {
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1;
}

.text-h3-fluid {
  font-size: clamp(1rem, 6vw, 2rem);
  ;
  line-height: 1;
}

.linea-decorativa {
  width: 96px;
  height: 8px;
  background-color: #DC143C;
}

/* Tamaños de tarjetas */
.h-600 {
  height: 600px;
}

.h-290 {
  height: 290px;
}

.full-card-height {
  min-height: 400px;
}

/* Clases de utilidad personalizadas */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.inset-0 {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.rounded-xl-3 {
  border-radius: 24px !important;
}

/* Efectos */
.image-zoom {
  transition: transform 0.7s ease-in-out;
}

.group:hover .image-zoom {
  transform: scale(1.05);
}

.overlay-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 50%, transparent 100%);
  z-index: 10;
}

.overlay-gradient-small {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
  z-index: 10;
}

.linea-badge {
  width: 48px;
  height: 2px;
  background-color: #DC143C;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.group-btn:hover .arrow-icon {
  transform: translateX(5px);
}

@media (max-width: 960px) {
  .h-600 {
    height: 400px;
  }

  .full-card-height {
    height: auto;
  }

  .max-w-7xl {
    max-width: 95%;
  }
}
</style>