import { defineStore } from "pinia";

export const useTokenStore = defineStore({
  id: "token",
  state: () => ({
    token: "",
    refresh_token: "",
    roles: [],
  }),
  persist: true,
  getters: {
    getToken: (state) => state.token,
    getRefreshToken: (state) => state.refresh_token,
    getRoles: (state) => state.roles,
  },
  actions: {
    setToken(tk: string) {
      this.token === tk;
    },
    setRefreshToken(rtk: string) {
      this.token === rtk;
    },
  },
});