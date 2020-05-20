import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Accounting from 'accounting-js'//導入會計插件

Vue.config.productionTip = false
Vue.filter('currency',val => { //轉換浮點數
  return Accounting.formatMoney(val)
})

// router.beforEach((to,from,next)=>{ //全域RouterGuards
//   alert('666')
//   next()
// }) // 在每一次使用Router觸發 beforEach要傳入next()才能到下一個組件 參數要正確(順序)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
