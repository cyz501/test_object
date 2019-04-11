<template>
  <div>
    <CYZinput @input="handleInput"/>
    <!-- <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p> -->
    <!-- <CYZshow :content="inputValue"/> -->
    <p>appName:{{ appName }},appNameWithVersion: {{appNameWithVersion}}</p>
    <p>userName:{{ userName }}</p>
    <!-- <p>firstLetter:{{ firstLetter }}</p> -->
    <p>appVersion:{{ appVersion }}</p>
    <button @click="changeAppName">修改appName</button>
    <button @click="updateUserName">修改userName</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>
<script>
import CYZinput from '_c/CYZinput.vue'
import CYZshow from '_c/CYZshow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    CYZinput,
    CYZshow
  },
  computed: {
    // ...mapState([
    //   'appName'
    // ]),
    // ...mapGetters([
    //   'appNameWithVersion'
    // ]),
    ...mapState({
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),
    ...mapGetters([
      'appNameWithVersion',
      'firstLetter'
    ]),
    appName () {
      return this.$store.state.appName
    },
    // appNameWithVersion () {
    //   return this.$store.getters.appNameWithVersion
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter () {
      return this.inputValue.substr(-1,1)
    }
  },
  methods: {
    ...mapMutations([
      'SET_APP_NAME',
      'SET_USER_NAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    changeAppName () {
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      // this.$store.commit('SEI_APP_VERSION')
      // this.SET_APP_NAME('newAppName')
      this.updateAppName()
    },
    updateUserName () {
      this.SET_USER_NAME('xxx')
    },
    registerModule () {
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '11111',
            '22222'
          ]
        }
      })
    }
  }
}
</script>
