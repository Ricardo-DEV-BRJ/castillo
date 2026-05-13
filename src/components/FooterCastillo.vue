<script setup>

</script>

<template>
  <footer class="bg-black py-10 px-6">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="d-flex flex-column">
            <v-img src="@/assets/logoCastillo.png" alt="Logo" class="mb-4 imagen" width="300">
            </v-img>
            <p class="text-gray-lighten-4">
              Más de 30 años siendo tu aliado en creatividad textil
            </p>
          </div>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="12" sm="6">
              <h4 class="ma-0">Productos</h4>
              <v-list class="bg-black">
                <v-list-item to="/telas">Telas</v-list-item>
                <v-list-item to="/merceria">Mercería</v-list-item>
                <v-list-item to="/maquinas">Máquinas</v-list-item>
              </v-list>
            </v-col>
            <v-col cols="12" sm="6">
              <h4 class="ma-0">Contactos</h4>
              <v-list class="bg-black">
                <v-list-item>
                  <v-icon>
                    mdi-phone
                  </v-icon>
                  +58 414-0798079
                </v-list-item>
                <v-list-item href="https://www.instagram.com/elcastillovalera?igsh=MXZ3cnZpdDVtOTlwMA==">
                  <v-icon>
                    mdi-instagram
                  </v-icon>
                  @elcastillovalera
                </v-list-item>
                <v-list-item href="https://www.instagram.com/genuine.ve?igsh=MWQyMjR6MThvZnY4aw==">
                  <v-icon>
                    mdi-instagram
                  </v-icon>
                  @genuine.ve
                </v-list-item>
                <v-list-item href="https://github.com/Ricardo-DEV-BRJ">
                  <v-icon>
                    mdi-github
                  </v-icon>
                  @Ricardo-DEV-BRJ
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-divider>
      </v-divider>
      <p class="text-center text-gray-lighten-4 mt-8">
        © 2026 El castillo tu centro textil. Todos los derechos reservados.
      </p>
    </v-container>
  </footer>
</template>

<style scoped>
.imagen {
  filter: drop-shadow(2px 0px 0px #ffffff) drop-shadow(-2px 0px 0px #ffffff) drop-shadow(0px 2px 0px #ffffff) drop-shadow(0px -2px 0px #ffffff);
}
</style>