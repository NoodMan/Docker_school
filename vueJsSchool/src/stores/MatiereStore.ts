import { defineStore } from 'pinia'

export const useMatiereStore = defineStore({
  id: 'matière',
  state: () => ({
    matiere: [  
    ],
  }),
  persist: true,
  getters: {
    getMatiere: (state) => state.matiere
  },
  actions: {
    increment() {
    }
  }
})