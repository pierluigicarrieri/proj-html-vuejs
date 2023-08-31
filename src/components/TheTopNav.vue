<script>

import {store} from "../store.js"

export default {

    data() {
        return {
            store
        }
    }

}

</script>

<template>
    <nav class="d-flex justify-content-between px-5 py-4">
        <a class="ps-5" href="*">
            <img src="../assets/images/construction_logo_retina.png" alt="">
        </a>
        <div class="d-flex align-items-center pe-5">
        <ul class="d-flex align-items-center">
            <li class="px-4" v-for="item in store.navItems">
                <a href="*">{{ item }}</a>
            </li>
        </ul>
        <button class="btn rounded-0">GET QUOTE</button>
        </div>
    </nav>
</template>

<style scoped>

    nav {
        font-weight: 600;
        background-color: var(--custom-color-1);
    }

    img {
        height: 70px;
    }

    ul {
        list-style: none;
        margin: 0!important;
    }

    a, button {
        color: var(--custom-color-3);
    }

    button {
        background-color: var(--custom-color-2);
    }

</style>