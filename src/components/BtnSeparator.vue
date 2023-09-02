<script>

export default {

    props: {
        btnTitle: {
            type: String,
            required: true
        }
    }

}

</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-between align-items-center">
            <div class="line-separator"></div>
            <button class="btn flex-grow-1 rounded-0 px-4 py-2">{{ btnTitle }}</button>
            <div class="line-separator"></div>
        </div>
        </div>
</template>

<style scoped>

    .container {
        padding: 100px 0px 100px 0px;
        margin: auto;
    }

    .line-separator {
        width: 380px;
        border: 1px solid var(--custom-color-11);
    }

    button {
        margin: 0px 20px 0px 20px;
        padding: 0px 20px 0px 20px;
        color: var(--custom-color-3);
        transition: background-color var(--transition-1);
    }

    button:hover {
        background-color: var(--custom-color-2);
    }

</style>