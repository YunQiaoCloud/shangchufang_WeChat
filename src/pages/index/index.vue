<template>
  <div>
    <swiper
      class="swiper-banner"
      autoplay="true" indicator-dots="true"
      indicator-color="rgba(128, 128, 128, 0.5)"
      indicator-active-color="rgba(85, 85, 85, 1)"
      circular="true">
      <block v-for="item in banners" :key="item.id">
        <swiper-item class="swiper-banner-item">
          <image :src="item.coverImg" class="slide-image" width="355" height="150"/>
        </swiper-item>
      </block>
    </swiper>

    <swiper-tab :tabs="tabs" :activedIndex="activedIndex" @setActivedIndex="activedIndex = $event"/>
    <swiper-content :tabs="tabs" :activedIndex="activedIndex"/>
  </div>
</template>

<script>
import swiperTab from './swiperTab'
import swiperContent from './swiperContent.vue'

export default {
  data() {
    return {
      banners: [],
      tabs: [],
      activedIndex: 0,
    }
  },
  components: {
    swiperTab,
    swiperContent,
  },
  mounted() {
    this.getBanner()
    this.getCategores()
  },
  methods: {
    async getBanner() {
      try {
        const res = await wx.$http({
          url: '/banner',
        })

        const banners = res.data.map((item) => ({
          id: item.id,
          coverImg: `https://chufang.melive.cc${item.coverImg}`,
          title: item.title,
        }))

        this.banners = banners
      } catch (err) {
        wx.$showToast({
          title: '获取banner失败',
          state: 'fail',
        })
      }
    },
    async getCategores() {
      try {
        const res = await wx.$http({
          url: '/categores',
        })

        this.tabs = res.data.slice(0, 4)
      } catch (err) {
        wx.$showToast({
          title: '获取推荐失败',
          state: 'fail',
        })
      }
    },
  },
}
</script>

<style lang="scss">
.swiper-banner {
  height: 360rpx;

  .swiper-banner {
    position: relative;

    image {
      position: absolute;
      top: 50%;
      transform: translate3d(0, -50%, 0);
    }
  }
}
</style>
