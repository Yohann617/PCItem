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
    <label>
      注册手机号 / 邮箱:
    </label>
    <input v-model="phoneNumber" type="text" placeholder="phoneNumber or email" />
    <span class="color-green">
      ( 可选，便于找回密码 )
    </span>
    <!-- <button>获取验证码</button>
    <br/>
    <label>
      手机验证码:
    </label>
    <input v-model="verification" type="number" placeholder="verification Code" /> -->
    <br/>
    <button @click="RegistComfirm()">确认</button>
    <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>
  </section>
</template>

<script>
import { regist } from '../../service/getData.js'
import alertTip from '../common/alertTip'
export default {
  name: 'Regist',
  data () {
    return {
      account: '',
      password: '',
      phoneNumber: '',
      verification: '',
      showAlert: false, // 显示提示组件
      alertText: null // 提示的内容
    }
  },
  components: {
    alertTip
  },
  methods: {
    async RegistComfirm () {
      // console.log('注册成功')
      let res = await regist(this.account, this.password, this.phoneNumber)
      let RegistInfo = {}
      console.log(res)
      if (res.status === 1) {
        RegistInfo = {
          'isRegist': true,
          'userInfo': res.data
        }
        this.showAlert = true
        this.alertText = res.message
      } else {
        RegistInfo = {
          'isRegist': false,
          'userInfo': ''
        }
        this.showAlert = true
        this.alertText = res.message
        // console.log(res.message)
      }
      this.$emit('RegistResult', RegistInfo)
    },
    closeTip () {
      this.showAlert = false
      this.alertText = ''
    }
  }
}
</script>

<style>
.color-green{
  color:aqua
}
</style>
