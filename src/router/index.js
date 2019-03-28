import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Main from './../components/Main/index.vue';
import Agent from './../components/RoutePages/Agent.vue';
import DashBoard from './../components/RoutePages/DashBoard.vue';
import MyCruise from './../components/RoutePages/MyCruise.vue';
import Help from './../components/RoutePages/Help.vue';

const routes = [
  {
    path: '/',
    redirect: 'Main'
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main,
    'children': [
      {
        path: '/Agent',
        name: 'Agent',
        component: Agent
      },
      {
        path: '/DashBoard',
        name: 'DashBoard',
        component: DashBoard
      },
      {
        path: '/MyCruise',
        name: 'MyCruise',
        component: MyCruise
      },
      {
        path: '/Help',
        name: 'Help',
        component: Help
      }
    ]
  }
]

export default new Router({
  routes
})