import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iconfont from './assets/iconfont/fonts.css';

Vue.config.productionTip = false;

Vue.use(iconfont);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
