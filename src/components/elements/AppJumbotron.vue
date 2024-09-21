<script>

export default {
    name: "AppJumbotron",
    data() {
        return {

        };
    },
}
</script>

<template>

    <section class="p-3 text-center">
        <div class="row h-100 justify-content-center">
            <div class="col-lg-4 col-md-8 rounded-circle imgPersonale border">

            </div>
            <div class="col-lg-6 col-md-8 me-3 d-flex align-items-center">
                <div>
                    <p class="lead text-dark">Benvenuto nel mio portfolio personale, creato per affinare le mie
                        competenze come Full Stack Web Developer. Qui puoi esplorare i progetti che ho sviluppato, con
                        una
                        particolare attenzione sia al front-end che al back-end. Per ogni progetto, ho implementato e
                        utilizzato API costruite su misura, con cicli di interazione dati completi.

                        Oltre a questo, ho realizzato una piattaforma di gestione progetti accessibile esclusivamente
                        dall'amministratore, per garantire il controllo e l'organizzazione delle attività in maniera
                        efficiente.

                        Esplora i miei lavori e scopri come posso contribuire con le mie capacità di sviluppo web a
                        progetti
                        innovativi.</p>
                    <p>
                        <a href="https://github.com/NicholasBuiatti" class="btn btn-primary my-2">Profilo Git</a>
                    </p>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped>
section {
    background: linear-gradient(to bottom left, rgba(248, 248, 248, 0.8), rgba(192, 192, 192, 0.8)),
        url('/NbPortfolioLogo.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 75vh;
}

.imgPersonale {
    background-image: url('/Prof3.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
