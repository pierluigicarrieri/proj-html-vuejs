<script>

import TheTopNav from './components/TheTopNav.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheSection1 from './components/TheSection1.vue';
import TheSection2 from './components/TheSection2.vue';
import TheSection3 from './components/TheSection3.vue';
import TheSection4 from './components/TheSection4.vue';
import TheSection5 from './components/TheSection5.vue';
import TheSection6 from './components/TheSection6.vue';
import TheSection7 from './components/TheSection7.vue';
import TheSection8 from './components/TheSection8.vue';

export default {

    components: {
        TheTopNav,
        TheHeader,
        TheFooter,
        TheSection1,
        TheSection2,
        TheSection3,
        TheSection4,
        TheSection5,
        TheSection6,
        TheSection7,
        TheSection8
    },

}

</script>

<template>
    <TheTopNav></TheTopNav>
    <TheHeader></TheHeader>
    <main>
        <TheSection1></TheSection1>
        <TheSection2></TheSection2>
        <TheSection3></TheSection3>
        <TheSection4></TheSection4>
        <TheSection5></TheSection5>
        <TheSection6></TheSection6>
        <TheSection7></TheSection7>
        <TheSection8></TheSection8>
    </main>
    <TheFooter></TheFooter>
</template>

<style>

    * {
        font-family: 'Raleway', sans-serif;
        letter-spacing: 1px;
    }

    a {
        text-decoration: none;
        color: var(--custom-color-1);
    }   

    ul {
            list-style: none;
            margin: 0!important;
            padding: 0!important;
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

</style>
