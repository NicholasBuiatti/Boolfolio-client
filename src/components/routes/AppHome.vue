<script>
import axios from "axios";
import AppJumbotron from "../elements/AppJumbotron.vue";

export default {
    name: "AppHome",
    components: {
        AppJumbotron,
    },
    data() {
        return {
            base_URL: "http://127.0.0.1:8000",
            favorite_endpoint: '/api/projects/favorite',
            projects: [],
            currentIndex: 0,
            visibleCount: 3,
        };
    },
    computed: {
        displayedProjects() {
            return this.projects.slice(this.currentIndex, this.currentIndex + this.visibleCount);
        },
    },
    methods: {
        next() {
            if (this.currentIndex + this.visibleCount < this.projects.length) {
                this.currentIndex += 1;
            } else {
                this.currentIndex = 0; // Torna all'inizio
            }
        },
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex -= 1;
            } else {
                this.currentIndex = Math.max(0, this.projects.length - this.visibleCount); // Torna alla fine
            }
        },
    },
    mounted() {
        axios.get(`${this.base_URL}${this.favorite_endpoint}`).then(response => {
            this.projects = response.data.projects;
            console.log(this.projects);
        });
    },
};
</script>

<template>
    <AppJumbotron />
    <div class="py-3 container position-relative">
        <h1>Progetti in evidenza</h1>
        <div class="carousel-controls w-100 h-100">
            <button @click="prev" class="carousel-button fs-1" aria-label="Previous"><i
                    class="fa-solid fa-chevron-left"></i></button>
            <button @click="next" class="carousel-button fs-1" aria-label="Next"><i
                    class="fa-solid fa-chevron-right"></i></button>
        </div>


        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div v-for="project in displayedProjects" :key="project.slug" class="col">
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

<style scoped>
.carousel-button {
    position: absolute;
    background: transparent;
    border: none;
    color: #1A1A2E;
    cursor: pointer;
    top: 50%;
    transform: translateY(-50%);
}

.carousel-button:hover {
    color: #4B4B4B;
    transform: translateY(-50%) scale(1.1);
}

.carousel-button:focus {
    outline: none;
}

.carousel-button:first-child {
    left: -50px;
}

.carousel-button:last-child {
    right: -50px;
}

.marginTopMy {
    margin-top: 5rem;
}
</style>
