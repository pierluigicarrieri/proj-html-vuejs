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
    <section class="third-section">
        <MainSeparator 
        :title="store.mainSeparatorsData.secondSeparator.title"
        ></MainSeparator>
        <div class="container px-5">
            <div class="row row-cols-3 g-4">
                <div class="col" v-for="card in store.cardsData.thirdCard">
                    <div class="third-card card border-0 rounded-0 text-center">
                        <img :src="getImgPath(card.image)" class="card-img-top rounded-0" alt="...">
                    </div>
                </div>
            </div>
            <BtnSeparator 
            :btn-title="store.btnSeparatorsData.firstBtnSeparator.btnTitle" 
            :separator-color="store.btnSeparatorsData.firstBtnSeparator.separatorColor"
            ></BtnSeparator>
        </div>
    </section>
</template>

<style scoped>

    .third-section {
        margin-top: -100px;
    }

    .third-card img {
        height: 380px;
    }


</style>