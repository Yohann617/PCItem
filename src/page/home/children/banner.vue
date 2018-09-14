<template>
  <div class="banner">
    <h3>{{ msg }}</h3>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
        <div class="banner-img-box">
          I'm Slide {{ slide }}
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'banner',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      msg: 'banner',
      swiperOption: {
        autoplay: {
          enabled: true,
          disableOnInteraction: false,
          delay: 1000
        },
        speed: 1000,
        loop: true,
        spaceBetween: 5,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    AsyncData () {
      setInterval(() => {
        console.log('simulate async data')
        if (this.swiperSlides.length < 10) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
    }
  },
  created: function () {
    // this.AsyncData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
  font-weight: normal;
}
.banner-img-box{
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
}
</style>
