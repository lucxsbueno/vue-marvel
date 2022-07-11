import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import api from "@/services/api";

export default new Vuex.Store({
  state: {
    characters: [],
    favorites: [],
    character: []
  },
  getters: {
    characters: state => state.characters,
    favorites: state => state.favorites,
    character: state => state.character
  },
  mutations: {
    fetchCharacters: state => {
      api.get("/characters")
        .then(response => {
          state.characters = response.data.data.results;
        });
    },
    fetchCharacterByName: (state, name) => {
      api.get("/characters?name="+name)
        .then(response => {
          state.characters = response.data.data.results;
        });
    },
    fetchCharacterById: (state, id) => {
      state.character.shift();

      api.get("/characters/"+id)
        .then(response => {
          console.log(response.data.data.results[0]);
          
          state.character.push(response.data.data.results[0]);
        });
    },
    addFavorite: (state, character) => {
      state.favorites.push(character);
    },
    removeFavorite: (state, character) => {
      state.favorites.splice(state.favorites.indexOf(character), 1);
    }
  },
  actions: {
    fetchCharacters: ({ commit }) => commit("fetchCharacters"),
    addFavorite: ({ commit }, character) => commit("addFavorite", character),
    removeFavorite: ({ commit }, character) => commit("removeFavorite", character),
    fetchCharacterByName: ({ commit }, name) => commit("fetchCharacterByName", name),
    fetchCharacterById: ({ commit }, id) => commit("fetchCharacterById", id)
  }
});
