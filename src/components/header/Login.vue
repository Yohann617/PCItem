<template>
  <section id="login-operation">
    <label>
      账号:
    </label>
    <input v-model="account" type="text" placeholder="account" />
    <br/>
    <label>
      密码:
    </label>
    <input v-model="password" type="number" placeholder="password" />
    <br/>
    <button @click="LoginComfirm()">确认</button>
  </section>
</template>

<script>
// import usersInfo from '../../assets/users-info'

export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    LoginComfirm () {
      console.log('登陆成功')
      this.$emit('LoginResult', true)
    }
  }
}
</script>
