<template>
  <div :class="['swiper-tab', 'actived-' + activedIndex]">
    <div
      :class="['swiper-tab-item', {'actived': activedIndex === index}]"
      v-for="(item, index) in tabs"
      :key="item.id"
      @click="$emit('setActivedIndex', index)">
      {{item.name}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'swiperTab',
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
    }
  },
  mounted() {
  },
}
</script>

<style lang="scss">
  .swiper-tab {
    margin-top: 20rpx;
    margin-left: 20rpx;
    display: flex;
    align-items: center;
    position: relative;

    &.actived-1 {
      &::after {
        left: calc(22% + 20rpx);
      }
    }

    &.actived-2 {
      &::after {
        left: calc(44% + 20px);
      }
    }

    &.actived-3 {
      &::after {
        left: calc(66% + 60rpx);
      }
    }

    &::after {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      content: '';
      width: 30rpx;
      height: 30rpx;
      background-image: url('../../../static/tag.svg');
      background-size: cover;
      background-repeat: no-repeat;
      transform: translate3d(0, 0, 0, 0);
      transition: left 0.2s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }

  .swiper-tab-item {
    display: flex;
    justify-content: center;
    margin-right: 20rpx;
    padding: 16rpx 0;
    width: 22%;
    color: inherit;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #f5f5f5;
    transition: all 0.1s cubic-bezier(0.895, 0.03, 0.685, 0.22);
    transform: translate3d(0, 0, 0, 0);

    &.actived {
      color: #f5f5f5;
      background-color: #108ee9;
      box-shadow: 2rpx 4rpx 10rpx rgba(0, 0, 0, 0.25);
    }
  }
</style>
