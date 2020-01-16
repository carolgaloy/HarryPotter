<template>
  <v-app>
    <Header title="Harry Potter" />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
/* import HelloWorld from "./components/HelloWorld"; */
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    /* HelloWorld, */
    Header,
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style>
a {
  text-decoration: none;
}
.v-application--wrap {
  background: #293132;
}
h1 {
  margin-top: 16px;
  font-size: 24px;
  text-align: center;
  color: #d8dbe2;
}
.content {
  padding: 12px;
  margin-top: 40px;
  margin-bottom: 48px;
}
.go-back {
  margin-top: 16px;
}
</style>
