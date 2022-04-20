import { defineStore } from 'pinia'

export const useEleveStore = defineStore({
  id: 'eleve',
  state: () => ({
    eleve: [  
    ],
  }),
  persist: true,
  getters: {
    getEleve: (state) => state.eleve
  },
  actions: {
    increment() {
    }
  }
})