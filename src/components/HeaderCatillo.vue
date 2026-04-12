<script setup>
import { ArrowRight } from '@lucide/vue';
import { Motion } from 'motion-v';
import { ref } from 'vue';
import Contacto from './Contacto.vue';
const modal = ref(null);
</script>

<template>
  <Motion as="nav" :initial="{ y: -100 }" :animate="{ y: 0 }" :transition="{ duration: 0.6 }"
    class="fondo border-b navCastillo">
    <v-row justify="space-between" align="center" class="px-4 py-6">
      <v-col cols="6" sm="3">
        <img src="../assets/logoCastillo.png" alt="Logo Castillo" width="80%">
      </v-col>
      <v-col cols="auto" class="d-flex justify-end align-center">
        <Motion as="div" :whileHover="{ scale: 1.05 }" :whileTap="{ scale: 0.95 }">
          <v-btn color="red-darken-4" class="font-medium" rounded="pill" @click="modal.openModal()">
            Contacto
            <ArrowRight />
          </v-btn>
        </Motion>
      </v-col>
    </v-row>
  </Motion>
  <Contacto ref="modal" />
</template>

<style scoped>
.fondo {
  background-color: rgb(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.navCastillo {
  position: sticky !important;
  top: 0;
  z-index: 1000;
}
</style>