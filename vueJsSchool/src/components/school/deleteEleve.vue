<template>
  <div>
    <form @submit.prevent="deleteUser">
      <label for="eleve">élève</label>
      <select v-model="eleve.id" id="eleve">
        <option
          v-for="eleve in eleveStore.getEleve"
          :key="eleve.id"
          v-on:value="eleve['@id']"
        >
          {{ eleve["@id"] }}
        </option>
      </select>
      <input type="submit" value="Virer l'élève" />
    </form>
  </div>
  <router-link :to="{ name: 'director' }">
    <button class="btn btn-primary">Retour au Menu Principal</button>
  </router-link>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useTokenStore } from "../../stores/token";
import EleveList from "../plugins/getEleve";
import { useEleveStore } from "../../stores/EleveStore";

const eleveStore = useEleveStore();
const tokenStore = useTokenStore();

onMounted(() => {
  EleveList();
});

const eleve = ref({
  id: 0,
});

async function deleteUser() {
  console.log("id prof viré", eleve.value.id);
  let response = await fetch("http://127.0.0.1:8000" + eleve.value.id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${tokenStore.token}`,
    },
  })
    .then((r) => r.json())
    .catch();

  console.log("élève viré", response);

  return response;
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  background-color: #e5f9ff;
  padding: 10px;
  width: 300px;
  border: 3px solid #49b0ff;
  border-radius: 5px;
  
}
</style>