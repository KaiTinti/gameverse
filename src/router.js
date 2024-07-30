import { createRouter, createWebHistory } from 'vue-router';
import MenuVue from './components/Menu.vue';
import HomeVue from './components/Home.vue';
import MenuEnVue from './components/MenuEn.vue'
import resumoVue from './components/resumo.vue'
import dadosVue from './components/dados.vue'
import InicioVue from './components/Inicio.vue'

const routes = [
  { path: '/menu', name: 'menu', component: MenuVue },
  { path: '/', name: 'home', component: HomeVue },
  { path: '/menuen', name: 'menuen', component: MenuEnVue },
  { path: '/resumo', name: 'resumo', component: resumoVue },
  { path: '/dados', name: 'dados', component: dadosVue },
  { path: '/inicio', name: 'inicio', component: InicioVue }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
