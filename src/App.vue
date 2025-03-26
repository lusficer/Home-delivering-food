<template>
  <div>
    <HeroSection />
    <ReservationForm />
  </div>
  <RouterView />
</template>
<script>
// import HeroSection from "./components/HeroSection.vue";  // Phần giới thiệu trang
// import ReservationForm from "./views/ReservationForm.vue";  // Form đặt bàn
import { RouterLink, RouterView } from "vue-router";
import "/node_modules/primeflex/primeflex.css";
export default {
  components: {
    // HeroSection,
    // ReservationForm,
  },
};
</script>
<style></style>
