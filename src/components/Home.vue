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
                        <router-link to="/menuen" class="navbar-item">English<router-link /></router-link>
                        <router-link to="/menu" class="navbar-item">Português<router-link /></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'HomeVue'
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

.games-search {
    flex-grow: 1;
    margin-left: 20px;
    position: relative;
}

.form-search .nav-search-field {
    width: 100%;
    padding: 10px 50px 10px 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
}

.form-search .btn-search {
    position: absolute;
    right: 10px;
    top: 58%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #CA6BE5;
    font-size: 24px;
}

.menu-right {
    display: flex;
    align-items: center;
}

.icon-nav ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: #CA6BE5;
}

.icon-nav ul li {
    margin-left: 20px;
    position: relative;
}

.icon-wrapper {
    display: flex;
    align-items: center;
    position: relative;
}

.cart-icon-wrapper {
    position: relative;
}

.cart-count {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #C1FF72;
    color: #030821;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
}

.settings:hover {
    color: #C1FF72;
    transition: 100ms linear;
}

.cart:hover {
    color: #C1FF72;
    transition: 100ms linear;
}

.onhover-div:hover .show-div {
    display: block;
}

.show-div {
    display: none;
    position: absolute;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 4px;
    z-index: 1000;
    text-align: center;
    cursor: default;
}

.setting {
    width: 200px;
}

.show-div ul {
    padding: 0;
    margin: 0;
}

.show-div ul li {
    list-style: none;
    padding: 5px 0;
}

.show-div ul li a {
    text-decoration: none;
    color: #CA6BE5;
}

.show-div h5 {
    margin-bottom: 10px;
}

.cart-table {
    color: #CA6BE5;
    width: 200px;
    text-align: center;
}

.cart-items {
    display: flex;
    flex-direction: column;
}

.cart-item {
    margin-bottom: 10px;
}

.cart-item-added {
    animation: itemAdded 0.3s ease-in-out;
}

.item-actions {
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-quantity {
    background-color: #CA6BE5;
    color: white;
    border: none;
    padding: 5px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 4px;
}

.btn-remove {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 4px;
}

.empty-cart {

    font-style: italic;
}

.cart-total {
    margin-top: 10px;
    font-weight: bold;
    color: #CA6BE5;
}

.img-fluid:hover {
    filter: drop-shadow(1px 1px 20px white);
    transition: 300ms linear;
}

@keyframes itemAdded {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>
