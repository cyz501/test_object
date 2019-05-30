import Home from '@/views/Home.vue'

export default [{
  path: '/',
  alias: '/home_page',
  name: 'home',
  props: route => ({
    food: route.query.food
  }),
  component: Home,
  beforeEnter: (to, from, next) => {
    // if (from.name === 'about') alert('这是从about来的')
    // else alert('这不是从about来的')
    next()
  }
},
{
  path: '/login',
  name: 'login',
  component: () => import('@/views/login.vue')
},
{
  path: '/about',
  name: 'about',
  props: {
    food: 'banana'
  },
  meta: {
    title: '关于'
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
},
{
  path: '/argu/:name',
  name: 'argu',
  props: true,
  component: () => import('@/views/argu.vue')
},
{
  path: '/parent',
  component: () => import('@/views/parent.vue'),
  children: [
    {
      path: 'child',
      component: () => import('@/views/child.vue')
    }
  ]
},
{
  path: '/named_view',
  components: {
    default: () => import('@/views/child.vue'),
    email: () => import('@/views/email.vue'),
    tel: () => import('@/views/tel.vue')
  }
},
{
  path: '/main',
  redirect: to => '/about'
},
{
  path: '/store',
  component: () => import('@/views/store.vue')
},
{
  path: '/count-to',
  name: 'count_to',
  component: () => import('@/views/count-to.vue')
},
{
  path: '/split-pane',
  name: 'split_pane',
  component: () => import('@/views/split-pane.vue')
},
{
  path: '/render-page',
  name: 'render_page',
  component: () => import('@/views/render-page.vue')
},
{
  path: '/menu-page',
  name: 'menu_page',
  component: () => import('@/views/menu-page.vue')
},
{
  path: '*',
  component: () => import('@/views/error_404.vue')
}
]
