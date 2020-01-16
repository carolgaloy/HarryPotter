<template>
  <div class="content" v-if="!loading">
    <router-link to="/houses">
      <v-btn text color="white" class="go-back keep-spaces"
        ><v-icon>mdi-arrow-left </v-icon> Houses</v-btn
      ></router-link
    >
    <div>
      <img :src="house.img" :alt="`${house.name} Shield`" />
    </div>
    <div>
      <h1>{{ house.name }}</h1>
      <div class="detail-background">
        <div class="details">
          <div>
            <h2>Founder</h2>
            <p>{{ house.founder }}</p>
          </div>
          <div>
            <h2>Head</h2>
            <p>{{ house.head }}</p>
          </div>
          <div>
            <h2>Ghost</h2>
            <p>{{ house.ghost }}</p>
          </div>
          <div>
            <h2>Colors</h2>
            <div class="flex">
              <p v-for="(color, index) in house.colors" v-bind:key="index">
                <v-icon :color="color.toLowerCase()">mdi-brightness-1 </v-icon>
                {{ color }}
              </p>
            </div>
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
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      house: state => state.housesModule.selectedHouse,
      loading: state => state.isLoading
    })
  },
  methods: {
    ...mapActions({
      getHouse: "getHouse"
    })
  },
  created() {
    this.getHouse(this.$route.params.id);
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
