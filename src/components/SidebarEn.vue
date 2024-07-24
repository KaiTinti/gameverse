<template>
  <div class="sidebar">
    <h2>Filters</h2>

    <!-- Filter by Name -->
    <div class="filter-section">
      <h3>Name</h3>
      <form class="form-search" role="form" @submit.prevent="search">
        <input
          type="search"
          class="nav-search-field"
          placeholder="Search your favorite game..."
          v-model="searchQuery"
        />
      </form>
    </div>

    <!-- Filter by Genre -->
    <div class="filter-section">
      <h3>Genre</h3>
      <label class="checkbox-label">
        <input type="checkbox" v-model="filters.genre.action">
        <span class="checkbox-custom"></span>
        Action
      </label>
      <label class="checkbox-label">
        <input type="checkbox" v-model="filters.genre.adventure">
        <span class="checkbox-custom"></span>
        Adventure
      </label>
      <label class="checkbox-label">
        <input type="checkbox" v-model="filters.genre.rpg">
        <span class="checkbox-custom"></span>
        RPG
      </label>
      <label class="checkbox-label">
        <input type="checkbox" v-model="filters.genre.strategy">
        <span class="checkbox-custom"></span>
        Strategy
      </label>
      <label class="checkbox-label">
        <input type="checkbox" v-model="filters.genre.horror">
        <span class="checkbox-custom"></span>
        Horror
      </label>
    </div>

    <!-- Filter by Price -->
    <div class="filter-section">
      <h3>Price</h3>
      <label class="radio-label">
        <input type="radio" v-model="filters.price" value="all">
        <span class="radio-custom"></span>
        All
      </label>
      <label class="radio-label">
        <input type="radio" v-model="filters.price" value="0-50">
        <span class="radio-custom"></span>
        $0 - $50
      </label>
      <label class="radio-label">
        <input type="radio" v-model="filters.price" value="50-100">
        <span class="radio-custom"></span>
        $50 - $100
      </label>
      <label class="radio-label">
        <input type="radio" v-model="filters.price" value="100-200">
        <span class="radio-custom"></span>
        $100 - $200
      </label>
      <label class="radio-label">
        <input type="radio" v-model="filters.price" value="200">
        <span class="radio-custom"></span>
        Above $200
      </label>
    </div>

    <!-- Filter by Rating -->
    <div class="filter-section">
      <h3>Rating</h3>
      <label class="radio-label">
        <input type="radio" v-model="filters.rating" value="all">
        <span class="radio-custom"></span>
        All
      </label>
      <label class="radio-label">
        <input type="radio" v-model="filters.rating" value="4">
        <span class="radio-custom"></span>
        4 stars or more
      </label>
      <label class="radio-label">
        <input type="radio" v-model="filters.rating" value="3">
        <span class="radio-custom"></span>
        3 stars or more
      </label>
      <label class="radio-label">
        <input type="radio" v-model="filters.rating" value="2">
        <span class="radio-custom"></span>
        2 stars or more
      </label>
      <label class="radio-label">
        <input type="radio" v-model="filters.rating" value="1">
        <span class="radio-custom"></span>
        1 star or more
      </label>
    </div>

    <button @click="applyFilters">Apply Filters</button>
  </div>
</template>

<script>
export default {
  name: 'SideEnVue',
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
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox-custom {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 2px solid #B258D6;
  border-radius: 3px;
  background-color: #B258D6;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

input[type="checkbox"]:checked + .checkbox-custom {
  background-color: white;
}

input[type="checkbox"]:checked + .checkbox-custom::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 14px;
  border: solid #B258D6;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  transform: translate(-50%, -50%);
}

.radio-custom {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 2px solid #B258D6;
  border-radius: 50%;
  background-color: #B258D6;
  transition: background-color 0.2s ease;
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

input[type="radio"]:checked + .radio-custom {
  background-color: white;
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

.nav-search-field {
  border: none;
  border-radius: 2px;
  height: 25px;
}
</style>
