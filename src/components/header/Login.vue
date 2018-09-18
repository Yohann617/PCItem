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
      <input v-if="!showPassword" type="password" placeholder="密码"  v-model="password">
      <input v-else type="text" placeholder="密码"  v-model="password">
      <br/>
      <input
        type="checkbox"
        v-bind:checked="showPassword"
        v-on:change="changePassWordType($event.target.checked)"
      >
      是否显示密码
      <br/>
      <button @click="LoginComfirm()">确认</button>
    </form>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </section>
</template>

<script>
// import usersInfo from '../../assets/users-info'
import { login } from '../../service/getData.js'
import alertTip from '../common/alertTip'

export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: '',
      showAlert: false, // 显示提示组件
      alertText: null, // 提示的内容
      showPassword: false // 是否显示密码
    }
  },
  components: {
    alertTip
  },
  methods: {
    async LoginComfirm () {
      // console.log('登陆成功', this.account, this.password)
      let res = await login(this.account, this.password)
      let LoginInfo = {}
      console.log(res)
      if (res.status === 1) {
        LoginInfo = {
          'isLogin': true,
          'userInfo': res.data
        }
        this.showAlert = true
        this.alertText = res.message
      } else {
        LoginInfo = {
          'isLogin': false,
          'userInfo': ''
        }
        this.showAlert = true
        this.alertText = res.message
        // console.log(res.message)
      }
      this.$emit('LoginResult', LoginInfo)
    },
    closeTip () {
      this.showAlert = false
      this.alertText = ''
    },
    // 是否显示密码
    changePassWordType () {
      this.showPassword = !this.showPassword
    }
  }
}
</script>
