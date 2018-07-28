import Vue from 'vue'
import Vuex from 'vuex'
import categores from './categores'
import banner from './banner'
import cook from './cook'
import search from './search'
import details from './details'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categores,
    banner,
    cook,
    search,
    details,
  },
})
