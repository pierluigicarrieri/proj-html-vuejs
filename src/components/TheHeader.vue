<script>

export default {

}

</script>

<template>
    <header>
        <div class="jumbo">
            <div class="d-flex justify-content-end">
                <div class="d-flex flex-column p-3">
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
            <h1 class="pt-4 pb-2 text-center">BUILDING INSPIRING SPACES</h1>
            <h4 class="text-center">We Build Inspiring Residential & Commercial Spaces</h4>
            <div class="btn-container text-center">
                <button class="btn rounded-0 px-5 py-3 me-2">EXPLORE RECENT WORK</button>
                <button class="btn rounded-0 px-5 py-3 ms-2">GET A QUOTE TODAY</button>
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
    }
    
    h1 {
        font-size: 4rem;
        font-weight: 900;
        color: var(--custom-color-1);
    }

    h4 {
        color: var(--custom-color-2);
    }

    .btn-container {
        padding-top: 30px;
        padding-bottom: 240px;
    }
    .btn-container > button:first-child {
        font-size: 1.2rem;
        color: var(--custom-color-1);
        background-color: var(--custom-color-3);
        transition: background-color 0.3s, color 0.3s;
    }

    .btn-container > button:first-child:hover {
        color: var(--custom-color-3);
        background-color: var(--custom-color-2);
    }

    .btn-container > button:last-child {
        font-size: 1.2rem;
        color: var(--custom-color-3);
        background-color: var(--custom-color-2);
        transition: background-color 0.3s, color 0.3s;
    }

    .btn-container > button:last-child:hover {
        color: var(--custom-color-1);
        background-color: var(--custom-color-3);
    }

</style>
