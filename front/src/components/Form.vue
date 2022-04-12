<script setup>
import { ref } from "vue";
let info = ref(null);
let post = {};
function search(){
    console.log(post)
}
</script>
<template>
    <div>
        <p>FORMULAIRE</p>
        <form @submit.prevent="search">
            <!-- <input type="search" placeholder="cherche" v-model="post.test"/> -->
            <input type="text" v-model="post.destination">
            <button type="submit" value="chercher">Search</button>
        </form>
    </div>
</template>
