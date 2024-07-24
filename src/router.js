import { createRouter, createWebHistory } from 'vue-router';
import MenuVue from './components/Menu.vue';
import HomeVue from './components/Home.vue';
import MenuEnVue from './components/MenuEn.vue'

const routes = [
  { path: '/menu', component: MenuVue },
  { path: '/', component: HomeVue },
  { path: '/menuen', component: MenuEnVue }

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
