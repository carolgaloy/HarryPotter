import Vue from "vue";
import Vuex from "vuex";
import booksModule from "./modules/booksModule.js";
import housesModule from "./modules/housesModule.js";
import horcruxesModule from "./modules/horcruxesModule.js";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  /* eslint-disable no-console */
  state: {
    isLoading: false,
    isError: false
  },
  mutations: {
    isLoading: (state, payload) => {
      state.isLoading = payload;
    },
    isError: (state, payload) => {
      state.isError = payload;
    },
    setSpells: (state, payload) => {
      state.spells = payload;
    },
    setSelectedSpell: (state, payload) => {
      state.selectedSpell = payload;
    }
  },
  actions: {
    getSpells: context => {
      context.commit("isLoading", true);
      axios
        .get("/spells/all")
        .then(result => {
          //console.log(result.data);
          context.commit("setSpells", result.data);
          context.commit("isLoading", false);
        })
        .catch(e => {
          console.log(e);
          context.commit("isLoading", false);
          context.commit("isError", true);
        });
    },
    getSpell: (context, spellId) => {
      context.commit("isLoading", true);
      axios
        .get(`/spells/all/${spellId}`)
        .then(result => {
          //console.log(result.data);
          context.commit("setSelectedSpell", result.data);
          context.commit("isLoading", false);
        })
        .catch(e => {
          console.log(e);
          context.commit("isLoading", false);
          context.commit("isError", true);
        });
    }
  },
  getters: {},
  modules: {
    booksModule,
    housesModule,
    horcruxesModule
  }
});
