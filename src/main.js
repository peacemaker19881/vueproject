import { createApp } from 'vue'
import App from './App.vue'
import createpost_component from './component/createpost_component.vue';
import home_comonent_component from './component/home_comonent.vue';
import post_component from './component/post_component.vue';
import {createRouter,createWebhistory} from 'vue-router';


const routes = [
    {
        path:'/',
        component:home_comonent,
    }
    {
     path: '/posts',
     components:post_component,   
    }
    {
     path: '/posts',
     components:post_component,
    }
];
const router = createRouter({
    history:createWebhistory(),
    routes:routes,
});

const App = createApp(App);
app.use(router);
app.mount('#app');
