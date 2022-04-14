<script setup>
import { ref, onMounted } from "vue";
import Nav from "@/components/Nav.vue"
onMounted(() => {
  console.log('cactus')
})
let personnage = ref(null)
// function chipsBacon() {
//   fetch(`https://swapi.dev/api/people`)
//   .then(res => res.json())
//   .then(data => personnage.value = data.results)
//   .catch(err => console.log(err))
// }
onMounted(() => {
  fetch(`https://swapi.dev/api/people`)
  .then(res => res.json())
  .then(data => personnage.value = data.results)
  .catch(err => console.log(err))
})
</script>

<template>
  <div>
    <Nav />
    <h1>Home</h1>
    <!-- <button @click="chipsBacon">Cactus</button> -->
    <ul>
      <li v-for="personnages in personnage" v-bind:key="personnages.id">
        <p>{{personnages.name}}</p>
      </li>
    </ul>
  </div>
</template>
