import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './action'
// import * as getters from './getters'
// import * as mutations from './mutations'
import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'
import isLoading from './modules/isLoading'
import { vuexfireMutations } from 'vuexfire'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations:vuexfireMutations,

  modules: {
    menu,
    orders,
    users,
    isLoading
  }
})