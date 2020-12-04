import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Home from "../pages/home.vue";
import Nav from "../pages/nav.vue";
import Slide from "../pages/slide.vue";


const routes = [{
        path: "/",
        name: 'root',
        component: Home


    },
    {
        path: "/home",
        name: 'home',
        // component: Home,
        // alias: '/csgo'
        components: {
            default: Home,
            slide: Slide,
            nav: Nav
        }
    },
    {
        path: '/slide',
        name: 'slide',
        component: Slide
    },
    {
        path: '/nav',
        name: 'nav',
        component: Nav
    }

];

const router = new VueRouter({
    mode: "history", // hash
    base: '/',
    routes
});

export default router;