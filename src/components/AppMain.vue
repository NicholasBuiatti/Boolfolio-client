<script>
import axios from "axios";

export default {
    name: "AppMain",
    components: {},
    props: {},
    data() {
        return {
            projects: "",
        };
    },
    methods: {},
    mounted() {
        /* CHIAMATA AXIOS */
        axios.get("http://127.0.0.1:8000/api/projects").then((risultato) => {
            console.log(risultato);
            this.projects = risultato.data.projects.data;
        });
    },
};
</script>

<template>
    <section class="container">
        <div class="row">
            <div v-for="project in projects" class="card" style="width: 18rem">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{{ project.name_project }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <a href="#" class="btn btn-primary"
                        >Tipo: {{ project.type.name }}</a
                    >
                </div>
            </div>
        </div>
    </section>
    <pre class="text-dark">{{ projects }}</pre>
</template>

<style scoped></style>
