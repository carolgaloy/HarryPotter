/* eslint-disable no-console */
import axios from "axios";

export default {
  state: {
    houses: [],
    selectedHouse: {}
  },
  mutations: {
    setHouses: (state, payload) => {
      state.houses = payload;
    },
    setSelectedHouse: (state, payload) => {
      state.selectedHouse = payload;
    }
  },
  actions: {
    getHouses: context => {
      context.commit("isLoading", true);
      axios
        .get("/houses/all")
        .then(result => {
          //console.log(result.data);
          context.commit("setHouses", result.data);
          context.commit("isLoading", false);
        })
        .catch(e => {
          console.log(e);
          context.commit("isLoading", false);
          context.commit("isError", true);
        });
    },
    getHouse: (context, houseId) => {
      context.commit("isLoading", true);
      axios
        .get(`/houses/all/${houseId}`)
        .then(result => {
          //console.log(result.data);
          context.commit("setSelectedHouse", result.data);
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
