import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import UserInfo from '@/views/UserInfo.vue'
import Edit from '@/views/Edit.vue'
import Article from '@/views/Article.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: Register,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register
  },
  {
    path: '/login',
    name: Login,
    component: Login
  },
  {
    path: '/userInfo',
    name: UserInfo,
    component: UserInfo,
    meta: {
      istoken: true
    }
  },
  {
    path: '/edit',
    name: Edit,
    component: Edit,
    meta: {
      istoken: true
    }
  },
  {
    path: '/article/:id',
    name: Article,
    component: Article,
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('id') && !localStorage.getItem('token') && to.meta.istoken === true) {
    router.push('/login')
    return
  }
  next()
})

export default router
