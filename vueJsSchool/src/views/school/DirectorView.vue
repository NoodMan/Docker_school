<template>
  <div>
    <label for="addUser">Ajouter un prof :</label>
    <router-link :to="{ name: 'addUser' }">
      <button class="btn btn-primary">Ajouter un professeur</button>
    </router-link>

    <label for="deleteUser">Licencier un prof :</label>
    <router-link :to="{ name: 'deleteUser' }">
      <button class="btn btn-primary">Licencier un professeur</button>
    </router-link>

    <label for="addEleve">Ajouter un élève :</label>
    <router-link :to="{ name: 'addEleve' }">
      <button class="btn btn-primary">Ajouter un élève</button>
    </router-link>

    <label for="deleteEleve">Renvoyer un élève :</label>
    <router-link :to="{ name: 'deleteEleve' }">
      <button class="btn btn-primary">Virer un élève</button>
    </router-link>

    <label for="showEleveByBoss">Voir un élève :</label>
    <router-link :to="{ name: 'showEleveByBoss' }">
      <button class="btn btn-primary">Voir un élève</button>
    </router-link>

    <label for="patchEleve">Manager les élèves et les classes :</label>
    <router-link :to="{ name: 'patchEleve' }">
      <button class="btn btn-primary">Gestion des élèves et des classes</button>
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