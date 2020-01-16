<template>
  <div class="content">
    <h1>What are you looking for today?</h1>
    <router-link to="/characters"
      ><v-btn block color="#564D65" tile dark>Characters</v-btn></router-link
    >
    <router-link to="/houses"
      ><v-btn block color="#564D65" tile dark>Houses</v-btn></router-link
    >
    <router-link to="/spells"
      ><v-btn block color="#564D65" tile dark>Spells</v-btn></router-link
    >
    <router-link to="/horcruxes"
      ><v-btn block color="#564D65" tile dark>Horcruxes</v-btn></router-link
    >
    <router-link to="/books"
      ><v-btn block color="#564D65" tile dark>Books</v-btn></router-link
    >
    <router-link to="/movies"
      ><v-btn block color="#564D65" tile dark>Movies</v-btn></router-link
    >
  </div>
</template>

<style scoped>
.content {
  padding: 12px;
  margin-top: 40px;
  margin-bottom: 48px;
}

.content > a > .v-btn {
  height: 60px;
  margin-top: 16px;
}

h1 {
  margin-top: 16px;
  font-size: 24px;
  text-align: center;
  color: #d8dbe2;
}
</style>
