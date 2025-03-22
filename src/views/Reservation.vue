<template>
  <div class="reservation-form">
    <h2>Make a Reservation</h2>
    <form @submit.prevent="submitReservation">
      <label>Name:</label>
      <input v-model="name" required />
      
      <label>Date:</label>
      <input type="date" v-model="date" required />
      
      <label>Time:</label>
      <input type="time" v-model="time" required />

      <button type="submit">Book Now</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const date = ref("");
const time = ref("");

const submitReservation = () => {
  console.log("Reservation submitted:", { name: name.value, date: date.value, time: time.value });
};
</script>

<style scoped>
.reservation-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
