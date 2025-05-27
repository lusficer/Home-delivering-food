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
// In main.js
(function () {
  const originalSetItem = localStorage.setItem;
  const originalRemoveItem = localStorage.removeItem;
  const originalClear = localStorage.clear;

  localStorage.setItem = function (key, value) {
    console.log(`localStorage.setItem called: key=${key}, value=${value}`);
    originalSetItem.apply(this, arguments);
  };

  localStorage.removeItem = function (key) {
    console.log(`localStorage.removeItem called: key=${key}`);
    originalRemoveItem.apply(this, arguments);
  };

  localStorage.clear = function () {
    console.log("localStorage.clear called");
    originalClear.apply(this, arguments);
  };
})();
app.mount("#app");
