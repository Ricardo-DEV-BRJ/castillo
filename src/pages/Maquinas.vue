<script setup>
import { onMounted, ref } from 'vue';
import { maquinas } from '@/mediaData/maquinas.js';
import { maquinasCoser } from '@/mediaData/maquinasCoser.js';
import Catalogo from '@/components/Catalogo.vue';
import { Birdhouse, PaintRoller } from '@lucide/vue';


const listaMaquinas = ref([]);
const listaMaquinasCoser = ref([]);
onMounted(() => {
  listaMaquinas.value = [...maquinas].sort(() => 0.5 - Math.random());
  listaMaquinasCoser.value = [...maquinasCoser].sort(() => 0.5 - Math.random());
});

const slice = ref('coser');
</script>

<template>
  <v-container class="py-8">
    <v-row>
      <v-col cols="12" class="text-center mb-5">
        <h2 class="text-h4 font-weight-bold">Potencia tu talento con la mejor tecnología.</h2>
        <p class="text-subtitle-1 text-grey">
          Encuentra la compañera ideal para tus proyectos, desde modelos para principiantes hasta máquinas industriales
          de alta gama.
        </p>
      </v-col>
      <v-col cols="12" class="text-center mb-5">
        <v-btn :color="slice === 'industriales' ? 'red' : 'grey'" class="mx-2" @click="slice = 'industriales'"><PaintRoller/> Máquinas
          Industriales</v-btn>
          <v-btn :color="slice === 'coser' ? 'red' : 'grey'" class="mx-2" @click="slice = 'coser'" ><Birdhouse /> Máquinas de
            Coser</v-btn>
      </v-col>
    </v-row>
    <v-window v-model="slice">
      <v-window-item value="industriales">
        <Catalogo :items="listaMaquinas" />
      </v-window-item>
      <v-window-item value="coser">
        <Catalogo :items="listaMaquinasCoser" />
      </v-window-item>
    </v-window>
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