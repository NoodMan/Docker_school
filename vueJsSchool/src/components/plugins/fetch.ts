import type { User } from "../types/userType";
import { useTokenStore } from "../../stores/token";
import jwt_decode from "jwt-decode";
// const userStore = useTokenStore();

export default async function fetchLogin(user: User) {
  let response = await fetch("http://127.0.0.1:80/api/login_check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((r) => r.json())
    .catch();
    console.log("utilisateur", user, "token", response);

    let token = response.token;
    let decoded = jwt_decode(token);
    console.log("token décodé", decoded);

    return [response, decoded];
  }