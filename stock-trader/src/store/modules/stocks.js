import stocks from "../../data/stocks";

const state = {
  stocks: []
};

const mutation = {
  'SET_STOCKS': (state, stocks) => {
    state.stocks = stocks;
  },

};

const actions = {
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks);
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
  mutation,
  actions,
  getters
};