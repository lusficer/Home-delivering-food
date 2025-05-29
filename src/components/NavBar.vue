<template>
  <div class="navbar fixed w-full" :class="{ scrolled: isScrolled }">
    <Toolbar
      class="w-full border-none border-bottom-3 border-yellow-400 bg-transparent"
    >
      <template #start>
        <Button
          icon="pi pi-bars"
          size="large"
          class="menu-button p-button-text color-orange border-none border-right-3 border-yellow-500 mr-8"
          @click="openPosition('top')"
        />
        <Dialog
          v-model:visible="visible"
          modal
          :position="position"
          :style="{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#180318',
          }"
        >
          <div class="w-full flex justify-content-center">
            <div class="text-8xl playFair_font">Menu</div>
          </div>
          <div class="menu-container">
            <div class="image-scroller left">
              <div class="image-wrapper">
                <img src="../../public/Beverage.jpg" alt="Food 1" />
                <img src="../../public/Beverage(1).jpg" alt="Food 2" />
                <img src="../../public/Beverage(2).jpg" alt="Food 3" />
                <img
                  src="../../public/Beverage/close-up-fresh-coffee-with-sugar-ready-be-served_23-2148463988.jpg"
                  alt="Food 4"
                />
              </div>
            </div>
            <div>
              <div class="menu-grid">
                <button class="menu-item" @click="navigateTo('/')">Home</button>
                <button class="menu-item" @click="navigateTo('/about')">
                  About
                </button>
                <button class="menu-item" @click="navigateTo('/menu')">
                  Menu
                </button>
                <button class="menu-item" @click="navigateTo('/reservation')">
                  Reservation
                </button>
                <button class="menu-item" @click="navigateTo('/gallery')">
                  Gallery
                </button>
                <button class="menu-item" @click="navigateTo('/Chief')">
                  Chief
                </button>
                <button class="menu-item" @click="navigateTo('/contact')">
                  Contact
                </button>
              </div>
              <div class="dialog-footer mt-8 relative">
                <div class="footer-content">
                  <!-- Call for Reservation -->
                  <div class="reservation-call">
                    <p class="call-text">CALL FOR RESERVATION</p>
                    <a href="tel:+1234567892" class="phone-number"
                      >+123 456 7892</a
                    >
                  </div>

                  <!-- Social Media -->
                  <div class="social-media">
                    <p class="social-text">Follow us on social media.</p>
                    <div class="social-icons">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        class="social-icon"
                      >
                        <i class="pi pi-facebook"></i>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        class="social-icon"
                      >
                        <i class="pi pi-twitter"></i>
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        class="social-icon"
                      >
                        <i class="pi pi-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Decoration Image -->
                <div class="decoration-image absolute">
                  <img
                    src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b38e1b8476081164cfc6ae_decoration-03.svg"
                    alt="Decoration"
                    class="decoration"
                  />
                </div>
              </div>
            </div>

            <div class="image-scroller right">
              <div class="image-wrapper">
                <img src="../../public/dinner.jpg" alt="Food 1" />
                <img src="../../public/dinner(1).jpg" alt="Food 2" />
                <img src="../../public/dinner(2).jpg" alt="Food 3" />
                <img src="../../public/dinner(3).jpg" alt="Food 4" />
              </div>
            </div>
          </div>
        </Dialog>
      </template>
      <template #center>
        <RouterLink to="/" class="Image-link"
          ><Image
            src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b37dca20c9b0c68f52979d_nvblast.svg"
            class="ml-8 pl-7"
          >
          </Image
        ></RouterLink>
      </template>
      <template #end>
        <div class="right-section">
          <!-- Nếu chưa login: hiện nút Login mở dialog -->
          <div v-if="!cartStore.isLoggedIn">
            <Button
              label="Login"
              size="large"
              class="p-button-text color-orange"
              @click="showLoginDialog = true"
            />
          </div>

          <!-- Nếu đã login: hiện tên user và nút logout -->
          <div
            v-else
            class="user-info flex align-items-center color-orange relative"
          >
            <Button
              class="p-button-text color-orange mr-3"
              @click="openCartDialog"
            >
              Cart ({{ cartStore.cartItems.length }})
            </Button>

            <Button
              class="p-button-text color-orange"
              aria-haspopup="true"
              aria-controls="account_menu"
              @click="$refs.accountMenu.toggle($event)"
              >Hi, {{ userName }}</Button
            >
            <Menu
              ref="accountMenu"
              :model="accountMenuItems"
              popup
              id="account_menu"
            />
          </div>

          <Button
            size="large"
            label="Reserve my table"
            class="reserve-button p-3"
            @click="navigateTo('/reservation')"
          />
        </div>

        <!-- Dialog login -->
        <Dialog
          header="Login"
          v-model:visible="showLoginDialog"
          modal
          closable
          style="width: 350px"
          :dismissable-mask="true"
        >
          <div class="login-dialog-content">
            <InputText
              v-model="userName"
              placeholder="UserName"
              class="p-inputtext-sm w-full mb-3"
              type="text"
              autocomplete="username"
            />
            <InputText
              v-model="loginPassword"
              placeholder="Password"
              type="password"
              class="p-inputtext-sm w-full mb-1"
              autocomplete="current-password"
              @keyup.enter="login"
            />

            <small
              v-if="loginError"
              style="color: red; margin-bottom: 10px; display: block"
            >
              {{ loginError }}
            </small>

            <Button
              label="Login"
              class="w-full bg-orange-500 border-none mt-3"
              @click="login"
            />
            <Button
              label="Register"
              class="w-full bg-transparent border-orange-500 text-orange-500 mt-2"
              @click="openRegisterDialog"
            />
          </div>
        </Dialog>

        <!-- Dialog register -->
        <Dialog
          header="Register"
          v-model:visible="showRegisterDialog"
          modal
          closable
          style="width: 350px"
          :dismissable-mask="true"
        >
          <div class="register-dialog-content">
            <InputText
              v-model="registerName"
              placeholder="UserName"
              class="p-inputtext-sm w-full mb-3"
              type="text"
              autocomplete="username"
            />
            <InputText
              v-model="registerEmail"
              placeholder="Email"
              class="p-inputtext-sm w-full mb-3"
              type="email"
              autocomplete="email"
            />
            <InputText
              v-model="phone"
              placeholder="Phone Number"
              type="tel"
              class="p-inputtext-sm w-full mb-3"
              autocomplete="phone"
            />
            <InputText
              v-model="registerPassword"
              placeholder="Password"
              type="password"
              class="p-inputtext-sm w-full mb-1"
              autocomplete="new-password"
              @keyup.enter="register"
            />

            <small
              v-if="registerError"
              style="color: red; margin-bottom: 10px; display: block"
            >
              {{ registerError }}
            </small>

            <Button
              label="Register"
              class="w-full bg-orange-500 border-none mt-3"
              @click="register"
            />
          </div>
        </Dialog>

        <!-- Cart Dialog -->
        <Dialog
          v-model:visible="showCartDialog"
          :modal="false"
          :closable="true"
          :position="'right'"
          :style="{
            width: '400px',
            height: '100vh',
            backgroundColor: '#180318',
          }"
          class="cart-dialog"
        >
          <template #header>
            <h3 class="text-white m-0">YOUR CART</h3>
          </template>

          <div
            v-if="cartStore.cartItems.length === 0"
            class="empty-cart flex flex-column align-items-center justify-content-center h-full"
          >
            <!-- Placeholder for cart illustration -->
            <div class="cart-illustration mb-4">
              <Image
                height="600"
                width="350"
                src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b48b1f6ab2d2a7c5617a9a_empty-cart.svg"
              ></Image>
            </div>

            <Button
              label="See our menu"
              class="p-button-rounded bg-yellow-500 border-none text-black w-5"
              @click="navigateTo('/menu')"
            />
          </div>

          <div v-else class="cart-items">
            <div
              v-for="item in cartStore.cartItems"
              :key="item.product_id"
              class="cart-item flex justify-content-between align-items-center mb-3"
            >
              <div class="flex flex-column">
                <span class="text-white font-bold">{{ item.name }}</span>
                <span class="text-gray-400 text-sm">{{ item.price }}</span>
              </div>
              <div class="flex align-items-center">
                <Button
                  icon="pi pi-minus"
                  class="p-button-rounded p-button-text p-button-sm text-white mr-2"
                  @click="decreaseQuantity(item)"
                />
                <span class="text-white">{{ item.quantity }}</span>
                <Button
                  icon="pi pi-plus"
                  class="p-button-rounded p-button-text p-button-sm text-white ml-2 mr-2"
                  @click="increaseQuantity(item)"
                />
                <Button
                  icon="pi pi-trash"
                  class="p-button-rounded p-button-text p-button-sm text-white"
                  @click="removeItem(item)"
                />
              </div>
            </div>
            <Button
              label="Checkout"
              class="w-full bg-yellow-500 border-none mt-4 text-black"
              @click="openCheckoutDialog"
            />
          </div>
        </Dialog>
        <!-- Dialog checkout -->
        <Dialog
          header="Checkout Information"
          v-model:visible="showCheckoutDialog"
          modal
          closable
          style="width: 400px"
          :dismissable-mask="true"
        >
          <div class="checkout-dialog-content">
            <InputText
              v-model="recipientName"
              placeholder="Recipient Name"
              class="p-inputtext-sm w-full mb-3"
              type="text"
              autocomplete="name"
            />
            <InputText
              v-model="recipientPhone"
              placeholder="Phone Number"
              class="p-inputtext-sm w-full mb-3"
              type="tel"
              autocomplete="tel"
            />
            <InputText
              v-model="recipientAddress"
              placeholder="Address"
              class="p-inputtext-sm w-full mb-3"
              type="text"
              autocomplete="address-line1"
            />

            <small
              v-if="checkoutError"
              style="color: red; margin-bottom: 10px; display: block"
            >
              {{ checkoutError }}
            </small>

            <Button
              label="Confirm Checkout"
              class="w-full bg-orange-500 border-none mt-3"
              @click="confirmCheckout"
            />
          </div>
        </Dialog>
      </template>
    </Toolbar>
  </div>
