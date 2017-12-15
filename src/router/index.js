import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Location from '@/components/Location';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/location',
      name: 'Location',
      component: Location,
    },
  ],
});
