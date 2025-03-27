<template>
  <div class="hero-section">
    <div class="overlay">
      <div class="content">
        <h3 class="welcome-text">Welcome to NVBlast</h3>
        <p class="description">
          Our streamlined reservation process ensures you have the perfect spot waiting for you, 
          allowing you to focus on relishing every moment of our exceptional culinary offerings. 
          Reserve now and let the anticipation of an exquisite dining adventure begin!
        </p>
        <h1 class="main-title">YOUR GATEWAY TO CULINARY EXCELLENCE</h1>
      </div>
    </div>
  </div>

  <!-- Booking Form Section -->
  <div class="booking-section">
    <form class="booking-form" @submit.prevent="submitForm">
      <div class="form-group">
        <div class="input-box">
          <label>Name</label>
          <input type="text" v-model="name" required />
        </div>
        <div class="input-box">
          <label>Phone No</label>
          <input type="text" v-model="phone" required />
        </div>
      </div>

      <div class="form-group">
        <div class="input-box">
          <label>Email Id</label>
          <input type="email" v-model="email" required />
        </div>
      </div>

      <div class="form-group">
        <div class="input-box">
          <label>Date</label>
          <input type="date" v-model="date" required />
        </div>
        <div class="input-box">
          <label>Time</label>
          <input type="time" v-model="time" required />
        </div>
      </div>

      <div class="form-group">
        <div class="input-box">
          <label>Number Of People</label>
          <input type="number" v-model="people" required />
        </div>
      </div>

      <button type="submit" class="submit-btn">Book a table</button>
    </form>
  </div>

  <div class="contact-opening-section">
    <!-- Contact Info -->
    <div class="contact-info">
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
    <div class="image-container">
      <img src="" alt="Dining Setup" class="contact-image" />
    </div>

    <!-- Opening Hours -->
    <div class="opening-hours">
      <h2>OPENING HOUR</h2>
      <p>Mon - Sat: 11:00 am - 10 pm</p>
      <p>Sun: 10:00 am - 12 pm</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const phone = ref("");
const email = ref("");
const date = ref("");
const time = ref("");
const people = ref("");

const submitForm = () => {
  alert(`Table booked for ${name.value} on ${date.value} at ${time.value}`);
};
</script>

<style scoped>
/* ======= Hero Section ======= */
.hero-section {
  width: 100vw;
  height: 100vh;
  background: url("/image.png") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Lớp phủ tối giúp chữ dễ đọc hơn */
.overlay {
  background: rgba(0, 0, 0, 0.6); /* Lớp phủ mờ */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* Khối chứa nội dung */
.content {
  max-width: 800px;
  padding: 20px;
  color: white;
}

/* Tiêu đề nhỏ */
.welcome-text {
  font-size: 20px;
  color: gold;
  font-style: italic;
  margin-bottom: 10px;
}

/* Đoạn mô tả */
.description {
  font-size: 16px;
  margin-bottom: 20px;
}

/* Tiêu đề chính */
.main-title {
  font-size: 40px;
  font-weight: bold;
}

/* ======= Booking Form Section ======= */
.booking-section {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  background: #1a061e;
}

.booking-form {
  background: #150016;
  padding: 30px;
  border-radius: 20px;
  width: 600px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  border: 1px solid gold;
}

.form-group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.input-box {
  width: 48%;
  display: flex;
  flex-direction: column;
}

.input-box label {
  font-size: 14px;
  color: white;
  margin-bottom: 5px;
}

.input-box input {
  padding: 10px;
  border: 1px solid purple;
  border-radius: 20px;
  background: transparent;
  color: white;
  outline: none;
  width: 100%;
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: gold;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
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

.contact-info, .opening-hours {
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

.contact-item a, .contact-item p {
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
  width: 80%;
  border-radius: 20px;
}
</style>
