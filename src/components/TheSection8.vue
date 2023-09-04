<script>

export default {

    data() {
        return {
        }
    },

}

</script>

<template>
    <section class="section eigth-section">
        <div class="container px-5">
            <div class="row">
                <div class="col-8">
                    <h2 class="py-4">BUILDING INSPIRING SPACES</h2>
                    <div class="line-separator"></div>
                    <p class="py-4">Vivamus Sed Consectetur Tellus Dolor Sit Amet, Consectetur Adipiscing Lorem Elit Sadip Ipsum Ets Ficilis Uns.</p>
                </div>
                <div class="col-4 d-flex flex-column align-items-center justify-content-center">
                    <button class="btn rounded-0 px-5 py-3 ms-2">GET A FREE QUOTE</button>
                    <p class="py-3">Only takes a few seconds!</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

    .eigth-section {
        padding: 100px;
        background-image: url("../assets/images/about-call-to-action-57862405.jpg");
        background-size: cover;
        background-position: 0% 80%;
    }

    .eigth-section .line-separator {
        width: 230px;
        border: 1px solid var(--custom-color-2);
    }

    .eigth-section h2 {
        font-weight: 900;
        color: var(--custom-color-1);
    }

    .eigth-section .col-8 p {
        font-size: 1.2rem;
        color: var(--custom-color-1);
    }

    .eigth-section .col-4 p {
        font-size: 0.9rem;
        color: var(--custom-color-1);
    }

    .eigth-section button {
        font-size: 1.2rem;
        color: var(--custom-color-3);
        background-color: var(--custom-color-2);
        transition: background-color var(--transition-2), color var(--transition-2);
    }

    .eigth-section button:hover {
        color: var(--custom-color-1);
        background-color: var(--custom-color-3);
    }

</style>