<script>
export default {
  async created() {
    const res = await wx.$http({
      url: '/banner',
    })
    console.log(res)
  },
}
</script>

<style>
</style>
