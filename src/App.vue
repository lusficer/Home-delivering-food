<template>
  <div class="w-screen">
    <RouterView />
    <Toast class="mt-8" />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import "/node_modules/primeflex/primeflex.css";
import Toast from "primevue/toast";
export default {
  components: {
    Toast,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: auto !important;
  overflow-y: auto !important;
}
</style>
