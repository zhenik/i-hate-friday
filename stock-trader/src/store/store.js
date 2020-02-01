import Vue from 'vue';
import Vuex from 'vuex';

import stocks from './modules/stocks.js';
import portfolio from './modules/portfolio.js';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  // namespaced: true, // Add this here
  modules: {
    stocks,
    portfolio
  }
});