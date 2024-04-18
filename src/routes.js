import Home from './components/home_component.vue';
import CreatePost from './components/createpost_component.vue';
import Post from './components/post_component.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/createpost_component',
    component: CreatePost
  },
  {
    path: '/post_component',
    component: Post
  },
  // You can add more routes as needed
];

export default routes;