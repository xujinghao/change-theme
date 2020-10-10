import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/cssVerify"
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/cssVerify',
    name: 'cssVerify',
    component: () => import( /* webpackChunkName: "about" */ '../views/CssVerify.vue')
  },
  
  {
    path: '/cssVerifyCard',
    name: 'cssVerifyCard',
    component: () => import( /* webpackChunkName: "about" */ '../views/CssVerifyCard.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router