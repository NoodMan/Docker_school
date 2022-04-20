<template>
  <div>
    <form @submit.prevent="addNote">
      <label for="eleve">élève</label>
      <select v-model="note.eleve" id="eleve">
        <option
          v-for="eleve in eleveStore.getEleve"
          :key="eleve.id"
          v-on:value="eleve['@id']"
        >
          {{ eleve["@id"] }}
        </option>
      </select>

      <label for="matiere">matiere</label>
      <select v-model="note.matiere" id="eleve">
        <option
          v-for="matiere in matiereStore.getMatiere"
          :key="matiere.id"
          v-on:value="matiere['@id']"
        >
          {{ matiere["@id"] }}
        </option>
      </select>

      <label for="note">Note</label>
      <input type="number" min="0" max="20" v-model="note.notation" id="note" />

      <label for="start">date du contrôle:</label>
      <input
        v-model="note.date"
        type="date"
        id="start"
        name="trip-start"
        min="2021-09-02"
        max="2022-07-07"
      />

      <input type="submit" value="Ajouter Note" />
    </form>
  </div>
  <router-link :to="{ name: 'prof' }">
    <button class="btn btn-primary">Retour au Menu Principal</button>
  </router-link>
</template>

<script setup>
import { useTokenStore } from "../../stores/token";
import { useEleveStore } from "../../stores/EleveStore";
import { useMatiereStore } from "../../stores/MatiereStore";
import { computed, onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import MatiereList from "../plugins/getMatiere";
import EleveList from "../plugins/getEleve";

const eleveStore = useEleveStore();
const tokenStore = useTokenStore();
const matiereStore = useMatiereStore();

onMounted(() => {
  MatiereList();
  EleveList();
});

const note = ref({
  date: "",
  eleve: "",
  matiere: "",
  notation: 0,
});

async function addNote() {
  console.log(
    "eleve :",
    note.value.eleve_id,
    "matiere :",
    note.value.matiere_id,
    "note :",
    note.value.notation,
    "date :",
    note.value.date
  );
  let response = await fetch("http://127.0.0.1:8000/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${tokenStore.token}`,
    },
    body: JSON.stringify(note.value),
  })
    .then((r) => r.json())
    .catch();
  console.log("note que l'on veut", response);
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
  display: flex;
  flex-direction: column;
  width: 120px;
  margin-left: 5px;
  box-shadow: 1px 1px 1px #002fff;
  cursor: pointer;
}
</style>