<template>
    <div class="footer mt-4">
        <footer class="text-center text-lg-start" style="background:#ECECEC">
            <section class="d-flex justify-content-center justify-content-lg-between p-4">
                <!-- <div class="mx-auto mb-2">
                    <a href="https://www.facebook.com/dyamalamba" target="_blank" class="me-4 text-reset">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://youtu.be/Eu7LVlrUTqI" target="_blank" class="me-4 text-reset">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div> -->
            </section>
            <section class="">
                <div class="container text-center ">
                    <div class="row">
                        <div class="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4 text-center">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Quick Links
                            </h6>
                            <p>
                                <router-link to="/" class="nav-link m-2">Home</router-link>
                            </p>
                            <p>
                                <router-link to="/addsuggession" class="nav-link m-2">Add Suggession</router-link>
                            </p>
                            <p>
                                <!-- <router-link to="/" class="nav-link m-2"></router-link> -->
                            </p>
                            <!-- <p>
                                <router-link to="/" class="nav-link m-2"></router-link>
                            </p> -->
                        </div>

                    </div>
                </div>
            </section>

        </footer>
    </div>
</template>

<script>
    export default {
        name:'Footer',        
    }
</script>

<style scoped>

.footer {
    font-family: "Poppins", sans-serif;
}


.card {
    border-radius: 0;
    height: 50px;
}

/* .icons {
    display: inline;
    justify-content: center;
    align-items: center;
} */

@media only screen and (max-width: 800px) {
    h5 {
        font-size: 14px;
    }
}

</style>