import { createApp } from 'vue';
import './styles/index.scss';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './routers';
import 'amfe-flexible';

export const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');
