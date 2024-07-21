import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./components/routes/AppHome.vue";
import AppProjects from "./components/routes/AppProjects.vue";
import AppFAQs from "./components/routes/AppFAQs.vue";
import AppAbout from "./components/routes/AppAbout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'Projects',
            component: AppProjects
        },
        {
            path: '/FAQs',
            name: 'FAQs',
            component: AppFAQs
        },
        {
            path: '/about',
            name: 'About',
            component: AppAbout
        },
    ]
});

export { router };