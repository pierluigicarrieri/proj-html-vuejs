<script>

export default {

    data() {
        return {
        }
    },

}

</script>

<template>
    <section class="fifth-section">
        <svg class="curved-spacer-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f5f5" fill-opacity="1" d="M0,64L120,74.7C240,85,480,107,720,106.7C960,107,1200,85,1320,74.7L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
        <h2 class="py-2">Our Home Owners Say</h2>
        <div class="line-separator"></div>
            <img class="py-4" src="../assets/images/home-testimonial-84268399.jpg" alt="home_testimonial">
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
</template>

<style scoped>

    .fifth-section {
        position: relative;
        padding: 200px 400px 200px 400px;
        text-align: center;
        color: var(--custom-color-1);
        background-image: url("../assets/images/home-parallax-144609983.jpg");
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

</style>