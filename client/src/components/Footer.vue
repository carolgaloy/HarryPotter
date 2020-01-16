<template>
  <v-footer padless color="#293132" dark fixed height="48px" class="border">
    <v-col class="text-center" cols="12">
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
    </v-col>
  </v-footer>
</template>

<style scoped>
.v-footer > .text-center {
  padding-top: 6px;
}
.border {
  border-top: 1px solid black !important;
}
</style>
