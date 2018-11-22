/**
 * 配置项目的路由规则表
 */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/componen/ts/HelloWorld'
import Index from '../pages/Index'
import GoodDetail from '../pages/GoodDetail'
import Recom from '../pages/Recom'
import Search from '../pages/Search'
import Mine from '../pages/Mine'
import Order from '../pages/Order'
import Clean from '../pages/Clean'
import Brands from '../pages/Brands'
//Router:第三方插件
Vue.use(Router);//安装第三方的模块
export default new Router({
  routes: [
    {
      path:"/",
      redirect:"/Index"
    },
    {
      path:"/Index",
      name:Index,
      component:Index
    },
    {
      path:"/Recom",
      name:Recom,
      component:Recom
    },
    {
      path:"/Search",
      name:Search,
      component:Search
    },
    {
      path:"/Mine",
      name:Mine,
      component:Mine
    },
    {
      path:"/GoodDetail",
      name:GoodDetail,
      component:GoodDetail
    },
    {
      path:"/Order",
      name:Order,
      component:Order
    },
    {
      path:"/Clean",
      name:Clean,
      component:Clean
    },
    {
      path:"/Brands",
      name:Brands,
      component:Brands
    }
  ]
})
