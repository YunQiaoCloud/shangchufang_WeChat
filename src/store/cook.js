import _ from 'lodash'

const state = {
  /*
    cookList: {
      categoryId: '',
      list: {},
    },
  */
  activeCategoryId: '', // 当前选择的是哪一个 tab
  cookList: [],
}

const getters = {
  cookList(state) {
    // 找到有没有当前选择的菜单对应的数据
    const index = _.findIndex(state.cookList, ['categoryId', state.activeCategoryId])

    // 有就返回数据，否则返回空数组
    if (index !== -1) {
      return state.cookList[index].list
    }
    return []
  },
  activeCategoryId(state) {
    return state.activeCategoryId
  },
}

const mutations = {
  setCookList(state, { list, categoryId }) {
    // 获取到的数据搭配当前 id 组合后插入数组
    state.cookList.push({
      categoryId,
      list,
    })
  },
  setActiveCategoryId(state, categoryId) {
    state.activeCategoryId = categoryId
  },
}

const actions = {
  async getCookList({ commit, state }, id) {
    // 设置当前选择 id
    commit('setActiveCategoryId', id)

    // 判断数组里有没有当前选择的 category 数据
    const index = _.findIndex(state.cookList, ['categoryId', id])
    if (index === -1) {
      try {
        const res = await wx.$http({
          url: `/cook/${id}`,
        })

        // 存放获取到的数据以及当前的 id
        commit('setCookList', { list: res.data, categoryId: id })
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
