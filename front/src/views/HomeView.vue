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
    <!-- img The dropout TITRE : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B48C17EF6D4D1CC1C02054B551F80742B94AB8C85314366C8AE654BB66E9196/scale?width=1600&aspectRatio=1.78&format=png -->
    <!-- img The dropout : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C1301679F5FCA79F89EBE005C7648371E5BF15BC8DAE01F4E0017F3EFCF7DC89/compose?width=2880&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim -->
    <!-- img Oussekine TITRE : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2D3FCFC5812554D1E9C62CD374D9DF94F1144F22FFADDCDD7512BEEA166A0129/scale?width=1600&aspectRatio=1.78&format=png -->
    <!-- img Oussekine : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DA977C862BFEC4F4696B2542C8CDD103F7687B78897575223E895D59AE2525D7/compose?width=2880&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim -->
    <!-- img Les Simpson TITRE : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3C05B368C8A54CFFBC7E1A6FDD937766B1C1E85573E8649DFEB3C685BE16BFBD/scale?width=2880&aspectRatio=3.91&format=png -->
    <!-- img Les Simpson : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B84D8E7D8511B0CFF01D914F2890C358640823EC810387F1B7275CB0FD788D51/scale?width=2880&aspectRatio=3.91&format=jpeg -->
    <!-- img moon knight TITRE : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1DBE908629740F3C584FBDCDFDB9A1A74CE88B084456A9F8530BB630B3267091/scale?width=1600&aspectRatio=1.78&format=png -->
    <!-- img moon knight : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C4D9C5E031D8E93A408B4A1D0358AE60C80D022941223E96E54079E76543B922/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim -->
    <!-- img weak end family TITRE : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/E35207C660A4600DF1A0139877EC968E6D56A9AC95F80D90AF54300EC987DE10/scale?width=2880&aspectRatio=3.91&format=png -->
    <!-- img weak end family : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/547D3B37134C029901FE0F9FE8D9258AB85B0202DF215A01575C2D46A9A8EF06/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391 -->
    <!-- img Obi-wan TITRE : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9E6823EB01F75B2FD028FE4B782786B4F8B48E96916308336F5FF859442F4D02/scale?width=1600&aspectRatio=1.78&format=png -->
    <!-- img Obi-wan : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1AA5BB5F669FE854EA99CA965575AAF9D3DF3EE5B513E51163C920E0A84072C5/compose?width=2880&aspectRatio=3.91&format=jpeg&label=disneyplusoriginal_391_scrim -->
    <!-- img how i met your father TITRE : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7FAB81358871471DCEB6D1E3C1A58D2C8336A876326C57D211DEADF32EC4C14C/scale?width=1600&aspectRatio=1.78&format=png -->
    <!-- img how i met your father : https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AF2EFD414D1346C4E259BC594C41ABAEC2B2A403CF1A4870E500FE1FFF958235/compose?width=2880&aspectRatio=3.91&format=jpeg&label=staroriginal_391_scrim -->

    <!-- <button @click="starWars">Cactus</button> -->
    <main>
      <Carousel
        :navigation="true"
        :pagination="true"
        :startAutoPlay="false"
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
