<template>
  <NavBar />
  <transition name="bounce">
    <div v-if="isVisible">
      <section class="chef-hero-section">
        <div class="w-layout-blockcontainer container w-container">
          <div
            data-w-id="0c1c7b9d-c11e-804d-d5fb-68d39d4c7c4a"
            style="
              opacity: 1;
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="chef-hero-image-wrap"
          >
            <img
              v-if="chef"
              :alt="chef.name"
              loading="lazy"
              :src="chef.image"
              sizes="(max-width: 479px) 93vw, (max-width: 767px) 96vw, 648px"
              class="chef-hero-image"
            />
          </div>
        </div>
        <img
          src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65ceeda64880ca4cf7077194_decoration-10.svg"
          loading="lazy"
          alt=""
          class="chef-hero-decoration"
        />
      </section>

      <section v-if="chef" class="chef-info-section section-spacing-bottom">
        <div class="w-layout-blockcontainer container-medium w-container">
          <div
            data-w-id="7aae770b-d9e0-4976-4fa8-d13c77d041d3"
            style="
              opacity: 1;
              transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
              transform-style: preserve-3d;
            "
            class="chef-info-wrap"
          >
            <div class="job-title-badge">{{ chef.jobTitle }}</div>
            <h1 class="chef-info-title">{{ chef.name }}</h1>
            <p>{{ chef.description }}</p>
            <div class="w-layout-grid grid-chef-info-meta">
              <div
                id="w-node-_9771c034-cc04-746c-237c-2c3d104276e7-260f58d6"
                class="chef-info-meta-item"
              >
                <img
                  src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b79d61c089c58041963b1a_recipe.svg"
                  loading="lazy"
                  alt="Recipe Icon"
                  class="chef-meta-icon"
                />
                <div class="chef-meta-text">
                  <div>Total recipes:</div>
                  <div>{{ getRecipeCount(chef.id) }}</div>
                </div>
              </div>
              <div
                id="w-node-_9771c034-cc04-746c-237c-2c3d104276ed-260f58d6"
                class="chef-info-meta-item"
              >
                <img
                  src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b79d618da2f3fbd04180f7_experiences.svg"
                  loading="lazy"
                  alt="Experience Icon "
                  class="chef-meta-icon"
                />
                <div class="chef-meta-text">
                  <div>Experiences:</div>
                  <div>{{ getExperienceYears(chef.id) }} years</div>
                </div>
              </div>
              <div
                id="w-node-_9771c034-cc04-746c-237c-2c3d104276f3-260f58d6"
                class="chef-info-meta-item"
              >
                <img
                  src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b79d61384a6e10485f19f0_specialty.svg"
                  loading="lazy"
                  alt="Specialty Icon"
                  class="chef-meta-icon"
                />
                <div class="chef-meta-text">
                  <div>Specialty:</div>
                  <div>{{ getSpecialty(chef) }}</div>
                </div>
              </div>
              <div
                id="w-node-_9771c034-cc04-746c-237c-2c3d104276f9-260f58d6"
                class="chef-info-meta-item"
              >
                <img
                  src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b79d617ba9a1afb075d286_job-title.svg"
                  loading="lazy"
                  alt="Job Title Icon"
                  class="chef-meta-icon"
                />
                <div class="chef-meta-text">
                  <div>Recognition:</div>
                  <div>{{ chef.jobTitle }}</div>
                </div>
              </div>
            </div>
            <div class="chef-info-social-wrap">
              <div class="chef-social-container">
                <div class="chef-social-row">
                  <span class="chef-social-media-title">Follow on:</span>
                  <div class="chef-social-wrap">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      class="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b3615a04aae4916f3da5fa_instagram.svg"
                        loading="eager"
                        alt="Social Icon"
                        class="social-icon"
                      />
                    </a>
                    <a
                      href="https://facebook.com/"
                      target="_blank"
                      class="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b3615aa9802c864ae486bf_facebook.svg"
                        loading="eager"
                        alt="Social Icon"
                        class="social-icon"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/"
                      target="_blank"
                      class="social-link w-inline-block"
                    >
                      <img
                        src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b3615a6d58ece1493e9f61_youtube.svg"
                        loading="eager"
                        alt="Social Icon"
                        class="social-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              data-w-id="409013ab-0f88-933e-e1e4-7d36214ccd6c"
              style="
                opacity: 1;
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
              class="chef-detail-title-wrap"
            >
              <h2 class="chef-detail-title">About</h2>
              <h2 class="chef-detail-title">{{ chef.name }}</h2>
            </div>
            <div
              data-w-id="12c956a7-c21e-44de-599f-e6a7bef37325"
              style="
                opacity: 1;
                transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1)
                  rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
                transform-style: preserve-3d;
              "
              class="rich-text w-richtext"
            >
              <p>
                A chef is a highly skilled and trained culinary professional who
                possesses expertise in the art of food preparation and
                presentation. This role extends beyond just cooking; chefs are
                often the creative minds behind the dishes served in
                restaurants, hotels, or other culinary establishments.
              </p>
              <h5>Key aspects of a chef's role include:</h5>
              <ul role="list">
                <li
                  v-for="(specialty, index) in chef.specialties ||
                  defaultSpecialties"
                  :key="index"
                >
                  {{ specialty }}
                </li>
              </ul>
              <h5>Personal Experience</h5>
              <p>{{ chef.description }}</p>
              <blockquote>
                <p>
                  Many chefs undergo formal culinary education, either through
                  culinary schools or apprenticeships. However, practical
                  experience is equally important, and many chefs learn their
                  craft through hands-on work in kitchens.
                </p>
              </blockquote>
              <ul role="list">
                <li>
                  A chef is a highly skilled and trained professional in the
                  culinary arts.
                </li>
                <li>
                  The term "chef" is often used to refer to the head cook or
                  executive chef in a kitchen, responsible for overseeing the
                  entire kitchen operation.
                </li>
                <li>
                  Chefs typically have extensive knowledge of food preparation
                  techniques, culinary styles, and flavor combinations.
                </li>
                <li>
                  The journey to becoming a chef often involves culinary
                  education, practical training, and gaining experience in
                  various kitchen roles.
                </li>
              </ul>
            </div>
            <div class="chef-back-button-wrap">
              <router-link to="/Chief" class="button-primary-1 w-inline-block">
                <div class="button-primary-1-title">Back to Chefs</div>
                <div class="button-primary-hover top"></div>
                <div class="button-primary-hover bottom"></div>
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <section v-else class="section-spacing-bottom">
        <div class="w-layout-blockcontainer container-medium w-container">
          <div class="chef-not-found">
            <h2>Chef not found</h2>
            <p>Sorry, we couldn't find the chef you're looking for.</p>
            <router-link to="/Chief" class="button-primary-1 w-inline-block">
              <div class="button-primary-1-title">Back to Chefs</div>
              <div class="button-primary-hover top"></div>
              <div class="button-primary-hover bottom"></div>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </transition>
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "ChefDetail",
  components: {
    NavBar,
    Footer,
  },
  setup() {
    const route = useRoute();
    const chef = ref(null);
    const isVisible = ref(false);

    // Sample chef data
    const chefsData = [
      {
        id: 1,
        name: "Chef Miguel Torres",
        jobTitle: "Rising Star Chef",
        slug: "chef-miguel-torres",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b79476e8189471f5736049_chef-01.jpg",
        description:
          "Miguel Torres is a rising culinary talent known for his innovative approach to traditional recipes. His dishes combine family traditions with modern techniques.",
        specialties: [
          "Expert in Seafood",
          "Menu Creation",
          "Fusion Tapas",
          "Leadership",
          "Quality Control",
          "Passion for Food",
        ],
      },
      {
        id: 2,
        name: "Chef Dennis Barrett",
        jobTitle: "CEO of NVBlast",
        slug: "chef-dennis-barrett",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65c5d0cd81d1e988cd58d2ef_chef-02.jpg",
        description:
          "As our CEO and executive chef, Dennis brings over 20 years of culinary excellence to the table. He oversees all culinary operations while maintaining the highest quality standards.",
        specialties: [
          "Kitchen management",
          "Culinary Expertise",
          "Luxury Dining Experiences",
          "Food Safety",
          "Innovation",
        ],
      },
      {
        id: 3,
        name: "Chef Joan Wallace",
        jobTitle: "Pantry Chef",
        slug: "chef-joan-wallace",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b797a5efccbaed027a7ffa_chef-03.jpg",
        description:
          "Joan excels in creating delicious cold dishes, salads, and appetizers. Her attention to detail ensures every plate that leaves the kitchen is a work of art.",
        specialties: [
          "Cold Appetizers",
          "Salad Design",
          "Artistic Plating",
          "Creativity",
          "Research",
          "Organization",
        ],
      },
      {
        id: 4,
        name: "Chef Judy Nguyen",
        jobTitle: "Line Cook",
        slug: "chef-judy-nguyen",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b7984cb24504db927c86a8_chef-04.jpg",
        description:
          "Judy is a skilled line cook who brings speed, precision, and consistency to every dish. Her expertise in Asian cuisine brings unique flavors to our menu.",
        specialties: [
          "Vietnamese Specialties",
          "Asian Fusion",
          "Quick Service Excellence",
        ],
      },
      {
        id: 5,
        name: "Chef Billy Vasquez",
        jobTitle: "Healthcare Chef",
        slug: "chef-billy-vasquez",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65b798a0b2a15174faa0bf97_chef-05.jpg",
        description:
          "Prepares meals in healthcare settings, taking into consideration dietary restrictions, nutritional needs, and special diets. Ensures that food meets specific health standards.",
        specialties: [
          "Nutritional Analysis",
          "Wellness Menus",
          "Dietary Accommodations",
        ],
      },
      {
        id: 6,
        name: "Chef Amanda Reed",
        jobTitle: "Food Stylist",
        slug: "chef-amanda-reed",
        image:
          "https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f5903/65c5d0d86972594e3345e7ed_chef-06.jpg",
        description:
          "Amanda brings dishes to life through her artistic presentation. She ensures each plate is Instagram-worthy while maintaining our high culinary standards.",
        specialties: [
          "Visual Presentation",
          "Photography Direction",
          "Brand Consistency",
        ],
      },
    ];

    const defaultSpecialties = computed(() => [
      "Signature Dishes",
      "Seasonal Menu Development",
      "Culinary Innovation",
    ]);

    // Helper functions to get additional chef info
    const getRecipeCount = (chefId) => {
      const recipeCountMap = {
        1: "350+",
        2: "500+",
        3: "200+",
        4: "250+",
        5: "300+",
        6: "180+",
      };
      return recipeCountMap[chefId] || "200+";
    };

    const getExperienceYears = (chefId) => {
      const experienceMap = {
        1: "7",
        2: "20",
        3: "15",
        4: "8",
        5: "12",
        6: "10",
      };
      return experienceMap[chefId] || "5";
    };

    const getSpecialty = (chef) => {
      if (chef && chef.specialties && chef.specialties.length > 0) {
        return `${chef.specialties[0]}`;
      }
      return "Expert Chef";
    };

    onMounted(() => {
      // Get the chef slug from the route parameters
      const slug = route.params.slug;

      // Find the chef with the matching slug
      chef.value = chefsData.find((c) => c.slug === slug);

      // Show the title with animation
      setTimeout(() => {
        isVisible.value = true;
      }, 600);
    });

    return {
      chef,
      isVisible,
      defaultSpecialties,
      getRecipeCount,
      getExperienceYears,
      getSpecialty,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 35px;
  padding-right: 35px;
}

.chef-hero-section {
  background-color: #fff6ff;
  margin-top: -200px;
  padding-top: 360px;
  padding-bottom: 100px;
  position: relative;
}

.chef-hero-image-wrap {
  width: 650px;
  height: 650px;
  border: 3px solid #a34fa3;
  border-radius: 50%;
  margin-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  position: relative;

  /* Gradient border effect */
  background: linear-gradient(45deg, #a34fa3, #ff6b9d, #c471ed, #a34fa3);
  background-size: 400% 400%;
  animation: gradientShift 4s ease-in-out infinite;

  /* Shadow effects */
  box-shadow: 0 20px 40px rgba(163, 79, 163, 0.3),
    0 10px 20px rgba(163, 79, 163, 0.2),
    inset 0 0 0 3px rgba(255, 255, 255, 0.1);

  /* Hover effects */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.chef-hero-image-wrap::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: linear-gradient(
    45deg,
    #a34fa3,
    #ff6b9d,
    #c471ed,
    #12c2e9,
    #a34fa3
  );
  border-radius: 50%;
  z-index: -1;
  background-size: 400% 400%;
  animation: gradientShift 4s ease-in-out infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.chef-hero-image-wrap:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 30px 60px rgba(163, 79, 163, 0.4),
    0 15px 30px rgba(163, 79, 163, 0.3),
    inset 0 0 0 3px rgba(255, 255, 255, 0.2);
}

.chef-hero-image-wrap:hover::before {
  opacity: 1;
}

.chef-hero-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  border-radius: 50%;
}

.chef-hero-image-wrap:hover img {
  transform: scale(1.05);
}

/* Floating animation */
.chef-hero-image-wrap {
  animation: float 6s ease-in-out infinite,
    gradientBorder 4s ease-in-out infinite;
}

/* Keyframe animations */
@keyframes gradientShift {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

@keyframes gradientBorder {
  0% {
    border-color: #ffdd00;
  }

  50% {
    border-color: #fbc030;
  }

  100% {
    border-color: #e6a800;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .chef-hero-image-wrap {
    width: 400px;
    height: 400px;
    margin-bottom: 60px;
  }
}

@media (max-width: 480px) {
  .chef-hero-image-wrap {
    width: 280px;
    height: 280px;
    margin-bottom: 40px;
  }
}

.chef-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

img {
  max-width: 100%;
  display: inline-block;
  vertical-align: middle;
}

.chef-hero-decoration {
  position: absolute;
  top: auto;
  bottom: -2px;
  left: 0%;
  right: 0%;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0);
  }
}

