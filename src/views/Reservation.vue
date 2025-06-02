<template>
  <NavBar></NavBar>
  <div class="hero-section">
    <img src="../../public/reservation.jpg" class="hero-bg"> </img>
    <div class="overlay"></div>
    <div class="content-wrapper flex justify-content-center flex-wrap">
      <div class="hero-content">
        <h3 class="welcome-text flex justify-content-center flex-wrap">
          Welcome to NVBlast
        </h3>
        <p class="description">
          Our streamlined reservation process ensures you have the perfect spot
          waiting for you, allowing you to focus on relishing every moment of
          our exceptional culinary offerings. Reserve now and let the
          anticipation of an exquisite dining adventure begin!
        </p>
        <h1 class="main-title flex justify-content-center flex-wrap">
          YOUR GATEWAY TO CULINARY EXCELLENCE
        </h1>
      </div>

      <form class="reservation-form" @submit.prevent="submitForm">
        <div class="form-row">
          <div class="input-group">
            <h2>Name</h2>
            <input type="text" v-model="name" required />
          </div>
          <div class="input-group">
            <h2>Phone No</h2>
            <input type="tel" v-model="phone" required />
          </div>
        </div>

        <div class="form-row">
          <div class="input-group full-width">
            <h2>Email Id</h2>
            <input type="email" v-model="email" required />
          </div>
        </div>

        <div class="form-row">
          <div class="input-group">
            <h2>Date</h2>
            <input type="date" v-model="date" required />
          </div>
          <div class="input-group">
            <h2>Time</h2>
            <input type="time" v-model="time" required />
          </div>
        </div>

        <div class="form-row">
          <div class="input-group full-width">
            <h2>Number Of People</h2>
            <input type="number" v-model="people" min="1" required />
          </div>
        </div>

        <button type="submit" class="submit-btn">Reserve Now</button>
      </form>
    </div>
  </div>

  <!-- Booking Form Section -->
  <div class="contact-opening-section">
    <!-- Contact Info -->
    <div class="contact-info" ref="contactInfoRef">
      <h2>CONNECT WITH NVBLAST</h2>
      <div class="contact-item">
        <span class="icon">📞</span>
        <a href="tel:+1234567892">+123 456 7892</a>
      </div>
      <div class="contact-item">
        <span class="icon">📧</span>
        <a href="mailto:info@example.com">info@example.com</a>
      </div>
      <div class="contact-item">
        <span class="icon">📍</span>
        <p>HS B26, Horton Ford Rd, Eidson, TN, 37731</p>
      </div>
      <div class="social-icons">
        <span>📷</span>
        <span>📘</span>
        <span>▶️</span>
      </div>
    </div>

    <!-- Image Section -->

    <div class="image-container" ref="contactImageRef">
      <img
        src="../../public/Beverage/cup-tea-with-dried-rose-frame-black-table_114579-78957.jpg"
        alt="Dining Setup"
        class="contact-image"
      />
    </div>

    <!-- Opening Hours -->
    <div class="opening-hours" ref="contactHoursRef">
      <h2>OPENING HOUR</h2>
      <p>Mon - Sat: 11:00 am - 10 pm</p>
      <p>Sun: 10:00 am - 12 pm</p>
    </div>
  </div>

  <!-- Follow on Instagram-->
  <div class="Follow-section mt-8">
    <div class="Follow-image relative">
      <div class="image-background">
        <img
          src="../../public/Beverage/delicious-coffee-cups-arrangement_23-2149600728.avif"
          alt="Instagram Highlight"
          width="650"
          height="670"
          class="Follow-image relative"
        />
        <p class="image-label w-screen mt-7 absolute">FOLLOW US ON INSTAGRAM</p>
      </div>
    </div>
    <!-- <div class="image-container flex align-content-around flex-wrap left"></div> -->
    <div class="small-images">
      <img src="../../public/brunch(1).jpg" alt="Dish 1" class="circle-image" />
      <img
        src="../../public/Brunch/Burrito(3).jpg"
        alt="Dish 2"
        class="circle-image"
      />
    </div>
    <p class="description">
      THE BEST SERVICE AND FOOD TYPICAL OF
      <span class="highlight">NVBLAST</span>, AS WELL AS A NUMBER OF UNIQUE AND
      VALUABLE WORKS OF FOOD, AWAIT YOUR VISIT.
    </p>
  </div>
  <Toast />

  <Footer></Footer>
</template>

<script setup>
import { onMounted, ref } from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { useToast } from "primevue/usetoast";
import { Image } from "primevue";
const name = ref("");
const phone = ref("");
const email = ref("");
const date = ref("");
const time = ref("");
const people = ref("");
const contactInfoRef = ref(null);
const contactImageRef = ref(null);
const contactHoursRef = ref(null);
const toast = useToast();

