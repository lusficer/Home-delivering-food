import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
    isLoggedIn: false,
    userId: null,
    userPhone: "", // Thêm trường phone
    userName: "",
  }),
  actions: {
    async addToCart(item, quantity = 1) {
      if (!this.isLoggedIn) {
        return false;
      }
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/cart`,
          {
            user_id: this.userId,
            product_id: item.id || item.product_id,
            quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          await this.fetchCart();
          return true;
        }
        return false;
      } catch (error) {
        console.error(
          "Error adding to cart:",
          error.response?.data || error.message
        );
        return false;
      }
    },
    async removeItem(productId) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_URL}/api/cart/${productId}`,
          {
            data: { user_id: this.userId },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          await this.fetchCart();
          return true;
        }
        return false;
      } catch (error) {
        console.error(
          "Error removing item:",
          error.response?.data || error.message
        );
        return false;
      }
    },
    async fetchCart() {
      if (!this.isLoggedIn) {
        return;
      }
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          this.cartItems = [];
          return;
        }
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/cart`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        this.cartItems = response.data.items;
      } catch (error) {
        console.error(
          "Error fetching cart:",
          error.response?.data || error.message
        );
        this.cartItems = [];
      }
    },
    async setUser(userId, userName, token, phone = "") {
      this.isLoggedIn = true;
      this.userId = userId;
      this.userName = userName;
      this.userPhone = phone; // Lưu phone
      localStorage.setItem("token", token);
      await this.fetchCart();
    },
    logout() {
      this.isLoggedIn = false;
      this.userId = null;
      this.userName = "";
      this.userPhone = ""; // Reset phone
      this.cartItems = [];
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("userId");
    },
  },
});
