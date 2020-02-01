import stocks from "../../data/stocks.js";

const state = {
  stocks: []
};
const mutations = {
  setStocks (state, stocks) {
    state.stocks = stocks;
  },
  randomizeStocks(state){
    console.log('End day called');
    state.stocks.forEach(stock =>{
      stock.price = Math.round(stock.price * (1+Math.random() - 0.5));
    });
  }
};

const actions = {
  initStocks ({commit}) {
    commit('setStocks', stocks);
  },
  randomizeStocks({commit}) {
    commit('randomizeStocks')
  }
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