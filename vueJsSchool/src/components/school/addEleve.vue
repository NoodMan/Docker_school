<template>
  <div>
    <form @submit.prevent="FormSubmit">
      <label for="username">username de l'élève</label>
      <input type="text" v-model="eleve.username" id="username" />

      <label for="password">password de l'élève</label>
      <input type="password" v-model="eleve.password" id="password" />

      <label for="firstname">Prénom</label>
      <input type="text" v-model="eleve.firstname" id="firstname" />

      <label for="lastname">Nom</label>
      <input type="text" v-model="eleve.lastname" id="lastname" />

      <label for="schoolClass">Classe</label>
      <select v-model="eleve.schoolClass" id="schoolClass">
        <option
          v-for="classe in classeStore.getClasses"
          :key="classe.id"
          v-on:value="classe['@id']"
        >
          {{ classe["@id"] }}
        </option>
      </select>

      <label for="sexe">sexe</label>
      <input type="text" v-model="eleve.sexe" id="sexe" />

      <label for="email">email</label>
      <input type="email" v-model="eleve.email" id="email" />

      <input type="submit" value="Ajouter élève" />
    </form>
  </div>
  <router-link :to="{ name: 'director' }">
    <button class="btn btn-primary">Retour au Menu Principal</button>
  </router-link>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useTokenStore } from "../../stores/token";
import classListe from "../plugins/getClasse";
import { useClasseStore } from "../../stores/ClasseStore";

const tokenStore = useTokenStore();
const classeStore = useClasseStore();

const eleve = ref({
  username: "",
  password: "",
  roles: ["ROLE_STUDENT"],
  firstname: "",
  lastname: "",
  schoolClass: "",
  sexe: "",
  email: "",
});

onMounted(() => {
  classListe();
});

async function FormSubmit() {
  let response = await fetch("http://127.0.0.1:8000/api/eleves", {
    method: "POST",
    headers: {
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${tokenStore.token}`,
    },
    body: JSON.stringify(eleve.value),
  })
    .then((r) => r.json())
    .catch();
  console.log("eleve que l'on veut ajouté", response);
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