import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
<<<<<<< HEAD
import Gallery from "../components/Gallery.vue";
=======

>>>>>>> 351e16819265f26ba2b2cb4210072644bff14afe
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
<<<<<<< HEAD
  ],
});

export default router;
=======

    // component: () => import('../views/AboutView.vue'),
  ],
});

export default router;
>>>>>>> 351e16819265f26ba2b2cb4210072644bff14afe
