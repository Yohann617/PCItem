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
      注册手机号:
    </label>
    <input v-model="phoneNumber" type="text" placeholder="phoneNumber" />
      <button>获取验证码</button>
    <br/>
    <label>
      手机验证码:
    </label>
    <input v-model="verification" type="number" placeholder="verification Code" />
    <br/>
    <button @click="RegistComfirm()">确认</button>
  </section>
</template>

<script>
export default {
  name: 'Regist',
  data () {
    return {
      account: '',
      password: '',
      phoneNumber: '',
      verification: ''
    }
  },
  methods: {
    RegistComfirm () {
      console.log('注册成功')
      this.$emit('RegistResult', true)
    }
  }
}
</script>
