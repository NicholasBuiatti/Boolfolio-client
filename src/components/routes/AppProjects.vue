<script>
import projectsCard from "../elements/projectsCard.vue";
import axios from "axios";

export default {
    name: "AppProjects",
    components: {
        projectsCard,
    },
    props: {},
    data() {
        return {
            base_URL: "http://127.0.0.1:8000",
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
        axios.get(`${this.base_URL}/api/projects`).then((risultato) => {
            this.projects = risultato.data.projects;
            console.log(this.projects.links);
        });
    },
};
</script>

<template>
    <!-- <pre>{{ projects }}</pre> -->
    <section class="container px-4 py-5">
        <div class="row justify-content-between align-item-center border-bottom pb-2">
            <h2 class="col-4">Lista dei Progetti</h2>
            <nav aria-label="Page navigation example" class="w-25">
                <ul class="pagination">
                    <li v-for="link in projects.links" :class="{ disabled: !link.url, active: link.active }" class="
                    page-item">
                        <a href="#" class="page-link" @click="this.changePage(link.url)" v-html="link.label"></a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">

            <projectsCard v-for="project in projects.data" :project="project" />

        </div>
    </section>

</template>

<style scoped></style>
