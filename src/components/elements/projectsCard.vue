<script>
export default {
    name: "projectCard",
    components: {},
    props: {
        project: Object
    },
    data() {
        return {};
    },
    methods: {},
    mounted() { },
};
</script>

<template>

    <div class="col">
        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" :style="{
            backgroundImage: `url(${project.img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        }">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1 justify-content-between">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{{ project.name_project }}</h2>
                <router-link :to="{ name: 'Project', params: { slug: project.slug } }"
                    class="btn btn-info w-50">Dettagli</router-link>
                <!-- <ul class="d-flex list-unstyled mt-auto">
                        <li class="me-auto">
                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32"
                                class="rounded-circle border border-white">
                        </li>
                        <li class="d-flex align-items-center me-3">
                            <svg class="bi me-2" width="1em" height="1em">
                                <use xlink:href="#geo-fill"></use>
                            </svg>
                            <small>Earth</small>
                        </li>
                        <li class="d-flex align-items-center">
                            <svg class="bi me-2" width="1em" height="1em">
                                <use xlink:href="#calendar3"></use>
                            </svg>
                            <small>3d</small>
                        </li>
                    </ul> -->
            </div>
        </div>
    </div>







    <!-- <div class="card mb-3" style="max-width: 540px">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ project.name }}</h5>
                    <p class="card-text">{{ project.description }}</p>
                    <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
        </div>
    </div> -->
</template>

<style scoped></style>
