import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      cart: [],
      formData: {}  // Adicione um estado para armazenar os dados do formulário
    };
  },
  mutations: {
    ADD_TO_CART(state, item) {
      const existingItem = state.cart.find(cartItem => cartItem.title === item.title);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1);
    },
    INCREASE_QUANTITY(state, index) {
      state.cart[index].quantity++;
    },
    DECREASE_QUANTITY(state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      } else {
        state.cart.splice(index, 1);
      }
    },
    SET_FORM_DATA(state, formData) {
      state.formData = formData;
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0).toFixed(2);
    },
    cartItems(state) {
      return state.cart;
    },
    formData(state) {
      return state.formData;
    }
  }
});

export default store;
