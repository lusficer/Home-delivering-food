<template>
    <div class="hero-section">
    <div class="overlay">
      <div class="content-wrapper">
        <div class="hero-content">
          <h3 class="welcome-text">Welcome to NVBlast</h3>
          <p class="description">
            Our streamlined reservation process ensures you have the perfect spot waiting for you, 
            allowing you to focus on relishing every moment of our exceptional culinary offerings. 
            Reserve now and let the anticipation of an exquisite dining adventure begin!
          </p>
          <h1 class="main-title">YOUR GATEWAY TO CULINARY EXCELLENCE</h1>
        </div>

        <form class="reservation-form" @submit.prevent="submitForm">
          <div class="form-row">
            <div class="input-group">
              <label>Name</label>
              <input type="text" v-model="name" placeholder="Your Name" required />
            </div>
            <div class="input-group">
              <label>Phone No</label>
              <input type="tel" v-model="phone" placeholder="e.g. 123-456-7890" required />
            </div>
          </div>

          <div class="form-row">
            <div class="input-group full-width">
              <label>Email Id</label>
              <input type="email" v-model="email" placeholder="you@example.com" required />
            </div>
          </div>

          <div class="form-row">
            <div class="input-group">
              <label>Date</label>
              <input type="date" v-model="date" required />
            </div>
            <div class="input-group">
              <label>Time</label>
              <input type="time" v-model="time" required />
            </div>
          </div>

          <div class="form-row">
            <div class="input-group full-width">
              <label>Number Of People</label>
              <input type="number" v-model="people" placeholder="e.g. 2" min="1" required />
            </div>
          </div>

          <button type="submit" class="submit-btn">Reserve Now</button>
        </form>
      </div>
    </div>
  </div>

  <!-- Booking Form Section -->
  

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
      <img src="../../public/Beverage/cup-tea-with-dried-rose-frame-black-table_114579-78957.jpg" alt="Dining Setup" class="contact-image" />
    </div>

    <!-- Opening Hours -->
    <div class="opening-hours">
      <h2>OPENING HOUR</h2>
      <p>Mon - Sat: 11:00 am - 10 pm</p>
      <p>Sun: 10:00 am - 12 pm</p>
    </div>
  </div>

  <!-- Follow on Instagram-->
   <!-- chèn hình ảnh sau nha-->
  <div class="instagram-section">
    <h2 class="section-title">FOLLOW US ON INSTAGRAM</h2>
    <div class="image-container">
      <img src="../../public/Beverage/delicious-coffee-cups-arrangement_23-2149600728.avif" alt="Instagram Highlight" class="main-image" />
    </div>
    <div class="small-images">
      <img src="../../public/brunch(1).jpg" alt="Dish 1" class="circle-image" />
      <img src="../../public/Brunch/Burrito(3).jpg" alt="Dish 2" class="circle-image" />
    </div>
    <p class="description">
      THE BEST SERVICE AND FOOD TYPICAL OF <span class="highlight">NVBLAST</span>, AS WELL AS A
      NUMBER OF UNIQUE AND VALUABLE WORKS OF FOOD, AWAIT YOUR VISIT.
    </p>
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
  background: url("../../public/Beverage.jpg") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Roboto', sans-serif;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.hero-content {
  text-align: left;
  color: white;
}

.welcome-text {
  font-style: italic;
  color: gold;
  font-size: 18px;
  margin-bottom: 10px;
}

.description {
  font-size: 16px;
  margin: 0 0 20px;
  color: #eee;
  max-width: 90%;
}

.main-title {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  color: white;
  font-weight: 700;
}

.reservation-form {
  /* background: #150016; */ /* ❌ bỏ nền màu */
  background-color: rgba(21, 0, 22, 0.6); /* ✅ thêm nền mờ */
  padding: 40px;
  border-radius: 30px;
  border: 2px solid gold;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.1);
  width: 100%;
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
  border: 3px solid gold;
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
</style>
