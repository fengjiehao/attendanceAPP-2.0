import Vue from 'vue'
import Router from 'vue-router'
import firstPage from '@/components/firstPage.vue'
import login from '@/components/login/login.vue'
import register from '@/components/register/register.vue'
import homePage from '@/components/home/homePage.vue'
import modifyPassword from '@/components/personal/modifyPassword.vue'
import modifyInfo from '@/components/personal/modifyInfo.vue'
import personal from '@/components/personal/personal.vue'
import search from '@/components/search/search.vue'
import searchFail from '@/components/search/searchFail.vue'
import searchSuccess from '@/components/search/searchSuccess.vue'
import test from '@/components/test/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: firstPage
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {path: '/modifyInfo', name: 'modifyInfo', component: modifyInfo},
    {path: '/modifyPassword', name: 'modifyPassword', component: modifyPassword},
    // 搜索信号
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {path: '/searchFail', name: 'searchFail', component: searchFail},
    {path: '/searchSuccess', name: 'searchSuccess', component: searchSuccess},
    {path: '/test', name: 'test', component: test},
  ]
})
