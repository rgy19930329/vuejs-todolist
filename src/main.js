import Vue from 'vue';
import router from './router';
import resource from 'vue-resource';
import App from './pages/App';

Vue.use(resource);

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
});