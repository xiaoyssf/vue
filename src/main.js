import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/es/components/message/style/css';
// import 'element-plus/es/components/message-box/style/index';

const app = createApp(App);


app.use(router).use(ElementPlus).mount('#app');

