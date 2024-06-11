// src/stores/suggestionStore.js
import { defineStore } from 'pinia';

export const useSuggestionStore = defineStore('suggestion', {
  state: () => ({
    suggestions: [],
  }),
  actions: {
    addSuggestion(suggestion) {
      this.suggestions.push(suggestion);
    },
  },
});