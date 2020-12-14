import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/index',
    name: 'Index',
    component: () => import("../views/Index"),
    children : [
        {
            path : "home",
            name : 'Home',
            component : () => import("../components/Home/Home"),
            children :[
                {
                    path : "back",
                    name : "back",
                    component : () => import("../components/Home/BackHome")
                },
                {
                    path : "photo",
                    name : "Photo",
                    component : () => import("../components/Home/PhotoHome")
                },
                {
                    path : "goods",
                    name : "Goods",
                    component : () => import("../components/Home/GoodsList")
                }
            ]
        },
        {
            path : "shop",
            name : "Shop",
            component : () => import("../components/Shop/Shop"),
            children :[
                {
                    path : "shopOrder",
                    name : "ShopOrder",
                    component : () => import("../components/Shop/ShopOrder")
                }
            ]
        },
        {
            path : "order",
            name : "Order",
            component : () => import("../components/Order/Order")
        },
        {
            path : "vip",
            name : "Vip",
            component : () => import("../components/Vip/Vip")
        },
        {
            path : "/index",
            redirect : "/index/home"
        }
    ],
    beforeEnter : ( to , from , next ) =>{
        if ( localStorage.getItem("uni-admin") == null){
             alert("请先登录")
             next("/login")
        } else {
            next()
        }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login')
  },
  {
    path : "/",
    redirect : "/login"
  }
]

const router = new VueRouter({
  routes
})

export default router
