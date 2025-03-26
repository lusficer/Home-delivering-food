<template>
  <div class="app-container">
    <div class="home-view">
      <NavBar />
      <div class="content mb-5"></div>
    </div>
    <div class="body"></div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Gallery from "../views/Gallery.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBar,
    Gallery,
    Footer,
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
