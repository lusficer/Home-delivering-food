<template>
  <div class="menu-view relative z-1">
    <NavBar />
    <div class="content mb-5">
      <div
        class="hero-section h-screen w-screen flex justify-content-between flex-wrap m-auto"
        style="padding: 40px 80px 0px 80px"
      >
        <!-- Phần văn bản bên trái -->
        <div class="text-content w-9 relative">
          <h1 class="text-7xl custom-title leading-tight mb-4 w-full">
            A PLEASURABLE PALETTE ON YOUR PLATE
          </h1>
          <p class="custom-p text-md line-height-3 w-6 mb-5">
            Our culinary creations promise an exquisite symphony of tastes,
            carefully curated to tantalize your taste buds and create a dining
            experience like no other.
          </p>
          <Button
            size="large"
            label="Reserve table"
            class="reserve-button p-3"
          />
        </div>
        <!-- Phần video bên phải -->
        <div class="video-section absolute" style="right: 12rem; top: 17rem">
          <video
            ref="videoPlayer"
            loop
            class="w-full h-25rem border-round-lg shadow-2 object-cover"
          >
            <source src="/video_menu.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <!-- Nút điều khiển tùy chỉnh -->
          <div class="video-controls absolute bottom-0 p-3">
            <Button
              :icon="isPlaying ? 'pi pi-pause' : 'pi pi-play'"
              class="play-pause-button p-button-rounded p-button-warning"
              @click="togglePlayPause"
            />
          </div>
        </div>
      </div>
      <div class="relative w-screen">
        <Image
          src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65ceeda6ab39cec620fc8fdd_decoration-09.svg"
          imageClass="round absolute left-0 w-screen"
        ></Image>
        <div class="signature-section">
          <h2 class="title">Discover Our Menu Delights</h2>
          <div class="flex justify-content-center space-x-4 my-6">
            <button
              v-for="type in types"
              :key="type"
              class="border-1 px-4 py-3 m-4 border-category text-xl text-white"
              :class="
                selectedType === type
                  ? 'bg-yellow-600 '
                  : 'bg-purple-900 hover:bg-yellow-600 cursor-pointer	'
              "
              @click="
                selectedType = type;
                currentPage = 1;
              "
            >
              {{ type }}
            </button>
          </div>
          <div class="grid">
            <div
              v-for="(item, index) in paginatedMenu"
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
                class="relative z-10 transition-opacity duration-500 text-center px-4 py-6"
              >
                <p class="type italic text-purple-400">| {{ item.type }} |</p>
                <h3 class="name text-2xl font-bold text-white">
                  {{ item.name }}
                </h3>
                <p class="desc text-sm text-gray-300">{{ item.desc }}</p>
                <p class="price text-yellow-400 text-xl mt-2 font-semibold">
                  {{ item.price }}
                </p>
              </div>
            </div>
          </div>
          <!-- Phân trang -->
          <div class="pagination flex justify-content-center mt-6">
            <Button
              icon="pi pi-chevron-left"
              class="p-button-rounded p-button-text mr-2"
              :disabled="currentPage === 1"
              @click="currentPage--"
            />
            <span class="text-white mx-3 py-2">
              Page {{ currentPage }} of {{ totalPages }}
            </span>
            <Button
              icon="pi pi-chevron-right"
              class="p-button-rounded p-button-text ml-2"
              :disabled="currentPage === totalPages"
              @click="currentPage++"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import Button from "primevue/button";

