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
                <p class="lead text-body-white">Something short and leading about the collection
                    below—its
                    contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply
                    skip over it entirely.</p>
                <p>
                    <a href="https://github.com/NicholasBuiatti" class="btn btn-primary my-2">Profilo Git</a>
                </p>
            </div>
        </div>
    </section>

    <div class="album py-3 container">
        <pre>{{ projects }}</pre>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="project in projects" class="col">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="225"
                        xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>{{ project.name_project }}</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef"
                            dy=".3em">Thumbnail</text>
                    </svg>
                    <div class="card-body">
                        <p class="card-text">{{ project.name_project }}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                            </div>
                            <small class="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<style scoped></style>