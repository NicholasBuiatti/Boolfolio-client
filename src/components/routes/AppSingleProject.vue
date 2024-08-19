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

        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4" style="height: 30rem;">
                    <!-- VISUALIZZO L'IMMAGINE IN BASE SE è HTTP O IMMAGINE SENZA HTTP -->
                    <template v-if="!project.img.startsWith('http')">
                        <img class="img-fluid h-100 object-fit-cover border rounded"
                            :src="base_url + '/storage/' + project.img" alt="" loading="lazy">
                    </template>
                    <template v-else>
                        <img class="img-fluid h-100 object-fit-cover border rounded" :src="project.img" alt=""
                            loading="lazy">
                    </template>
                </div>


                <div class="col-md-8">
                    <div class="card-body">
                        <h2 class="card-title text-center mb-5">{{ project.name_project }}</h2>
                        <p class="card-text">{{ project.description }}</p>
                        <p class="card-text">Sviluppo principale: {{ project.type.name }}</p>
                        <p>Linguaggi utilizzati:</p>
                        <ul v-for="language in project.languages">
                            <li>
                                <i :class="language.icon" style="font-size: 2rem;"></i>
                            </li>
                        </ul>
                        <p class="card-text"><small class="text-muted">{{ project.date }}</small></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped></style>