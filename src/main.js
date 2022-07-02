import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

// 引入bootstrap4
import "bootstrap/dist/css/bootstrap.css";



Vue.filter("addFn", (val) => {
  return val.split("").reverse().join("");
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
