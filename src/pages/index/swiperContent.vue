<template>
  <div class="swiper-content">
    <div class="swiper-content-item"
      v-for="item in cookList"
      :key="item.id">
      <div class="cover" :style="{'background-image': 'url('+item.albums[0]+')'}"/>
      <div class="body">
        <h6>
        {{item.title}}
        </h6>
        <p>
        {{item.imtro}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tab',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      },
    },
    activedIndex: {
      type: Number,
      default() {
        return 0
      },
    },
  },
  data() {
    return {
      cookList: [],
    }
  },
  watch: {
    activedIndex(index) {
      // 切换 tab 的时候触发更新
      this.getCookList(index)
    },
    tabs(tabs) {
      // 获取到 tab 信息的时候触发更新
      if (tabs.length) {
        this.getCookList(this.activedIndex)
      }
    },
  },
  methods: {
    async getCookList(index) {
      const activedTab = this.tabs[index]
      try {
        const res = await wx.$http({
          url: `/cook/${activedTab.id}`,
        })
        this.cookList = res.data
      } catch (err) {
        wx.$showToast({
          title: '获取列表失败',
          state: 'fail',
        })
      }
    },
  },
}
</script>

<style lang="scss">
.swiper-content {
  display: flex;
  flex-direction: column;
  margin: 20rpx;
}

.swiper-content-item {
  display: flex;
  margin-bottom: 20rpx;

  .cover {
    margin-right: 20rpx;
    width: 180rpx;
    height: 180rpx;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .body {
    flex: 1;

    p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
}
</style>
