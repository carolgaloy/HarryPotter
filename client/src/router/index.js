import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Human from "../views/Human.vue";
import Landing from "../views/Landing.vue";
import Houses from "../views/Houses.vue";
import House from "../views/House.vue";
import Books from "../views/Books.vue";
import Book from "../views/Book.vue";
import Horcruxes from "../views/Horcruxes.vue";
import Horcrux from "../views/Horcrux.vue";
import Spells from "../views/Spells.vue";
import Spell from "../views/Spell.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/muggle",
    name: "muggle",
    component: Human
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  {
    path: "/landing",
    name: "landing",
    component: Landing
  },
  {
    path: "/houses",
    name: "houses",
    component: Houses
  },
  {
    path: "/houses/:id",
    name: "housedetail",
    component: House
  },
  {
    path: "/books",
    name: "books",
    component: Books
  },
  {
    path: "/books/:id",
    name: "bookdetail",
    component: Book
  },
  {
    path: "/horcruxes",
    name: "horcruxes",
    component: Horcruxes
  },
  {
    path: "/horcruxes/:id",
    name: "horcruxdetail",
    component: Horcrux
  },
  {
    path: "/spells",
    name: "spells",
    component: Spells
  },
  {
    path: "/spells/:id",
    name: "spelldetail",
    component: Spell
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
