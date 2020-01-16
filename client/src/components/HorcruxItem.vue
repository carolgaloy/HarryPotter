<template>
  <div class="horcrux">
    <img :src="horcrux.img" alt="Book cover" />
    <p>{{ horcrux.name }}</p>
  </div>
</template>

<script>
export default {
  name: "HorcruxItem",
  props: {
    horcrux: Object
  }
};
</script>

<style scoped>
.horcrux img {
  width: 35%;
}
.horcrux p {
  padding: 16px;
  font-size: 20px;
  color: #d8dbe2;
}
.horcrux {
  display: flex;
  margin-top: 16px;
  align-items: center;
}
</style>
