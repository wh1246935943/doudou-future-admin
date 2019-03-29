import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import iconfont from './assets/iconfont/fonts.css';
import baseUi from './components/Common/Base';
import cruise from './mock';

Vue.config.productionTip = false;

Vue.prototype.$Service = cruise

Vue.use(iconfont);
Vue.use(baseUi);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
