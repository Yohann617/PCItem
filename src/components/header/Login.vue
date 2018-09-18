<template>
  <section id="login-operation">
    <form>
      <label>
        账号:
      </label>
      <input v-model="account" type="text" placeholder="账号/手机号" />
      <br/>
      <label>
        密码:
      </label>
      <input v-model="password" type="number" placeholder="密码" />
      <br/>
      <button @click="LoginComfirm()">确认</button>
    </form>
  </section>
</template>

<script>
// import usersInfo from '../../assets/users-info'
import { login } from '../../service/getData.js'

export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    async LoginComfirm () {
      // console.log('登陆成功', this.account, this.password)
      let isLoginObj = await login(this.account, this.password)
      let isLogin
      console.log(isLoginObj)
      if (isLoginObj.status === 1) {
        isLogin = true
      } else {
        isLogin = false
        console.log(isLoginObj.message)
      }
      this.$emit('LoginResult', isLogin)
    }
  }
}
</script>