.section-spacing-bottom {
  padding-bottom: 70px;
}

.container-medium {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
}

.chef-info-section {
  padding-top: 30px;
  padding-bottom: 80px;
}

.chef-info-wrap {
  max-width: 80%;
  border: 3px solid #a34fa3;
  border-radius: 70px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #180318;
  text-align: center;
  margin: -10px auto 80px;
  padding: 40px;
  position: relative;

  /* Neon glow effect - subtle */
  box-shadow: 0 0 5px rgba(163, 79, 163, 0.3), 0 0 10px rgba(163, 79, 163, 0.2),
    inset 0 0 5px rgba(163, 79, 163, 0.1);

  /* Animation và transition */
  transition: all 0.3s ease;
}

/* Neon outer glow - subtle */
.chef-info-wrap::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: transparent;
  border: 1px solid rgba(163, 79, 163, 0.3);
  border-radius: 75px;
  z-index: -1;
  box-shadow: 0 0 8px rgba(163, 79, 163, 0.2);
}

/* Neon inner glow - subtle */
.chef-info-wrap::after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: transparent;
  border: 1px solid rgba(163, 79, 163, 0.1);
  border-radius: 60px;
  z-index: -1;
}

/* Hover effects - subtle neon */
.chef-info-wrap:hover {
  box-shadow: 0 0 8px rgba(163, 79, 163, 0.4), 0 0 15px rgba(163, 79, 163, 0.3);
  border-color: rgba(163, 79, 163, 0.8);
}

