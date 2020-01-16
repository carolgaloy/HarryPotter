<template>
  <div class="content">
    <h1>Hello, who are you?</h1>
    <router-link to="/muggle"
      ><v-btn block color="#A9BCD0" tile dark
        >I'm a normal human</v-btn
      ></router-link
    >
    <router-link to="/landing"
      ><v-btn block color="#A9BCD0" tile dark>I'm a wizard</v-btn></router-link
    >
  </div>
</template>

<style scoped>
.content > a > .v-btn {
  height: 150px;
  margin-top: 16px;
}
</style>
