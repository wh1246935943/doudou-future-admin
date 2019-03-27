import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Main from './../components/Main/index.vue';

const routes = [
  {
    path: '/',
    redirect: 'Main'
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main
  }
]

export default new Router({
  routes
})