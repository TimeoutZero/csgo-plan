import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/Login';

Vue.use(Router);

export const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

export default new Router({ routes });
