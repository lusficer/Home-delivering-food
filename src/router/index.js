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
      path: "/reservation",
      name: "Reservation",
      component: () => import("../views/Reservation.vue"),
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: () => import("../views/Gallery.vue"),
    },
    {
      path: "/menu",
      name: "Menu",
      component: () => import("../views/Menu.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Contact.vue"),
    },
    {
      path: "/Chef",
      name: "Chef",
      component: () => import("../views/Chef.vue"),
    },
    {
      path: "/chef/:slug",
      name: "ChefDetail",
      component: () => import("../views/ChefDetail.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../views/AdminManagement.vue"),
    },
    {
      path: "/manager",
      name: "Restaurant Manager",
      component: () => import("../views/ManagerPage.vue"),
    },
  ],
});

export default router;
