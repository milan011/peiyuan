import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Products from '@/views/Products.vue';
import News from '@/views/News.vue';
import Contact from '@/views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;