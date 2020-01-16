<template>
  <div class="content" v-if="!loading">
    <router-link to="/landing">
      <v-btn text color="#a9bcd0" class="go-back keep-spaces"
        ><v-icon>mdi-arrow-left </v-icon> Menu</v-btn
      ></router-link
    >
    <h1>Books</h1>
    <div class="books">
      <div v-for="(book, index) in books" v-bind:key="index">
        <router-link :to="`books/${book._id}`">
          <BookItem :book="book" />
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="content">
    <p>Loading...</p>
  </div>
</template>

<script>
import BookItem from "../components/BookItem";
import { mapState } from "vuex";

export default {
  name: "Books",
  components: {
    BookItem
  },
  computed: {
    ...mapState({
      books: state => state.booksModule.books,
      loading: state => state.isLoading
    })
  },
  created() {
    this.$store.dispatch("getBooks");
  }
};
</script>

<style scoped>
h1 {
  color: #a9bcd0;
}
</style>
