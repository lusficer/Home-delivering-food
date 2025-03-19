<script setup>
import { ref } from "vue";
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

// Dữ liệu cho testimonials
const testimonials = ref([
    {
        name: "Jacqueline Miller",
        type: "Local Foodies",
        comment: "Every staff member made us feel like royalty, attending to our every need with a smile.",
    },
    {
        name: "Joan Wallace",
        type: "Fine Dining Restaurant",
        comment: "Impeccable service, sophisticated ambiance, and a menu crafted with the finest ingredients await to elevate your dining experience.",
    },
    {
        name: "Billy Vasquez",
        type: "Family-Friendly Diner",
        comment: "From breakfast classics to hearty dinners, our diverse menu ensures there's something for every member of the family.",
    },
    {
        name: "Frances Guerrero",
        type: "Noodle House",
        comment: "From ramen to stir-fried delights, our menu is a celebration of the diverse and comforting world of noodles, served in a cozy and casual setting.",
    },
]);

// Dữ liệu cho form đăng ký
const email = ref("");
const submitted = ref(false);

function submitForm() {
    if (email.value) {
        submitted.value = true;
        setTimeout(() => {
            submitted.value = false;
            email.value = "";
        }, 3000);
    } else {
        alert("Please enter your email!");
    }
}
</script>

<template>
    <div class="body">
        <!-- Welcome Section -->
        <section class="welcome-section">
            <div class="overlay">
                <h1 class="playFair_font text-6xl text-white">Where Every Meal Feels Like Home</h1>
                <p class="text-2xl text-white mt-4">
                    Welcome to NVBlast, where we bring the heart of our kitchen to your table.
                </p>
                <Button label="Explore Our Menu" class="mt-6 p-button reserve-button"
                    @click="alert('Redirecting to menu...')" />
            </div>
        </section>

        <!-- About Section -->
        <section class="about-section">
            <div class="about-content">
                <div class="about-text">
                    <h2 class="playFair_font text-5xl color-orange mb-4">Inviting Guests to Enjoy the Communal and
                        Family Aspects of Dining</h2>
                    <p class="text-lg text-white">
                        Welcome to NVBlast, where we bring the heart of our kitchen to your table. Our journey began 11
                        years ago with a simple, yet profound dream to create a dining space that extends the warmth and
                        comfort of a family meal to everyone who walks through our doors. Born from a rich culinary
                        heritage and a passion for heartfelt hospitality, NVBlast is more than just a place to eat; it's
                        a place where memories are made and traditions are celebrated.
                    </p>
                </div>
                <div class="about-image">
                    <img src="/dinner.jpg" alt="Restaurant ambiance" class="rounded-image" />
                </div>
            </div>
            <div class="chef-section mt-8">
                <h2 class="playFair_font text-5xl color-orange mb-4 text-center">Discover the Masterminds of Flavor</h2>
                <p class="text-lg text-white text-center">
                    Chef Torres brings a rich culinary heritage from his roots in Spain, combined with over a decade of
                    experience in Mediterranean and Latin American cuisine. His passion for sustainable sourcing and a
                    farm-to-table philosophy ensures that every dish is not just delicious but responsibly crafted.
                </p>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="testimonials-section">
            <h2 class="playFair_font text-5xl color-orange mb-8 text-center">What Our Guests Say</h2>
            <div class="testimonials-grid">
                <Card v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
                    <template #title>
                        <h3 class="playFair_font">{{ testimonial.name }}</h3>
                    </template>
                    <template #subtitle>
                        <p class="text-lg color-orange">{{ testimonial.type }}</p>
                    </template>
                    <template #content>
                        <p>{{ testimonial.comment }}</p>
                    </template>
                </Card>
            </div>
        </section>

        <!-- Call to Action Section -->
        <section class="cta-section">
            <h2 class="playFair_font text-4xl text-white text-center">
                Explore the Art of Fine Dining with Our Exceptionally Crafted Menus
            </h2>
            <div class="cta-form mt-6">
                <h3 class="playFair_font text-2xl text-white mb-4">Stay in the Know</h3>
                <p class="text-lg text-white mb-4">Get the latest on our seasonal menus and exclusive offers!</p>
                <div v-if="submitted" class="success-message">
                    Thank you! Your submission has been received!
                </div>
                <div v-else class="form-input">
                    <InputText v-model="email" placeholder="Enter your email" class="p-inputtext-lg mr-4" />
                    <Button label="Subscribe" class="p-button reserve-button" @click="submitForm" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.body {
    padding-top: 80px;
    /* Để tránh bị che bởi navbar */
}

/* Welcome Section */
.welcome-section {
    position: relative;
    height: 80vh;
    background-image: url("/dinner(2).jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.overlay {
    background: rgba(0, 0, 0, 0.5);
    padding: 40px;
    border-radius: 10px;
}

/* About Section */
.about-section {
    padding: 60px 5%;
    background-color: #180318;
}

.about-content {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
}

.about-text {
    flex: 1;
    min-width: 300px;
}

.about-image {
    flex: 1;
    min-width: 300px;
}

.rounded-image {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 10px;
}

/* Testimonials Section */
.testimonials-section {
    padding: 60px 5%;
    background-color: #2a0a2a;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background-color: #180318;
    border-radius: 10px;
}

/* Call to Action Section */
.cta-section {
    padding: 60px 20px;
    background-color: #f9b233;
    text-align: center;
}

.cta-form {
    max-width: 500px;
    margin: 0 auto;
}

.form-input {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.success-message {
    color: white;
    font-size: 1.2rem;
}

.p-inputtext-lg {
    width: 300px;
}

/* Common Styles */
.playFair_font {
    font-family: "Playfair Display", serif;
}

.color-orange {
    color: #f9b233 !important;
}

.reserve-button {
    background-color: #f9b233 !important;
    border: none !important;
    border-radius: 200px !important;
    color: black;
    font-weight: bold;
}

.p-button {
    background-color: #f9b233 !important;
    border: none !important;
    color: black;
}
</style>