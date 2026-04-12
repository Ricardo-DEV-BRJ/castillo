<script setup>
import { Clock, Mail, MapPin, Phone } from '@lucide/vue';
import { Motion } from 'motion-v';

const lista = [
  {
    icon: MapPin,
    title: "Dirección",
    content: "Avenida 10, entre calles 8 y 9 \n en el centro de la ciudad de Valera"
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+58 414-0798079"
  },
  {
    icon: Clock,
    title: "Horario",
    content: `Lunes a Jueves: 8:00am - 6:00pm \n Viernes y Sabados: 8:00am - 1:00pm \n 2:00pm - 6:00pm`
  },
  {
    icon: 'mdi-instagram',
    title: "Instagram",
    content: "@elcastillovalera"
  }
]
</script>

<template>
  <section class="py-10 px-6 bg-white">
    <v-container>
      <Motion as="p" :initial="{ opacity: 0, x: -40 }" :whileInView="{ opacity: 1, x: 0 }" :viewport="{ once: true }"
        :transition="{ duration: 0.6 }" className="fuente mb-8">
        Visítanos
      </Motion>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <Motion :initial="{ opacity: 0, x: -40 }" :whileInView="{ opacity: 1, x: 0 }" :viewport="{ once: true }"
            :transition="{ duration: 0.6 }">
            <div class="d-flex flex-column ga-5">
              <template v-for="(item, index) in lista" :key="index">
                <Motion as="div" :initial="{ opacity: 0, x: -20 }" :whileInView="{ opacity: 1, x: 0 }"
                  :viewport="{ once: true }" :transition="{ duration: 0.4, delay: index * 0.1 }"
                  class="d-flex align-center ga-2" v-if="item.title != 'Instagram'">
                  <Motion as="div" :whileHover="{ scale: 1.1 }" :transition="{ duration: 0.3 }"
                    class="px-4 py-3 rounded-lg" style="background-color: #DC143C;">
                    <component :is="item.icon" :size="30" class="text-white" />
                  </Motion>
                  <div>
                    <div class="font-weight-bold mb-2">{{ item.title }}</div>
                    <div style="color: #717182; white-space: pre-line;">{{ item.content }}</div>
                  </div>
                </Motion>
                <Motion as="div" :initial="{ opacity: 0, x: -20 }" :whileInView="{ opacity: 1, x: 0 }"
                  :viewport="{ once: true }" :transition="{ duration: 0.4, delay: index * 0.1 }"
                  class="d-flex align-center ga-2" v-else>
                  <Motion as="div" :whileHover="{ scale: 1.1 }" :transition="{ duration: 0.3 }"
                    class="px-4 py-3 rounded-lg" style="background-color: #DC143C;">
                    <v-icon size="30" color="white">mdi-instagram</v-icon>
                  </Motion>
                  <div>
                    <div class="font-weight-bold mb-2">{{ item.title }}</div>
                    <div style="color: #717182; white-space: pre-line;">{{ item.content }}</div>
                  </div>
                </Motion>
              </template>
            </div>
          </Motion>
        </v-col>
        <v-col cols="auto">
          <Motion as="div" :initial="{ opacity: 0, x: 200 }" :whileInView="{ opacity: 1, x: 0 }" :viewport="{ once: true }"
            :transition="{ duration: 0.6 }" class="cajaMap">
            <iframe class="rounded-lg mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d696.0088923335629!2d-70.60807290763537!3d9.31368873281468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e63286498f08e2b%3A0x273ca6b0b8204c1a!2sEl%20Castillo%20Tu%20Centro%20Textil%20%E2%80%8E%7C%20Valera%20Trujillo!5e0!3m2!1ses-419!2sve!4v1775960326391!5m2!1ses-419!2sve"
              style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Motion>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.fuente {
  font-size: clamp(2rem, 8vw, 5rem);
  font-weight: 1000;
  line-height: 0.9;
}
.cajaMap{
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.315);
}
.mapa{
  width: 600px;
  height: 400px;
}

@media (max-width: 768px) {
  .mapa {
    width: 100%;
    height: 300px;
  }
}
</style>