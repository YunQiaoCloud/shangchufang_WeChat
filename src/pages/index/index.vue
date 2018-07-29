<template>
  <div>
    <swiper
      class="swiper-banner"
      autoplay="true" indicator-dots="true"
      indicator-color="rgba(128, 128, 128, 0.5)"
      indicator-active-color="rgba(85, 85, 85, 1)"
      circular="true">
      <block v-for="item in banner" :key="item.id">
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
      tabs: [],
      activedIndex: 0,
    }
  },
  components: {
    swiperTab,
    swiperContent,
  },
  computed: {
    banner() {
      return this.$store.getters.banner
    },
    categores() {
      const tabList = this.$store.getters.categores
      this.tabs = tabList.slice(0, 4)
    },
  },
  async created() {
    this.$store.dispatch('getBanner')
    this.$store.dispatch('getCategores')
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
