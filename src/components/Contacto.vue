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
  <v-dialog v-model="modal" max-width="400px" scrollable close-on-back="false">
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
    </v-card>
  </v-dialog>
</template>

<style scoped></style>