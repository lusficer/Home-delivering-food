<template>
  <div class="relative">
    <footer class="bg-color text-300 py-5 container z-0">
      <div class="grid m-0 justify-content-center text-center content">
        <!-- Contact & Logo -->
        <div
          class="col-12 md:col-10 flex justify-content-around align-items-center"
        >
          <h3
            href="tel:+015982694756"
            class="text-300 text-primary pr-6 border-right-1"
          >
            +01 598 269 4756
          </h3>
          <a>
            <Image
              src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b49dcd9befdffddafd58a5_big-nvblast.svg"
              alt="Logo"
              width="300"
              class="logo"
            />
          </a>
          <h3
            href="mailto:info@example.com"
            class="text-300 text-primary pl-6 border-left-1"
          >
            NvBlast@gmail.com
          </h3>
        </div>

        <!-- Opening Hours -->
        <div class="col-12 mt-2">
          <h4 class="text-md text-primary">
            Mon - Sat: 11:00 am - 10 pm <br />
            Sun: 10:00 am - 12 pm
          </h4>
        </div>

        <div class="col-12 flex justify-content-around align-items-center">
          <Image
            src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65b4a27aacecf90e74627547_Footer-01.jpg"
            imageClass="rounded"
            width="250"
          ></Image>
        </div>

        <!-- Address & Social Media -->
        <div class="text-sm mt-4 text-primary">
          <p>HS B26, Horton Ford Rd, Eidson, TN, 37731</p>
          <div class="flex justify-content-center gap-3 mt-3">
            <Button
              icon="pi pi-instagram"
              class="p-button-rounded p-button-text"
              size="large"
              :style="{ color: '#693e69' }"
            />
            <Button
              icon="pi pi-facebook"
              :style="{ color: '#693e69' }"
              class="p-button-rounded p-button-text"
              size="large"
            />
            <Button
              icon="pi pi-youtube"
              :style="{ color: '#693e69' }"
              size="large"
              class="p-button-rounded p-button-text"
            />
          </div>
        </div>
      </div>
    </footer>
    <Image
      src="https://cdn.prod.website-files.com/65b0f8cd4809ed9e260f58df/65ceeda63c8dcb4654ea8d34_decoration-04.svg "
      class="flex w-screen absolute z-1 rounded"
      imageClass="w-screen"
    />
  </div>
</template>

<script>
import Button from "primevue/button";
import Image from "primevue/image";
export default {
  components: {
    Button,
    Image,
  },
};
</script>

<style>
/* .container {
  border-radius: 200px 200px 0 0;
} */
.text-primary {
  color: #693e69 !important;
}

.content {
  padding-top: 100px;
}

.rounded {
  border-radius: 200px 200px 0 0;
  top: 0%;
}

.p-button-rounded {
  height: 24px;
  width: 24px;
}

.p-button .p-button-icon {
  font-size: 24px !important;
}
.bg-color {
  background-color: rgb(255, 246, 255);
}
</style>