export default {
  components: {
    NavBar,
    Footer,
    Button,
  },
  data() {
    return {
      isPlaying: false,
      currentPage: 1, // Trang hiện tại
      itemsPerPage: 6, // Số món mỗi trang
      selectedType: "All", // Chọn mặc định
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
        {
          type: "Breakfast",
          name: "PANCAKE STACK",
          desc: "Fluffy pancakes, Maple syrup, Fresh berries, Whipped cream, Butter.",
          price: "$38.50 USD",
          image: "/Breakfast/Pancakes.jpg",
          link: "/menu/breakfast",
        },
        {
          type: "Beverage",
          name: "FRESH ORANGE JUICE",
          desc: "Freshly squeezed oranges, Ice, Optional sugar syrup.",
          price: "$35.00 USD",
          image: "/Beverage/OrangeJuice.avif",
          link: "/menu/beverage",
        },
        {
          type: "Lunch",
          name: "CHICKEN CAESAR SALAD",
          desc: "Grilled chicken, Romaine lettuce, Croutons, Parmesan cheese, Caesar dressing.",
          price: "$52.99 USD",
          image: "/Lunch/CaesarSalad.avif",
          link: "/menu/lunch",
        },
        {
          type: "Dessert",
          name: "CHOCOLATE LAVA CAKE",
          desc: "Dark chocolate, Butter, Sugar, Eggs, Flour, Vanilla ice cream on the side.",
          price: "$89.00 USD",
          image: "/Dessert/ChocolateLava.avif",
          link: "/menu/dessert",
        },
        {
          type: "Dinner",
          name: "GRILLED SALMON",
          desc: "Salmon fillet, Lemon herb marinade, Asparagus, Mashed potatoes, Olive oil.",
          price: "$135.00 USD",
          image: "/Dinner/GrilledSalmon.avif",
          link: "/menu/dinner",
        },
        {
          type: "Brunch",
          name: "AVOCADO TOAST",
          desc: "Sourdough bread, Mashed avocado, Cherry tomatoes, Poached egg, Chili flakes.",
          price: "$48.75 USD",
          image: "/Brunch/AvocadoToast.avif",
          link: "/menu/brunch",
        },
        {
          type: "Beverage",
          name: "MANGO SMOOTHIE",
          desc: "Fresh mango, Yogurt, Honey, Ice, Mint leaves.",
          price: "$45.00 USD",
          image: "/Beverage/MangoSmoothie.avif",
          link: "/menu/beverage",
        },
        {
          type: "Breakfast",
          name: "FRENCH TOAST",
          desc: "Thick-cut bread, Eggs, Milk, Cinnamon, Maple syrup, Powdered sugar.",
          price: "$42.00 USD",
          image: "/Breakfast/FrenchToast.avif",
          link: "/menu/breakfast",
        },
        {
          type: "Lunch",
          name: "BBQ PULLED PORK SANDWICH",
          desc: "Slow-cooked pork, BBQ sauce, Coleslaw, Brioche bun, Pickles.",
          price: "$65.00 USD",
          image: "/Lunch/PulledPork.jpg",
          link: "/menu/lunch",
        },
        {
          type: "Brunch",
          name: "QUICHE LORRAINE",
          desc: "Pastry crust, Eggs, Heavy cream, Bacon, Gruyère cheese, Nutmeg.",
          price: "$55.00 USD",
          image: "/Brunch/Quiche.avif",
          link: "/menu/brunch",
        },
        {
          type: "Breakfast",
          name: "PANCAKE STACK",
          desc: "Fluffy pancakes, Maple syrup, Fresh berries, Whipped cream, Butter.",
          price: "$40.25 USD",
          image: "/Breakfast/Toast(3).jpg",
          link: "/menu/breakfast",
        },
        {
          type: "Beverage",
          name: "OOLONG TEA",
          desc: "Oolong tea leaves, Hot water, Optional honey or lemon.",
          price: "$38.75 USD",
          image: "/Beverage/hand-pouring-matcha-tea-cups_23-2148296737.jpg",
          link: "/menu/beverage",
        },
        {
          type: "Lunch",
          name: "PIZZA HONEY SAUCE",
          desc: "Pizza dough, Honey-based sauce, Mozzarella cheese, Pepperoni, Fresh basil.",
          price: "$72.50 USD",
          image: "/Lunch/Pizza(2).jpg",
          link: "/menu/lunch",
        },
        {
          type: "Dessert",
          name: "CHOCOLATE LAVA CAKE",
          desc: "Dark chocolate, Butter, Sugar, Eggs, Flour, Vanilla ice cream on the side.",
          price: "$92.00 USD",
          image: "/Dessert/ChocolateLava.avif",
          link: "/menu/dessert",
        },
        {
          type: "Brunch",
          name: "SALMON",
          desc: "Grilled salmon fillet, Sourdough bread, Mashed avocado, Poached egg, Chili flakes.",
          price: "$62.80 USD",
          image: "/Brunch/Salmon(1).jpg",
          link: "/menu/brunch",
        },
        {
          type: "Dinner",
          name: "PARMESAN",
          desc: "Breaded chicken breast, Marinara sauce, Mozzarella cheese, Parmesan, Spaghetti.",
          price: "$120.00 USD",
          image: "/Dinner/Parmesan(3).jpg",
          link: "/menu/Dinner",
        },
        {
          type: "Beverage",
          name: "MANGO SMOOTHIE",
          desc: "Fresh mango, Yogurt, Honey, Ice, Mint leaves.",
          price: "$47.50 USD",
          image: "/Beverage/Beverage.jpg",
          link: "/menu/beverage",
        },
        {
          type: "Breakfast",
          name: "TACO & EGG",
          desc: "Corn tortillas, Scrambled eggs, Cheddar cheese, Salsa, Avocado slices.",
          price: "$49.00 USD",
          image: "/Breakfast/Egg(2).jpg",
          link: "/menu/breakfast",
        },
        {
          type: "Lunch",
          name: "BBQ PULLED PORK SANDWICH",
          desc: "Slow-cooked pork, BBQ sauce, Coleslaw, Brioche bun, Pickles.",
          price: "$68.00 USD",
          image: "/Lunch/PulledPork.jpg",
          link: "/menu/lunch",
        },
        {
          type: "Dessert",
          name: "TIRAMISU",
          desc: "Mascarpone cheese, Espresso, Ladyfingers, Cocoa powder, Sugar.",
          price: "$97.50 USD",
          image: "/Dessert/Tiramisu.avif",
          link: "/menu/dessert",
        },
      ],
    };
  },
  computed: {
    types() {
      return ["All", ...new Set(this.menu.map((item) => item.type))];
    },
    filteredMenu() {
      if (this.selectedType === "All") {
        return this.menu;
      }
      return this.menu.filter((item) => item.type === this.selectedType);
    },
    totalPages() {
      return Math.ceil(this.filteredMenu.length / this.itemsPerPage);
    },
    paginatedMenu() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredMenu.slice(start, end);
    },
  },
  methods: {
    togglePlayPause() {
      const video = this.$refs.videoPlayer;
      if (this.isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      this.isPlaying = !this.isPlaying;
    },
  },
  mounted() {
    this.togglePlayPause();
  },
};
</script>

