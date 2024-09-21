<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            project: null
        }
    },

    mounted() {
        //CREAZIONE ROTTA PER INTERO
        const url = `${this.base_url}/api/projects/${this.$route.params.slug}`
        //CHIAMATA ALLA ROTTA CREATA SOPRA
        axios.get(url).then(response => {
            //SE Cè IL DATO CON LA VARIABILE SUCCESS LO SALVO IN PROJECT
            if (response.data.success) {
                this.project = response.data.project

            } else {
                // ALTRIMENTI REINDIRIZZO ALLA PAGINA NOT-FOUND
                this.$router.push({ name: 'Not-Found' });
            }

        })
    }
}
</script>


<template>
    <!-- <pre>{{ project }}</pre> -->
    <section class="container" v-if="project">

        <div class="card mb-4 shadow-lg border-0 rounded-3 overflow-hidden"
            style="background: linear-gradient(to bottom left, rgba(248, 248, 248, 0.8), rgba(192, 192, 192, 0.8));">
            <div class="row g-0">
                <div class="col-md-4" style="height: 30rem;">
                    <template v-if="!project.img.startsWith('http')">
                        <img class="img-fluid h-100 object-fit-cover border-end"
                            :src="base_url + '/storage/' + project.img" alt="Project Image" loading="lazy">
                    </template>
                    <template v-else>
                        <img class="img-fluid h-100 object-fit-cover border-end" :src="project.img" alt="Project Image"
                            loading="lazy">
                    </template>
                </div>

                <div class="col-md-8" style="height: 30rem;">
                    <div class="card-body d-flex flex-column h-100 p-4">
                        <h1 class="card-title text-center mb-4 display-5 fw-bold text-dark text-shadow">{{
                            project.name_project
                        }}</h1>
                        <p class="card-text fs-5 mb-4 text-justify">{{ project.description }}</p>
                        <p class="card-text fs-6 mb-3"><strong>Sviluppo principale:</strong> {{ project.type.name }}</p>
                        <p class="mb-2"><strong>Linguaggi utilizzati:</strong></p>
                        <ul class="d-flex flex-wrap gap-3">
                            <li v-for="language in project.languages" class="list-unstyled">
                                <i :class="language.icon" style="font-size: 2rem; color: #333;"></i>
                            </li>
                        </ul>
                        <div class="mt-auto text-end">
                            <p class="card-text"><small class="text-muted">{{ project.date }}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>


<style scoped>
.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}
</style>