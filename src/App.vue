<script>
import { RouterLink, RouterView } from "vue-router";
import "/node_modules/primeflex/primeflex.css";
</script>

<template>
  <div class="w-screen">
    <RouterView />
  </div>
  <!-- <div>
    <HeroSection />
    <ReservationForm />
  </div> -->
  <RouterView />
</template>
<script>
import HeroSection from "./components/HeroSection.vue"; // Phần giới thiệu trang
import ReservationForm from "./components/ReservationForm.vue"; // Form đặt bàn

export default {
  components: {
    HeroSection,
    ReservationForm,
  },
};
</script>
<style></style>
