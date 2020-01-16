<template>
  <div class="content" v-if="!loading">
    <router-link to="/landing">
      <v-btn text color="#a9bcd0" class="go-back keep-spaces"
        ><v-icon>mdi-arrow-left </v-icon> Menu</v-btn
      ></router-link
    >
    <h1>Spells</h1>
    <div class="spells">
      <div v-for="(spell, index) in spells" v-bind:key="index">
        <router-link :to="`spells/${spell._id}`">
          <SpellItem :spell="spell" />
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="content">
    <p>Loading...</p>
  </div>
</template>

<script>
import SpellItem from "../components/SpellItem";

export default {
  name: "Spells",
  components: {
    SpellItem
  },
  computed: {
    spells() {
      return this.$store.state.spells;
    },
    loading() {
      return this.$store.state.isLoading;
    }
  },
  created() {
    this.$store.dispatch("getSpells");
  }
};
</script>

<style scoped>
h1 {
  color: #a9bcd0;
}
</style>
