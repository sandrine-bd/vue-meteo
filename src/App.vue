<script setup>
import CitiesList from './views/CitiesList.vue';
</script>

<template>
  <main class="home">
    <CitiesList />
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