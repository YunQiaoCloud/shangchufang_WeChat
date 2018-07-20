import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

wx.$http = function({
  url,
  data,
  header,
  method,
}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `https://chufang.melive.cc/api/v1${url}`,
      data: data || {},
      method: 'get' || method,
      hedaer: header || {},
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      },
    })
  })
}

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  },
}
