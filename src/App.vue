<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
    name: "App",
    components: {
        AppHeader,
        AppMain,
    },
    props: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>

<template>
    <section class="bg-dark text-white vh-100">
        <AppHeader />
        <AppMain />
    </section>
</template>

<style scoped></style>
