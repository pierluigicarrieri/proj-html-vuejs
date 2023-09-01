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
    <MainSeparator :title="store.firstMainSeparator.title"></MainSeparator>
</template>

<style>

</style>
