import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


//.scss available globally, no need
//to import into all components
import "./scss/global.styles.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
