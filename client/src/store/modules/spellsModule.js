/* eslint-disable no-console */
import axios from "axios";

export default {
  state: {
    spells: [],
    selectedSpell: {}
  },
  mutations: {
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
  getters: {}
};
