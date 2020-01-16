/* eslint-disable no-console */
import axios from "axios";

export default {
  state: {
    books: [],
    selectedBook: {}
  },
  mutations: {
    setBooks: (state, payload) => {
      state.books = payload;
    },
    setSelectedBook: (state, payload) => {
      state.selectedBook = payload;
    }
  },
  actions: {
    getBooks: context => {
      context.commit("isLoading", true);
      axios
        .get("/books/all")
        .then(result => {
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
  getters: {}
};
