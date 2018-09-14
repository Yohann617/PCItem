<template>
  <div class="home">
    <h3>{{ msg }}</h3>
    <section>
      <banner />
    </section>
    <section>
      <recommendList />
    </section>
    <section>
      <div class="Advertisement-pic">
        Advertisement-pic
      </div>
      <div class="Advertisement-pic">
        Advertisement-pic
      </div>
    </section>
    <section>
      <guessLike />
    </section>
  </div>
</template>

<script>
import banner from './children/banner'
import recommendList from './children/recommendList'
import guessLike from './children/guessLike'

export default {
  name: 'home',
  components: {
    banner,
    recommendList,
    guessLike
  },
  data () {
    return {
      msg: 'Home'
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
