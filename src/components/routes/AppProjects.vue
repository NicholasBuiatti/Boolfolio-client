<script>
import projectsCard from "../elements/projectsCard.vue";
import axios from "axios";

export default {
    name: "AppMain",
    components: {
        projectsCard,
    },
    props: {},
    data() {
        return {
            projects: "",
        };
    },
    methods: {
        changePage(url) {
            axios.get(url).then((result) => {
                this.projects = result.data.projects;
            });
        }
    },
    mounted() {
        /* CHIAMATA AXIOS */
        axios.get("http://127.0.0.1:8000/api/projects").then((risultato) => {
            this.projects = risultato.data.projects;
            console.log(this.projects.links);
        });
    },
};
</script>

<template>
    <section class="container">

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-for="link in projects.links" :class="{ disabled: !link.url, active: link.active }" class="
                    page-item">
                    <a href="#" class="page-link" @click="this.changePage(link.url)" v-html="link.label"></a>
                </li>
            </ul>
        </nav>

        <div class="row justify-content-between">
            <projectsCard v-for="project in projects.data" :project="project" />
        </div>

    </section>
</template>

<style scoped></style>
