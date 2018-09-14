<template>
    <header>
       <h3>{{ msg }}</h3>
       <section id="login-box">
         <div id="not-login" v-if="!isLogin">
           <a @click="login()" href="#">登陆</a>
           <a @click="register()" href="#">注册</a>
         </div>
         <div id="has-login" v-if="isLogin">
           <span>头像:{{ user.headPicUrl }}</span>
           <span>用户名:{{ user.name }}</span>
           <span>权限:{{ user.authority }}</span>
           <span>等级:{{ user.level }}</span>
           <a @click="signOut()" href="#">退出登陆</a>
         </div>
       </section>
       <Login v-if="LoginFormShow" v-on:LoginResult="onLoginResult"></Login>
       <Regist v-if="RegistFormShow" v-on:RegistResult="onRegistResult"></Regist>
    </header>
</template>

<script>
// import usersInfo from '../../assets/users-info'
import Login from '../header/Login'
import Regist from '../header/Regist'
import { getUserInfo } from '../../service/getData.js'

export default {
  name: 'MyHeader',
  data () {
    return {
      msg: 'My header',
      user: {
        'name': '',
        'account': '',
        'password': '',
        'authority': '',
        'headPicUrl': '',
        'level': ''
      },
      isLogin: false,
      LoginFormShow: false,
      RegistFormShow: false
    }
  },
  created: function () { // 千万别用箭头函数啊，要不this取不到这个VUE实例
    // this.user = usersInfo.usersArr[0]
    getUserInfo().then(res => {
      console.log(res)
      this.user = res.data
    })
  },
  components: {
    Login,
    Regist
  },
  methods: {
    login () {
      this.isLogin = false
      this.LoginFormShow = true
      this.RegistFormShow = false
    },
    onLoginResult (value) {
      if (value) { // 登陆成功
        this.isLogin = true
        this.LoginFormShow = false
        this.RegistFormShow = false
      }
    },
    signOut () {
      this.isLogin = false
      this.LoginFormShow = false
      this.RegistFormShow = false
    },
    onRegistResult (value) {
      if (value) { // 注册成功
        this.isLogin = true
        this.LoginFormShow = false
        this.RegistFormShow = false
      }
    },
    register () {
      this.isLogin = false
      this.LoginFormShow = false
      this.RegistFormShow = true
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
