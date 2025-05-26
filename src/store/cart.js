import { defineStore } from "pinia";
import axios from "axios";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
    isLoggedIn: false,
    userId: null,
    userName: "",
  }),
  actions: {
    async addToCart(item, quantity = 1) {
      if (!this.isLoggedIn) {
        console.log("User not logged in, cannot add to cart");
        return false;
      }
      try {
        console.log("Adding to cart:", {
          userId: this.userId,
          productId: item.id || item.product_id,
          quantity,
        });
        const response = await axios.post(
          "http://localhost:5734/api/cart",
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
          console.log("Item added successfully, refreshing cart...");
          await this.fetchCart();
          return true;
        }
        console.log("Failed to add item:", response.data);
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
        console.log("Removing item:", productId);
        const response = await axios.delete(
          `http://localhost:5734/api/cart/${productId}`,
          {
            data: { user_id: this.userId },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          console.log("Item removed successfully, refreshing cart...");
          await this.fetchCart();
          return true;
        }
        console.log("Failed to remove item:", response.data);
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
        console.log("User not logged in, skipping fetchCart");
        return;
      }
      try {
        console.log("Fetching cart for user:", this.userId);
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("No token found during fetchCart, cannot fetch cart");
          this.cartItems = [];
          return;
        }
        const response = await axios.get("http://localhost:5734/api/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
        this.cartItems = response.data.items;
        console.log("Cart updated:", this.cartItems);
      } catch (error) {
        console.error(
          "Error fetching cart:",
          error.response?.data || error.message
        );
        this.cartItems = [];
      }
    },
    async setUser(userId, userName, token) {
      console.log("setUser called with:", { userId, userName, token });
      this.isLoggedIn = true;
      this.userId = userId;
      this.userName = userName;
      localStorage.setItem("token", token);
      await this.fetchCart();
      console.log("State after setUser:", this.$state);
    },
    logout() {
      console.log("Logging out user - State before logout:", this.$state);
      console.trace("Logout called from:");
      this.isLoggedIn = false;
      this.userId = null;
      this.userName = "";
      this.cartItems = [];
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("userId");
      console.log("State after logout:", this.$state);
    },
  },
  subscribe: (mutation, state) => {
    if (mutation.type === "patch object") {
      console.log(
        "Pinia state mutation:",
        mutation.payload,
        "New state:",
        state
      );
      if ("userId" in mutation.payload) {
        console.log("userId changed to:", state.userId);
        if (state.userId === null) {
          console.trace("userId set to null from:");
        }
      }
    }
  },
});
