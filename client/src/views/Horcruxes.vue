<template>
  <div class="content" v-if="!loading">
    <router-link to="/landing">
      <v-btn text color="#a9bcd0" class="go-back keep-spaces">
        <v-icon>mdi-arrow-left </v-icon> Menu
      </v-btn>
    </router-link>
    <h1>Horcruxes</h1>
    <div class="horcruxes">
      <div v-for="(horcrux, index) in horcruxes" v-bind:key="index">
        <router-link :to="`horcruxes/${horcrux._id}`">
          <HorcruxItem :horcrux="horcrux" />
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="content">
    <p>Loading...</p>
  </div>
</template>

<script>
import HorcruxItem from "../components/HorcruxItem";

export default {
  name: "Horcruxes",
  components: {
    HorcruxItem
  },
  computed: {
    horcruxes() {
      return this.$store.state.horcruxes;
    },
    loading() {
      return this.$store.state.isLoading;
    }
  },
  created() {
    this.$store.dispatch("getHorcruxes");
  }
};
</script>

<style scoped>
h1 {
  color: #a9bcd0;
}
.horcruxes img {
  width: 35%;
}
.horcruxes > div > a {
  display: flex;
  margin-top: 16px;
  align-items: center;
}
.horcruxes div a p {
  padding: 16px;
  font-size: 20px;
  color: #d8dbe2;
}
</style>
