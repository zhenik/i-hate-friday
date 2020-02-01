import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResoure from 'vue-resource';

import App from './App.vue'
import { routes } from './routes.js'
import store from "./store/store.js";

Vue.use(VueRouter);
Vue.use(VueResoure);

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
