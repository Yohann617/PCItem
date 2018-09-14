<template>
  <div class="recommendList">
    <h3>{{ msg }}</h3>
    <div class="list-box" v-for="(item,index) in recommendListData" :key="index">
       <img alt="" :src="item.img_url" />
       <div class="list-info">
         <span>
           {{ item.title }}
         </span>
         <br>
         {{ item.info }}
       </div>
    </div>
  </div>
</template>

<script>
// import recommendListData from '../../../../static/json/recommend-list.json'
import { getRecommend } from '../../../service/getData.js'

export default {
  name: 'recommendList',
  data () {
    return {
      msg: 'recommendList',
      recommendListData: []
    }
  },
  created: function () { // 千万别用箭头函数啊，要不this取不到这个VUE实例
    getRecommend().then(res => {
      console.log(res)
      this.recommendListData = res.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  font-weight: normal;
}
.recommendList{
  height: 270px;
}
.list-box{
  width: 23%;
  height: 230px;
  float: left;
  margin-right: 20px;
  cursor: pointer;
}
.list-box .list-info{
  width: 100%;
  margin-top: 10px;
  word-break: break-all
}
</style>
