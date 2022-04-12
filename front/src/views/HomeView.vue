<script setup>
import { ref, onMounted } from "vue";
import Form from "@/components/Form.vue"
onMounted(() => {
  console.log('cactus')
})
let personnage = ref(null)
function chipsBacon() {
  fetch(`https://swapi.dev/api/people`)
  .then(res => res.json())
  .then(data => personnage.value = data.results)
  .catch(err => console.log(err))
}
</script>

<template>
  <main>
    <Form />
    <h1>Home</h1>
    <button @click="chipsBacon">Cactus</button>
    <ul>
      <li v-for="personnages in personnage" v-bind:key="personnages.id">
        <p>{{personnages.name}}</p>
      </li>
    </ul>
  </main>
</template>
