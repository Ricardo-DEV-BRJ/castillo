<script setup>
import { ArrowRight, Menu, X } from '@lucide/vue';
import { Motion } from 'motion-v';
import { ref } from 'vue';
import Contacto from './Contacto.vue';

const modal = ref(null);
const drawer = ref(false); // Controla el menú lateral

const navItems = [
  { name: 'Inicio', href: '/', nameRouter: 'Index' },
  { name: 'Telas', href: '/telas', nameRouter: 'Telas' },
  { name: 'Máquinas', href: '/maquinas', nameRouter: 'Maquinas' },
  { name: 'Mercería', href: '/merceria', nameRouter: 'Merceria' }
];
</script>

<template>
  <Motion as="nav" :initial="{ y: -100 }" :animate="{ y: 0 }" :transition="{ duration: 0.6 }"
    class="fondo border-b navCastillo">
    <v-row justify="space-between" align="center" class="px-4 py-3">
      <v-col cols="auto">
        <img src="../assets/logoCastillo.png" alt="Logo Castillo" width="100" class="d-block">
      </v-col>
      <v-col cols="auto" class="d-sm-none">
        <v-btn icon variant="text" @click="drawer = !drawer">
          <Menu />
        </v-btn>
      </v-col>

      <v-col class="d-none d-sm-flex justify-center">
        <v-btn v-for="item in navItems" :key="item.name" variant="text" class="text-capitalize mx-1" :class="$route.name === item.nameRouter ? 'bg-black text-white' : ''" :href="item.href">
          {{ item.name }}
        </v-btn>
      </v-col>

      <v-col cols="auto" class="d-none d-sm-flex justify-end">
        <Motion as="div" :whileHover="{ scale: 1.05 }" :whileTap="{ scale: 0.95 }">
          <v-btn color="red-darken-4" rounded="pill" @click="modal.openModal()">
            <span class="d-none d-sm-inline mr-2">Contacto</span>
            <ArrowRight :size="18" />
          </v-btn>
        </Motion>
      </v-col>
    </v-row>
  </Motion>

  <v-navigation-drawer v-model="drawer" temporary location="left" class="pa-4">
    <div class="d-flex justify-end mb-4">
      <v-btn icon variant="text" @click="drawer = false">
        <X />
      </v-btn>
    </div>

    <v-list nav>
      <v-list-item v-for="item in navItems" :key="item.name" :title="item.name" :href="item.href"
        class="text-h6 mb-2" />
    </v-list>

    <v-divider class="my-4"></v-divider>

    <v-btn color="red-darken-4" block rounded="pill" @click="modal.openModal(); drawer = false">
      Contacto
    </v-btn>
  </v-navigation-drawer>

  <Contacto ref="modal" />
</template>

<style scoped>
.fondo {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
}

.navCastillo {
  position: sticky !important;
  top: 0;
  z-index: 1000;
}
</style>