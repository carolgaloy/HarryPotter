<template>
  <div class="content" v-if="!loading">
    <router-link to="/horcruxes">
      <v-btn text color="white" class="go-back keep-spaces"
        ><v-icon>mdi-arrow-left </v-icon> Horcruxes</v-btn
      ></router-link
    >
    <div>
      <img :src="horcrux.img" :alt="`${horcrux.name} Detail`" />
    </div>
    <div>
      <h1>{{ horcrux.name }}</h1>
      <div class="detail-background">
        <div class="details">
          <div>
            <h2>Death caused</h2>
            <p>{{ horcrux.death }}, {{ horcrux.deathdate }}</p>
          </div>
          <div>
            <h2>Hiding place</h2>
            <p>{{ horcrux.hiding }}</p>
          </div>
          <div>
            <h2>Destroyed by</h2>
            <p>{{ horcrux.destroyedby }} with {{ horcrux.destroyedwith }}</p>
          </div>
          <div>
            <h2>Description</h2>
            <p>{{ horcrux.description }}</p>
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
      horcrux: state => state.horcruxesModule.selectedHorcrux,
      loading: state => state.isLoading
    })
  },
  methods: {
    ...mapActions({
      getHorcrux: "getHorcrux"
    })
  },
  created() {
    this.getHorcrux(this.$route.params.id);
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
  padding: 24px 32px;
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