</template>

<script>
import axios from "axios";
import Image from "primevue/image";
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import { useCartStore } from "@/store/cart";
import { RouterLink } from "vue-router";
export default {
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
  components: {
    Image,
    Toolbar,
    Button,
    InputText,
    Dialog,
    Menu,
    RouterLink,
  },
  data() {
    return {
      menuItems: [],
      position: "center",
      visible: false,
      cartItems: [],
      isLoggedIn: false,
      userName: "",
      loginEmail: "",
      loginPassword: "",
      showLoginDialog: false,
      showCartDialog: false,
      loginError: "",
      accountMenuItems: [
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          command: () => {
            this.logout();
          },
        },
      ],
      isScrolled: false,
      showCheckoutDialog: false,
      recipientName: "",
      recipientPhone: "",
      recipientAddress: "",
      checkoutError: "",
      showRegisterDialog: false,
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      registerError: "",
    };
  },
  methods: {
    openPosition(position) {
      this.position = position;
      this.visible = true;
    },
    navigateTo(path) {
      this.$router.push(path);
      this.visible = false;
      this.showCartDialog = false;
    },
    openCartDialog() {
      this.showCartDialog = true;
    },
    async login() {
      if (!this.userName || !this.loginPassword) {
        this.loginError = "Please enter username and password";
        return;
      }
      try {
        const res = await axios.post("http://localhost:5734/api/user/login", {
          name: this.userName,
          password: this.loginPassword,
        });
        if (res.data && res.data.token && res.data.user) {
          await this.cartStore.setUser(
            res.data.user.id,
            res.data.user.name,
            res.data.token,
            res.data.user.phone // Lưu phone từ API
          );
          localStorage.setItem("name", res.data.user.name);
          this.loginPassword = "";
          this.showLoginDialog = false;
          this.loginError = "";
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "Logged in successfully",
            life: 3000,
          });
        } else {
          this.loginError = "Login failed: No token or user data received";
        }
      } catch (error) {
        this.loginError = error.response?.data?.message || "Login failed";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.loginError,
          life: 3000,
        });
        console.error("Login error:", error.response?.data || error.message);
      }
    },
    logout() {
      this.cartStore.logout();
      this.$toast.add({
        severity: "success",
        summary: "Success",
        detail: "Logged out successfully",
        life: 3000,
      });
    },
    async increaseQuantity(item) {
      const success = await this.cartStore.addToCart(item, 1);
      if (success) {
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: `Increased quantity of ${item.name}`,
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to update quantity",
          life: 3000,
        });
      }
    },
    async decreaseQuantity(item) {
      const success = await this.cartStore.addToCart(item, -1);
      if (success) {
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: `Decreased quantity of ${item.name}`,
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to update quantity",
          life: 3000,
        });
      }
    },
    async removeItem(item) {
      const success = await this.cartStore.removeItem(item.product_id);
      if (success) {
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: `${item.name} removed from cart`,
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: "Failed to remove item",
          life: 3000,
        });
      }
    },
    async confirmCheckout() {
      if (
        !this.recipientName ||
        !this.recipientPhone ||
        !this.recipientAddress
      ) {
        this.checkoutError = "Please fill in all fields";
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:5734/api/checkout",
          {
            user_id: this.cartStore.userId,
            recipient_name: this.recipientName,
            recipient_phone: this.recipientPhone,
            recipient_address: this.recipientAddress,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          this.cartStore.cartItems = [];
          this.showCheckoutDialog = false;
          this.showCartDialog = false;
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "Checkout completed successfully",
            life: 3000,
          });
        }
      } catch (error) {
        this.checkoutError = error.response?.data?.message || "Checkout failed";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.checkoutError,
          life: 3000,
        });
        console.error("Checkout error:", error.response?.data || error.message);
      }
    },
    openCheckoutDialog() {
      this.showCheckoutDialog = true;
      if (this.cartStore.isLoggedIn) {
        this.recipientName = this.cartStore.userName; // Điền tên người dùng
        this.recipientPhone = this.cartStore.userPhone || ""; // Điền số điện thoại nếu có
        console.log(this.cartStore);
      } else {
        this.recipientName = "";
        this.recipientPhone = "";
      }
      this.recipientAddress = ""; // Luôn để trống
      this.checkoutError = "";
    },
    openRegisterDialog() {
      this.showLoginDialog = false; // Đóng dialog login
      this.showRegisterDialog = true; // Mở dialog register
      this.registerName = "";
      this.registerEmail = "";
      this.registerPassword = "";
      this.registerError = "";
    },
    async register() {
      if (!this.registerName || !this.registerEmail || !this.registerPassword) {
        this.registerError = "Please fill in all fields";
        return;
      }
      try {
        const res = await axios.post("http://localhost:5734/api/user/create", {
          name: this.registerName,
          email: this.registerEmail,
          password: this.registerPassword,
          phone: this.phone,
        });
        if (res.data.success) {
          this.showRegisterDialog = false; // Đóng dialog register
          this.registerError = "";
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "Registration successful! Please login.",
            life: 3000,
          });
          this.showLoginDialog = true; // Mở lại dialog login
        }
      } catch (error) {
        this.registerError =
          error.response?.data?.message || "Registration failed";
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: this.registerError,
          life: 3000,
        });
        console.error("Register error:", error.response?.data || error.message);
      }
    },
    handleScroll() {
      console.log("Scroll event triggered, scrollY:", window.scrollY); // Gỡ lỗi
      this.isScrolled = window.scrollY > 0;
      console.log("isScrolled updated to:", this.isScrolled); // Gỡ lỗi
    },
  },
  mounted() {
    const name = localStorage.getItem("name");
    if (name) {
      this.userName = name;
    }
    console.log("Adding scroll event listener"); // Gỡ lỗi
    window.addEventListener("scroll", this.handleScroll);
    // Kiểm tra ban đầu
    this.handleScroll();
  },
  beforeUnmount() {
    console.log("Removing scroll event listener"); // Gỡ lỗi
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
.p-dialog {
  max-height: 100% !important;
  margin: 0 !important;
}

.p-dialog-content {
  height: 100%;
  width: 100%;
}

.navbar {
  background: transparent !important;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  z-index: 1000;
  transition: background-color 0.3s ease;
}

.navbar.scrolled {
  background-color: white !important;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.right-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #f9b233;
}

.search-bar {
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}

.search-icon {
  color: white;
  cursor: pointer;
}

.cart {
  color: white;
}

.reserve-button {
  position: relative;
  background-color: #f9b233 !important;
  border: none !important;
  border-radius: 200px !important;
  color: black;
  font-weight: bold;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease;
}

.reserve-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: #fff6ff;
  border-radius: 200px;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: width 1s ease, height 0.5s ease;
}

