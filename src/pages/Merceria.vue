<script setup>
import { onMounted, ref} from 'vue';
import { merceria } from '@/mediaData/merceria.js';
import Catalogo from '@/components/Catalogo.vue';

const listaMerceria = ref([]);

onMounted(() => {
  listaMerceria.value = [...merceria].sort(() => 0.5 - Math.random());
});

</script>

<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" class="text-center mb-5">
        <h2 class="text-h4 font-weight-bold">El paraíso de los detalles.</h2>
        <p class="text-subtitle-1 text-grey">
          Todo lo que necesitas para dar el toque final a tus creaciones: desde hilos de alta resistencia hasta botones
          únicos. 
        </p>
      </v-col>
    </v-row>
    <catalogo :items="listaMerceria" />
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