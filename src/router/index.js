import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/reservation',
      name: 'Reservation',
      component: () => import('../views/Reservation.vue'),
    },
    {
      path: '/gallery',
      name: "Gallery",
      component: ()=> import('../views/Gallery.vue'),
    },
  ],
});

export default router;
