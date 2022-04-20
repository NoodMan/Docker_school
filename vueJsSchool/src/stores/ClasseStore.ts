import { defineStore } from 'pinia'

export const useClasseStore = defineStore({
  id: 'classe',
  state: () => ({
    classes: [
    ],
  }),
  persist: true,
  getters: {
    getClasses: (state) => state.classes,
  },
  actions: {
    increment() {
    },
  },
})