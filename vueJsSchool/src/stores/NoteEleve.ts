import NoteList from '@/components/plugins/getNote';
import { defineStore } from 'pinia'

export const useNoteStore = defineStore({
  id: 'Note',
  state: () => ({
    note: [  
    ],
  }),
  persist: true,
  getters: {
    getNote: (state) => state.note,
    getMoyenne: (state) => {
      let total = 0;
      let moyenne =0;
      state.note.map( (item : {notation: number}) => {
        total += item.notation
        
      })
      return total/state.note.length
    },
  },
  actions: {
    increment() {
    }
  }
})