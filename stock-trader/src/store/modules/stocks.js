import stocks from "../../data/stocks.js";

const state = {
  stocks: []
};

const actions = {
  initStocks ({commit}) {
    commit('setStocks', stocks);
  },
};

const mutations = {
  setStocks (state, stocks) {
    state.stocks = stocks;
  },
};

const getters = {
  stocks: state => {
    return state.stocks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};