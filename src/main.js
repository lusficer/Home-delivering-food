import "./assets/main.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";
<<<<<<< HEAD
import router from "./router/index.js";
=======
import router from "./router";
>>>>>>> 351e16819265f26ba2b2cb4210072644bff14afe
import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";

const app = createApp(App);

app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(router);

app.mount("#app");
