<template>
  <div class="w-screen">
    <RouterView />
  </div>
</template>
<script>
// import HeroSection from "./components/HeroSection.vue"; // Phần giới thiệu trang
// import ReservationForm from "./components/ReservationForm.vue"; // Form đặt bàn
import { RouterLink, RouterView } from "vue-router";
import "/node_modules/primeflex/primeflex.css";
import Toast from "primevue/toast";
export default {
  components: {
    // HeroSection,
    // ReservationForm,
    Toast,
  },
};
</script>
<style></style>
