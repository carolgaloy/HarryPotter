<template>
  <div class="content" v-if="!loading">
    <router-link to="/books">
      <v-btn text color="white" class="go-back keep-spaces"
        ><v-icon>mdi-arrow-left </v-icon> Books</v-btn
      ></router-link
    >
    <div>
      <img :src="book.img" :alt="`${book.title} Shield`" />
    </div>
    <div>
      <h1>{{ book.title }}</h1>
      <div class="detail-background">
        <div class="details">
          <div>
            <h2>Year</h2>
            <p>{{ book.year }}</p>
          </div>
          <div>
            <h2>Pages</h2>
            <p>{{ book.pages }}</p>
          </div>
          <div>
            <h2>ISBN</h2>
            <p>{{ book.isbn }}</p>
          </div>
          <div>
            <h2>Description</h2>
            <p>{{ book.description }}</p>
          </div>
        </div>
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
    book() {
      return this.$store.state.selectedBook;
    },
    loading() {
      return this.$store.state.isLoading;
    }
  },
  created() {
    this.$store.dispatch("getBook", this.$route.params.id);
  }
};
</script>

<style scoped>
h1 {
  margin: 4px;
}
h2 {
  font-size: 16px;
  color: #a9bcd0;
}
p {
  font-size: 20px;
  color: #d8dbe2;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
.go-back {
  margin-top: 16px;
  margin-left: 8px;
}
.content {
  padding: 0;
}
.detail-background {
  margin: 0;
  padding: 0;
  background: #564d65;
  border-radius: 52px 52px 0px 0px;
}
.details {
  padding-left: 32px;
  padding-top: 24px;
  margin-top: 8px;
}
.details div p {
  margin-left: 8px;
}
.keep-spaces {
  white-space: pre-wrap;
}
.flex {
  display: flex;
}
</style>
