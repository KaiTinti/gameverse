<template>
    <div class="rating">
      <span
        v-for="star in 5"
        :key="star"
        class="star"
        @click="setRating(star)"
        @mouseover="hoverRating(star)"
        @mouseleave="hoverRating(0)"
        :class="{ active: star <= (hoverStar || value) }"
      >
        ★
      </span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RatingVue',
    props: {
      value: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        hoverStar: 0
      };
    },
    methods: {
      setRating(star) {
        this.$emit('input', star);
      },
      hoverRating(star) {
        this.hoverStar = star;
      }
    }
  };
  </script>
  
  <style scoped>
  .rating {
    display: flex;
    justify-content: center;
    
  }
  
  .star {
    font-size: 1.5em;
    color: #ffffff;
    cursor: pointer;
  }
  
  .star.active {
    color: #CA6BE5
  }
  </style>
  