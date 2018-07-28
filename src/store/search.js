const state = {
  searchResults: [],
}

const getters = {
  searchResults(state) {
    return state.searchResults
  },
}

const mutations = {
  setSearchResults(state, searchResults) {
    state.searchResults = searchResults
  },
}

const actions = {
  async getSearchResults({ commit }, searchValue) {
    try {
      const res = await wx.$http({
        url: `/search?q=${searchValue}`,
      })

      commit('setSearchResults', res.data)
    } catch (err) {
      wx.$showToast({
        title: '获取搜索结果失败',
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
