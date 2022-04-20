<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Matière</th>
          <th>Date</th>
          <th>Notation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in noteStore.getNote" :key="note.id">
          <td>{{ note.id }}</td>
          <td>{{ note.matiere }}</td>
          <td>{{ note.date }}</td>
          <td>{{ note.notation }} / 20</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "@vue/runtime-core";
import NoteList from "../../components/plugins/getNote"
import { ref } from "@vue/reactivity";
import { useTokenStore } from "../../stores/token";
import { useNoteStore } from "../../stores/NoteEleve";


const tokenStore = useTokenStore();
const noteStore = useNoteStore();

const note = ref({
  id: "",
});

onMounted(() => {
  NoteList();
});

async function FormSubmit() {
  note.value.id;
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