import Vue from 'vue'
import Router from 'vue-router'

const app = ()=> import('@/components/app.vue');
const login = ()=> import('@/components/login.vue');
const register = ()=> import('@/components/register.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', redirect:'/home/register'},
    {
      path: '/home',
      component:app,
      children:[
        {path:'login', component:login},
        {path:'register', component:register},
      ]
    }
  ]
})
