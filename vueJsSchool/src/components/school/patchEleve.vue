<template>
  <div>
    <form @submit.prevent="patchEleve">
      <label for="eleve">élève</label>
      <select v-model="eleve.eleve" id="eleve">
        <option
          v-for="eleve in eleveStore.getEleve"
          :key="eleve.id"
          v-on:value="eleve['@id']"
        >
          {{ eleve["@id"] }}
        </option>
      </select>

      <label for="classe">classe</label>
      <select v-model="eleve.schoolClass" id="eleve">
        <option
          v-for="classe in classeStore.getClasses"
          :key="classe.id"
          v-on:value="classe['@id']"
        >
          {{ classe["@id"] }}
        </option>
      </select>

      <input type="submit" value="Approuver la gestion" />
    </form>
  </div>
  <router-link :to="{ name: 'director' }">
    <button class="btn btn-primary">Retour au Menu Principal</button>
  </router-link>
</template>

<script setup>
import { useTokenStore } from "../../stores/token";
import { useEleveStore } from "../../stores/EleveStore";
import { useClasseStore } from "../../stores/ClasseStore";
import { computed, onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import classList from "../plugins/getClasse";
import EleveList from "../plugins/getEleve";

const eleveStore = useEleveStore();
const tokenStore = useTokenStore();
const classeStore = useClasseStore();

onMounted(() => {
  classList();
  EleveList();
});

const eleve = ref({
  eleve: "",
  schoolClass: "",
});

async function patchEleve() {
  console.log(
    "eleve :",
    eleve.value.eleve,
    "nouvelle classe :",
    eleve.value.schoolClass
  );
  let response = await fetch("http://127.0.0.1:8000" + eleve.value.eleve, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/merge-patch+json",
      Authorization: `Bearer ${tokenStore.token}`,
    },
    body: JSON.stringify(eleve.value),
  })
    .then((r) => r.json())
    .catch();
  console.log("éleve affécté à une nouvelle classe", response);
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

input {
  width: 120px;
  margin-left: 5px;
  box-shadow: 1px 1px 1px #002fff;
  cursor: pointer;
}
</style>