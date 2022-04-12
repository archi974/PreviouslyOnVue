<script setup>
</script>

<template>
  <div class="main">
    <img src="../assets/disney-plus-logo.png" alt="" />
    <p>Les histoires que vous imaginez + Beaucoup d'autres</p>
    <p>8,99€ par mois</p>
    <p>Sans engagement*. Voir conditions d'abonnement.</p>
    <a
      href="https://www.betaseries.com/authorize?client_id=0ed5273cce43&redirect_uri=http://localhost:4000"
      >S'INSCRIRE</a
    >
    <p>89,90€ pour un an</p>
    <p>Économisez plus de 15%**. Voir conditions d'abonnement.</p>
    <a
      href="https://www.betaseries.com/authorize?client_id=0ed5273cce43&redirect_uri=http://localhost:4000"
      >S'INSCRIRE</a
    >
    <p>
      $ Résiliation effective à la fin de la période de facturation en cours. **
      Comparatif entre 12 mois d'abonnement mensuel et l'abonnement annuel.
    </p>
  </div>
</template>

<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  background-color: black;
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