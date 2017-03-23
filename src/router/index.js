import Vue from 'vue';
import Router from 'vue-router';
import App from '../pages/App';
import About from '../pages/About';
import Todo from '../pages/Todo';
import NotFoundPage from '../pages/404';
import Demo1 from '../pages/Demo1';
import Demo2 from '../pages/Demo2';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: Todo,
    },
    {
    	path: '/about',
    	name: 'About',
    	component: About,
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo,
    },
    {
      path: '/history',
      component: NotFoundPage,
    },
    {
      path: '/demo1',
      component: Demo1,
    },
    {
      path: '/demo2',
      component: Demo2,
    },
  ]
});
