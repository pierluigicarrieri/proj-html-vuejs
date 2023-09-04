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
    <footer>
        <div class="top-banner py-2"></div>
        <div class="main-footer px-5">
            <div class="container h-100">
                <div class="row row-cols-4 h-100">
                    <div class="col h-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo sed eligendi possimus deserunt consectetur ipsa quaerat, culpa at quia! A, ipsum modi natus ad in placeat magnam sapiente optio.</div>
                    <div class="col h-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo sed eligendi possimus deserunt consectetur ipsa quaerat, culpa at quia! A, ipsum modi natus ad in placeat magnam sapiente optio.</div>
                    <div class="col h-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo sed eligendi possimus deserunt consectetur ipsa quaerat, culpa at quia! A, ipsum modi natus ad in placeat magnam sapiente optio.</div>
                    <div class="col h-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo sed eligendi possimus deserunt consectetur ipsa quaerat, culpa at quia! A, ipsum modi natus ad in placeat magnam sapiente optio.</div>
                </div>
            </div>
        </div>
        <div class="bottom-banner d-flex justify-content-between align-items-center px-5 py-4">
            <small class="px-5">©COPYRIGHT 2012 - 2023 | AVADA THEME BY <a href="#">THEMEFUSION</a> | ALL RIGHTS RESERVED | POWERED BY <a href="#">WORDPRESS</a></small>
            <div class="icons-container px-5">
                <ul class="d-flex">
                    <li class="px-2"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li class="px-2"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li class="px-2"><a href="#"></a><i class="fa-brands fa-youtube"></i></li>
                    <li class="px-2"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
            </div>
            <button class="btn"><i class="fa-solid fa-chevron-up"></i></button>
        </div>
    </footer>
</template>

<style scoped>

    .top-banner {
        background-color: var(--custom-color-12);
    }





    .main-footer {
        height: 500px;
        background-color: var(--custom-color-6);
    }

    .col {
        background-color: antiquewhite;
    }






    .bottom-banner {
        position: relative;
        background-color: var(--custom-color-13);
    }

    small {
        font-size: 0.7rem;
        color: var(--main-text-color);
    }

    small a {
        color: var(--custom-color-11);
        transition: color 0.3s;
    }

    small a:hover {
        color: var(--custom-color-2);
    }

    i {
        color: var(--main-text-color);
    }

    .bottom-banner > button {
        position: absolute;
        bottom: 0;
        right: 50px;
        font-size: 1.2rem;
        color: var(--custom-color-1);
        background-color: var(--custom-color-3);
        transition: background-color var(--transition-2), color var(--transition-2);
    }

    .bottom-banner > button:hover {
        color: var(--custom-color-3);
        background-color: var(--custom-color-2);
    }

</style>