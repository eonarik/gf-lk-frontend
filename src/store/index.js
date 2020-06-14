import Vue from 'vue';
import Vuex from 'vuex';

import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export const initialState = {
  user: {},
  isAuth: Boolean(window.localStorage.token),
  errorData: {},
  favourites: {
    page: 1,
    total: 0,
    items: [],
  },
  orders: {
    page: 1,
    total: 0,
    items: [],
  },
  subscriptions: {
    currentMonth: 0,
    items: [],
  },
  loading: false,
};

export default new Vuex.Store({
  state: {
    ...initialState,
  },
  mutations,
  actions,
  getters: {
    getUser: (state) => (key) => (key ? state.user[key] : state.user),
    getFavourites: (state) => () => state.favourites.items,
  },
  modules: {
  },
});
