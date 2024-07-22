<script>
import { RouterLink } from "vue-router";

export default {
    name: "AppHeader",
    data() {
        return {
            links: [
                'Home',
                'Projects',
                'Contacts',
                'About',
            ]
        };
    },
}
</script>

<template>

    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-4 text-white">Boolfolio</span>
        </a>

        <ul class="nav nav-pills">
            <li v-for="link in links" class="nav-link" aria-current="page">
                <router-link :to="{ name: link }">{{ link
                    }}</router-link>
            </li>
        </ul>
    </header>

</template>

<style scoped></style>