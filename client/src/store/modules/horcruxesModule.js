/* eslint-disable no-console */
import axios from "axios";

export default {
  state: {
    horcruxes: [],
    selectedHorcrux: {}
  },
  mutations: {
    setHorcruxes: (state, payload) => {
      state.horcruxes = payload;
    },
    setSelectedHorcrux: (state, payload) => {
      state.selectedHorcrux = payload;
    }
  },
  actions: {
    getHorcruxes: context => {
      context.commit("isLoading", true);
      axios
        .get("/horcruxes/all")
        .then(result => {
          //console.log(result.data);
          context.commit("setHorcruxes", result.data);
          context.commit("isLoading", false);
        })
        .catch(e => {
          console.log(e);
          context.commit("isLoading", false);
          context.commit("isError", true);
        });
    },
    getHorcrux: (context, horcruxId) => {
      context.commit("isLoading", true);
      axios
        .get(`/horcruxes/all/${horcruxId}`)
        .then(result => {
          //console.log(result.data);
          context.commit("setSelectedHorcrux", result.data);
          context.commit("isLoading", false);
        })
        .catch(e => {
          console.log(e);
          context.commit("isLoading", false);
          context.commit("isError", true);
        });
    }
  }
};
