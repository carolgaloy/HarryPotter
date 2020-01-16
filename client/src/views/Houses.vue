<template>
  <div class="content" v-if="!loading">
    <router-link to="/landing">
      <v-btn text color="white" class="go-back keep-spaces"
        ><v-icon>mdi-arrow-left </v-icon> Menu</v-btn
      ></router-link
    >
    <h1>Houses</h1>
    <ul>
      <li v-for="(house, index) in houses" v-bind:key="index">
        <router-link :to="`houses/${house._id}`"
          ><img :src="house.img" alt="House shield"
        /></router-link>
      </li>
    </ul>
  </div>
  <div v-else class="content">
    <p>Loading...</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      houses: state => state.housesModule.houses,
      loading: state => state.isLoading
    })
  },
  created() {
    this.$store.dispatch("getHouses");
  }
};
</script>

<style scoped>
span {
  color: white;
}
.content {
  padding: 12px;
  margin-top: 40px;
  margin-bottom: 48px;
}
.v-application ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
  padding-top: 12px;
  justify-content: space-around;
}
li {
  width: 45%;
}
img {
  width: 100%;
}
</style>
