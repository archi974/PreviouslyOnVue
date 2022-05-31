<script setup>
import Nav from "@/components/Nav.vue";
import Carousel from "@/components/Carousel.vue";
import Slide from "@/components/Slide.vue";
import { ref, onMounted } from "vue";

const carouselSlides = [
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C1301679F5FCA79F89EBE005C7648371E5BF15BC8DAE01F4E0017F3EFCF7DC89/compose?width=2880&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim",
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA977C862BFEC4F4696B2542C8CDD103F7687B78897575223E895D59AE2525D7/compose?width=2880&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim",
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B84D8E7D8511B0CFF01D914F2890C358640823EC810387F1B7275CB0FD788D51/scale?width=2880&aspectRatio=3.91&format=jpeg",
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C4D9C5E031D8E93A408B4A1D0358AE60C80D022941223E96E54079E76543B922/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim",
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/547D3B37134C029901FE0F9FE8D9258AB85B0202DF215A01575C2D46A9A8EF06/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391",
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1AA5BB5F669FE854EA99CA965575AAF9D3DF3EE5B513E51163C920E0A84072C5/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim",
  "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AF2EFD414D1346C4E259BC594C41ABAEC2B2A403CF1A4870E500FE1FFF958235/compose?width=2880&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim",
];
let personnage = ref(null);
// function starWars() {
//   fetch(`https://swapi.dev/api/people`)
//   .then(res => res.json())
//   .then(data => personnage.value = data.results)
//   .catch(err => console.log(err))
// }
onMounted(() => {
  fetch(`https://swapi.dev/api/people`)
    .then((res) => res.json())
    .then((data) => (personnage.value = data.results))
    .catch((err) => console.log(err));
});
</script>

<template>
  <div>
    <Nav />

    <main>
      <Carousel
        :navigation="true"
        :pagination="true"
        :startAutoPlay="true"
        :timeout="5000"
        class="carousel"
        v-slot="{ currentSlide }"
      >
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="slide" alt="" />
          </div>
        </Slide>
      </Carousel>
    </main>
    <!-- <ul>
    <li v-for="personnages in personnage" v-bind:key="personnages.id">
      <p>{{ personnages.name }}</p>
    </li>
  </ul> -->
  </div>
</template>

<style scoped>
main {
  margin-top: 15%;
}
.carousel {
  position: relative;
  max-height: 100vh;
  height: 100vh;
}
.slide-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;
}

.slide-info img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
