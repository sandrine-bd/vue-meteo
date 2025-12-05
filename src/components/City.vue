<template>
    <div class="city">
        <h1>Météo - {{ name }}</h1>

        <p><strong>Description : </strong> {{ weather }}</p>
        <p><strong>Température : </strong> {{ temperature }} °C</p>
        <p><strong>Dernière mise à jour :</strong> {{ updatedAt.toLocaleString() }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    name: String,
    weather: String,
    temperature: Number,
    updatedAt: Date
})

// Pour simplifier, on utilise la destructuration
const { name, weather, temperature, updatedAt } = props
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