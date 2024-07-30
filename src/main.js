import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // Certifique-se de que o caminho está correto

const app = createApp(App);

app.use(router);
app.use(store); // Adicione o Vuex store aqui

app.mount('#app');
