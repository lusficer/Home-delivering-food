import "./assets/main.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

const app = createApp(App);

app
  .use(PrimeVue, {
    theme: {
      preset: Aura,
    },
  })
  .use(router)
  .use(ToastService)
  .use(createPinia());

app.mount("#app");
