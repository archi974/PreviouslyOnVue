<script setup>
const KEY_API = import.meta.env.VITE_APP_KEY;
function redirect() {
  window.location.href = `https://www.betaseries.com/authorize?client_id=${KEY_API}&redirect_uri=http://localhost:4000`;
}
</script>

<template>
  <div class="main">
    <img src="https://static-assets.bamgrid.com/product/disneyplus/images/logo.1a56f51c764022ee769c91d894d44326.svg" alt="" />
    <p>Les histoires que vous imaginez + Beaucoup d'autres</p>
    <p>8,99€</p>
    <p>par mois</p>
    <p>Sans engagement*. Voir conditions d'abonnement.</p>
    <button @click="redirect">S'INSCRIRE</button>
    <hr>
    <p>89,90€</p>
    <p>pour un an</p>
    <p>Économisez plus de 15%**. Voir conditions d'abonnement.</p>
    <button>ÉCONOMISEZ SUR 12 MOIS</button>
    <p>
      * Résiliation effective à la fin de la période de facturation en cours. **
      Comparatif entre 12 mois d'abonnement mensuel et l'abonnement annuel.
    </p>
  </div>
</template>

<style>
body {
  background-color: #000;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  color: #fff;
}
img {
  height: 10%;
  width: 10%;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>