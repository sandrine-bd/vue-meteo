<template>
    <div class="city">
        <h1>Météo - {{ city.name }}</h1>

        <p><strong>Description : </strong> {{ city.weather }}</p>
        <p><strong>Température : </strong> {{ city.temperature }} °C</p>
        <p><strong>Dernière mise à jour :</strong> {{ city.updatedAt.toLocaleString() }}</p>
    </div>
</template>

<script setup>
import { reactive } from 'vue'

const city = reactive({
    name: "Ma ville",
    weather: "Peu nuageux",
    temperature: 20.55,
    updatedAt: new Date()
})
</script>

<style scoped>
.city {
    padding: 1rem;
}
h1 {
    margin-bottom: 1rem;
}
p {
    margin: 0.3rem 0;
}
</style>