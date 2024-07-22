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
        const url = `${this.base_url}/api/projects/${this.$route.params.id}`

        axios
            .get(url)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    // save the response into the vue instance

                    this.project = response.data.project

                } else {
                    // redirect to a 404 
                    this.$router.push({ name: 'not-found' });
                }

            })
    }
}
</script>


<template>
    <pre>{{ project }}</pre>
    <section class="container" v-if="project">

        <div class="card text-center">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="true" href="#">Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">types</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-disabled="true">Languages</a>
                    </li>
                </ul>
            </div>
            <div class="card-body">
                <h3 class="card-title">Titolo: {{ project.name_project }}</h3>
                <p class="card-text">Descrizione: {{ project.description }}</p>
                <p class="card-text">{{ project.date }}</p>
            </div>
        </div>

        <template v-if="!project.img.startsWith('http')">
            <img class="img-fluid" :src="base_url + '/storage/' + project.img" alt="" loading="lazy">
        </template>
        <template v-else>
            <img class="img-fluid" :src="project.img" alt="" loading="lazy">
        </template>

    </section>
</template>


<style scoped></style>