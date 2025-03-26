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
</template>

<script setup>
</script>

<style scoped>
/* Đảm bảo section full màn hình */
.hero-section {
  position: relative;
  width: 100vw;  /* Chiều rộng 100% màn hình */
  height: 100vh; /* Chiều cao 100% màn hình */
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
</style>
