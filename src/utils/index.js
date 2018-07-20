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
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res)
        } else {
          reject(res)
        }
      },
      fail(err) {
        reject(err)
      },
    })
  })
}

wx.$showToast = ({
  title,
  state,
  duration,
  mask,
}) => new Promise((resolve, reject) => {
  const options = {
    title: title || '提示',
    duration: duration || 1500,
    mask: mask || false,
    success() {
      resolve()
    },
    fail() {
      reject()
    },
  }

  if (state) {
    options.icon = state

    // error 采用自定义图标
    if (state === 'error' || state === 'warning' || state === 'fail') {
      options.image = '/static/icon_fail.png'
    }
  } else {
    options.icon = 'success'
  }

  wx.showToast(options)
})


export default {}
