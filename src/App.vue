<script>

import TheTopNav from './components/TheTopNav.vue';
import TheHeader from './components/TheHeader.vue';
import MainSeparator from './components/MainSeparator.vue';
import {store} from "./store.js"

export default {

    components: {
        TheTopNav,
        TheHeader,
        MainSeparator,
    },


    data() {
        return {
            store
        }
    }

}

</script>

<template>
    <TheTopNav></TheTopNav>
    <TheHeader></TheHeader>
    <main>
        <section class="first-section">
            <MainSeparator :title="store.separatorsData.firstSeparator.title"></MainSeparator>
            <div class="container main-container">
                <div class="row row-cols-4 g-4">
                    <div class="col" v-for="card in store.cardsData.firstCard">
                        <div class="first-card card border-0 text-center">
                            <div class="card-body">
                                <div class="icon-container d-flex justify-content-center align-items-center my-3">
                                    <i :class="`${card.icon}`"></i>
                                </div>                        
                                <h2 class="card-title">{{ card.title }}</h2>
                                <p class="card-text">{{ card.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="second-section">
            <div class="container main-container">
                <div class="row row-cols-4 g-4">
                    <div class="col" v-for="card in store.cardsData.firstCard">
                        <div class="first-card card border-0 text-center">
                            <div class="card-body">
                                <div class="icon-container d-flex justify-content-center align-items-center my-3">
                                    <i :class="`${card.icon}`"></i>
                                </div>                        
                                <h2 class="card-title">{{ card.title }}</h2>
                                <p class="card-text">{{ card.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style>

    .first-section > .container {
        padding-bottom: 100px;
    }

    .first-card {
        line-height: 2rem;
        background-color: var(--custom-color-11);
    }

    .icon-container {
        width: 70px;
        height: 70px;
        margin: auto;
        border: 1px solid var(--main-text-color);
        border-radius: 50%;
    }

    .first-card i {
        font-size: 1.5rem;
        color: var(--main-text-color);
    }

    .first-card p {
        font-size: 0.9rem;
    }

    .second-section {
        height: 600px;
        background-image: url("./assets/images/home-244125289.jpg");
        background-size: cover;
        background-position: center;
    }

    .second-section .card {
        background-color: rgba(0, 0, 0, 0);
    }

</style>
