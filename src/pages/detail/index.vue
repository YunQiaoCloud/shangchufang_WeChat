<template>
  <div class="cook-detail">
    <div class="cook-detail-poster">
      <image :src="cookDetail.albums[0]" mode="aspectFill" />
    </div>
    <div class="cook-detail-info">
      <div class="cook-detail-title">
        <h2>{{ cookDetail.title }}</h2>
        <div class="cook-detail-collect" @click="onCollect">{{ collectText }}</div>
      </div>
      <div class="cook-detail-tags">
        <span v-for="tag in splitTags" :key="index">{{ tag }}</span>
      </div>
      <div class="cook-detail-imtro">
        <p>{{ cookDetail.imtro }}</p>
      </div>
      <div class="cook-detail-title">
        <h2>用料</h2>
      </div>
      <div class="cook-detail-material">
        <p v-for="material in splitMaterials" :key="index">
          <span>{{ material[0] }}</span>
          <span>{{ material[1] }}</span>
        </p>
      </div>
      <div class="cook-detail-title">
        <h2>{{ cookDetail.title }}的做法</h2>
      </div>
      <div class="cook-detail-practice">
        <div class="cook-detail-step" v-for="step in cookDetail.steps" :key="index">
          <p>{{ step.step }}</p>
          <image :src="step.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    collectText: '收藏',
    isCollect: false,
  },
  computed: {
    cookDetail() {
      return this.$store.getters.cookDetails
    },
    splitTags() {
      const tagsList = this.cookDetail.tags
      return tagsList.split(';').map((tag) => tag)
    },
    splitMaterials() {
      const materialsList = `${this.cookDetail.ingredients};${this.cookDetail.burden}`
      const splitMaterialStr = materialsList.split(';').map((material) => material)
      return splitMaterialStr.map((item) => item.split(','))
    },
  },
  async mounted() {
    const cookId = this.$root.$mp.query.id
    this.$store.dispatch('getCookDetails', cookId)
  },
  methods: {
    onCollect() {
      this.isCollect = !this.isCollect
      if (this.isCollect) {
        this.collectText = '取消收藏'
      } else {
        this.collectText = '收藏'
      }
    },
  },
}
</script>

<style lang="scss">
  .cook-detail-poster {
    width: 100%;
  }

  .cook-detail-info {
    padding: 20rpx;
  }

  .cook-detail-title {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;

    h2 {
      margin: 10px 0;
      font-size: 40rpx;
      font-weight: bold;
    }

    .cook-detail-collect {
      height: 40rpx;
      padding: 10rpx;
      line-height: 20rpx;
      color: #fff;
      background-color: #108ee9;
      border: 1rpx solid #108ee9;
      border-radius: 10rpx;
      margin-left: 20rpx;
    }
  }

  .cook-detail-tags {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    width: 100%;
    overflow: auto;
    margin-bottom: 20rpx;

    span {
      padding: 10rpx 16rpx;
      border: 1rpx solid #d5d5d5;
      margin-right: 10rpx;
      margin-bottom: 10rpx;
      border-radius: 10rpx;
      font-size: 24rpx;
    }
  }

  .cook-detail-imtro {
    font-size: 24rpx;
    margin: 30rpx 0;
  }

  .cook-detail-material {

    p {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 80rpx;
      line-height: 60rpx;
      border-bottom: 1rpx solid #d5d5d5;
      padding: 10px 0;
    }
  }

  .cook-detail-step {
    display: flex;
    justify-content: space-between;
    margin: 30rpx 0;

    p {
      flex: 1;
    }

    image {
      width: 150rpx;
      height: 150rpx;
      margin-left: 20rpx;
    }
  }
</style>
