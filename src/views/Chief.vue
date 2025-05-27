<template>
  <NavBar />
  <div class="hero-inner">
    <div class="container-medium w-container">
      <h1
        data-w-id="619c7399-7dd9-b642-ee32-27b66fe70942"
        class="hero-inner-title"
        v-bind:style="{ opacity: isVisible ? 1 : 0 }"
      >
        Gastronomic Dream Chef
      </h1>
    </div>
    <img
      src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b38e1b8476081164cfc6ae_decoration-03.svg"
      loading="lazy"
      alt=""
      class="hero-inner-decoration-two"
    />
    <img
      src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c0cc796d4bb5444c9d303c_authentic-dish.svg"
      loading="lazy"
      alt=""
      class="hero-inner-decoration-three"
    />
  </div>

  <section class="section-spacing-bottom">
    <div class="w-layout-blockcontainer container w-container">
      <div class="w-dyn-list">
        <div role="list" class="grid-chef w-dyn-items">
          <div
            v-for="(chef, index) in chefs"
            :key="chef.id"
            role="listitem"
            class="w-dyn-item"
            @click="selectChef(chef)"
            :style="{ '--item-index': index }"
          >
            <router-link
              :to="`/chief/${chef.slug}`"
              class="chef-item w-inline-block"
            >
              <div class="chef-item-title-wrap">
                <div class="chef-job-title">{{ chef.jobTitle }}</div>
                <h2 class="chef-item-title">{{ chef.name }}</h2>
              </div>
              <div class="chef-item-image-wrap">
                <img
                  :src="chef.image"
                  alt="Team Image"
                  loading="lazy"
                  class="chef-item-image"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-spacing-bottom">
    <div class="w-layout-blockcontainer container-small w-container">
      <div class="team-action-item">
        <div class="cta-pre-title">We're Hiring</div>
        <h2 class="team-action-title">
          Cook Up Your Future with <span class="text-primary-2">NVBlast</span>
        </h2>
        <p>{{ hiringMessage }}</p>
        <a href="/contact" class="button-primary-1 w-inline-block">
          <div class="button-primary-1-title">Apply Today!</div>
          <div class="button-primary-hover top"></div>
          <div class="button-primary-hover bottom"></div>
        </a>
        <img
          src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b77c51228af339fbdff003_decoration-06.svg"
          loading="eager"
          alt=""
          class="action-decoration-two"
        />
        <img
          src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c0cc7943da67dca6b42184_chef.svg"
          loading="eager"
          alt=""
          class="action-decoration-one"
        />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { ref, computed } from "vue";

export default {
  name: "Chef",
  components: {
    NavBar,
    Footer,
  },
  setup() {
    const chefs = ref([
      {
        id: 1,
        name: "Chef Miguel Torres",
        jobTitle: "Rising Star Chef",
        slug: "chef-miguel-torres",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b79476e8189471f5736049_chef-01.jpg",
      },
      {
        id: 2,
        name: "Chef Dennis Barrett",
        jobTitle: "CEO of NVBlast",
        slug: "chef-dennis-barrett",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65c5d0cd81d1e988cd58d2ef_chef-02.jpg",
      },
      {
        id: 3,
        name: "Chef Joan Wallace",
        jobTitle: "Pantry Chef",
        slug: "chef-joan-wallace",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b797a5efccbaed027a7ffa_chef-03.jpg",
      },
      {
        id: 4,
        name: "Chef Judy Nguyen",
        jobTitle: "Line Cook",
        slug: "chef-judy-nguyen",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b7984cb24504db927c86a8_chef-04.jpg",
      },
      {
        id: 5,
        name: "Chef Billy Vasquez",
        jobTitle: "Healthcare Chef",
        slug: "chef-billy-vasquez",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b798a0b2a15174faa0bf97_chef-05.jpg",
      },
      {
        id: 6,
        name: "Chef Amanda Reed",
        jobTitle: "Food Stylist",
        slug: "chef-amanda-reed",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65c5d0d86972594e3345e7ed_chef-06.jpg",
      },
    ]);

    const isVisible = ref(false);

    const hiringMessage = computed(() => {
      return chefs.value.length > 0
        ? `Join our dynamic culinary team of ${chefs.value.length} talented chefs and be a part of an exciting journey in the world of gastronomy!`
        : "Join our culinary team and start an exciting journey in gastronomy!";
    });

    const selectChef = (chef) => {
      console.log(`Selected chef: ${chef.name}`);
    };

    setTimeout(() => {
      isVisible.value = true;
    }, 600);

    return {
      chefs,
      isVisible,
      hiringMessage,
      selectChef,
    };
  },
};
</script>

<style scoped>
.hero-inner {
  padding-top: 200px;
  padding-bottom: 150px;
  position: relative;
}

* {
  box-sizing: border-box;
}

div {
  display: block;
  unicode-bidi: isolate;
}

.container-medium {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
}

