import Vue from 'vue';
import Home from '../views/Home.vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/common',
      name: 'common',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/Common.vue')
    }
    ,
    {
      path: '/departments',
      name: 'departments',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/Departments.vue')
    },
    {
      path: '/region',
      name: 'region',
      component: () =>
          import(/* webpackChunkName: "about" */ '../views/Region.vue')
    }
  ]
});