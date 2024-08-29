<template>
  <div :class="theme">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="main-menu border-section border-top-0">
            <div class="brand-logo">
              <router-link to="/inicio">
                <img :src="theme === 'dark' ? '/assets/GameverseLogo.png' : '/assets/GameverseLogoLight.png'" class="img-fluid" alt="logo">
              </router-link>
            </div>
            <router-link to="/menu" class="navbar-item">Loja</router-link>

            <!-- Adicionando o ícone aqui -->
            <div class="upload-section">
              <img ref="icon" class="icone" @click="toggleMenu" alt="icone">
              <!-- Menu de upload e seleção de cor -->
              <div v-if="showMenu" class="menu-dropdown">
                <form>
                  <input type="file" name="file" id="file" @change="updateImage">
                  <label for="file">Select a file...</label>
                  <input type="color" id="colorPicker" @input="updateBorderColor">
                </form>
              </div>
            </div>
          </div>
          <button @click="toggleTheme" class="theme-toggle">
            {{ theme === 'dark' ? 'Light Mode' : 'Dark Mode' }}
          </button>
          
          <div class="fundo">
            <img :src="theme === 'dark' ? '/assets/fundo.jpg' : '/assets/fundo.jpg'" class="img-fundo" alt="fundo">
          </div>
          <carrossel-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarrosselView from './carrossel.vue';

export default {
  name: 'InicioVue',
  components: {
    CarrosselView
  },
  inject: ['theme', 'toggleTheme'],
  data() {
    return {
      showMenu: false,
      image: null
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    updateImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.image = URL.createObjectURL(file);
        this.$refs.icon.src = this.image;
      }
    },
    updateBorderColor(event) {
      this.$refs.icon.style.borderColor = event.target.value;
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
  position: relative; /* Necessário para posicionar o menu-dropdown */
}

.brand-logo img {
  max-height: 100px;
}

.navbar-item {
  padding-left: 50px;
  text-decoration: none;
  color: #C1FF72;
  font-weight: bold;
}

.img-fluid:hover {
  filter: drop-shadow(1px 1px 20px white);
  transition: 300ms linear;
}

.img-fundo {
  width: 100%;
  height: 500px;
  mask-image: linear-gradient(to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0));
}

.dark .container {
  background-color: #030821;
  transition: 300ms linear;
}

.light .container {
  background-color: #eccfff;
  transition: 300ms linear;
}

.light .navbar-item {
  color: #030821;
}

.light .img-fluid:hover {
  filter: drop-shadow(1px 1px 20px black);
  transition: 300ms linear;
}

.theme-toggle {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

/* Estilo da seção de upload */
.upload-section {
  margin-left: 400px;
  position: relative; /* Necessário para o menu-dropdown */
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.upload-section img {
  margin-left: 20px;
  width: 80px; /* Tamanho fixo */
  height: 80px; /* Tamanho fixo */
  object-fit: cover; /* Garante que a imagem não distorça */
}

.icone {
  border-radius: 100%;
  border: 3px solid white;
  cursor: pointer;
}

.menu-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000; /* Garante que o menu fica acima de outros elementos */
}
</style>
