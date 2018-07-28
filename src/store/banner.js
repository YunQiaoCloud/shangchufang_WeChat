const state = {
  bannerList: [],
}

const getters = {
  banner(state) {
    const banner = state.bannerList.map((item) => ({
      id: item.id,
      coverImg: `https://chufang.melive.cc${item.coverImg}`,
      title: item.title,
    }))

    return banner
  },
}

const mutations = {
  setBanner(state, bannerList) {
    state.bannerList = bannerList
  },
}

const actions = {
  async getBanner({ commit }) {
    try {
      const res = await wx.$http({
        url: '/banner',
      })
      const bannerList = res.data

      commit('setBanner', bannerList)
    } catch (err) {
      wx.$showToast({
        title: '获取banner失败',
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
