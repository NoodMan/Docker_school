<template>
  <div>
    <label for="addNote">Ajouter une note :</label>
    <router-link :to="{ name: 'addNote' }">
      <button class="btn btn-primary">Ajouter une note</button>
    </router-link>

    <label for="showMyClass">Voir ma classe :</label>
    <router-link :to="{ name: 'showMyClass' }">
      <button class="btn btn-primary">Voir ma classe</button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
label {
  color: deepskyblue;
}

div {
  display: flex;
  flex-direction: column;
}
</style>