<template>
  <div class="store-page">
    <Sidebar @apply-filters="handleFilters" />
    <div class="store-container">
      <div class="card" v-for="(item, index) in filteredItems" :key="index">
        <img :src="item.image" :alt="item.title" class="card-image">
        <div class="card-content">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-description">{{ item.description }}</p>
          <div class="linha"></div>
          <p class="card-price">R${{ item.price }}</p>
          <rating :value="item.rating" @input="updateRating(index, $event)" />
          <button class="buy-button" @click="addToCart(item)">Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Rating from './Rating.vue';

export default {
  name: 'LojaVue',
  components: {
    Sidebar,
    Rating
  },
  data() {
    return {
      items: [
        {
          image: 'assets/counter-strike-2.jpg',
          title: 'Counter Strike 2',
          description: 'Um emocionante jogo de tiro em primeira pessoa, onde equipes competem em missões táticas.',
          price: '74.99',
          rating: 4,
          genre:'action'
        },
        {
          image: 'assets/genshin-impact.jpg',
          title: 'Genshin Impact',
          description: 'Um RPG de ação com um vasto mundo aberto, onde você explora e combate monstros.',
          price: '00.00',
          rating: 3,
          genre:'rpg'
        },
        {
          image: 'assets/hades.jpg',
          title: 'Hades',
          description: 'Um jogo de ação roguelike onde você tenta escapar do submundo, enfrentando diversos inimigos.',
          price: '74.99',
          rating: 5,
          genre:'rpg'
        },
        {
          image: 'assets/The_Last_of_Us_2.png',
          title: 'The Last Of Us 2',
          description: 'Um jogo de ação e aventura focado em uma narrativa intensa e emocionante em um mundo pós-apocalíptico.',
          price: '249.50',
          rating: 4,
          genre:'horror'
        },
        {
          image: 'assets/SM.jpg',
          title: 'SuperMarket Simulator',
          description: 'Um simulador divertido onde você gerencia um supermercado, atendendo clientes e estocando prateleiras.',
          price: '39.99',
          rating: 2,
          genre:'strategy'
        },
        {
          image: 'assets/sea.jpg',
          title: 'Sea of Thieves',
          description: 'Um jogo de aventura em mundo aberto, onde você vive a vida de um pirata, explorando e saqueando.',
          price: '149.00',
          rating: 4,
          genre:'adventure'
        },
        {
          image: 'assets/minecraft.jpeg',
          title: 'Minecraft',
          description: 'Um jogo sandbox onde você pode construir, explorar e sobreviver em mundos gerados aleatoriamente.',
          price: '75.00',
          rating: 5,
          genre:'adventure'
          
        },
        {
          image: 'assets/Knockout-City.jpg',
          title: 'Knockout City',
          description: 'Um jogo de ação multiplayer onde equipes competem em intensas batalhas de queimada.',
          price: '00.00',
          rating: 4,
          genre:'strategy'
        }
      ],
      filters: {
        genre: {
          action: false,
          adventure: false,
          rpg: false,
          strategy: false,
          horror: false
        },
        price: 'all',
        rating: 'all'
      }
    };
  },
  computed: {
    filteredItems() {
      let filtered = this.items;

      // Filtro de busca
      if (this.filters.searchQuery) {
        const query = this.filters.searchQuery.toLowerCase();
        filtered = filtered.filter(item => item.title.toLowerCase().includes(query));
      }

      // Filtro por Gênero
      const selectedGenres = Object.keys(this.filters.genre).filter(key => this.filters.genre[key]);
      if (selectedGenres.length > 0) {
        filtered = filtered.filter(item => selectedGenres.includes(item.genre));
      }

      // Filtro por Preço
      if (this.filters.price !== 'all') {
        filtered = filtered.filter(item => {
          const price = parseFloat(item.price);
          switch (this.filters.price) {
            case '0-50':
              return price >= 0 && price <= 50;
            case '50-100':
              return price > 50 && price <= 100;
            case '100-200':
              return price > 100 && price <= 200;
            case '200':
              return price > 200;
          }
        });
      }

      // Filtro por Classificação
      if (this.filters.rating !== 'all') {
        filtered = filtered.filter(item => item.rating >= parseInt(this.filters.rating));
      }

      return filtered;
    }
  },
  methods: {
    updateRating(index, value) {
      this.items[index].rating = value;
    },
    addToCart(item) {
      this.$emit('add-to-cart', item);
    },
    handleFilters(newFilters) {
      this.filters = newFilters;
    }
  }
}
</script>

<style scoped>
.store-page {
  display: flex;
}

.store-container {
  background-color: #030821;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16px;
  padding: 20px;
  font-family: "Bebas Neue", sans-serif;
}

.card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  background-color: #030821;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.5);
  transition: 200ms linear; 
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 2.0em;
  margin: 0 0 10px;
  color: white;
}

.card-description {
  font-size: 1em;
  color: #666;
  margin: 0 0 10px;

}

.card-price {
  font-size: 1.5em;
  color: #C1FF72;
  font-weight: bold;
}

.rating {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.star {
  font-size: 1.5em;
  color: #C1FF72;
  cursor: pointer;
}

.buy-button {
  background-color: #CA6BE5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 90px;
}

.buy-button:hover {
  background-color: #B258D6;
  transition: 200ms linear; 
}
.linha{
  background-color: white;
  width: 265px;
  height: 2px;
}
</style>
