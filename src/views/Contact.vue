<template>
  <NavBar></NavBar>
  <div class="header-container">
    <!-- BÊN TRÁI: Tiêu đề + contact info -->
    <div class="flex w-full">
      <div class="title-section w-full">
        <h1 class="title">GET TOUCH WITH NVBLAST</h1>
      </div>
      <div class="desc">
        <p>
          Your culinary journey is our priority, and we're here to make every
          interaction seamless. Whether you have questions, or feedback, or
          simply want to connect, our dedicated team is ready to assist. Reach
          out through our contact channels, and let us ensure your experience
          with us is as delightful as our flavors. Your satisfaction is our
          commitment, and we look forward to hearing from you soon.
        </p>
      </div>
    </div>

    <!-- BÊN PHẢI: Description + social -->
    <div class="contact-info flex w-screen">
      <div class="contact-icons w-full">
        <div class="contact-item">
          <div class="circle"><i class="pi pi-phone" /></div>
          <a href="tel+87795945247">+87 795 945 247 </a>
        </div>
        <div class="contact-item">
          <div class="circle"><i class="pi pi-envelope" /></div>
          <a href="mailto:info@example.com">Nvblast@gmail.com</a>
        </div>
        <div class="contact-item">
          <div class="circle"><i class="pi pi-map-marker" /></div>
          <p>HS B26, Horton Ford Rd, Eidson, TN, 37731</p>
        </div>
      </div>
      <div class="social-icons">
        <i class="pi pi-instagram" />
        <i class="pi pi-facebook" />
        <i class="pi pi-times" />
      </div>
    </div>
  </div>
  <h2 class="form-title">HAVE A QUESTION? CONTACT US!</h2>

  <div class="form-card">
    <div class="grid formgrid">
      <div class="field col-12 md:col-6">
        <label for="name">Name</label>
        <InputText
          v-model="form.name"
          id="name"
          class="w-full input focus:border-yellow-400 hover:border-yellow-400"
        />
      </div>
      <div class="field col-12 md:col-6">
        <label for="phone">Phone No</label>
        <InputText
          v-model="form.phone"
          id="phone"
          class="w-full input focus:border-yellow-400 hover:border-yellow-400"
        />
      </div>
      <div class="field col-12">
        <label for="email">Email Id</label>
        <InputText
          v-model="form.email"
          id="email"
          class="w-full input focus:border-yellow-400 hover:border-yellow-400"
        />
      </div>
      <div class="field col-12">
        <label for="message">Message</label>
        <Textarea
          v-model="form.message"
          id="message"
          rows="5"
          class="w-full input focus:border-yellow-400 hover:border-yellow-400"
        />
      </div>
    </div>
    <Button
      label="Submit"
      class="submit-button w-full mt-3"
      @click="submitForm"
    />
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

const form = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Form submitted:", form.value);
};
</script>
<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 8rem;
  color: white;
  font-family: "Times New Roman", serif;
  flex-wrap: wrap;
  margin-top: 6rem;
}

.title {
  font-size: 4.5rem;
  line-height: 1.25;
  margin: 0;
  color: white;
}

.contact-icons {
  display: flex;
  gap: 8rem;
  align-items: flex-start; /* giúp thẳng hàng trên cùng */
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
}

.contact-item:hover {
  background-color: #180318 !important;
}

.contact-item a,
.contact-item span {
  color: #fff;
  text-decoration: underline;
}

.contact-info {
  margin-top: 3rem;
}

.circle {
  background-color: #5f2c62;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.desc {
  border-left: 1px solid #a856dc;
  padding-left: 4rem;
  color: #ccc;
  font-size: 1.25rem;
}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: white;
}

.social-icons i {
  font-size: 1.5rem;
  display: flex;
}

.form-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: "Playfair Display", serif; /* Font chữ tương tự */
  color: #fff;
}

.form-card {
  border: 1px solid gold;
  border-radius: 2rem;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: transparent;
}

.input {
  border: 1px solid #cba4f3;
  background: transparent;
  color: white;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}

label {
  color: #cba4f3;
  margin-bottom: 0.25rem;
  display: block;
}

.submit-button {
  background-color: gold;
  border: none;
  color: black;
  border-radius: 1rem;
  font-weight: bold;
}

.submit-button:hover {
  background-color: #a34fa3 !important;
  border: none !important;
}
</style>
