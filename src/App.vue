<script>

import TheTopNav from './components/TheTopNav.vue';
import TheHeader from './components/TheHeader.vue';
import MainSeparator from './components/MainSeparator.vue';
import BtnSeparator from './components/BtnSeparator.vue';
import {store, getImgPath} from "./store.js"

export default {

    components: {
        TheTopNav,
        TheHeader,
        MainSeparator,
        BtnSeparator,
    },

    data() {
        return {
            store
        }
    },

    methods: {
        getImgPath,
    }

}

</script>

<template>
    <TheTopNav></TheTopNav>
    <TheHeader></TheHeader>
    <main>
        <section class="first-section">
            <MainSeparator :title="store.mainSeparatorsData.firstSeparator.title"></MainSeparator>
            <div class="container">
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
            <svg class="curved-spacer-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L120,74.7C240,85,480,107,720,106.7C960,107,1200,85,1320,74.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <div class="container my-5 py-5">
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
            <svg class="curved-spacer-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L120,208C240,192,480,160,720,160C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </section>
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
        <section class="fourth-section">
            <MainSeparator 
            :title="store.mainSeparatorsData.thirdSeparator.title"
            ></MainSeparator>
            <div class="container px-5">
                <div class="row row-cols-4 g-4">
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
        <section class="fifth-section">
            <svg class="curved-spacer-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f5f5" fill-opacity="1" d="M0,64L120,74.7C240,85,480,107,720,106.7C960,107,1200,85,1320,74.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <h2 class="py-2">Our Home Owners Say</h2>
            <div class="line-separator"></div>
                <img class="py-4" src="./assets/images/home-testimonial-84268399.jpg" alt="home_testimonial">
            <p><em>
                “Many novice real estate investors soon quit the profession and invest. 
                When you invest in real estate, you often see a side of humanity that stocks, 
                bonds, mutual funds, and saving money shelter you from.”
            </em></p>
            <p class="py-4">JOHN DOE • PROPERTY INVESTOR</p>
            <div class="dot-container d-flex justify-content-center pb-5">
                <div class="dot m-1"></div>
                <div class="dot m-1"></div>
            </div>
            <svg class="curved-spacer-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f5f5" fill-opacity="1" d="M0,224L120,208C240,192,480,160,720,160C960,160,1200,192,1320,208L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </section>
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

    .first-card .icon-container {
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
        position: absolute;
        top: 0;
        left: 0;
    }

    .curved-spacer-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .second-section {
        position: relative;
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
        margin-top: -100px;
    }

    .third-card img {
        height: 380px;
    }






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







    .fifth-section {
        position: relative;
        padding: 200px 400px 200px 400px;
        text-align: center;
        color: var(--custom-color-1);
        background-image: url("./assets/images/home-parallax-144609983.jpg");
        background-size: cover;
        background-position: center;
    }

    .fifth-section .line-separator {
        width: 230px;
        margin: auto;
        border: 1px solid var(--custom-color-2);
    }

    .fifth-section img {
        border-radius: 50%;
    }

    .fifth-section p {
        font-size: 1.2rem;
        letter-spacing: 2px;
        line-height: 2rem;
    }

    .fifth-section .dot {
        width: 15px;
        height: 15px;
        border: 1px solid white;
        border-radius: 50%;
        transition: background-color 0.3s;
        z-index: 2;
    }

    .fifth-section .dot:hover {
        background-color: var(--custom-color-1);
    }






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
