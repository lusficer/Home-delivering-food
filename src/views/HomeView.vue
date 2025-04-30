<template>
  <div class="app-container relative overflow-hidden">
    <!-- Hero Section: Video background and introductory content -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-screen object-cover z-0"
    >
      <source
        src="/65d70d5f3cf805cf55a13e0a_home-01-transcode.mp4"
        type="video/mp4"
      />
      Trình duyệt của bạn không hỗ trợ video.
    </video>

    <div
      class="b-blur absolute top-0 left-0 right-0 bottom-0 w-screen"
      style="height: 70rem"
    ></div>

    <div class="home-view relative z-1">
      <NavBar />
      <div class="content mb-5 text-white text-center">
        <h1 class="custom-p font-bold mb-4" style="font-size: 7.5rem">
          Where every meal feels like home
        </h1>
        <p class="text-xl custom-p">
          A high-resolution, mouth-watering image of a signature dish, such as a
          classic Italian pasta or a wood-fired pizza. The image should evoke
          the ambiance of the restaurant.
        </p>
        <Button
          icon="pi pi-arrow-right"
          size="large"
          class="button mt-2 color-red border-circle border-yellow-400 bg-yellow-400 mr-8"
          @click="openPosition('top')"
        />
      </div>
    </div>

    <!-- Menu Link Section: Displays menu categories with images -->
    <div
      class="Menu-link z-10 custom-bg w-screen relative"
      style="height: 70rem"
    >
      <div
        class="absolute navbar-menu flex justify-content-center gap-5 ml-8 pl-5"
      >
        <router-link
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.link"
          class="image-card group"
        >
          <Image
            :src="item.src"
            width="250"
            height="350"
            :alt="item.label"
            imageClass="card-img"
          />
          <div class="overlay group-hover:opacity-100">
            <span class="overlay-text">{{ item.label }}</span>
          </div>
        </router-link>
      </div>
      <h1
        class="text-7xl mr-8 ml-8 pl-8 pr-8 font-bold mb-4 mt-8 pt-8 custom-color"
      >
        Inviting guests to enjoy the communal and family aspects of dining
      </h1>
      <div
        class="flex align-content-center justify-content-center flex-wrap pt-6"
      >
        <Image
          src="/Breakfast/Egg.jpg"
          width="500"
          height="660"
          imageClass="border_round"
          style="padding: 0 3rem 0 3rem"
        />
        <div class="w-8" style="padding: 0 8rem 0 8rem">
          <p class="custom-color mb-8 text-xl">
            Welcome to NvBlast, where we bring the heart of our kitchen to your
            table. Our journey began 11 years ago with a simple, yet profound
            dream to create a dining space that extends the warmth and comfort
            of a family meal to everyone who walks through our doors. Born from
            a rich culinary heritage and a passion for heartfelt hospitality,
            NvBlast is more than just a place to eat; it's a place where
            memories are made and traditions are celebrated.
          </p>
          <Button
            icon="pi pi-arrow-right"
            size="large"
            class="button mt-2 color-red border-circle border-yellow-400 bg-yellow-400 mr-8"
            @click="openPosition('top')"
          />
          <div class="flex text-5xl justify-content-center flex-wrap mt-8">
            <p class="custom-color" style="width: 40rem">
              We believe that the best meals are those filled with the flavors
              of love, care, and tradition.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Signature Section: Displays signature dishes -->
    <div class="signature-section">
      <h2 class="title">OUR SIGNATURE DELIGHTS</h2>
      <div class="grid">
        <div
          v-for="(item, index) in menu"
          :key="index"
          class="item relative overflow-hidden"
        >
          <Image
            :src="item.image"
            :alt="item.name"
            width="280"
            height="320"
            imageClass="signature-img"
          />
          <div
            class="content relative z-10 transition-opacity duration-500 text-center px-4 py-6"
          >
            <p class="type italic text-purple-400">| {{ item.type }} |</p>
            <h3 class="name text-2xl font-bold text-white">{{ item.name }}</h3>
            <p class="desc text-sm text-gray-300">{{ item.desc }}</p>
            <p class="price text-yellow-400 text-xl mt-2 font-semibold">
              {{ item.price }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Masterminds Section: Introduces the chef and testimonials -->
    <div class="masterminds-section custom-bg">
      <!-- Chef Information -->
      <div class="masterminds-container">
        <div class="masterminds-content">
          <h2 class="masterminds-title">DISCOVER THE MASTERMINDS OF FLAVOR</h2>
          <h3 class="chef-name">CHEF MIGUEL TORRES</h3>
          <div class="chef-info">
            <p><i class="pi pi-book"></i> Total recipes: 350+</p>
            <p><i class="pi pi-star"></i> Speciality: Expert in Seafood</p>
            <p><i class="pi pi-clock"></i> Experiences: 7 years</p>
            <p><i class="pi pi-award"></i> Recognition: Rising star chef</p>
          </div>
          <div class="social-links">
            <span class="follow-text">Follow on:</span>
            <a href="#" class="social-icon"><i class="pi pi-instagram"></i></a>
            <a href="#" class="social-icon"><i class="pi pi-facebook"></i></a>
            <a href="#" class="social-icon"><i class="pi pi-youtube"></i></a>
          </div>
          <p class="chef-description">
            Chef Torres brings a rich culinary heritage from his roots in Spain,
            combined with over a decade experience in the Mediterranean and
            Latin American cuisine. His passion for sustainable sourcing and a
            farm-to-table philosophy ensures that every dish is not just
            delicious but responsibly crafted.
          </p>
          <Button label="View details" class="view-details-btn" />
        </div>
        <div class="masterminds-image" style="height: 45rem">
          <Image
            src="Chef/chef5.jpg"
            alt="Chef Miguel Torres"
            width="600"
            height="500"
            imageClass="chef-img"
          />
        </div>
      </div>

      <!-- Testimonial Section -->
      <div class="testimonial-section">
        <div class="divider horizontal right mb-5"></div>
        <div class="divider vertical top mb-5"></div>
        <div class="testimonial-content">
          <Button
            icon="pi pi-chevron-left"
            class="nav-btn mr-8"
            @click="prevTestimonial"
          />
          <div class="testimonial-text">
            <p class="testimonial-subtitle">
              "{{ currentTestimonial.sub_title }}"
            </p>
            <p class="testimonial-title">"{{ currentTestimonial.title }}"</p>
            <p class="quote">"{{ currentTestimonial.quote }}"</p>
            <p class="author">- {{ currentTestimonial.author }}</p>
          </div>
          <Button
            icon="pi pi-chevron-right"
            class="nav-btn ml-8"
            @click="nextTestimonial"
          />
        </div>
        <div class="divider vertical bottom mt-5"></div>
      </div>
    </div>

    <!-- Explore Section: Promotes dining experience with images and subscription form -->
    <div class="explore-section">
      <div class="explore-images">
        <div class="image-container right">
          <div class="image-background"></div>
          <Image
            src="Restaurant/restaurant-luxury-interior-design-dark-lightning_114579-2492.avif"
            alt="Save a Seat in Flavor Paradise"
            width="200"
            height="400"
            imageClass="explore-img pt-7"
          />
          <p class="image-label w-9 pl-6">SEE WHAT'S COOKING</p>
        </div>
        <div class="image-container flex align-content-around flex-wrap left">
          <div class="image-background-left">
            <Image
              src="Restaurant/grey-painted-fancy-restaurant-with-empty-dinner-table_140725-8729.jpg"
              alt="See What's Cooking"
              width="350"
              height="250"
              imageClass="explore-img"
            />
            <p class="image-label custom-color pt-7 w-20rem mt-3">
              SAVE A SEAT IN FLAVOR PARADISE
            </p>
          </div>
        </div>
      </div>
      <div class="explore-content">
        <h2 class="explore-title">
          EXPLORE THE ART OF FINE DINING WITH OUR EXCEPTIONALLY CRAFTED MENUS
        </h2>
        <div class="subscribe-section">
          <p class="subscribe-heading">Stay in the Know</p>
          <p class="subscribe-subheading">
            Get the latest on our seasonal menus & exclusive offers!
          </p>
          <div class="subscribe-form flex flex-column align-items-center">
            <InputText
              v-model="email"
              placeholder="Enter your email address"
              class="email-input"
            />
            <Button label="Subscribe" class="subscribe-btn" />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <Footer class="z-10 relative" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Button from "primevue/button";
import Image from "primevue/image";
import InputText from "primevue/inputtext";

export default {
  components: {
    NavBar,
    Footer,
    Button,
    Image,
    InputText,
  },
  data() {
    return {
      // Menu items for the Menu Link section
      menuItems: [
        {
          label: "Breakfast",
          src: "/Breakfast/Egg.jpg",
          link: "/menu/breakfast",
        },
        {
          label: "Brunch",
          src: "/Brunch/Burrito(3).jpg",
          link: "/menu/brunch",
        },
        {
          label: "Lunch",
          src: "/Lunch/Pizza.jpg",
          link: "/menu/lunch",
        },
        {
          label: "Dinner",
          src: "/Dinner/Cake.jpg",
          link: "/menu/dinner",
        },
        {
          label: "Dessert",
          src: "/Dessert/lemon-cheesecake-table_140725-7371.jpg",
          link: "/menu/dessert",
        },
        {
          label: "Beverage",
          src: "/Beverage/cake-wooden-table_155003-2443.jpg",
          link: "/menu/beverage",
        },
      ],
      // Signature dishes for the Signature Section
      menu: [
        {
          type: "Breakfast",
          name: "EGGS BENEDICT",
          desc: "Poached eggs, Canadian bacon, English muffin, hollandaise sauce.",
          price: "$45.00 USD",
          image: "/Breakfast/Egg.jpg",
          link: "/menu/breakfast",
        },
        {
          type: "Beverage",
          name: "BREWED COFFEE",
          desc: "Coffee Beans, Filtered Water, Milk or Cream, Sugar.",
          price: "$125.00 USD",
          image:
            "/Beverage/delicious-coffee-cups-arrangement_23-2149600728.avif",
          link: "/menu/beverage",
        },
        {
          type: "Lunch",
          name: "FISH TACOS",
          desc: "White fish fillets, Corn or flour tortillas, Cabbage slaw, Avocado, Lime, and Cilantro.",
          price: "$67.39 USD",
          image: "/Lunch/Tacos.jpg",
          link: "/menu/lunch",
        },
        {
          type: "Dessert",
          name: "LEMON TART",
          desc: "Lemon juice and zest, Sugar, Eggs, Heavy cream, All-purpose flour, and Unsalted butter.",
          price: "$98.50 USD",
          image: "/Dessert/lemon-cheesecake-table_140725-7371.jpg",
          link: "/menu/dessert",
        },
        {
          type: "Dinner",
          name: "SHRIMP SCAMPI",
          desc: "Shrimp, Olive oil, Butter, Garlic, Lemon juice, Parsley, Red pepper flakes, Spaghetti.",
          price: "$125.00 USD",
          image: "/Dinner/Shrimp.jpg",
          link: "/menu/dinner",
        },
        {
          type: "Brunch",
          name: "SALMON BAGELS",
          desc: "Bagels, Cream cheese, Smoked salmon, Capers, Red onion, Fresh dill, Lemon wedges.",
          price: "$59.99 USD",
          image: "/Brunch/Salmon.jpg",
          link: "/menu/brunch",
        },
      ],
      // Testimonials for the Testimonial Section
      testimonials: [
        {
          title: "THROUGH A BOWL OF GOODNESS",
          sub_title: "Noodle House",
          quote:
            "From ramen to stir-fried delights, our menu is a celebration of the diverse and comforting world of noodles, served in a cozy and casual setting.",
          author: "Frances Guerrero",
        },
        {
          title: "INDULGE IN AN EXQUISITE CULINARY JOURNEY",
          sub_title: "Fine Dining Restaurant",
          quote:
            "Impeccable service, sophisticated ambiance, and a menu crafted with the finest ingredients await to elevate your dining experience.",
          author: " Joan Wallace",
        },
        {
          title: "SERVICE THAT GOES ABOVE AND BEYOND",
          sub_title: "Local foodies",
          quote:
            "Every staff member made us feel like royalty, attending to our every need with a smile.",
          author: "Jacqueline Miller",
        },
      ],
      email: "", // For email subscription form
      currentTestimonialIndex: 0, // Tracks current testimonial
    };
  },
  computed: {
    // Returns the current testimonial based on the index
    currentTestimonial() {
      return this.testimonials[this.currentTestimonialIndex];
    },
  },
  methods: {
    // Navigate to the previous testimonial
    prevTestimonial() {
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
    // Navigate to the next testimonial
    nextTestimonial() {
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex + 1) % this.testimonials.length;
    },
    // Randomize testimonial on page load
    randomizeTestimonial() {
      this.currentTestimonialIndex = Math.floor(
        Math.random() * this.testimonials.length
      );
    },
  },
  created() {
    this.randomizeTestimonial();
  },
};
</script>

<style scoped>
/* General Styles */
.app-container {
  font-family: "Playfair Display", serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.custom-bg {
  background-color: #fff6ff;
}
.custom-color {
  color: #bf81bf !important;
  font-family: "Playfair Display", serif;
}

/* Hero Section Styles */
.home-view {
  flex: 0 0 auto;
  height: 800px;
}
.b-blur {
  background-color: #180318;
  opacity: 0.8;
}
.custom-p {
  padding: 1rem 26rem 0 26rem;
  font-family: "Playfair Display", serif;
}
.button {
  padding: 1em 1em;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  letter-spacing: 5px;
  text-transform: uppercase;
  cursor: pointer;
  color: #5e315e;
  transition: all 1000ms;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  outline: 2px solid #f9b233;
}
button:hover {
  color: #f9b233 !important;
  background: none !important;
  border: none !important;
  transform: scale(1.1);
  outline: 5px solid #5e315e;
  box-shadow: 4px 5px 17px -4px #5e315e;
}
button::before {
  content: "";
  position: absolute;
  left: -50px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #5e315e;
  transform: skewX(45deg);
  z-index: -1;
  transition: width 1000ms;
}
button:hover::before {
  width: 250%;
}

/* Menu Link Section Styles */
.Menu-link {
  margin-top: 15rem;
}
.navbar-menu {
  top: -15rem;
}
.image-card {
  position: relative;
  width: 250px;
  height: 350px;
  overflow: hidden;
  border-radius: 200px 200px 0 0;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  display: block;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
}
.overlay-text {
  font-size: 24px;
  font-weight: bold;
  color: #5e2b67;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.image-card:hover .overlay {
  opacity: 1;
}
.image-card:hover .overlay-text {
  opacity: 1;
}
::v-deep(.border_round) {
  border-radius: 500px 0 500px 500px;
}

/* Signature Section Styles */
.signature-section {
  background: #180318;
  padding: 4rem 2rem;
}
.title {
  color: white;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-family: "Cinzel", serif;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;
  justify-items: center;
}
.item {
  border-radius: 200px 200px 0 0;
  cursor: pointer;
  position: relative;
  width: 280px;
  height: 320px;
  overflow: hidden;
}
::v-deep(.signature-img) {
  border-radius: 200px 200px 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
}
.item:hover ::v-deep(.signature-img) {
  opacity: 1;
}
.item:hover .content {
  opacity: 0;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  opacity: 1;
  transition: opacity 0.5s ease;
  z-index: 2;
}
.type {
  margin-bottom: 0.5rem;
}
.name {
  margin-bottom: 0.5rem;
}
.desc {
  margin-bottom: 0.5rem;
}

/* Masterminds Section Styles */
.masterminds-section {
  padding-top: 4rem;
}
.masterminds-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
.masterminds-content {
  flex: 1;
  max-width: 500px;
}
.masterminds-title {
  font-size: 3rem;
  font-weight: bold;
  color: #5e315e;
  font-family: "Playfair Display", serif;
  margin-bottom: 1.5rem;
}
.chef-name {
  font-size: 2rem;
  font-weight: bold;
  color: #5e315e;
  font-family: "Cinzel", serif;
  margin-bottom: 1rem;
}
.chef-info {
  margin-bottom: 1rem;
}
.chef-info p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #5e315e;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
.chef-info i {
  font-size: 1.2rem;
  color: #5e315e;
}
.social-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.follow-text {
  color: #5e315e;
  font-size: 1rem;
}
.social-icon {
  color: #5e315e;
  font-size: 1.5rem;
}
.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.75) !important;
}
.chef-description {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
.view-details-btn {
  background-color: #5e315e;
  color: white;
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
}
.view-details-btn:hover {
  background-color: #4a2550;
}
.masterminds-image {
  flex: 1;
  max-width: 500px;
}
::v-deep(.chef-img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 500px 500px 0 0;
}

/* Testimonial Section Styles */
.testimonial-section {
  text-align: center;
  padding: 4rem 2rem;
}
.testimonial-subtitle {
  font-style: italic;
  color: #b169b1;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}
.testimonial-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #5e315e;
  font-family: "Playfair Display", serif;
  margin-bottom: 2rem;
}
.testimonial-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.testimonial-text {
  max-width: 600px;
}
.quote {
  font-size: 1.2rem;
  color: #b169b1;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}
.author {
  font-size: 1rem;
  color: #b169b1;
  font-style: italic;
}
.nav-btn {
  background: transparent;
  border: none;
  color: #5e315e;
  font-size: 2rem;
}
.nav-btn:hover {
  color: #5e315e;
}
.divider {
  background-color: #5e315e;
}
.divider.vertical {
  width: 2px;
  height: 40px;
  margin: 0 auto;
}
.divider.horizontal {
  width: 80%;
  margin: 0 10rem 0 10rem;
  height: 2px;
}
.divider.horizontal.left {
  left: calc(50% - 120px);
  top: 90px;
}
.divider.horizontal.right {
  right: calc(50% - 120px);
  top: 90px;
}
.testimonial-subtitle {
  position: relative;
}
.testimonial-title {
  position: relative;
  margin-bottom: 2rem;
}

/* Explore Section Styles */
.explore-section {
  background: #180318;
  text-align: center;
  padding-top: 4rem;
}
.explore-images {
  display: flex;
  justify-content: center;
  gap: 8rem;
  margin-bottom: 2rem;
}
.image-container {
  position: relative;
  height: 440px;
  width: 300px;
  transition: transform 0.5s ease;
}
.image-container.left {
  transform: rotate(10deg);
}
.image-container.left:hover {
  transform: rotate(0deg);
}
.image-container.right {
  transform: rotate(-10deg);
}
.image-container.right:hover {
  transform: rotate(0deg);
}
::v-deep(.explore-img) {
  object-fit: cover;
  border-radius: 1rem;
}
.image-container.right {
  border: 2px solid #fff;
  border-radius: 2rem;
}
.image-container.right:hover {
  border-color: #f9b233;
}
.image-background {
  position: absolute;
  inset: 0;
  background-color: #1a0d1a;
  border: 1px solid #341634;
  border-radius: 2rem;
  z-index: 0;
}
.image-background-left {
  padding-top: 60px;
  height: 300px;
  width: 350px;
  background-color: white;
  border-radius: 3rem;
}
.image-container.left ::v-deep(.explore-img) {
  border-radius: 200px 200px 0 0;
}
.image-container.right ::v-deep(.explore-img) {
  position: relative;
  z-index: 1;
}
.image-label {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  font-size: 1.5rem;
  font-family: "Playfair Display", serif;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 2;
}
.explore-content {
  max-width: 800px;
  margin: 0 auto;
}
.explore-title {
  color: white;
  font-size: 3rem;
  font-family: "Playfair Display", serif;
  margin-bottom: 2rem;
}
.subscribe-section {
  color: white;
}
.subscribe-heading {
  font-size: 1.5rem;
  font-family: "Cinzel", serif;
  color: #f9b233;
  margin-bottom: 0.5rem;
}
.subscribe-subheading {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.subscribe-form {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
::v-deep(.email-input) {
  padding: 0.5rem 1rem;
  border: 1px solid #5e315e;
  border-radius: 25px;
  background: transparent;
  color: white;
  width: 300px;
}
::v-deep(.email-input::placeholder) {
  color: #aaa;
}
.subscribe-btn {
  background-color: #f9b233;
  color: #5e315e;
  border-radius: 25px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
}
.subscribe-btn:hover {
  background-color: #e5a120;
}
</style>
