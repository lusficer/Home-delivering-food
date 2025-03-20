<template>
  <div class="app-container">
    <div class="home-view">
      <NavBar />
      <div class="content mb-5">
        <Gallery />
      </div>
    </div>
    <div class="body">
      <!-- Nội dung khác -->
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
    Gallery,
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.home-view {
  flex: 0 0 auto;
}

.body {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
