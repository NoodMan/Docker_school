<template>
  <div>
    <form @submit.prevent="FormSubmit">
      <label for="username">username</label>
      <input type="text" v-model="user.username" id="username" />

      <label for="password">password</label>
      <input type="password" v-model="user.password" id="password" />

      <input type="submit" value="Se conntrghjklecter" />
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import fetchLogin from "../../components/plugins/fetch";
import { useTokenStore } from "../../stores/token";
import { useRoute, useRouter } from "vue-router";

const user = ref({
  username: "",
  password: "",
});

const tokenStore = useTokenStore();
const router = useRouter();

const FormSubmit = () => {
  fetchLogin(user.value).then(([response, decoded]) => {
    tokenStore.token = response.token;
    tokenStore.refresh_token = response.refresh_token;
    tokenStore.roles = decoded.roles;

    let error = "non autorisé";
    let tableauRoles = tokenStore.roles;
    switch (true) {
      case tableauRoles.indexOf("ROLE_DIRECTEUR") !== -1:
        console.log("role de la personne");
        router.push("/director");
        break;
      case tableauRoles.indexOf("ROLE_PROF") !== -1:
        console.log("role de la personne");
        router.push("/prof");
        break;
      case tableauRoles.indexOf("ROLE_ELEVE") !== -1:
        console.log("role de la personne");
        router.push("/eleve");
        break;
      default:
        alert(error);
    }
  });
};
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