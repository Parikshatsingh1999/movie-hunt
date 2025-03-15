import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/MovieView.vue'),
    },
    { path: "/:pathMatch(.*)*", redirect: "/" }, // Redirect unknown routes to Home
  ],
})

export default router
