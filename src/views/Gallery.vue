<template>
  <NavBar />
  <div class="gallery-page">
    <div class="header-section">
      <div class="header-gallery">
        <!-- Hàng 1: Marquee -->
        <div class="header-gallery-marquee one">
          <div class="header-gallery-marquee-wrap">
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94db52081be12b9abef_gallery-03.jpg"
                alt="Header image 1"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e950622443d977947f46_gallery-09.jpg"
                alt="Header image 2"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e95008217ff5cd72eb99_gallery-08.jpg"
                alt="Header image 3"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94f2d42e49d8ca2a14c_gallery-04.jpg"
                alt="Header image 4"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94f6d4f5f51223d4ad4_gallery-07.jpg"
                alt="Header image 5"
              />
            </div>
          </div>
          <div class="header-gallery-marquee-wrap">
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94db52081be12b9abef_gallery-03.jpg"
                alt="Header image 1"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e950622443d977947f46_gallery-09.jpg"
                alt="Header image 2"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e95008217ff5cd72eb99_gallery-08.jpg"
                alt="Header image 3"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94f2d42e49d8ca2a14c_gallery-04.jpg"
                alt="Header image 4"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94f6d4f5f51223d4ad4_gallery-07.jpg"
                alt="Header image 5"
              />
            </div>
          </div>
        </div>
        <!-- Hàng 2: Marquee -->
        <div class="header-gallery-marquee two">
          <div class="header-gallery-marquee-wrap">
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c0942b735b354f9935d049_menu-gallery-09.jpg"
                alt="Header image 6"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c09304fc0a99953ad4393d_menu-gallery-07.jpg"
                alt="Header image 7"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c0930478c33935f5b6f4df_menu-gallery-03.jpg"
                alt="Header image 8"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c09303c1b798cecfa620f0_menu-gallery-01.jpg"
                alt="Header image 9"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94eba3a2662628e4612_bg-gallery-01.jpg"
                alt="Header image 10"
              />
            </div>
          </div>
          <div class="header-gallery-marquee-wrap">
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c0942b735b354f9935d049_menu-gallery-09.jpg"
                alt="Header image 6"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c09304fc0a99953ad4393d_menu-gallery-07.jpg"
                alt="Header image 7"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c0930478c33935f5b6f4df_menu-gallery-03.jpg"
                alt="Header image 8"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65c09303c1b798cecfa620f0_menu-gallery-01.jpg"
                alt="Header image 9"
              />
            </div>
            <div class="header-gallery-item">
              <img
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94eba3a2662628e4612_bg-gallery-01.jpg"
                alt="Header image 10"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 class="gallery-title">NVBLAST GALLERY</h1>
    </div>
    <div class="gallery-grid">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>

    <div class="subscription-banner">
      <h2 class="subscription-title">
        EXPLORE THE ART OF FINE DINING WITH OUR EXCEPTIONALLY CRAFTED MENUS
      </h2>
      <p class="gold-text">Stay in the Know</p>
      <p class="subscription-description">
        Get the latest on our seasonal menus and exclusive offers!
      </p>

      <div class="subscription-form">
        <input
          type="email"
          placeholder="Enter your email address"
          class="email-field"
        />
        <button class="subscribe-btn">subscribe</button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      images: [
        {
          src: "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94e4a580c4a67b7e3d2_gallery-01.jpg",
          alt: "Elegant dining setup",
        },
        {
          src: "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94d951a7d65be14579b_gallery-02.jpg",
          alt: "Modern restaurant interior",
        },
        {
          src: "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94db52081be12b9abef_gallery-03.jpg",
          alt: "Cozy restaurant seating",
        },
        {
          src: "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65bb69578b57c5aa2c8400e1_CTA-01.jpg",
          alt: "Modern restaurant with large windows",
        },
        {
          src: "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94e72ad0ab0efd6611c_gallery-05.jpg",
          alt: "Shared meal with various dishes",
        },
        {
          src: "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b9e94edc9ca65f9b09168a_gallery-06.jpg",
          alt: "Indian cuisine spread",
        },
      ],
    };
  },
  mounted() {
    // Kiểm tra xem gsap có tồn tại không
    if (typeof gsap === "undefined") {
      console.error(
        "GSAP is not loaded. Please ensure GSAP is included via CDN or npm."
      );
      return;
    }

    // Thiết lập marquee vô hạn cho hàng 1
    const marqueeOne = document.querySelector(".header-gallery-marquee.one");
    const marqueeOneWraps = marqueeOne.querySelectorAll(
      ".header-gallery-marquee-wrap"
    );

    // Đặt vị trí ban đầu cho wrap thứ hai
    gsap.set(marqueeOneWraps[1], { x: "100%" });

    // Tạo timeline cho animation mượt mà
    const marqueeTimeline1 = gsap.timeline({ repeat: -1 });

    marqueeTimeline1
      .to(marqueeOneWraps[0], { x: "-100%", duration: 20, ease: "none" }, 0)
      .to(marqueeOneWraps[1], { x: "0%", duration: 20, ease: "none" }, 0)
      .add(() => {
        gsap.set(marqueeOneWraps[0], { x: "100%" });
      })
      .to(marqueeOneWraps[0], { x: "0%", duration: 20, ease: "none" })
      .to(
        marqueeOneWraps[1],
        { x: "-100%", duration: 20, ease: "none" },
        "-=20"
      )
      .add(() => {
        gsap.set(marqueeOneWraps[1], { x: "100%" });
      });

    // Thiết lập marquee vô hạn cho hàng 2 (hướng ngược lại)
    const marqueeTwo = document.querySelector(".header-gallery-marquee.two");
    const marqueeTwoWraps = marqueeTwo.querySelectorAll(
      ".header-gallery-marquee-wrap"
    );

    // Đặt vị trí ban đầu cho wrap thứ hai
    gsap.set(marqueeTwoWraps[1], { x: "-100%" });

    // Tạo timeline cho animation mượt mà
    const marqueeTimeline2 = gsap.timeline({ repeat: -1 });

    marqueeTimeline2
      .to(marqueeTwoWraps[0], { x: "100%", duration: 15, ease: "none" }, 0)
      .to(marqueeTwoWraps[1], { x: "0%", duration: 15, ease: "none" }, 0)
      .add(() => {
        gsap.set(marqueeTwoWraps[0], { x: "-100%" });
      })
      .to(marqueeTwoWraps[0], { x: "0%", duration: 15, ease: "none" })
      .to(marqueeTwoWraps[1], { x: "100%", duration: 15, ease: "none" }, "-=15")
      .add(() => {
        gsap.set(marqueeTwoWraps[1], { x: "-100%" });
      });
  },
};
</script>

