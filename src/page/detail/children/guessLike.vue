<template>
  <div class="guessLike">
    <h3>{{ msg }}</h3>
    <div class="list-box" v-for="(item,index) in guessLikeData" :key="index">
       <img alt="" :src="item.img_url" />
       <div class="list-info"></div>
       <div class="list-title">
         {{ item.title }}
       </div>
    </div>
  </div>
</template>

<script>
// import guessLikeData from '../../../../static/json/guessLike-list.json'
import { getGuessLike } from '../../../service/getData.js'

export default {
  name: 'guessLike',
  data () {
    return {
      msg: 'guessLike',
      guessLikeData: []
    }
  },
  created: function () { // 千万别用箭头函数啊，要不this取不到这个VUE实例
    getGuessLike().then(res => {
      console.log(res)
      this.guessLikeData = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  font-weight: normal;
}
.guessLike{
  height: 270px;
}
.list-box{
  width: 18%;
  height: 230px;
  float: left;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
}
.list-box .list-info{
  width: 100%;
  height: 30px;
  background: #000;
  position: absolute;
  bottom:10px;
  opacity: 0.2;
}
.list-box .list-title{
  width: 100%;
  height: 30px;
  line-height: 30px;
  color:#000;
  word-break: break-all;
  position: absolute;
  bottom:10px;
}
</style>
