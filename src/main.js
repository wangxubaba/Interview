import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})