.reserve-button:hover {
  color: #180318 !important;
  border: 1px solid #fff6ff !important;
}

.reserve-button:hover::before {
  width: 200%;
  height: 200%;
}

.color-orange {
  color: #f9b233 !important;
}

.playFair_font {
  font-family: "Playfair Display", serif;
}

.menu-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35rem;
  padding: 0 5%;
}

.image-scroller {
  width: 300px;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  animation-duration: 10s;
}

.image-scroller.left .image-wrapper {
  animation: bounceScroll 6s linear infinite alternate;
}

.image-scroller.right .image-wrapper {
  animation: bounceScrollUp 6s linear infinite alternate;
}

.image-wrapper img {
  width: 80%;
  height: auto;
  border-radius: 200px 200px 0 0;
  margin: 20px 0;
}

@keyframes bounceScroll {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
}

@keyframes bounceScrollUp {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0%);
  }
}

.menu-button {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.menu-button:hover {
  background-color: #f9b233 !important;
  color: white !important;
}

.login-dialog-content .p-inputtext-sm,
.register-dialog-content .p-inputtext-sm {
  font-size: 0.9rem;
  padding: 8px 10px;
}

.login-dialog-content .p-inputtext-sm:hover,
.register-dialog-content .p-inputtext-sm:hover {
  border: 1px solid #f9b233;
}

.login-dialog-content .p-inputtext-sm:focus,
.register-dialog-content .p-inputtext-sm:focus {
  border: 1px solid #f9b233;
}

.login-dialog-content .w-full,
.register-dialog-content .w-full {
  width: 100%;
}

.login-dialog-content .mb-3,
.register-dialog-content .mb-3 {
  margin-bottom: 0.75rem;
}

.login-dialog-content .mb-1,
.register-dialog-content .mb-1 {
  margin-bottom: 0.25rem;
}

.checkout-dialog-content .p-inputtext-sm {
  font-size: 0.9rem;
  padding: 8px 10px;
}

.checkout-dialog-content .p-inputtext-sm:hover {
  border: 1px solid #f9b233;
}

.checkout-dialog-content .p-inputtext-sm:focus {
  border: 1px solid #f9b233;
}

.checkout-dialog-content .w-full {
  width: 100%;
}

.checkout-dialog-content .mb-3 {
  margin-bottom: 0.75rem;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem 10rem;
  font-family: "Playfair Display", serif;
}

.menu-item {
  background: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: left;
  padding: 0;
  font-family: "Playfair Display", serif;
  padding-bottom: 1rem;
}

.menu-item:hover {
  color: #f9b233;
}

.dialog-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
}

.reservation-call {
  text-align: left;
}

.call-text {
  color: white;
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-family: "Playfair Display", serif;
}

.phone-number {
  color: white;
  font-size: 1.75rem;
  text-decoration: none;
}

.phone-number:hover {
  background-color: unset;
}

.social-media {
  text-align: right;
}

.social-text {
  color: #c2bec2;
  font-size: 1.2rem;
  margin-bottom: 5px;
  font-family: "Playfair Display", serif;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons i {
  font-size: 2.5rem;
}

.social-icon {
  text-decoration: none;
  color: white;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.decoration-image {
  top: 2rem;
}

.decoration {
  width: 10rem;
  height: auto;
  opacity: 0.3;
  transform: rotate(20deg);
}

.Image-link:hover {
  background-color: unset;
}
</style>
