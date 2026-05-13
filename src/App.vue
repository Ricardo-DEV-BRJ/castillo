<template>
  <v-app>
    <v-main>
      <header-catillo />
      <router-view />
      <footer-castillo />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import FooterCastillo from './components/FooterCastillo.vue';
import HeaderCatillo from './components/HeaderCatillo.vue';
import './styles/fuentes.css'
  //
</script>
