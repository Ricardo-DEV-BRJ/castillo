<script setup>
import { ref } from 'vue';

const modal = ref(false);

const openModal = () => {
  modal.value = true;
};
const closeModal = () => {
  modal.value = false;
};
defineExpose({
  openModal,
  closeModal
});
</script>

<template>
  <v-dialog v-model="modal" max-width="400px">
    <v-card text="Nuestro número de contacto" title="Contacto" class="text-center">
      <div class="d-flex justify-center">
        <v-img src="@/assets/qr-whatsapp.jpeg" alt="QR Code whatsapp" class="mt-4 rounded-lg wha" width="70%">
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </div>
      <v-card-item class="d-flex justify-center">
        <v-btn prepend-icon="mdi-close" variant="text" text="Cerrar" color="error" @click="closeModal()">
          Cerrar
        </v-btn>
      </v-card-item>
    </v-card>
  </v-dialog>
</template>

<style scoped>
</style>