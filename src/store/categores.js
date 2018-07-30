import _ from 'lodash'

const state = {
  categores: [],
  activeCategoryIndex: -1,
}

const getters = {
  categores(state) {
    return state.categores
  },
  activeCategoryIndex(state) {
    return state.activeCategoryIndex
  },
}

const mutations = {
  setCategores(state, categores) {
    state.categores = categores
  },
  setAcviteCategoryIndex(state, index) {
    state.activeCategoryIndex = index
  },
}

const actions = {
  setAcviteCategoryIndex({ commit, dispatch, state }, index) {
    // 设置当前 index
    commit('setAcviteCategoryIndex', index)

    // 找到当前菜单的 id
    const acviteCategoryId = _.get(state.categores, `[${index}].id`)

    // 交给 cook 里的 action 获取数据
    dispatch('getCookList', acviteCategoryId)
  },
  async getCategores({ commit, state }) {
    if (!state.categores.length) {
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
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
