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
        <svg class="curved-spacer-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L120,74.7C240,85,480,107,720,106.7C960,107,1200,85,1320,74.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <section class="second-section">
            <div class="container main-container">
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
        </section>
        <svg class="curved-spacer-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L120,208C240,192,480,160,720,160C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <section class="third-section">
        <MainSeparator :title="store.separatorsData.secondSeparator.title"></MainSeparator>
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

    .curved-spacer-top {
        margin-bottom: -320px;
    }

    .curved-spacer-bottom {
        margin-top: -280px;
    }

    .second-section {
        padding: 180px;
        background-image: url("./assets/images/home-244125289.jpg");
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

    .third-section {
        margin-top: -150px;
    }

</style>
