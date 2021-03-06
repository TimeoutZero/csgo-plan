// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import AppBootstrap from './AppBootstrap';
import router from './router/index';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: '<AppBootstrap/>',
  components: { AppBootstrap }
}).$mount('#app');
