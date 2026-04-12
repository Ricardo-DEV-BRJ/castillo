<script setup>
import { Motion } from 'motion-v';


</script>

<template>
  <section class="py-10">
    <v-container>
      <h3 class="font-weigth-bold">
        No olvides seguirnos en nuestras redes sociales para estar al tanto de todas las novedades y eventos
        relacionados
        con el Castillo. ¡Síguenos y comparte tu experiencia con nosotros!
      </h3>
      <v-row>
        <v-col cols="12" sm="6">
          <Motion as="div" :initial="{ opacity: 0, x: -20 }" :whileInView="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }" :transition="{ duration: 0.8 }"
            class="d-flex flex-column align-center justify-start">
            <v-img src="@/assets/elcastillovalera_qr.png" alt="QR Code" class="mt-4" width="80%">
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </Motion>
        </v-col>
        <v-col cols="12" sm="6">
          <Motion as="div" :initial="{ opacity: 0, x: 10 }" :whileInView="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }" :transition="{ duration: 0.6 }" class="d-flex flex-column align-center">
            <v-img src="@/assets/qr-whatsapp.jpeg" alt="QR Code whatsapp" class="mt-4 rounded-lg" width="80%">
              <template #placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </Motion>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<style scoped>
.wha {
  border: 2px solid #25D366;
}
</style>