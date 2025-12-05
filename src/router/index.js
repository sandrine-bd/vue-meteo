import { createRouter, createWebHistory } from 'vue-router'

// Import des écrans (views)
import CitiesList from '../views/CitiesList.vue'

const routes = [
  {
    path: '/villes',
    name: 'cities',
    component: CitiesList
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes // tableau de routes utilisé ici
})

export default router
