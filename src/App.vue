<script>
export default {
  created() {
    wx.request({
      url: 'https://chufang.melive.cc/api/v1/banner',
      method: 'get',
      success(res) {
        console.log(res)
      }
    })
  }
}
</script>

<style>
</style>
