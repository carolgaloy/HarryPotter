import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  /* eslint-disable no-console */
  state: {
    isLoading: false,
    isError: false,
    houses: []
  },
  mutations: {
    isLoading: (state, payload) => {
      state.isLoading = payload;
    },
    isError: (state, payload) => {
      state.isError = payload;
    },
    setHouses: (state, payload) => {
      state.houses = payload;
    },
    setSelectedHouse: (state, payload) => {
      state.selectedHouse = payload;
    },
    setBooks: (state, payload) => {
      state.books = payload;
    },
    setSelectedBook: (state, payload) => {
      state.selectedBook = payload;
    },
    setHorcruxes: (state, payload) => {
      state.horcruxes = payload;
    },
    setSelectedHorcrux: (state, payload) => {
      state.selectedHorcrux = payload;
    },
    setSpells: (state, payload) => {
      state.spells = payload;
    },
    setSelectedSpell: (state, payload) => {
      state.selectedSpell = payload;
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
    },
    getBooks: context => {
      context.commit("isLoading", true);
      axios
        .get("/books/all")
        .then(result => {
          //console.log(result.data);
          context.commit("setBooks", result.data);
          context.commit("isLoading", false);
        })
        .catch(e => {
          console.log(e);
          context.commit("isLoading", false);
          context.commit("isError", true);
        });
    },
    getBook: (context, bookId) => {
      context.commit("isLoading", true);
      axios
        .get(`/books/all/${bookId}`)
        .then(result => {
          //console.log(result.data);
          context.commit("setSelectedBook", result.data);
          context.commit("isLoading", false);
        })
        .catch(e => {
          console.log(e);
          context.commit("isLoading", false);
          context.commit("isError", true);
        });
    },
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
    },
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
  modules: {}
});
