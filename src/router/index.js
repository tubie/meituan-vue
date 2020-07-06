import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../views/tabbar/HomePage"
import FindPage from "../views/tabbar/FindPage"
import OrderPage from "../views/tabbar/OrderPage"
import MinePage from "../views/tabbar/MinePage"



Vue.use(VueRouter)

let routes;
routes = [
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
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
