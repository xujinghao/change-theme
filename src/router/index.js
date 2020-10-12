import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: "/cssVerify"
  },
  {
    path: '/cssVerify',
    name: 'cssVerify',
    component: () => import( /* webpackChunkName: "CssVerify" */ '../views/CssVerify.vue')
  },
  {
    path: '/cssVerifyCard',
    name: 'cssVerifyCard',
    component: () => import( /* webpackChunkName: "CssVerifyCard" */ '../views/CssVerifyCard.vue')
  },
  {
    path: '/cssVerifyPicker',
    name: 'cssVerifyPicker',
    component: () => import( /* webpackChunkName: "CssVerifyPicker" */ '../views/CssVerifyPicker.vue')
  },
  {
    path: '/cssFileCard',
    name: 'cssFileCard',
    component: () => import( /* webpackChunkName: "CssFileCard" */ '../views/CssFileCard.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router