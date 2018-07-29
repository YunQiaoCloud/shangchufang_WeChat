const state = {
  cookList: [],
}

const getters = {
  cookList(state) {
    return state.cookList
  },
}

const mutations = {
  setCookList(state, cookList) {
    state.cookList = cookList
  },
}

const actions = {
  async getCookList({ commit }, index) {
    try {
      const res = await wx.$http({
        url: `/cook/${index}`,
      })

      commit('setCookList', res.data)
    } catch (err) {
      wx.$showToast({
        title: '获取列表失败',
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
