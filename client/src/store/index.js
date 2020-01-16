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
    }
  },
  getters: {},
  modules: {}
});
