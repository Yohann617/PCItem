<template>
  <div class="home">
    <h3>{{ msg }}</h3>
    <section class="introduce_pic">
      introduce pic
    </section>
    <section class="product_info">
      <ul>
        <li class="product_info_li" v-for="(item,index) in productInfo" :key="index">
          <img :name="item.imgName" />
          <span>
            {{ item.productInfo }}
          </span>
        </li>
      </ul>
    </section>
    <section class="company_credit">
      <div class="credit_classity">
        <img class="classity_right" />
        <p class="classity_left">
          credit_classity_010101
        </p>
      </div>
      <div class="credit_classity">
        <img class="classity_left" />
        <p class="classity_right">
          credit_classity_020202
        </p>
      </div>
      <div class="credit_classity">
        <img class="classity_right" />
        <p class="classity_left">
          credit_classity_010101
        </p>
      </div>
      <div class="credit_classity">
        <img class="classity_left" />
        <p class="classity_right">
          credit_classity_020202
        </p>
      </div>
    </section>
    <section>
      <guessLike />
    </section>
  </div>
</template>

<script>
import guessLike from './children/guessLike'

export default {
  name: 'detail',
  components: {
    guessLike
  },
  data () {
    return {
      msg: 'detail',
      productInfo: [{
        'imgName': 'safe',
        'productInfo': 'product_info_01'
      },
      {
        'imgName': 'cheap',
        'productInfo': 'product_info_02'
      },
      {
        'imgName': 'quality',
        'productInfo': 'product_info_03'
      },
      {
        'imgName': 'quality',
        'productInfo': 'product_info_03'
      },
      {
        'imgName': 'quality',
        'productInfo': 'product_info_03'
      },
      {
        'imgName': 'quality',
        'productInfo': 'product_info_03'
      },
      {
        'imgName': 'quality',
        'productInfo': 'product_info_03'
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  font-weight: normal;
}
.introduce_pic{
  width: 100%;
  height: 320px;
}
.product_info{
  width: 100%;
  height: 200px;
  clear: both;
}
.product_info_li{
  width: 20%;
  float: left;
  margin-right: 20px;
  height: 160px
}
.company_credit{
  width: 100%;
  clear: both;
}
.credit_classity{
  height: 120px;
}
.classity_right{
  float: right;
}
.classity_left{
  float: left;
}
</style>
