<script>

import MainSeparator from '../components/MainSeparator.vue';
import {store} from "../store.js"

export default {

    components: {

        MainSeparator

    },

    data() {
        return {
            store
        }
    },

}

</script>

<template>
    <section class="fourth-section">
        <MainSeparator 
        :title="store.mainSeparatorsData.thirdSeparator.title"
        ></MainSeparator>
        <div class="container px-5">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col" v-for="card in store.cardsData.fourthCard">
                    <div class="fourth-card card border-0 text-center">
                        <div class="card-body">
                            <div class="icon-container d-flex justify-content-center align-items-center my-3" :style="{backgroundColor: card.color}">
                                <i :class="`${card.icon}`"></i>
                            </div>                        
                            <h5 class="card-title">{{ card.title }}</h5>
                            <div class="line-separator my-3"></div>
                            <p class="card-text">{{ card.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

    .fourth-section {
        background-color: var(--custom-color-11);
    }

    .fourth-card {
        background-color: transparent;
    }

    .fourth-card .icon-container {
        width: 130px;
        height: 130px;
        margin: auto;
        border-radius: 50%;
    }

    .fourth-card i {
        font-size: 4rem;
        color: var(--custom-color-1);
    }

    .fourth-card h5 {
        font-size: 1.1rem;
        color: var(--custom-color-3);
    }

    .fourth-card p {
        font-size: 0.9rem;
        line-height: 2rem;
        color: var(--main-text-color);
    }

    .fourth-card .line-separator {
        width: 20px;
        margin: auto;
        border: 1px solid var(--main-text-color);
    }

</style>