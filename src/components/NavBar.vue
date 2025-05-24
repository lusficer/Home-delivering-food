<template>
  <div class="navbar absolute w-full">
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

            <div class="menu-title"></div>

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
        <Image
          src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b37dca20c9b0c68f52979d_nvblast.svg"
          class="ml-8 pl-7"
        >
        </Image>
      </template>
      <template #end>
        <div class="right-section">
          <div>
            <i
              class="pi pi-search search-icon color-orange mr-4"
              style="font-size: 1.25rem"
            ></i>
            <span class="cart color-orange text-xl">Cart (0)</span>
          </div>

          <!-- Nếu chưa login: hiện nút Login mở dialog -->
          <div v-if="!isLoggedIn">
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

export default {
  components: {
    Image,
    Toolbar,
    Button,
    InputText,
    Dialog,
    Menu,
  },
  data() {
    return {
      menuItems: [],
      position: "center",
      visible: false,

      isLoggedIn: false,
      userName: "",
      loginEmail: "",
      loginPassword: "",
      showLoginDialog: false,

      loginError: "", // để hiển thị lỗi
      accountMenuItems: [
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          command: () => {
            this.logout();
          },
        },
      ],
    };
  },
  methods: {
    openPosition(position) {
      this.position = position;
      this.visible = true;
    },

    toggleAccountMenu(event) {
      this.$refs.accountMenu.toggle(event);
    },

    async login() {
      if (!this.userName || !this.loginPassword) {
        this.loginError = "Please enter username and password";
        return;
      }

      try {
        const res = await axios.post("http://localhost:5734/api/user/login", {
          name: this.userName,
          email: this.loginEmail,
          password: this.loginPassword,
        });

        if (res.data && res.data.token) {
          // Lưu token localStorage (hoặc Vuex, Pinia,...)
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.user.name);

          this.isLoggedIn = true;
          this.userName = res.data.user.name || this.userName;
          this.loginEmail = "";
          this.loginPassword = "";
          this.showLoginDialog = false;
          this.loginError = "";

          // TODO: bạn có thể thiết lập axios header Authorization ở đây nếu cần
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${res.data.token}`;
        } else {
          this.loginError = "Login failed: no token received";
        }
      } catch (error) {
        this.loginError = error.response?.data?.message || "Login failed";
      }
    },

    logout() {
      this.isLoggedIn = false;
      this.userName = "";
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  mounted() {
    // Nếu có token trong localStorage thì giả lập đang login
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (token) {
      this.isLoggedIn = true;
      // Bạn có thể decode token hoặc gọi API get info user để lấy tên user
      this.userName = name; // tạm đặt tên
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  },
};
</script>

<style scoped>
.navbar {
  background: transparent !important;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  z-index: 10;
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
  transition: color 0.5s ease; /* Chỉ transition màu chữ */
}

.reserve-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: #fff6ff; /* Màu khi hover */
  border-radius: 200px;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: width 1s ease, height 0.5s ease; /* Transition cho chiều rộng và cao */
}

.reserve-button:hover {
  color: #180318 !important;
  border: 1px solid #fff6ff !important;
}

.reserve-button:hover::before {
  width: 200%; /* Lan rộng hơn kích thước button */
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
  height: 24rem;
  padding: 0 5%;
}

.image-scroller {
  width: 200px; /* Điều chỉnh kích thước cột */
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
  width: 180px;
  height: auto;
  border-radius: 200px 200px 0 0;
  margin: 20px 0;
}

/* Hiệu ứng cuộn liên tục */
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

/* Tùy chỉnh hover cho nút menu */
.menu-button {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.menu-button:hover {
  background-color: #f9b233 !important; /* Màu tím khi hover */
  color: white !important; /* Màu chữ trắng khi hover */
}
.login-dialog-content .p-inputtext-sm {
  font-size: 0.9rem;
  padding: 8px 10px;
}

.login-dialog-content .p-inputtext-sm:hover {
  border: 1px solid #f9b233;
}
.login-dialog-content .p-inputtext-sm:focus {
  border: 1px solid #f9b233;
}

.login-dialog-content .w-full {
  width: 100%;
}

.login-dialog-content .mb-3 {
  margin-bottom: 0.75rem;
}

.login-dialog-content .mb-4 {
  margin-bottom: 1rem;
}
</style>
