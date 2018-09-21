<template>
  <div class="shopCar">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'shopCar',
  data () {
    return {
      msg: 'shopCar'
    }
  },
  created: function () {
    // this.AsyncData()
  }
}
</script>

<style scoped>
.shopCar{
  font-weight: normal;
}
</style>
