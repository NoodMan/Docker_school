<template>
  <div>
    <form @submit.prevent="deleteUser">
      <label for="prof">professeur</label>
      <select v-model="prof.id" id="prof">
        <option
          v-for="prof in profStore.getProf"
          :key="prof.id"
          v-on:value="prof['@id']"
        >
          {{ prof["@id"] }}
        </option>
      </select>
      <input type="submit" value="Licencier Professeur" />
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
import profList from "../plugins/getProf";
import { useProfStore } from "../../stores/ProfStore";

const profStore = useProfStore();
const tokenStore = useTokenStore();

onMounted(() => {
  profList();
});

const prof = ref({
  id: 0,
});

async function deleteUser() {
  console.log("id prof viré", prof.value.id);
  let response = await fetch("http://127.0.0.1:8000" + prof.value.id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${tokenStore.token}`,
    },
  })
    .then((r) => r.json())
    .catch();
  console.log("prof licencié", response);

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