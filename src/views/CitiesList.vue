<template>
  <div>
    <h1>Météo - Liste des villes</h1>

    <!--- Utilisation du composant City avec props -->
    <City
        name="Ma ville",
        weather="Peu nuageux"
        :temperature="20.55"
        :updatedAt="new Date()"
    />
  </div>
</template>

<script setup>
import City from '../components/City.vue';

</script>

<style scoped>
h1 {
    margin-bottom: 1rem;
}
</style>
