import "./assets/main.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
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
