import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入初始化csss
import '@/assets/css/normalize.css'

//导入图标
import '@/assets/css/iconfont.css'

//导入vant组件库
import '@/assets/js/vant'

//解决300毫秒延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

//挂载$bus
Vue.prototype.$bus=new Vue()

// 引入自定义弹出框
import toast from '@/components/coments/toast'
Vue.use(toast)

//引入rem适配

import '@/config/rem'



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
