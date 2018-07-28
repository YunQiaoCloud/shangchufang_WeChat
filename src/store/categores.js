const state = {
  categores: [],
}

const getters = {
  categores(state) {
    return state.categores
  },
}

const mutations = {
  setCategores(state, categores) {
    state.categores = categores
  },
}

const actions = {
  async getCategores({ commit }) {
    try {
      const res = await wx.$http({
        url: '/categores',
      })

      commit('setCategores', res.data)
    } catch (err) {
      wx.$showToast({
        title: '获取categores失败',
        state: 'fail',
      })
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
