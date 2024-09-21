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
            name: 'Progetti',
            component: AppProjects
        },
        {
            path: '/projects/:slug',
            name: 'Progetto',
            component: AppSingleProject
        },
        {
            path: '/contacts',
            name: 'Contattami',
            component: AppContacts
        },
        {
            path: '/about',
            name: 'Riguardo me',
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