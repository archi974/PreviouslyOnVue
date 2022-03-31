<template>
  <div class="home">
      <p>Select profile</p>
      <input type="button" value="Vincent" v-on:click="$router.push('/home')"/>
      <!-- <input @click.native="$router.push('/endreco/test')"> -->
  </div>
</template>