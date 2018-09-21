<template>
  <div class="orders">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'orders',
  data () {
    return {
      msg: 'orders'
    }
  },
  created: function () {
    // this.AsyncData()
  }
}
</script>

<style scoped>
.orders{
  font-weight: normal;
}
</style>
