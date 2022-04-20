<template>
  <button @click="unSetStore">Se déconnecter</button>
</template>

<script setup lang="ts">

import { useRoute, useRouter } from "vue-router";
import { useTokenStore } from "../../stores/token";
import { useEleveStore } from "../../stores/EleveStore";
import { useMatiereStore } from "../../stores/MatiereStore";
import { useProfStore } from "../../stores/ProfStore";
import { useClasseStore } from "../../stores/ClasseStore";
import { useNoteStore } from "../../stores/NoteEleve";

const router = useRouter();
const tokenStore = useTokenStore();
const eleveStore = useEleveStore();
const matiereStore = useMatiereStore();
const profStore = useProfStore();
const classeStore = useClasseStore();
const noteStore = useNoteStore();

function unSetStore() {
  tokenStore.$reset();
  eleveStore.$reset();
  matiereStore.$reset();
  profStore.$reset();
  classeStore.$reset();
  noteStore.$reset();
  router.push("/login");
}
</script>

<style>
</style>