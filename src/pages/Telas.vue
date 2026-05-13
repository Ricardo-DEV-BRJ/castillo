<script setup>
import { onMounted, ref } from 'vue';
import { tela } from '@/mediaData/tela.js';
import Catalogo from '@/components/Catalogo.vue';

const listaTelas = ref([]);

onMounted(() => {
  listaTelas.value = [...tela].sort(() => 0.5 - Math.random());
});

</script>

<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" class="text-center mb-5">
        <h2 class="text-h4 font-weight-bold">Calidad Superior en Cada Hebra</h2>
        <p class="text-subtitle-1 text-grey">En nuestra colección, nos esforzamos por ofrecerte la mejor selección de telas del mercado, combinando durabilidad, textura y diseños exclusivos. Ya sea que busques materiales para confección de alta costura, tapicería o proyectos creativos, nuestra variedad asegura que encuentres exactamente el acabado que imaginas.</p>
      </v-col>
    </v-row>

    <Catalogo :items="listaTelas" />

  </v-container>
</template>
<style scoped>
/* Estilo para el zoom suave de la imagen */
.card-tela .v-img :deep(img) {
  transition: transform 0.4s ease-in-out;
}

.card-tela:hover .v-img :deep(img) {
  transform: scale(1.1);
}

/* Overlay de información */
.v-card--reveal {
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>