import { createApp } from 'vue'
import App from './App.vue'
import home_component from './component/home_comonent.vue';
import createpost_component from './component/createpost_component.vue';
import post_component from './component/post_component.vue';
import {createRouter,createWebhistory} from 'vue-router';


const routes = [
    {
        path:'/',
        component:home_component,
    },
    {
     path: '/post_component',
     components:post_component,
    },
    {
        path: '/createpost_component',
        components:createpost_component,
       }
];
const router = createRouter({
    history:createWebhistory(),
    routes:routes,
});

const app = createApp(App);
app.use (router);
app.mount ('#App');
