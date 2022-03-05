// 导入vue
import Vue from 'vue'
import App from './App.vue'

// 导入router路由
import router from './router'

// 导入axios
import axios from 'axios';
// import store from './store'

// 导入element ui 插件
import './plugins/element.js'

// 导入公共样式
// import './assets/css/global.css'
import './assets/css/reset.css'

// 导入swiper依赖
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

Vue.prototype.$http=axios;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')