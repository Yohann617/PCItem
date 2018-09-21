<template>
  <div class="basicInfo">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'basicInfo',
  data () {
    return {
      msg: 'basicInfo'
    }
  },
  created: function () {
    // this.AsyncData()
  }
}
</script>

<style scoped>
.basicInfo{
  font-weight: normal;
}
</style>
