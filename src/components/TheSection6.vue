<script>

import MainSeparator from '../components/MainSeparator.vue';
import BtnSeparator from '../components/BtnSeparator.vue';
import {store, getImgPath} from "../store.js"

export default {

    components: {

        MainSeparator,
        BtnSeparator

    },

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
    <section class="sixth-section">
        <MainSeparator 
        :title="store.mainSeparatorsData.fourthSeparator.title"
        ></MainSeparator>
        <div class="container px-5">
            <div class="row row-cols-3 g-5">
                <div class="col" v-for="card in store.cardsData.fifthCard">
                    <div class="fifth-card card h-100 border-0 rounded-0">
                        <img :src="getImgPath(card.image)" class="card-img-top rounded-0" alt="...">
                        <div class="card-body">
                            <a href="#">
                                <h5 class="card-title pt-3 ps-3">{{ card.title }}</h5>
                            </a>
                            <div class="card-text date ps-3">{{ card.date }}</div>
                            <div class="line-separator my-4"></div>
                            <p class="card-text ps-3 pe-4">{{ card.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <BtnSeparator 
            :btn-title="store.btnSeparatorsData.secondBtnSeparator.btnTitle" 
            :separator-color="store.btnSeparatorsData.secondBtnSeparator.separatorColor"
            ></BtnSeparator>
        </div>
    </section>
</template>

<style scoped>

    .sixth-section {
        margin-top: -100px;
        background-color: var(--custom-color-11);
    }

    .sixth-section .fifth-card .line-separator {
        width: 90%;
        margin: auto;
        border: 1px solid var(--custom-color-11);
    }

    .sixth-section .fifth-card h5 {
        color: var(--custom-color-3);
        font-size: 1.4rem;
        line-height: 2rem;
        transition: color 0.3s;
    }

    .sixth-section .fifth-card h5:hover {
        color: var(--custom-color-2);
    }

    .sixth-section .fifth-card .date {
        font-size: 0.7rem;
        letter-spacing: 0.5px;
        color: var(--main-text-color);
    }

    .sixth-section .fifth-card p {
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        line-height: 2rem;
        color: var(--main-text-color);
    }

</style>