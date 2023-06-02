import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import 'normalize.css';
import '@/assets/styles/common.scss';
import './utils/rem.js';

createApp(App).use(router).mount('#app');
