<template>
  <div class="coupon">
    <h3>{{ msg }}</h3>
    <ul>
      <li>
        <span>
          优惠券：
        </span>
        {{ couponInfo.title }}
      </li>
      <li>
        <span>
          优惠详情：
        </span>
        {{ couponInfo.content }}
      </li>
      <li>
        <span>
          有效期：
        </span>
        {{ couponInfo.validity }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'coupon',
  data () {
    return {
      msg: 'coupon',
      couponInfo: {
        'flag': '',
        'title': '',
        'content': '',
        'validity': ''
      }
    }
  },
  created: function () {
    this.couponInfo = Object.assign({}, this.$route.query.user.coupons)
  }
}
</script>

<style scoped>
.coupon{
  font-weight: normal;
}
</style>
