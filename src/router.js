import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./components/routes/AppHome.vue";
import AppProjects from "./components/routes/AppProjects.vue";
import AppSingleProject from "./components/routes/AppSingleProject.vue";
import AppContacts from "./components/routes/AppContacts.vue";
import AppAbout from "./components/routes/AppAbout.vue";
import AppNotFound from "./components/routes/AppNotFound.vue";

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
            path: '/projects/:slug',
            name: 'Project',
            component: AppSingleProject
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: AppContacts
        },
        {
            path: '/about',
            name: 'About',
            component: AppAbout
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'Not-Found',
            component: AppNotFound
        },
    ]
});

export { router };