<style scoped>
.menu-view {
  font-family: "Playfair Display", serif;
}

.hero-section {
  background-color: #fff6ff; /* Màu nền giống trong hình */
}

.content {
  background-color: #fff6ff; /* Màu nền giống trong hình */
  padding-top: 120px;
}

.custom-title {
  color: #5e315e;
  font-family: "Playfair Display", serif; /* Font chữ tương tự */
}

.custom-p {
  color: #5e315e;
}

.reserve-button {
  position: relative;
  background-color: #5e315e !important; /* Màu tím giống trong hình */
  border: none !important;
  border-radius: 200px !important;
  color: white !important;
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
  background-color: #f9b233; /* Màu khi hover */
  border-radius: 200px;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition: width 1s ease, height 0.5s ease; /* Transition cho chiều rộng và cao */
}

.reserve-button:hover {
  color: #180318 !important;
}

.reserve-button:hover::before {
  width: 200%; /* Lan rộng hơn kích thước button */
  height: 200%;
}

.video-section video {
  width: 100%;
  max-width: 800px;
  height: 500px;
  object-fit: cover; /* Đảm bảo video không bị méo */
}

.video-controls {
  z-index: 10;
}

.play-pause-button {
  background-color: #f9b233 !important; /* Màu vàng */
  border: none !important;
}

::v-deep(.round) {
  bottom: 80.2rem;
}

.signature-section {
  background: #180318;
  padding: 4rem 2rem;
}

.title {
  color: white;
  font-size: 8rem;
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

.border-category {
  border-radius: 500px;
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

.pagination {
  margin-top: 2rem;
}

.pagination .p-button {
  color: #f9b233 !important;
}

.pagination .p-button:disabled {
  color: #888 !important;
}
</style>