const submitForm = () => {
  if (
    !name.value ||
    !phone.value ||
    !email.value ||
    !date.value ||
    !time.value ||
    !people.value
  ) {
    toast.add({
      severity: "error",
      summary: "Missing Fields",
      detail: "Please fill in all fields",
      life: 3000,
    });
    return;
  }

  toast.add({
    severity: "success",
    summary: "Reservation Confirmed",
    detail: `Table booked for ${name.value} on ${date.value} at ${time.value}`,
    life: 4000,
  });

  // Reset form if needed
  name.value = "";
  phone.value = "";
  email.value = "";
  date.value = "";
  time.value = "";
  people.value = "";
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  [contactInfoRef.value, contactImageRef.value, contactHoursRef.value].forEach(
    (el) => {
      if (el) observer.observe(el);
    }
  );
});
</script>

<style scoped>
/* ======= Hero Section ======= */
.hero-section {
  position: relative;
  width: 100vw;
  height: 75rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
}
.hero-bg {
  position: absolute;
  top: 115px;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #180318;
  opacity: 0.7;
  z-index: 1;
}

.content-wrapper {
  position: relative;
  z-index: 2; /* nội dung nằm trên overlay */
  width: 100%;
  gap: 50px;
  align-items: center;
}

.hero-content {
  text-align: center; /* Thay từ text-align: left thành center để căn giữa */
  color: white;
  width: 100%; /* Đảm bảo phần tử chiếm toàn bộ chiều rộng để căn giữa hiệu quả */
  margin-left: auto;
  margin-right: auto;
}

.welcome-text {
  font-style: italic;
  width: 100vw;
  color: gold;
  font-size: 18px;
  margin-bottom: 10px;
  justify-content: center; /* Đã có flex, giữ nguyên để hỗ trợ căn giữa */
}

.description {
  font-size: 16px;
  margin: 0 auto 20px; /* Sử dụng margin: 0 auto để căn giữa theo chiều ngang */
  color: #eee;
  max-width: 70%;
  text-align: center; /* Đảm bảo văn bản bên trong được căn giữa */
}

.main-title {
  font-family: "Playfair Display", serif;
  font-size: 4rem;
  color: white;
  font-weight: 400;
  line-height: 1.2rem;
  justify-content: center; /* Đã có flex, giữ nguyên để hỗ trợ căn giữa */
  margin-bottom: 3rem;
}

.reservation-form {
  /* background: #150016; */ /* ❌ bỏ nền màu */
  background-color: rgba(21, 0, 22, 0.6); /* ✅ thêm nền mờ */
  padding: 40px;
  border-radius: 30px;
  border: 2px solid gold;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
  width: 60%;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.input-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.input-group.full-width {
  flex: 100%;
}

.input-group label {
  font-size: 14px;
  color: #fff;
  margin-bottom: 8px;
}

.input-group input {
  padding: 12px 16px;
  border-radius: 25px;
  border: 1px solid #ccc;
  background: transparent;
  color: white;
  font-size: 15px;
  outline: none;
  transition: border 0.3s;
}

.input-group input::placeholder {
  color: #aaa;
}

.input-group input:focus {
  border-color: gold;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: gold;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #ffcc00;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: gold;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #ffcc00;
}
.contact-opening-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8edf4;
  padding: 50px;
}

.contact-info,
.opening-hours {
  flex: 1;
  text-align: center;
  font-size: 18px;
  color: #5a2d50;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.icon {
  margin-right: 10px;
}

.contact-item a,
.contact-item p {
  color: #5a2d50;
  text-decoration: none;
}

.social-icons span {
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.contact-image {
  width: 75%;
  border-radius: 200px 200px 0 0;
  border: 2px solid #180318;
}

.Follow-section {
  z-index: 1;
  flex: 1;
  text-align: center;
  font-size: 18px;
  color: #5a2d50;
}

.Follow-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-background {
  background-color: #fff;
  padding-top: 8rem;
  height: 670px;
  border-radius: 100px;
}

.image-label {
  z-index: 0;
  top: 0;
  left: 0;
  color: #fbc029;
  font-family: "Playfair Display", serif;
  font-size: 4.5rem;
}

.Follow-image {
  z-index: 1;
  border-radius: 500px 500px 100px 100px;
}

.instagram-section {
  text-align: center;
  background: #1a061e;
  padding: 50px 20px;
  color: white;
}

.section-title {
  font-size: 32px;
  color: gold;
  margin-bottom: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
}

.main-image {
  width: 60%;
  max-width: 1000px;
  border-radius: 30px;
}

.small-images {
  display: flex;
  justify-content: space-around;
  margin-top: -50px;
}

.circle-image {
  width: 300px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
}

.description {
  font-size: 16px;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.highlight {
  color: purple;
  font-weight: bold;
}

.contact-info,
.image-container,
.opening-hours {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease-out;
}

.show {
  opacity: 1 !important;
  transform: translateX(0) !important;
}
</style>
