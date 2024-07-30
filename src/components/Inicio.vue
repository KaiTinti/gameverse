<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="main-menu border-section border-top-0">
                        <div class="brand-logo">
                            <router-link to="/">
                                <img src="/assets/GameverseLogo.png" class="img-fluid" alt="logo">
                            </router-link>
                            <router-link to="/">
                            </router-link>
                        </div>
                        <router-link to="/menu" class="navbar-item">Loja<router-link /></router-link>
                    </div>
                    <div class="fundo">
                        <img src="/assets/fundo.jpg" class="img-fundo" alt="logo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'InicioVue'
}
</script>


<style scoped>
.container {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 15px;
    background-color: #030821;
}

.main-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 650px 0px;
}

.brand-logo img {
    max-height: 100px;
}

.navbar-item{
    padding-left: 50px;
    text-decoration: none;
    color: #C1FF72;
    font-weight: bold;
}

.img-fluid:hover {
  filter: drop-shadow(1px 1px 20px white);
  transition: 300ms linear;
}

.img-fundo{
    width: 100%;
    height: 500px;
    
}
</style>
