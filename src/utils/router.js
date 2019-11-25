import { Router } from '@vaadin/router';
import '../views/templates/index-accenture-template';
import '../views/templates/home-accenture-template';
import '../views/templates/polymer-accenture-template';

export const initRouter = (element) => {
  const router = new Router(element.querySelector('main'));
  router.setRoutes([
    ...router.getRoutes(),
    {
      path: '/',
      component: 'index-accenture-template'
    },
    {
      path: '/javascript',
      component: 'home-accenture-template'
    },
    {
      path: '/polymer',
      component: 'polymer-accenture-template'
    }
  ]);
};
