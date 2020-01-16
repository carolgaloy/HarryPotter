<template>
  <div class="book">
    <img :src="book.img" alt="Book cover" />
    <p>{{ book.title }}</p>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    book: Object
  }
};
</script>

<style scoped>
.book img {
  width: 35%;
}
.book p {
  padding: 16px;
  font-size: 20px;
  color: #d8dbe2;
}
.book {
  display: flex;
  margin-top: 16px;
  align-items: center;
}
</style>
