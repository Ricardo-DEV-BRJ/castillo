<script setup>
import { Motion } from 'motion-v';

const feature = [
  {
    number: "01",
    title: "Amplio Stock",
    description: "Miles de productos siempre disponibles para entrega inmediata"
  },
  {
    number: "02",
    title: "Calidad Premium",
    description: "Solo trabajamos con materiales certificados y de marcas reconocidas"
  },
  {
    number: "03",
    title: "Asesoría Profesional",
    description: "Expertos que te guían en cada proyecto con conocimiento técnico"
  }
]
</script>

<template>
  <section class="py-10 px-6 bg-black text-white">
    <v-container>
      <v-row>
        <v-col v-for="(f, index) in feature">
          <Motion as="div" :initial="{ opacity: 0, y: 30 }" :whileInView="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }" :transition="{ duration: 0.6, delay: index * 0.1 }">
            <div className="mb-6 opacity-50 numero">
              {{ f.number }}
            </div>
            <h3 className="text-display-small font-weight-bold font-black mb-4">{{ f.title }}</h3>
            <p className="text-white">{{ f.description }}</p>
          </Motion>
        </v-col>
      </v-row>
    </v-container>

  </section>
</template>

<style scoped>
.numero {
  color: #DC143C;
  font-weight: bolder !important;
  font-size: clamp(3rem, 5vw, 6rem) !important;
}
</style>