<template>
  <div class="home">
    <h1>Who are you?</h1>
    <router-link to="/muggle"><v-btn block color="#A9BCD0" tile dark>I'm a normal human</v-btn></router-link>
    <router-link to="/landing"><v-btn block color="#A9BCD0" tile dark>I'm a wizard</v-btn></router-link>
  </div>
</template>

<style scoped>

* {
  padding: 8px;
}

.home > .v-btn {
  height: 100px;
  margin-bottom: 16px;
}

</style>
