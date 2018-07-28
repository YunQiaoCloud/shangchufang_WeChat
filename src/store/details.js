const state = {
  cookDetails: [],
}

const getters = {
  cookDetails(state) {
    return state.cookDetails
  },
}

const mutations = {
  setCookDetails(state, cookDetails) {
    state.cookDetails = cookDetails
  },
}

const actions = {
  async getCookDetails({ commit }, cookId) {
    try {
      const res = await wx.$http({
        url: `/cook_detail/${cookId}`,
      })

      commit('setCookDetails', res.data)
    } catch (err) {
      wx.$showToast({
        title: '获取菜品详情失败',
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
