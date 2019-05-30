import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import store from '@/store'
import { getTitle, setToken, getToken } from '@/lib/util'

Vue.use(Router)

const router = new Router({
  routes
})

// const HAS_LOGINED = false

router.beforeEach((to, from, next) => {
  // to and from are Route Object,next() must be called to resolve the hook
  to.meta && getTitle(to.meta.title)
  // if (to.name !== 'login') {
  //   if (HAS_LOGINED) next()
  //   else next({ name: 'login' })
  // } else {
  //   if (HAS_LOGINED) next({ name: 'home' })
  //   else next()
  // }
  const token = getToken()
  if (token) {
    store.dispatch('authorization', token).then(() => {
      if (to.name === 'login') next({ name: 'home' })
      else next()
      console.log(222)
    }).catch(() => {
      console.log(111)
      setToken('')
      next({ name: 'login' })
    })
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

// router.beforeResolve

router.afterEach((to, from) => {
  //
})

// 1、导航触发
// 2、在是活的组件（即将离开页面的组件）里调用离开守卫 beforeRouteLeave
// 3、调用全局前置首位 beforeEach
// 4、在重用的组件里第哦啊用 beforeRouteUpdate（有复用组件时调用）
// 5、调用路由独享的守卫 beforEnter
// 6、解析异步路由组件
// 7、在被激活的组件（即将进入的组件）里调用 beforeRouteEnter
// 8、调用全局解析组件 beforeResolve
// 9、导航确认
// 10、调用全局后置守卫 afterEach
// 11、触发Dom更新
// 12、用创建好的实例调用beforeRouteEnter守卫里传输给next的回调函数

export default router
