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
    <section class="seventh-section">
        <MainSeparator 
        :title="store.mainSeparatorsData.fifthSeparator.title"
        ></MainSeparator>
        <div class="container px-5 mb-5">
            <div class="row row-cols-5 pb-5">
                <div class="col" v-for="card in store.cardsData.sixthCard">
                    <div class="sixth-card">
                        <img :src="getImgPath(card.image)" class="card-img-top rounded-0" alt="...">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>