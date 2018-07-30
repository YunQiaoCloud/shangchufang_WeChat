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
  },
  computed: {
    cookList() {
      return this.$store.getters.cookList
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
