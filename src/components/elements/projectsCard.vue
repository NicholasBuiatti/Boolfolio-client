<script>
export default {
    name: "projectCard",
    components: {},
    props: {
        project: Object
    },
    data() {
        return {};
    },
    methods: {},
    mounted() { },
};
</script>

<template>

    <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" :style="{
            backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }">
            <div
                class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 justify-content-between bg-dark bg-opacity-50">
                <h2 class="mb-4 display-6 lh-1 fw-bold">{{ project.name_project }}</h2>
                <router-link :to="{ name: 'Project', params: { slug: project.slug } }"
                    class="btn btn-info w-50">Dettagli</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
