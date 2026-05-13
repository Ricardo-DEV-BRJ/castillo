/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'
import Telas from '@/pages/Telas.vue'
import Merceria from '@/pages/Merceria.vue'
import Maquinas from '@/pages/Maquinas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
      name: 'Index',
    },
    {
      path: '/telas',
      component: Telas,
      name: 'Telas',
    },
    {
      path: '/merceria',
      component: Merceria,
      name: 'Merceria',
    },
    {
      path: '/maquinas',
      component: Maquinas,
      name: 'Maquinas',
    },
  ],
})

export default router
