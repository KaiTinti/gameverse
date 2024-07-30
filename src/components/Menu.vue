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
                      <router-link to="/menuen" class="navbar-item">English<router-link /></router-link>
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
                          <div class="cart-item-content">
                            <img :src="item.image" alt="Item Image" class="cart-item-image">
                            <div class="cart-item-details">
                              <div class="titulo">{{ item.title }}</div>
                              <div class="linha"></div>
                              <div class="preco">R$ {{ item.price }}</div>
                              <div class="item-actions">
                                <button @click="decreaseQuantity(index)" class="btn-quantity">-</button>
                                <span>{{ item.quantity }}</span>
                                <button @click="increaseQuantity(index)" class="btn-quantity">+</button>
                                <button @click="removeFromCart(index)" class="btn-remove">Remover</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div v-if="cart.length === 0" class="empty-cart">Seu carrinho está vazio!</div>
                        <div v-if="cart.length > 0" class="cart-total">
                          <div class="linha"></div>
                          Total: R$ {{ cartTotal }}
                          <router-link :to="{ name: 'dados', query: { cart: JSON.stringify(cart) } }">
                            <button class="btn-buy">Concluir Pagamento</button>
                          </router-link>

                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <LojaVue @add-to-cart="addToCart" :search-query="searchQuery" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LojaVue from './Loja.vue';
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'MenuVue',
  components: {
    LojaVue
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  },
  methods: {
    ...mapMutations(['ADD_TO_CART', 'REMOVE_FROM_CART', 'INCREASE_QUANTITY', 'DECREASE_QUANTITY']),
    addToCart(item) {
      this.ADD_TO_CART(item);
    },
    removeFromCart(index) {
      this.REMOVE_FROM_CART(index);
    },
    increaseQuantity(index) {
      this.INCREASE_QUANTITY(index);
    },
    decreaseQuantity(index) {
      this.DECREASE_QUANTITY(index);
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
  color: white;
  width: 250px;
  text-align: center;
  background-color: #030821;
  font-weight: bold;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  border: 2px solid #ddd;
}

.cart-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.cart-item-content {
  display: flex;
  align-items: end;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  background-color: #030821;
  border-radius: 5px;
}

.cart-item-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}

.cart-item-details {
  flex: 1;
  text-align: center;
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
  background-color: transparent;
  color: white;
  border: 1px solid #ddd;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
}

.btn-buy {
  background-color: transparent;
  color: #43ba5d;
  border: 1px solid #43ba5d;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;
  font-family: "Nunito", sans-serif;
}

.btn-buy:hover {
  background-color: #43ba5d;
  color: white;
  transition: 300ms linear;
}

.btn-remove {
  background-color: transparent;
  color: red;
  border: 1px solid red;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-family: "Nunito", sans-serif;
}

.btn-remove:hover {
  background-color: red;
  color: white;
  transition: 300ms linear;
}

.empty-cart {
  font-style: italic;
}

.cart-total {
  margin-top: 10px;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  padding: 10px;
  background-color: #030821;
  border-radius: 5px;

}

.img-fluid:hover {
  filter: drop-shadow(1px 1px 20px white);
  transition: 300ms linear;
}

.preco {
  margin-top: 5px;
  margin-bottom: 5px;
}

.titulo {
  font-size: 18px;
  text-align: center;
}

.linha {
  background-color: #d3d3d3;
  width: 100%;
  height: 2px;
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
