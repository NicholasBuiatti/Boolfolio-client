<script>
import AppHeader from "./components/AppHeader.vue";
import { RouterView } from "vue-router";

export default {
    name: "App",
    components: {
        AppHeader,
        RouterView
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
    <section class="bg-dark text-white vh-100">
        <AppHeader />
        <router-view></router-view>
    </section>
</template>

<style scoped></style>
