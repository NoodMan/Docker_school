<template>
  <div>
    <form @submit.prevent="FormSubmit">
      <label for="élève">Elève</label>
      <select v-model="eleve.id" id="élève">
        <option
          v-for="eleve in eleveStore.getEleve"
          :key="eleve.id"
          v-on:value="eleve['@id']"
        >
          {{ eleve["@id"] }}
        </option>
      </select>
      <input type="submit" value="voir élève" />
    </form>
  </div>

  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>username</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Classe</th>
          <th>sexe</th>
          <th>email des parents</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="eleve in tableauFiltre" :key="eleve.id">
          <td>{{ eleve.id }}</td>
          <td>{{ eleve.username }}</td>
          <td>{{ eleve.firstname }}</td>
          <td>{{ eleve.lastname }}</td>
          <td>{{ eleve.SchoolClass }}</td>
          <td>{{ eleve.sexe }}</td>
          <td>{{ eleve.parents_email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <router-link :to="{ name: 'director' }">
    <button class="btn btn-primary">Retour au Menu Principal</button>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useTokenStore } from "../../stores/token";
import EleveList from "../plugins/getEleve";
import { useEleveStore } from "../../stores/EleveStore";

const tokenStore = useTokenStore();
const eleveStore = useEleveStore();

const eleve = ref({
  id: "",
});

onMounted(() => {
  EleveList();
});

const tableauFiltre = computed(() => {
  return eleveStore.getEleve.filter((o) => o["@id"] === eleve.value.id);
});

async function FormSubmit() {
  eleve.value.id;
}
</script>

<style scoped>
table {
  border: 3px solid #49b0ff;
  width: 300px;
  background-color: #e5f9ff;
}
td,
th {
  border: thin solid #6495ed;
  width: 300px;
}
</style>