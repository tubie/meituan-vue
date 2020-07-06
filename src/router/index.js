import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "../components/HelloWorld";
Vue.use(VueRouter)

let routes;
routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
