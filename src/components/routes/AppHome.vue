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

    <section class="py-3 text-center container">
        <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="fw-light">Buiatti Nicholas</h1>
                <p class="lead text-body-white">Portfolio di prova creato da un Jr Full Stack Web Developer per affinare
                    le proprie capacita di relizzazione di un sito lato back-end e lato front-end con il ciclaggio su
                    API create apposta e la gestione dei progetti da un sito accessibile solo dall'Admin.</p>
                <p>
                    <a href="https://github.com/NicholasBuiatti" class="btn btn-primary my-2">Profilo Git</a>
                </p>
            </div>
        </div>
    </section>

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
                                <router-link :to="{ name: 'Project', params: { slug: project.slug } }"
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