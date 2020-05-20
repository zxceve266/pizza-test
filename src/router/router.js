import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
// import Menu from '../components/Menu.vue'
// import Admin from '../components/Admin.vue'
// import Contact from '../components/Contact.vue'
// import About from '../components/About.vue'
import History from '../components/History.vue'
import Delivery from '../components/Delivery.vue'
import OrderingGuide from '../components/OrderingGuide.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/',
      name:'Home',
      components:{
        default:Home,
        'ordering-guide':OrderingGuide,
        'delivery':Delivery,
        'history':History,
      }
    },
    {
      path:'/menu',
      name:'Menu',
      component:()=> import('../components/Menu.vue')
    },
    {
      path:'/contact',
      name:'Contact',
      component:()=> import(/* webpackChunkName: "menuGroup" */'../components/Contact.vue')
    },
    {
      path:'/admin',
      name:'Admin',
      component:()=> import('../components/Admin.vue')
      // beforeEnter(to,from,next){ //也可在這設置Router Guard
      //   alert('666')
      //   next()
      // }
    },
    {
      path:'/about',
      name:'About',
      component:()=> import(/* webpackChunkName: "menuGroup" */'../components/About.vue'),
      children:[
        {
          path:'/history',
          name:'History',
          component:History
        },
        {
          path:'/delivery',
          name:'Delivery',
          component:Delivery
        },
        {
          path:'/ordering-guide',
          name:'OrderingGuide',
          component:OrderingGuide
        },
      ]
    },
    {
      path:'*',
      redirect:'/'
    },
  
]

const router = new VueRouter({
  routes,
  scrollBehavior(to,from,savedPosition){
    // return{x:0,y:100} //可以指定卷軸滾動

    // return{selector:'.basket'} //可以指定滾到指定的 css selector ex:class id tag...

    // if(savedPosition){ //通過瀏覽器的 前進/後退 按鈕觸發，可以存目前的滾動 看到哪固定到哪裡
    //   return savedPosition
    // }else{
    //   return{x:0,y:100}
    // }
  
      if(to.hash){
        return {selector:to.hash}
      }
  }
})

export default router
