import Vue from 'vue';
import router from './router';
import store from './store';
import resource from 'vue-resource';
import App from './pages/App';

Vue.use(resource); // 异步请求模块
Vue.use(store); // 状态管理模块

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store,
});