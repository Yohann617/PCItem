<template>
    <header>
       <h3>{{ msg }}</h3>
    </header>
</template>

<script>
export default {
  name: 'MyFooter',
  data () {
    return {
      msg: 'My footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
