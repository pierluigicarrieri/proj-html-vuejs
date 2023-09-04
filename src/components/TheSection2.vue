<script>

import {store, getImgPath} from "../store.js"

export default {

    data() {
        return {
            store
        }
    },

    methods: {
        getImgPath
    }

}

</script>

<template>
    <section class="second-section">
        <svg class="curved-spacer-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L120,74.7C240,85,480,107,720,106.7C960,107,1200,85,1320,74.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <div class="container my-5 py-5">
            <div class="row row-cols-4 g-4">
                <div class="col" v-for="card in store.cardsData.secondCard">
                    <div class="second-card card border-0 text-center">
                        <div class="card-body">
                            <i :class="`${card.icon}`"></i>                       
                            <h2 class="card-title">{{ card.number }}</h2>
                            <p class="card-text">{{ card.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <svg class="curved-spacer-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L120,208C240,192,480,160,720,160C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </section>
</template>

<style scoped>

    .second-section {
        position: relative;
        padding: 180px;
        background-image: url("../assets/images/home-244125289.jpg");
        background-size: cover;
        background-position: center;
    }

    .second-card {
        background-color: rgba(0, 0, 0, 0);
    }

    .second-card i {
        font-size: 7rem;
        color: var(--custom-color-2);
    }

    .second-card h2 {
        font-size: 4rem;
        color: var(--custom-color-2);
    }

    .second-card p {
        color: var(--custom-color-1);
    }

</style>