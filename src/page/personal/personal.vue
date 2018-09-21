<template>
  <div class="personal">
    <h3>{{ msg }}</h3>
    <section class="nav">
      <router-link to="/personal/basicInfo">基本信息</router-link>
      <router-link to="/personal/coupon">优惠券</router-link>
      <router-link to="/personal/orders">订单</router-link>
      <router-link to="/personal/shopCar">购物车</router-link>
    </section>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

export default {
  name: 'personal',
  data () {
    return {
      msg: 'Personal'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  font-weight: normal;
}
.Advertisement-pic{
  width: 100%;
  height: 120px;
  text-align: center;
  clear: both;
}
</style>
