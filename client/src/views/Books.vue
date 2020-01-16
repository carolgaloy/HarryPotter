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
        <router-link :to="`books/${book._id}`"
          ><img :src="book.img" alt="Book cover" />

          <p>{{ book.title }}</p>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="content">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  computed: {
    books() {
      return this.$store.state.books;
    },
    loading() {
      return this.$store.state.isLoading;
    }
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
.books img {
  width: 35%;
}
.books > div > a {
  display: flex;
  margin-top: 16px;
  align-items: center;
}
.books div a p {
  padding: 16px;
  font-size: 20px;
  color: #d8dbe2;
}
</style>
