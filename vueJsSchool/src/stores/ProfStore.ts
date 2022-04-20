import { defineStore } from 'pinia'

export const useProfStore = defineStore({
  id: 'professeur',
  state: () => ({
    prof: [  
    ],
  }),
  persist: true,
  getters: {
    getProf: (state) => state.prof
  },
  actions: {
    increment() {
    }
  }
})