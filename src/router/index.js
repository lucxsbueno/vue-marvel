import Vue from "vue";
import VueRouter from "vue-router";

//components
import Explorer from "../views/Explorer.vue";
import Favorites from "../views/Favorites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "explorer",
    component: Explorer
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites
  }
]

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
