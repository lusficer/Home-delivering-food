<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import "/node_modules/primeflex/primeflex.css";
import Body from "./components/Body.vue";
</script>

<template>
  <div class="w-screen">
    <NavBar></NavBar>
  </div>
  <div class="w-screen">

    <Body></Body>
  </div>

  <RouterView />
</template>
<style></style>
