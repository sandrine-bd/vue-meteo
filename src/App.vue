<script setup>
function onListClick() {
  alert("Vous avez cliqué pour afficher la liste des données météo");
}
</script>

<template>
  <main class="home">
    <h1>Bienvenue sur l'application météo</h1>
    <a href="#" @click.prevent="onListClick">
      Voir la liste des données météo
    </a>
  </main>
</template>

<style scoped>
.home {
  padding: 2rem;
}
a {
  color: #42b983;
  cursor: pointer;
  text-decoration: underline;
}
</style>