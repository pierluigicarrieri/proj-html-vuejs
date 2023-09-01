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
            <h1 class="py-4 text-center">BUILDING INSPIRING SPACES</h1>
            <h5></h5>
            <div></div>
        </div>
    </header>
</template>

<style scoped>

    header {
        height: 800px;
    }

    .jumbo {
        height: 700px;
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

</style>
