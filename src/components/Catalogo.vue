<script setup>
import { onMounted, ref, computed, watch } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
});

const currentPage = ref(1);
const itemsPerPage = 8;
const listaTelas = ref([]);

const totalPages = computed(() => Math.ceil(props.items.length / itemsPerPage));

const paginatedTelas = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return props.items.slice(start, end);
});

watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>

<template>
  <v-row>
    <v-col v-for="(img, index) in paginatedTelas" :key="index" cols="12" sm="6" md="4" lg="3">
      <v-hover v-slot="{ isHovering, props }">
        <v-card v-bind="props" :elevation="isHovering ? 12 : 2" class="mx-auto card-tela" rounded="lg">
          <v-img :src="img" cover class="align-end text-white">
            <v-fade-transition>
              <div v-if="isHovering" class="d-flex align-center justify-center v-card--reveal text-h6"
                style="height: 100%;">
              </div>
            </v-fade-transition>

            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>

  <v-row justify="center" class="mt-10">
    <v-col cols="12" md="6">
      <v-pagination v-model="currentPage" :length="totalPages" :total-visible="$vuetify.display.xs ? 1 : 5"
        rounded="circle" color="primary" active-color="black"></v-pagination>
    </v-col>
  </v-row>
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