.chef-info-wrap:hover::before {
  box-shadow: 0 0 12px rgba(163, 79, 163, 0.3);
  border-color: rgba(163, 79, 163, 0.6);
}

/* Subtle text glow */
.chef-info-wrap h1,
.chef-info-wrap h2,
.chef-info-wrap h3,
.chef-info-wrap p {
  text-shadow: 0 0 3px rgba(163, 79, 163, 0.2);
  color: #180318;
}

.chef-info-wrap:hover h1,
.chef-info-wrap:hover h2,
.chef-info-wrap:hover h3,
.chef-info-wrap:hover p {
  text-shadow: 0 0 5px rgba(163, 79, 163, 0.3);
}

.job-title-badge {
  display: inline-block;
  background-color: #fbc029;
  color: #5e315e;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 16px;
  padding: 8px 20px;
  border-radius: 30px;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.chef-info-title {
  font-family: "Playfair Display", serif;
  color: #5e315e;
  font-size: 42px;
  font-weight: 400;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.grid-chef-info-meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 30px 0;
}

@media (min-width: 800px) {
  .grid-chef-info-meta {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
}

.chef-info-meta-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #a34fa3;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-width: 174px;
}

.chef-info-meta-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.chef-meta-icon {
  width: 40px;
  height: 40px;
  margin-right: 15px;
  filter: brightness(0) invert(1);
  opacity: 0.8;
}

.chef-meta-text {
  color: #fff;
}

.chef-meta-text div:first-child {
  font-size: 14px;
  opacity: 0.7;
}

.chef-meta-text div:last-child {
  font-size: 16px;
  font-weight: 700;
  color: #fbc029;
}

.chef-info-social-wrap {
  margin-top: 40px;
}

.chef-social-container {
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateX(-15px);
}

.chef-social-row {
  display: flex;
  align-items: center;
  gap: 18px;
}

.chef-social-media-title {
  color: #5e315e;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  margin-bottom: 0;
  font-weight: 700;
}

.chef-social-wrap {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #5e315e;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px) scale(1.05);
  background-color: #fbc029;
}

.social-icon {
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
}

.chef-detail-title-wrap {
  margin-bottom: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 40px;
}

.chef-detail-title {
  font-family: "Playfair Display", serif;
  color: #fff6ff;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.rich-text {
  color: #f5f5f5;
  line-height: 1.6;
}

.rich-text p {
  font-size: 19px;
  color: #c2bec2;
  margin-bottom: 20px;
}

.rich-text h5 {
  font-family: "Playfair Display", serif;
  color: #fbc029;
  font-size: 22px;
  margin: 30px 0 15px;
}

.rich-text ul {
  list-style: none;
  padding-left: 30px;
}

.rich-text li {
  color: #c2bec2;
  font-size: 17.5px;
  margin-bottom: 8px;
  position: relative;
  padding-left: 15px;
}

.rich-text li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #fbc029;
}

