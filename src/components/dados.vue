<template>
    <HomeVue />
    <div class="cadastro-cliente">
        <h2>Cadastro de Cliente</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="nome">Nome:</label>
                <input type="text" v-model="cliente.nome" id="nome" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="cliente.email" id="email" required />
            </div>
            <div>
                <label for="cep">CEP:</label>
                <input type="text" v-model="cliente.cep" id="cep" @blur="fetchAddress" required />
            </div>
            <div>
                <label for="rua">Rua:</label>
                <input type="text" v-model="cliente.rua" id="rua" required />
            </div>
            <div>
                <label for="cidade">Cidade:</label>
                <input type="text" v-model="cliente.cidade" id="cidade" required />
            </div>
            <div>
                <label for="estado">Estado:</label>
                <input type="text" v-model="cliente.estado" id="estado" required />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
</template>


<script>
import { mapMutations } from 'vuex';
import HomeVue from './Home.vue';

export default {
    name: 'dadosVue',
    data() {
        return {
            cliente: {
                nome: '',
                email: '',
                cep: '',
                rua: '',
                cidade: '',
                estado: ''
            }
        };
    },
    components: {
        HomeVue
    },
    methods: {
        ...mapMutations(['SET_FORM_DATA']),
        submitForm() {
            // Salva os dados do cliente e do carrinho no Vuex
            const formData = {
                cliente: this.cliente,
                cart: this.$store.getters.cartItems
            };
            this.SET_FORM_DATA(formData);


            this.$router.push({ name: 'resumo' });
        }
    }
};
</script>

<style scoped>
.cadastro-cliente {
    max-width: 500px;
    margin: 0 auto;
    color: white;
    border: 1px solid #ddd;
    border-radius: 15px;
}

.cadastro-cliente form div {
    margin-bottom: 1em;
    margin-left: 50px;
    margin-right: 50px;
}

.cadastro-cliente form label {
    display: block;
    margin-bottom: 0.5em;
}

.cadastro-cliente form input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
    border-radius: 13px;
}

.cadastro-cliente form button {
    width: 200px;
    background-color: transparent;
    color: #43ba5d;
    border: 1px solid #43ba5d;
    padding: 5px;
    margin: 0 150px;
    cursor: pointer;
    border-radius: 4px;
    font-family: "Nunito", sans-serif;

}

.cadastro-cliente form button:hover {
    background-color: #43ba5d;
    color: white;
    transition: 300ms linear;
}

h2 {
    margin-left: 50px;
    margin-right: 50px;
}
</style>