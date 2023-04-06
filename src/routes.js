import { createWebHistory, createRouter } from "vue-router";
import HomE from './components/Home.vue';
import SignUp from './components/SignUp.vue';
import Login from './components/Login.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: HomE
    },    {
        name: 'signup',
        path: '/signup',
        component: SignUp
    },    {
        name: 'login',
        path: '/login',
        component: Login
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes

});

export default router;