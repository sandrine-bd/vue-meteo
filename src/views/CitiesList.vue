<template>
  <div>
    <h1>Météo - Liste des villes</h1>

    <!--- Boucle sur chaque ville -->
    <City
        v-for="city in cities"
        :key="city.id"
        :name="city.name"
        :weather="city.weather"
        :temperature="city.temperature"
        :updatedAt="city.updatedAt"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import City from '../components/City.vue';

// Data contenant la liste des villes
const data = reactive({
    cities: [
        {
            id: 1,
            name: 'Ville 1',
            weather: 'Ensoleillé',
            temperature: 22.0,
            updatedAt: new Date()
        },
        {
            id: 2,
            name: 'Ville 2',
            weather: 'Peu nuageux',
            temperature: 19.5,
            updatedAt: new Date()
        }
    ]
})

// Accès direct aux villes pour le template
const { cities } = data
</script>

<style scoped>
h1 {
    margin-bottom: 1rem;
}
</style>
