<script>

export default {

    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam."
        }
    },

}

</script>

<template>
    <div class="container text-center">
        <h2 class="py-4">{{ title }}</h2>
        <div class="line-separator m-auto"></div>
        <p class="py-4">{{ text }}</p>
    </div>
</template>

<style scoped>

    .container {
        padding: 100px 230px 50px 230px;
        margin: auto;
    }

    .line-separator {
        width: 230px;
        border: 1px solid var(--custom-color-2);
    }

    p {
        font-size: 0.9rem;
        line-height: 2rem;
        color: var(--main-text-color);
    }

</style>