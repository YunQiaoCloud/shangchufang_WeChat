<template>
  <div class="cook-detail">
    <div class="cook-detail-poster">
      <image :src="cookDetail.albums[0]" mode="aspectFill" />
    </div>
    <div class="cook-detail-info">
      <div class="cook-detail-title">
        <h2>{{ cookDetail.title }}</h2>
      </div>
      <div class="cook-detail-tags">
        <span v-for="tag in splitTags">{{ tag }}</span>
      </div>
      <div class="cook-detail-imtro">
        <p>{{ cookDetail.imtro }}</p>
      </div>
      <div class="cook-detail-title">
        <h2>用料</h2>
      </div>
      <div class="cook-detail-material">
        <p v-for="(material, index) in splitMaterials" :key="index">
          <span>{{ material }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    cookDetail() {
      console.log(this.$store.getters.cookDetails)
      return this.$store.getters.cookDetails
    },
    splitTags() {
      const tagsList = this.cookDetail.tags
      return tagsList.split(';').map((tag) => tag)
    },
    splitMaterials() {
      const materialsList = `${this.cookDetail.ingredients};${this.cookDetail.burden}`
      const splitMaterialStr = materialsList.split(';').map((material) => material)
      console.log(splitMaterialStr)
      return splitMaterialStr
      // return splitMaterialStr.toString().split(',').map((item) => item)
      // console.log(this.cookDetail.ingredients)
      // console.log(materialsList)
      // console.log(test)
    },
  },
  async mounted() {
    console.log(this.$root.$mp.query.id)
    const cookId = this.$root.$mp.query.id || 909
    this.$store.dispatch('getCookDetails', cookId)
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
    margin-bottom: 20rpx;

    h2 {
      margin: 10px 0;
      font-size: 40rpx;
      font-weight: bold;
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

  .cook-detail-material {

    p {
      display: flex;
      border-bottom: 1px solid #d5d5d5;
    }
  }
</style>
