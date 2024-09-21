<script>
import AppHeader from "./components/AppHeader.vue";
import { RouterView } from "vue-router";
import AppFooter from "./components/AppFooter.vue";
import AppJumbotron from "./components/AppJumbotron.vue";

export default {
    name: "App",
    components: {
        AppHeader,
        AppJumbotron,
        RouterView,
        AppFooter
    },
    props: {},
    data() {
        return {};
    },
    methods: {},
    mounted() { },
};
</script>

<template>
    <section class="bg-dark text-white min-vh-100 d-flex flex-column justify-content-between">
        <AppHeader />
        <AppJumbotron />
        <router-view></router-view>
        <AppFooter />
    </section>
</template>

<style scoped></style>
