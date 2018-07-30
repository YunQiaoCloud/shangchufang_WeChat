const state = {
  cookList: {
    categoresId: '',
    list: {},
  },
}

const getters = {
  cookList(state) {
    return state.cookList.list
  },
}

const mutations = {
  setCookList(state, cookList) {
    state.cookList.list = cookList
    console.log(state.cookList, 'cookList')
  },
}

const actions = {
  async getCookList({ commit, state }, index) {
    if (state.cookList.categoresId !== index) {
      try {
        const res = await wx.$http({
          url: `/cook/${index}`,
        })
        const categoresId = index
        state.cookList.categoresId = categoresId
        commit('setCookList', res.data)
      } catch (err) {
        wx.$showToast({
          title: '获取列表失败',
          state: 'fail',
        })
      }
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
