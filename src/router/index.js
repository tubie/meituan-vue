import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../views/tabbar/HomePage"
import FindPage from "../views/tabbar/FindPage"
import OrderPage from "../views/tabbar/OrderPage"
import MinePage from "../views/tabbar/MinePage"
import CommonPageDatail from "../views/commonpage/CommonPageDatail"
import CommonProList from "../views/commonpage/CommonProList"



Vue.use(VueRouter)

let routes;
routes = [
  {
    path: '/',
    component:HomePage,
  },
  {
    path:'/homepage',
    component:HomePage
  },
  {
    path:'/findpage',
    component:FindPage
  },
  {
    path:'/orderpage',
    component:OrderPage
  },
  {
    path:'/minepage',
    component:MinePage
  },
  {
    path:'/commonpagedatail',
    component:CommonPageDatail
  },

  {
    path:'/commonpage/prolist',
    component:CommonProList
  },

  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:'mui-active'//覆盖默认路由高亮的类 router-link-acative
})

export default router
