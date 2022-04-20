<template>
  <div>
    <form @submit.prevent="FormSubmit">
      <label for="username">username du professeur</label>
      <input type="text" v-model="prof.username" id="username" />

      <label for="password">password du professeur</label>
      <input type="password" v-model="prof.password" id="password" />

      <label for="firstname">Prénom</label>
      <input type="text" v-model="prof.firstname" id="firstname" />

      <label for="lastname">Nom</label>
      <input type="text" v-model="prof.lastname" id="lastname" />

      <label for="ancienneté">Ancienneté</label>
      <input type="text" v-model="prof.ancienneté" id="ancienneté" />

      <label for="salaire">Salaire</label>
      <input type="number" v-model="prof.salaire" id="salaire" />

      <label for="schoolClass">Classe</label>
      <select v-model="prof.schoolClass" id="schoolClass">
        <option
          v-for="classe in classeStore.getClasses"
          :key="classe.id"
          v-on:value="classe['@id']"
        >
          {{ classe["@id"] }}
        </option>
      </select>

      <input type="submit" value="Ajouter Professeur" />
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

const prof = ref({
  username: "",
  password: "",
  roles: ["ROLE_TEACHER"],
  firstname: "",
  lastname: "",
  ancienneté: "",
  salaire: 0,
  schoolClass: "",
});

onMounted(() => {
  classListe();
});

async function FormSubmit() {
  let response = await fetch("http://127.0.0.1:8000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/ld+json",
      Authorization: `Bearer ${tokenStore.token}`,
    },
    body: JSON.stringify(prof.value),
  })
    .then((r) => r.json())
    .catch();
  console.log("user que l'on veut ajouté", response);
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