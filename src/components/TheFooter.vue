<script>

import {store, getImgPath} from "../store.js"

export default {

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
    <footer>
        <div class="top-banner py-2"></div>
        <div class="main-footer px-5">
            <div class="row row-cols-1 row-cols-md-4 px-5 py-5">
                <div class="col">
                    <img class="py-3" src="../assets/images/footer-logo.png" alt="">
                    <p class="py-3">We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.</p>
                    <button class="btn rounded-0 px-4 py-2">LEARN MORE</button>
                </div>
                <div class="col">
                    <h6 class="py-4">LATEST TWEETS</h6>
                    <div class="tweets-container">
                        <ul>
                            <li class="p-2" v-for="element in store.tweets">
                                <a href="#!">
                                    <div class="d-flex">
                                        <a href="#!">
                                            <img class="social-logo" :src="getImgPath(element.accountImage)" :alt="`${element.accountImage}`">
                                        </a>
                                        <div class="px-3">
                                            <div>
                                                <a class="account-name" href="#!">{{ element.accountName }}</a>
                                            </div>
                                                <a class="account-ref" href="#!">{{ element.accountRef }}</a>
                                                <a class="date" href="#!">{{ element.date }}</a>
                                        </div>
                                        <a class="twitter-icon" href="#!"><i class="fa-brands fa-x-twitter"></i></a>
                                    </div>
                                    <p class="content-text">{{ element.content.text }}</p>
                                    <a class="content-media" href="#!">{{ element.content.media }}</a>
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex">
                                            <div class="d-flex">
                                                <a class="comments-icon" href="#!"><i class="fa-regular fa-comment"></i></a>
                                                <div class="comments">{{ element.comments }}</div>
                                            </div>
                                            <div class="d-flex">
                                                <a class="likes-icon" href="#!"><i class="fa-regular fa-heart"></i></a>
                                                <div class="likes">{{ element.likes }}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <a class="info-icon" href="#!"><i class="fa-solid fa-info"></i></a>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <h6 class="py-4">CONTACT US TODAY</h6>
                    <ul>
                        <li class="d-flex">
                            <div><i class="fa-solid fa-globe"></i></div>
                            <p class="ps-3">Corporate Location 1600 Amphitheatre Parkway London WC1 1BA</p>
                        </li>
                        <li class="d-flex">
                            <div><i class="fa-solid fa-house"></i></div>
                            <p class="ps-3">Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA</p>
                        </li>
                        <li class="d-flex">
                            <div><i class="fa-solid fa-phone fa-flip-horizontal"></i></div>
                            <p class="ps-3">1.800.458.556 / 1.800.532.2112</p>
                        </li>
                        <li class="d-flex">
                            <div><i class="fa-solid fa-phone fa-flip-horizontal"></i></div>
                            <p class="ps-3">info@your-domain.com</p>
                        </li>
                        <li class="d-flex">
                            <div><i class="fa-regular fa-clock"></i></div>
                            <p class="ps-3">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        </li>
                        <li class="d-flex">
                            <div><i class="fa-regular fa-clock"></i></div>
                            <p class="ps-3">Saturday - Sunday: 9:00 AM - 12:00 PM</p>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h6 class="py-4">OUR LOCATION</h6>
                    <div class="last-col-wrapper text-center">
                        <p>For privacy reasons Google Maps needs your permission to be loaded.</p>
                        <button class="btn rounded-0 px-4 py-2">I ACCEPT</button>
                    </div>
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
        background-color: var(--custom-color-6);
    }
        
    .col:first-child p {
        font-size: 0.9rem;
        line-height: 2rem;
        color: var(--main-text-color);
    }
    .tweets-container {
        overflow: auto;
        height: 400px;
    }
    .tweets-container li:hover {
        background-color: var(--custom-color-14);
    }

    .tweets-container .social-logo {
        height: 45px;
        border-radius: 50%;
    }

    .twitter-icon i {
        font-size: 1.4rem;
        color: var(--custom-color-15);
    }

    .content-text {
        font-size: 0.9rem;
        color: var(--custom-color-1);
        margin-bottom: auto;
    }

    .content-media {
        font-size: 0.9rem;
        color: var(--custom-color-15);
    }

    .comments, .likes {
        padding: 0 5px 0 5px;
        color: var(--main-text-color);
    }

    .last-col-wrapper {
        padding: 70px 50px 70px 50px;
        background-color: var(--custom-color-12);
    }

    .col:nth-child(3) p {
        padding-right: 80px;
        line-height: 2rem;
        font-size: 0.8rem;
        color: var(--main-text-color);
        
    }

    .col:last-child p {
        color: var(--custom-color-1);
    }

    .main-footer button {
        background-color: var(--custom-color-2);
        transition: background-color var(--transition-2);
    }

    .main-footer button:hover {
        color: var(--custom-color-1);
        background-color: var(--custom-color-3);
    }

    .main-footer h6 {
        color: var(--custom-color-2);
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