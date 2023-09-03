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
        <div class="top-banner"></div>
    </footer>
</template>

<style scoped>

.top-banner {
    height: 15px;
    background-color: var(--footer-color);
}

</style>