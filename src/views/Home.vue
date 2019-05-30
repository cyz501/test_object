<template>
  <div class="home">
    <h2>{{food}}</h2>
    <!-- <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent</button>
    <button @click="handleClick('replace')">替换到parent</button>
    <button @click="getInfo">请求数据</button>
    <button @click="handleOut">退出登录</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'
import { mapActions } from 'vuex'

export default {
  name: 'home',
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('您确定要离开？')
    if (leave) next()
    else next(false)
  },

  components: {
    HelloWorld
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    handleClick (type) {
      if (type === 'back') this.$router.back()
      else if (type === 'push') this.$router.push('/parent')
      else if (type === 'replace') this.$router.replace('/parent')
    },
    getInfo () {
      getUserInfo({ userId: 21}).then(res => {
        console.log('res:', res);
      })
    },
    handleOut () {
      this.logout()
      this.$router.push({
        name: 'login'
      })
    }
  }

}
</script>
