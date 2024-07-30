<template>
    <HomeVue />
    <div class="pagamento-container">
        <h1>Resumo da Compra</h1>
        <div v-if="cart.length > 0">
            <h2>Informações do Cliente</h2>
            <span class="material-symbols-outlined seta-baixo" @click="toggleClienteInfo">
                keyboard_arrow_down
            </span>
            <transition name="slide-fade">
                <div v-if="showClienteInfo" class="cliente-info">
                    <p><strong>Nome:</strong> {{ formData.cliente.nome }}</p>
                    <p><strong>Email:</strong> {{ formData.cliente.email }}</p>
                    <p><strong>CEP:</strong> {{ formData.cliente.cep }}</p>
                    <p><strong>Rua:</strong> {{ formData.cliente.rua }}</p>
                    <p><strong>Cidade:</strong> {{ formData.cliente.cidade }}</p>
                    <p><strong>Estado:</strong> {{ formData.cliente.estado }}</p>
                </div>
            </transition>
            <h2>Itens do Carrinho</h2>
            <div v-for="(item, index) in cart" :key="index" class="cart-item">
                <img :src="item.image" alt="Item Image" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="titulo">{{ item.title }}</div>
                    <div class="preco">R$ {{ item.price }}</div>
                    <div class="quantidade">Quantidade: {{ item.quantity }}</div>
                </div>
            </div>
            <div class="cart-total">
                Total: R$ {{ cartTotal }}
            </div>
            <button class="btn-confirm" @click="confirmarPagamento">Confirmar Pagamento</button>
        </div>
        <div v-else>
            Seu carrinho está vazio!
        </div>
        <router-link to="/dados">
            <span class="material-symbols-outlined seta">arrow_back</span>
        </router-link>
    </div>
    <div v-if="loading" class="loader-overlay">
        <div class="loader"></div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import HomeVue from './Home.vue';

export default {
    name: 'resumoVue',
    data() {
        return {
            showClienteInfo: false,
            loading: false
        };
    },
    computed: {
        ...mapState(['formData']),
        ...mapGetters(['cartTotal']),
        cart() {
            return this.formData ? this.formData.cart : [];
        }
    },
    methods: {
        toggleClienteInfo() {
            this.showClienteInfo = !this.showClienteInfo;
        },
        confirmarPagamento() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.$router.push('/inicio');
            }, 2000);
        }
    },
    components: {
        HomeVue
    }
};
</script>

<style scoped>
.pagamento-container {
    max-width: 50%;
    margin: 0 auto;
    padding: 20px;
    background-color: #030821;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    color: #ddd;
    overflow-x: hidden;
}

.cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    flex-wrap: wrap;
}

.cart-item-image {
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-right: 10px;
}

.cart-item-details {
    flex: 1;
    min-width: 200px;
}

.cart-total {
    font-weight: bold;
    margin-top: 20px;
    text-align: right;
    width: 100%;
}

.btn-confirm {
    background-color: transparent;
    color: #43ba5d;
    border: 1px solid #43ba5d;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    display: block;
    margin: 20px auto;
    font-family: "Nunito", sans-serif;
}

.btn-confirm:hover {
    background-color: #43ba5d;
    color: white;
    transition: 300ms linear;
}

.seta {
    color: #CA6BE5;
    cursor: pointer;
}

.cliente-info {
    margin-bottom: 20px;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

.seta-baixo {
    cursor: pointer;
}

h2{
    font-size: 18px;
}

.loader {
    width: 120px;
    height: 22px;
    border-radius: 20px;
    color: #C1FF72;
    border: 2px solid;
    position: relative;
}

.loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
}

@keyframes l6 {
    100% {inset:0}
}

.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}
</style>
