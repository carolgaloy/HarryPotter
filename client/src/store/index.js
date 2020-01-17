import Vue from "vue";
import Vuex from "vuex";
import booksModule from "./modules/booksModule.js";
import housesModule from "./modules/housesModule.js";
import horcruxesModule from "./modules/horcruxesModule.js";
import spellsModule from "./modules/spellsModule.js";

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
    }
  },
  actions: {},
  getters: {},
  modules: {
    booksModule,
    housesModule,
    horcruxesModule,
    spellsModule
  }
});
