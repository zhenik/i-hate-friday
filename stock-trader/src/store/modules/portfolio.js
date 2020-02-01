const state = {
  funds: 10000, stocks: []
};

const mutations = {
  buyStock(state, {stockId, quantity, stockPrice}) {
    const record = state.stocks.find(element => element.id === stockId);
    // console.log("portfolio/buyStock record -> " + record);
    // console.log("state -> " + JSON.stringify(state.stocks));
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId, quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  sellStock(state, {stockId, quantity, stockPrice}) {

    const record = state.stocks.find(element => element.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  }
};

const actions = {
  sellStock({commit}, order) {
    commit('sellStock', order)
  },
  buyStock({commit}, order) {
    commit('buyStock', order)
  }
};

const getters = {
  stockPortfolio (state, getters, rootState) {
    return state.stocks.map(stock => {
      const record = rootState.stocks.stocks.find(element => element.id == stock.id);
      // const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
