<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import "/node_modules/primeflex/primeflex.css";
</script>

<template>
  <div class="w-screen">
    <NavBar></NavBar>
  </div>

  <RouterView />
</template>
<style></style>
