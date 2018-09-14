<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/header/MyHeader'
import MyFooter from './components/footer/MyFooter'

export default {
  name: 'App',
  components: {
    'MyHeader': MyHeader,
    'MyFooter': MyFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
