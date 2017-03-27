import Vue from 'vue';
import Router from 'vue-router';
import App from '../pages/App';
import Demos from '../pages/About';
import Todo from '../pages/Todo';
import NotFoundPage from '../pages/404';
import Demo1 from '../pages/Demo1';
import Demo2 from '../pages/Demo2';
import Demo3 from '../pages/Demo3';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: Todo,
    },
    {
      path: '/history',
      component: NotFoundPage,
    },
    {
    	path: '/demos',
    	component: Demos,
      children: [
        {
          path: '/demos/demo1',
          component: Demo1,
        },
        {
          path: '/demos/demo2',
          component: Demo2,
        },
        {
          path: '/demos/demo3',
          component: Demo3,
        },
      ]
    },
  ]
});
