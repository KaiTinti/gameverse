<template>
    <div class="sidebar">
      <h2>Filtros</h2>
  
      <!-- Filtro por Nome -->
      <div class="filter-section">
        <h3>Nome</h3>
        <form class="form-search" role="form" @submit.prevent="search">
          <input
            type="search"
            class="nav-search-field"
            placeholder="Pesquise seu jogo favorito..."
            v-model="searchQuery"
          />
        </form>
      </div>
  
      <!-- Filtro por Gênero -->
      <div class="filter-section">
        <h3>Gênero</h3>
        <label>
          <input type="checkbox" v-model="filters.genre.action">
          Ação
        </label>
        <label>
          <input type="checkbox" v-model="filters.genre.adventure">
          Aventura
        </label>
        <label>
          <input type="checkbox" v-model="filters.genre.rpg">
          RPG
        </label>
        <label>
          <input type="checkbox" v-model="filters.genre.strategy">
          Estratégia
        </label>
        <label>
          <input type="checkbox" v-model="filters.genre.horror">
          Terror
        </label>
      </div>
  
      <!-- Filtro por Preço -->
      <div class="filter-section">
        <h3>Preço</h3>
        <label>
          <input type="radio" v-model="filters.price" value="all">
          Todos
        </label>
        <label>
          <input type="radio" v-model="filters.price" value="0-50">
          R$0 - R$50
        </label>
        <label>
          <input type="radio" v-model="filters.price" value="50-100">
          R$50 - R$100
        </label>
        <label>
          <input type="radio" v-model="filters.price" value="100-200">
          R$100 - R$200
        </label>
        <label>
          <input type="radio" v-model="filters.price" value="200">
          Acima de R$200
        </label>
      </div>
  
      <!-- Filtro por Classificação -->
      <div class="filter-section">
        <h3>Classificação</h3>
        <label>
          <input type="radio" v-model="filters.rating" value="all">
          Todos
        </label>
        <label>
          <input type="radio" v-model="filters.rating" value="4">
          4 estrelas ou mais
        </label>
        <label>
          <input type="radio" v-model="filters.rating" value="3">
          3 estrelas ou mais
        </label>
        <label>
          <input type="radio" v-model="filters.rating" value="2">
          2 estrelas ou mais
        </label>
        <label>
          <input type="radio" v-model="filters.rating" value="1">
          1 estrela ou mais
        </label>
      </div>
  
      <button @click="applyFilters">Aplicar Filtros</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideVue',
    data() {
      return {
        searchQuery: '',
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
      }
    },
    methods: {
      applyFilters() {
        const filtersWithSearch = { ...this.filters, searchQuery: this.searchQuery };
        this.$emit('apply-filters', filtersWithSearch);
      },
      search() {
        this.applyFilters(); // Apply filters when submitting the search form
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #030821;
    color: white;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
  
  .filter-section {
    margin-bottom: 20px;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  h3 {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #CA6BE5;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #B258D6;
    transition: 200ms linear; 
  }

  .nav-search-field{
    border: none;
    border-radius: 2px;
    height: 25px;
  }
  </style>
  