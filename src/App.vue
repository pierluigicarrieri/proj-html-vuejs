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
        <section>
            <MainSeparator :title="store.firstMainSeparator.title"></MainSeparator>
            <div class="container main-container">
                <div class="row row-cols-4 g-4">
                    <div class="col">
                        <div class="first-card card border-0 text-center">
                            <div class="card-body">
                                <div class="icon-container d-flex justify-content-center align-items-center my-3">
                                    <i class="fa-regular fa-building"></i>
                                </div>                        
                                <h2 class="card-title">Buildings</h2>
                                <p class="card-text">Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="first-card card border-0 text-center">
                            <div class="card-body">
                                <div class="icon-container d-flex justify-content-center align-items-center my-3">
                                    <i class="fa-regular fa-building"></i>
                                </div>                        
                                <h2 class="card-title">Buildings</h2>
                                <p class="card-text">Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="first-card card border-0 text-center">
                            <div class="card-body">
                                <div class="icon-container d-flex justify-content-center align-items-center my-3">
                                    <i class="fa-regular fa-building"></i>
                                </div>                        
                                <h2 class="card-title">Buildings</h2>
                                <p class="card-text">Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="first-card card border-0 text-center">
                            <div class="card-body">
                                <div class="icon-container d-flex justify-content-center align-items-center my-3">
                                    <i class="fa-regular fa-building"></i>
                                </div>                        
                                <h2 class="card-title">Buildings</h2>
                                <p class="card-text">Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style>

    .main-container {
        height: 400px;
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

</style>
