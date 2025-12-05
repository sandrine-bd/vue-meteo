<template>
  <div>
    <nav>
      <router-link to="/villes">Liste des villes</router-link> 
    </nav>

    <!--- Le contenu de la route sélectionnée s'affiche ici-->
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  margin-bottom: 1rem;
}

router-link {
  margin-right: 1rem;
  cursor: pointer;
}
</style>