<style scoped>
.gallery-page {
  margin-bottom: 200px;
  text-align: center;
  padding: 20px;
  background-color: #180318;
  color: #fff;
  padding-top: 120px;
}

.header-section {
  position: relative;
  padding: 40px 20px;
  margin-bottom: 60px;
}

.header-gallery {
  position: relative;
  z-index: 0;
}

.header-gallery-marquee {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 150px;
  margin-bottom: 10px;
  position: relative;
}

.header-gallery-marquee-wrap {
  display: flex;
  gap: 15px;
  flex-direction: row;
  flex-shrink: 0;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.gallery-item {
  width: 250px;
  /* Increased from 200px to 250px to make images wider */
  height: 100%;
  /* Matches the height of the marquee (180px) */
  overflow: hidden;
  border: 2px solid #180318;
  margin-right: 10px;
}

.header-gallery-item {
  width: 700px;
}

.header-gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.header-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(24, 3, 24, 0.5);
  z-index: 1;
}

.gallery-title {
  font-family: "Playfair Display", serif;
  font-size: 4em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, minmax(100px, auto-fill));
  gap: 20px;
  justify-items: center;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
}

.gallery-item {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 4/3;
  border-radius: 15px;
  border: 3px solid #2a1a3f;
  box-sizing: border-box;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.subscription-banner {
  width: 100%;
  background-color: #180318;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.subscription-title {
  font-family: "PLayfair Display", serif;
  font-size: 48px;
  font-weight: 300;
  text-transform: uppercase;
  line-height: 1.2;
  max-width: 80%;
  margin: 0 0 20px 0;
  text-align: center;
  letter-spacing: 1px;
  color: #fff;
}

.gold-text {
  font-family: "Playfair Display", serif;
  color: #ffc107;
  font-size: 24px;
  font-style: italic;
  margin: 0 0 10px 0;
}

.subscription-description {
  font-size: 18px;
  margin: 0 0 30px 0;
  font-weight: 300;
  color: #fff;
}

.subscription-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  gap: 15px;
}

.email-field {
  width: 100%;
  max-width: 400px;
  padding: 12px 20px;
  background-color: transparent;
  border: 1px solid #2a1a3f;
  border-radius: 50px;
  color: #fff;
  font-size: 14px;
  text-align: left;
  box-sizing: border-box;
}

.email-field::placeholder {
  color: #fff;
  opacity: 0.7;
  font-size: 14px;
}

.subscribe-btn {
  background-color: #ffc107;
  color: #000;
  border: none;
  border-radius: 25px;
  padding: 12px 30px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
  text-transform: none;
}

.subscribe-btn:hover {
  background-color: #ffcb2c;
}

@media (max-width: 768px) {
  .gallery-page {
    padding-top: 100px;
  }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    max-width: 100%;
    /* Ensure the grid takes full width on smaller screens */
  }

  .gallery-item {
    border: 8px solid #2a1a3f;
  }

  .gallery-title {
    font-size: 2.5em;
  }

  .header-section {
    padding: 30px 15px;
  }

  .header-gallery-marquee {
    height: 100px;
  }

  .header-gallery-item {
    width: 150px;
  }

  .subscription-title {
    font-size: 32px;
    max-width: 100%;
  }

  .subscription-form {
    flex-direction: column;
    gap: 15px;
  }

  .email-field {
    max-width: 90%;
  }

  .subscribe-btn {
    padding: 10px 25px;
    font-size: 12px;
  }
}
</style>
