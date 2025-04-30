<template>
  <div class="menu-view relative z-1">
    <NavBar />
    <div class="content mb-5">
      <div
        class="hero-section h-screen w-screen flex justify-content-between flex-wrap m-auto"
        style="padding: 40px 80px 0px 80px"
      >
        <!-- Phần văn bản bên trái -->
        <div class="text-content w-9 relative">
          <h1 class="text-7xl custom-title leading-tight mb-4 w-full">
            A PLEASURABLE PALETTE ON YOUR PLATE
          </h1>
          <p class="custom-p text-md line-height-3 w-6 mb-5">
            Our culinary creations promise an exquisite symphony of tastes,
            carefully curated to tantalize your taste buds and create a dining
            experience like no other.
          </p>
          <Button
            size="large"
            label="Reserve table"
            class="reserve-button p-3"
          />
          <!-- Hình minh họa nhỏ (doodle) -->
        </div>
        <!-- Phần video bên phải -->
        <div class="video-section absolute" style="right: 12rem; top: 17rem">
          <video
            ref="videoPlayer"
            loop
            class="w-full h-25rem border-round-lg shadow-2 object-cover"
          >
            <source src="/video_menu.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <!-- Nút điều khiển tùy chỉnh -->
          <div class="video-controls absolute bottom-0 p-3">
            <Button
              :icon="isPlaying ? 'pi pi-pause' : 'pi pi-play'"
              class="play-pause-button p-button-rounded p-button-warning"
              @click="togglePlayPause"
            />
          </div>
        </div>
        <Image
          src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65ceeda6ab39cec620fc8fdd_decoration-09.svg"
          imageClass="round absolute left-0  w-screen h-screen"
        ></Image>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Button from "primevue/button";

export default {
  components: {
    NavBar,
    Footer,
    Button,
  },
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
    togglePlayPause() {
      const video = this.$refs.videoPlayer;
      if (this.isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      this.isPlaying = !this.isPlaying;
    },
  },
  mounted() {
    this.togglePlayPause();
  },
};
</script>

<style scoped>
.menu-view {
  font-family: "Playfair Display", serif;
}

.hero-section {
  background-color: #fff6ff; /* Màu nền giống trong hình */
}

.content {
  background-color: #fff6ff; /* Màu nền giống trong hình */
  padding-top: 120px;
}

.custom-title {
  color: #5e315e;
  font-family: "Playfair Display", serif; /* Font chữ tương tự */
}

.custom-p {
  color: #5e315e;
}

.reserve-button {
  position: relative;
  background-color: #5e315e !important; /* Màu tím giống trong hình */
  border: none !important;
  border-radius: 200px !important;
  color: white !important;
  font-weight: bold;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease; /* Chỉ transition màu chữ */
}

.reserve-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: #f9b233; /* Màu khi hover */
  border-radius: 200px;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: width 1s ease, height 0.5s ease; /* Transition cho chiều rộng và cao */
}

.reserve-button:hover {
  color: #180318 !important;
}

.reserve-button:hover::before {
  width: 200%; /* Lan rộng hơn kích thước button */
  height: 200%;
}

.video-section video {
  width: 100%;
  max-width: 800px;
  height: 500px;
  object-fit: cover; /* Đảm bảo video không bị méo */
}

.video-controls {
  z-index: 10;
}

.play-pause-button {
  background-color: #f9b233 !important; /* Màu vàng */
  border: none !important;
}

::v-deep(.round) {
  bottom: 340px;
}
</style>
