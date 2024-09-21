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
            <h1 class="display-5 fw-bold">Inviami un messaggio</h1>
            <p class="col-md-8 fs-4">
                Se hai domande, idee o proposte di collaborazione, non esitare a contattarmi! Sono
                sempre aperto a nuove opportunità e sarei felice di discutere su come possiamo lavorare insieme. Compila
                il modulo qui sotto o scrivimi direttamente all'indirizzo email indicato. Non vedo l'ora di sentire da
                te!
            </p>
        </div>
    </div>

    <div class="container">
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Nome*</label>
                <input type="text" class="form-control" name="name" id="name" required aria-describedby="nameHelper" />
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email*</label>
                <input type="email" class="form-control" name="email" id="email" required aria-describedby="emailHelp"
                    placeholder="esempio@mail.com" />
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Messaggio*</label>
                <textarea class="form-control" name="message" id="message" required rows="3"></textarea>
            </div>

            <p class="text-danger">I campi contrassegnati con * sono obbligatori</p>
            <button type="submit" class="btn btn-success">
                Invia
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