.rich-text blockquote {
  position: relative;
  background: #a34fa3;
  border-left: 4px solid #fbc029;
  color: #fff6ff;
  padding: 20px 48px 20px 64px;
  border-radius: 50px;
  margin: 30px auto;
  font-size: 21px;
  font-family: "Playfair Display", serif;
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.18);
  max-width: 900px;
  text-align: left;
  margin-left: 100px;
}

.rich-text blockquote::before {
  content: "“";
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 64px;
  color: #fbc029;
  opacity: 0.18;
  font-family: "Playfair Display", serif;
  line-height: 1;
  pointer-events: none;
}

.rich-text blockquote p {
  margin: 0;
  color: #fff6ff;
  font-size: 21px;
  font-style: italic;
}

@media (max-width: 600px) {
  .rich-text blockquote {
    padding: 20px 12px 20px 24px;
    font-size: 17px;
  }

  .rich-text blockquote::before {
    font-size: 40px;
    left: 8px;
  }
}

.chef-back-button-wrap {
  margin-top: 40px;
  text-align: center;
}

.button-primary-1 {
  border-radius: 200px;
  background-color: #5e315e;
  color: #fff6ff;
  text-align: center;
  padding: 15px 20px;
  font-size: 18px;
  line-height: 1.2em;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-top: 10px;
}

.button-primary-1-title {
  z-index: 1;
  position: relative;
}

.button-primary-hover.top {
  top: 49%;
  bottom: auto;
  left: 0%;
  right: 0%;
  height: 0;
  background-color: #fbc029;
  position: absolute;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
}

.button-primary-hover.bottom {
  top: auto;
  bottom: 49%;
  left: 0%;
  right: 0%;
  height: 0;
  background-color: #fbc029;
  position: absolute;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}

.button-primary-1:hover {
  background-color: #fbc029;
}

.button-primary-1:hover .button-primary-hover.top,
.button-primary-1:hover .button-primary-hover.bottom {
  transform: scaleY(1);
  height: 50%;
}

.button-primary-1:hover .button-primary-1-title {
  color: #641464;
}

p {
  font-size: 19px;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }

  50% {
    opacity: 1;
    transform: scale(1.05);
  }

  70% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

.bounce-enter-active {
  animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}

.bounce-leave-active {
  display: none;
}
</style>
