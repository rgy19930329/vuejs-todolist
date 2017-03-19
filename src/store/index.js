import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  baseURI: 'http://web.mock.apidev.com',
  loading: false,
  tipsMsg: ''
};

const getters = {
  baseURI(state) {
    return state.baseURI;
  },
  loading(state) {
    return state.loading;
  },
  tipsMsg(state) {
    return state.tipsMsg;
  }
};

const mutations = {
  loading(state, show) {
    state.loading = show;
  },
  tipsShow(state, msg) {
    state.tipsMsg = msg;
  },
  tipsHide(state) {
    state.tipsMsg = '';
  }
};

const actions = {
  loading({ commit }, show) {
    commit('loading', show);
  },
  tips({ commit }, msg) {
    commit('tipsShow', msg);
    setTimeout(() => {
      commit('tipsHide');
    }, 3000);
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
