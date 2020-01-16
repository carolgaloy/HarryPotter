<template>
  <div class="spell">
    <p>{{ spell.spell }}</p>
    <p class="tinier">({{ spell.name }})</p>
  </div>
</template>

<script>
export default {
  name: "SpellItem",
  props: {
    spell: Object
  }
};
</script>

<style scoped>
.spell {
  margin-top: 16px;
}
.spell p {
  padding: 0px 16px;
  font-size: 20px;
  color: #d8dbe2;
  margin: 0;
}
p.tinier {
  font-size: 12px;
}
</style>
