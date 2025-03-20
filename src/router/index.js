import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Gallery from "../views/Gallery.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: Gallery,
    },
  ],
});

export default router;