.w-container {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.hero-inner-title {
  font-family: "Playfair Display", serif;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 60px;
  font-weight: 400;
  line-height: 1.2em;
}

h1 {
  color: #fff;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 0;
  unicode-bidi: isolate;
}

.hero-inner-decoration-two {
  height: 70px;
  opacity: 0.5;
  position: absolute;
  top: 170px;
  bottom: auto;
  left: auto;
  right: 400px;
  transform: rotate(20deg);
  animation: sparkle 2s infinite ease-in-out;
  animation-delay: 0s;
}

.hero-inner-decoration-three {
  height: 65px;
  opacity: 0.5;
  position: absolute;
  top: 270px;
  bottom: auto;
  left: 360px;
  right: auto;
  animation: sparkle 2s infinite ease-in-out;
}

@keyframes sparkle {
  0% {
    opacity: 0.5;
  }

  25% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  75% {
    opacity: 0.5;
  }

  100% {
    opacity: 0.5;
  }
}

img {
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
  border: 0;
  overflow-clip-margin: content-box;
  overflow: clip;
}

.section-spacing-bottom {
  padding-bottom: 100px;
}

section {
  unicode-bidi: isolate;
}

.container {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 120px;
  padding-right: 30px;
}

.w-layout-blockcontainer {
  display: block;
}

.grid-chef {
  font-family: "Playfair Display", serif;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
}

.chef-item {
  width: 80%;
  max-width: 400px;
  height: 100%;
  border: 2px solid #fbc029;
  border-radius: 16px;
  background-color: #fefbff;
  padding: 20px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  animation-name: openBook;
  animation-duration: 1.2s;
  animation-timing-function: ease-out;
  animation-fill-mode: backwards;
  /* Thay đổi từ forwards sang backwards */
  animation-delay: calc(var(--item-index) * 0.2s);
}

/* Thêm một class mới để áp dụng sau khi animation kết thúc */
.chef-item-loaded {
  transform: rotateX(0deg);
  opacity: 1;
  transform-origin: top;
}

.chef-item:hover,
.chef-item:focus {
  transform: scale(1.05) translateY(-4px) !important;
  /* Sử dụng !important để ghi đè transform khác */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  border-color: #f9a825;
  outline: none;
}

@keyframes openBook {
  0% {
    transform: rotateY(90deg);
    opacity: 0;
    transform-origin: top;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    transform: rotateY(0deg);
    opacity: 1;
    transform-origin: top;
  }
}

.w-inline-block {
  max-width: 100%;
  display: inline-block;
}

a {
  text-decoration: underline;
}

.chef-item-title-wrap {
  text-align: center;
  margin-bottom: 30px;
}

.chef-job-title {
  font-family: "Playfair Display", serif;
  color: #a34fa3;
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5em;
}

.chef-item-title {
  font-family: "Playfair Display", serif;
  color: #180318;
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 26px;
  font-weight: 400;
  line-height: 1.2em;
}

.chef-item-image-wrap {
  width: 100%;
  height: 100%;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  overflow: hidden;
}

.chef-item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.container-small {
  max-width: 1000px;
  max-height: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
}

.team-action-item {
  border: 1px solid #5e315e;
  border-radius: 70px;
  text-align: center;
  padding: 50px;
  position: relative;
}

.cta-pre-title {
  font-family: "Playfair Display", serif;
  color: #fbc029;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
}

.team-action-title {
  font-family: "Playfair Display", serif;
  color: #fff6ff;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2em;
}

.text-primary-2 {
  color: #fbc029;
}

p {
  margin-bottom: 10px;
  margin-top: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
  color: #fefefe;
}

.button-primary-1 {
  border-radius: 200px;
  background-color: #5e315e;
  color: #fff6ff;
  text-align: center;
  padding: 15px 20px;
  font-size: 18px;
  line-height: 1.2em;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.button-primary-1-title {
  z-index: 1;
  position: relative;
}

.button-primary-hover.top {
  top: 49%;
  bottom: auto;
  left: 0%;
  right: 0%;
  height: 0;
  background-color: #fbc029;
  position: absolute;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
}

.button-primary-hover.bottom {
  top: auto;
  bottom: 49%;
  left: 0%;
  right: 0%;
  height: 0;
  background-color: #fbc029;
  position: absolute;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}

.button-primary-1:hover {
  background-color: #fbc029;
}

.button-primary-1:hover .button-primary-hover.top,
.button-primary-1:hover .button-primary-hover.bottom {
  transform: scaleY(1);
  height: 50%;
}

.button-primary-1:hover .button-primary-1-title {
  color: #641464;
}

@keyframes sparkle {
  0% {
    opacity: 0.3;
    transform: rotate(30deg) scale(1);
  }

  50% {
    opacity: 0.8;
    transform: rotate(30deg) scale(1.2);
    filter: brightness(1.5);
  }

  100% {
    opacity: 0.3;
    transform: rotate(30deg) scale(1);
  }
}

.action-decoration-two {
  height: 50px;
  opacity: 0.3;
  position: absolute;
  top: auto;
  bottom: 30px;
  left: 30px;
  right: auto;
  transform: rotate(30deg);
  animation: sparkle 1.5s ease-in-out infinite;
}

.action-decoration-one {
  height: 50px;
  opacity: 0.3;
  position: absolute;
  top: 30px;
  bottom: auto;
  left: auto;
  right: 30px;
  transform: rotate(30deg);
  animation: sparkle 1.5s ease-in-out infinite;
  animation-delay: 0.3s;
}
</style>
