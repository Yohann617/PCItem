<template>
  <div class="basicInfo">
    <h3>{{ msg }}</h3>
    <ul>
      <li>
        <span>
          用户名：
        </span>
        <span v-if="!edit">
          {{baseInfo.name}}
        </span>
        <input v-if="edit" class="edit-input" type="text" v-model="baseInfo.name" />
      </li>
      <li>
        <span>
          账号：
        </span>
        {{baseInfo.account}}
      </li>
      <li>
        <span>
          权限：
        </span>
        {{baseInfo.authority}}
      </li>
      <li>
        <span>
          Vip等级:
        </span>
        {{baseInfo.level}}
      </li>
      <li>
        <span>
          邮箱：
        </span>
        <span v-if="!edit">
          {{baseInfo.email}}
        </span>
        <input v-if="edit" class="edit-input" type="text" v-model="baseInfo.email" />
        <span>
          邮箱有助于找回密码，并获取最新消息
        </span>
      </li>
      <li>
        <span>
          手机：
        </span>
        <span v-if="!edit">
          {{baseInfo.phone}}
        </span>
        <input v-if="edit" class="edit-input" type="text" v-model="baseInfo.phone" />
        <span>
          手机号码有助于找回密码，并获取最新消息
        </span>
      </li>
    </ul>
    <button @click="saveInfo()">保存</button>
    <button @click="editInfo()">编辑</button>
  </div>
</template>

<script>
import { updateUserInfo } from '../../../service/getData.js'
export default {
  name: 'basicInfo',
  data () {
    return {
      msg: 'basicInfo',
      baseInfo: {
        'name': '',
        'account': '',
        'authority': '',
        'level': '',
        'email': '',
        'phone': ''
      },
      edit: false
    }
  },
  created: function () {
    this.baseInfo = Object.assign({}, this.$route.query.user)
  },
  methods: {
    editInfo: function () {
      this.edit = true
    },
    async saveInfo () {
      this.edit = false
      console.log(this.baseInfo)
      let res = await updateUserInfo(this.baseInfo.account, this.baseInfo.name, this.baseInfo.email, this.baseInfo.phone)
      console.log(res)
      if (res.status === 1) {
        // this.alertText = res.message
      } else {
        // this.alertText = res.message
      }
    }
  }
}
</script>

<style scoped>
.basicInfo{
  font-weight: normal;
}
.edit-input{
  width: 200px;
}
</style>
