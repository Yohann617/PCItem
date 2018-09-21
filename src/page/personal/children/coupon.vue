<template>
  <div class="coupon">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'coupon',
  data () {
    return {
      msg: 'coupon'
    }
  },
  created: function () {
    // this.AsyncData()
  }
}
</script>

<style scoped>
.coupon{
  font-weight: normal;
}
</style>
