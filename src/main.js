import Vue from 'vue';
import routes from './routes';
import App from './pages/App';

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute];
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue');
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
});