<script>
import axios from "axios";

export default {
    name: "AppHome",
    components: {
    },
    props: {},
    data() {
        return {
            base_URL: "http://127.0.0.1:8000",
            favorite_endpoint: '/api/projects/favorite',
            projects: "",
        };
    },
    methods: {

    },
    mounted() {
        axios.get(`${this.base_URL}${this.favorite_endpoint}`).then(response => {
            this.projects = response.data.projects
            console.log(this.projects);
        })
    },
};
</script>

<template>

    <div class="album py-3 container">
        <!-- <pre>{{ projects }}</pre> -->
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="project in projects" class="col">
                <div class="card shadow-sm">
                    <img :src="project.img" alt="">
                    <div class="card-body">
                        <h4 class="card-text">{{ project.name_project }}</h4>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <router-link :to="{ name: 'Progetto', params: { slug: project.slug } }"
                                    class="btn btn-sm btn-outline-secondary">Dettagli</router-link>
                            </div>
                            <small class="text-body-secondary">{{ project.date }}</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<style scoped></style>