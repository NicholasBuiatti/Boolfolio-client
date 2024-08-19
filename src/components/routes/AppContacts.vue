<script>


export default {
    name: "AppContacts",
    components: {
    },
    props: {},
    data() {
        return {
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {},
        };
    },
    methods: {

    },
    mounted() {

    },
};
</script>

<template>

    <div class="p-3 mb-2">
        <div class="container py-5">
            <h1 class="display-5 fw-bold">Contact me</h1>
            <p class="col-md-8 fs-4">
                Using a series of utilities, you can create this jumbotron, just
                like the one in previous versions of Bootstrap. Check out the
                examples below for how you can remix and restyle it to your liking.
            </p>
        </div>
    </div>

    <div class="container">
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" name="name" id="name" aria-describedby="nameHelper" />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp"
                    placeholder="example@mail.com" />
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" name="message" id="message" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-success">
                Submit
            </button>
        </form>
    </div>
</template>

<style scoped></style>

<!-- 
ICONE DA IMPLEMENTARE IN LARAVEL
<i class="fa-brands fa-php"></i>
<i class="fa-brands fa-node-js"></i>
<i class="fa-brands fa-node"></i>
<i class="fa-brands fa-vuejs"></i>
<i class="fa-brands fa-laravel"></i>
<i class="fa-brands fa-python"></i>

<i class="fa-brands fa-github"></i> -->