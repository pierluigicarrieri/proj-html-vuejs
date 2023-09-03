<script>

export default {

}

</script>

<template>
    <header>
        <div class="jumbo pt-5">
            <div class="d-flex justify-content-end pt-5">
                <div class="btn-container-top d-flex flex-column position-fixed p-3">
                    <button class="btn btn-light m-2 px-1 py-3 top-btn">
                        <div><i class="fa-solid fa-building fs-5"></i></div>
                        <div>Prebuilts</div>
                    </button>
                    <button class="btn btn-light m-2 px-1 py-3 top-btn">
                        <div><i class="fa-solid fa-cart-shopping fa-flip-horizontal fs-5"></i></div>
                        <div>Buy now</div>
                    </button>
                </div>
            </div>
            <h1 class="pt-5 mt-5 pb-2 text-center">BUILDING INSPIRING SPACES</h1>
            <h4 class="text-center">We Build Inspiring Residential & Commercial Spaces</h4>
            <div class="btn-container-bottom text-center">
                <button class="btn rounded-0 px-5 py-3 me-2">EXPLORE RECENT WORK</button>
                <button class="btn rounded-0 px-5 py-3 ms-2">GET A QUOTE TODAY</button>
            </div>
        </div>
        <div class="banner">
            <h2 class="text-center">Do You Have A Construction Project We Can Help You With?</h2>
            <div class="text-center">
                <button class="btn rounded-0 px-4 py-2">GET A FREE QUOTE</button>
            </div>
        </div>
    </header>
</template>

<style scoped>

    .jumbo {
        background-image: url("../assets/images/home-slider-62528242.jpg");
        background-size: cover;
        background-position: center;
    }

    .top-btn {
        font-size: 0.8rem;
        color: var(--custom-color-3);
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    }
    
    h1 {
        font-size: 4rem;
        font-weight: 900;
        color: var(--custom-color-1);
    }

    h4 {
        color: var(--custom-color-2);
    }

    .btn-container-top {
        z-index: 2;
        margin-top: -100px;
    }

    .btn-container-bottom {
        padding-top: 30px;
        padding-bottom: 240px;
    }
    .btn-container-bottom > button:first-child {
        font-size: 1.2rem;
        color: var(--custom-color-1);
        background-color: var(--custom-color-3);
        transition: background-color var(--transition-2), color var(--transition-2);
    }

    .btn-container-bottom > button:first-child:hover {
        color: var(--custom-color-3);
        background-color: var(--custom-color-2);
    }

    .btn-container-bottom > button:last-child {
        font-size: 1.2rem;
        color: var(--custom-color-3);
        background-color: var(--custom-color-2);
        transition: background-color var(--transition-2), color var(--transition-2);
    }

    .btn-container-bottom > button:last-child:hover {
        color: var(--custom-color-1);
        background-color: var(--custom-color-3);
    }

    .banner {
        color: var(--custom-color-3);
        background-color: var(--custom-color-2);
    }

    h2 {
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .banner button {
        margin-bottom: -25px;
        border: 2px solid white;
        font-size: 1.2rem;
        color: var(--custom-color-1);
        background-color: var(--custom-color-3);
        transition: background-color var(--transition-2), color var(--transition-2), border-color var(--transition-2);
    }

    .banner button:hover {
        border: 2px solid black;
        color: var(--custom-color-3);
        background-color: var(--custom-color-1);
    }

</style>
