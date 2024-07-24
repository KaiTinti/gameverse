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
              </div>
              <div class="menu-right">
                <div class="icon-nav">
                  <ul>
                    <li class="onhover-div mobile-setting">
                      <div class="icon-wrapper">
                        <span class="material-symbols-outlined settings">
                          settings
                        </span>
                        <i class="ti-settings"></i>
                      </div>
                      <div class="show-div setting">
                        <h5>Idioma</h5>
                        <router-link to="/menu" class="navbar-item">Português<router-link /></router-link>
                      </div>
                    </li>
                    <li class="onhover-div mobile-setting">
                      <div class="icon-wrapper cart-icon-wrapper">
                        <span class="material-symbols-outlined cart">
                          shopping_cart
                        </span>
                        <i class="ti-settings"></i>
                        <span class="cart-count" v-if="cart.length > 0">{{ cart.length }}</span>
                      </div>
                      <div class="show-div cart-table">
                        <div class="cart-items">
                          <div v-for="(item, index) in cart" :key="index" class="cart-item"
                            :class="{ 'cart-item-added': item.added }">
                            <div>{{ item.title }} - R$ {{ item.price }}</div>
                            <div class="item-actions">
                              <button @click="decreaseQuantity(index)" class="btn-quantity">-</button>
                              <span>{{ item.quantity }}</span>
                              <button @click="increaseQuantity(index)" class="btn-quantity">+</button>
                              <button @click="removeFromCart(index)" class="btn-remove">Remover</button>
                            </div>
                          </div>
                          <div v-if="cart.length === 0" class="empty-cart">Seu carrinho está vazio!</div>
                          <div v-if="cart.length > 0" class="cart-total">
                            Total: R$ {{ cartTotal() }}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <EnVue @add-to-cart="addToCart" :search-query="searchQuery" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import EnVue from './en.vue';
  
  export default {
    name: 'MenuVue',
    components: {
      EnVue
    },
    data() {
      return {
        cart: [],
        searchQuery: ''
      };
    },
    methods: {
      addToCart(item) {
        const existingItem = this.cart.find(cartItem => cartItem.title === item.title);
        if (existingItem) {
          existingItem.quantity++;
          existingItem.added = true;
          setTimeout(() => {
            existingItem.added = false;
          }, 300);
        } else {
          const newItem = { ...item, quantity: 1, added: true };
          this.cart.push(newItem);
          setTimeout(() => {
            newItem.added = false;
          }, 300);
        }
      },
      removeFromCart(index) {
        this.cart.splice(index, 1);
      },
      increaseQuantity(index) {
        this.cart[index].quantity++;
      },
      decreaseQuantity(index) {
        if (this.cart[index].quantity > 1) {
          this.cart[index].quantity--;
        } else {
          this.removeFromCart(index);
        }
      },
      cartTotal() {
        let total = 0;
        this.cart.forEach(item => {
          const price = parseFloat(item.price);
          const quantity = parseInt(item.quantity);
          if (!isNaN(price) && !isNaN(quantity)) {
            total += price * quantity;
          }
        });
        console.log(`Total: ${total}`);
        return total.toFixed(2);
      }
    }
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
  