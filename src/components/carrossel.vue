<template>
    <div>
      <div class="wrapper" @mouseenter="pauseAnimation" @mouseleave="resumeAnimation">
        <div class="item item1"><router-link to="/inicio">
            <img src="/assets/GameverseLogo.png" class="img-fluid" alt="logo">
          </router-link></div>
        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>
        <div class="item item5"></div>
        <div class="item item6"></div>
        <div class="item item7"></div>
        <div class="item item8"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarrosselView',
    methods: {
      pauseAnimation() {
        document.querySelector('.wrapper').classList.add('paused');
      },
      resumeAnimation() {
        document.querySelector('.wrapper').classList.remove('paused');
      }
    }
  }
  </script>
  
  
  <style scoped>
  .wrapper {
    width: 90%;
    max-width: 1536px;
    margin-inline: auto;
    position: relative;
    height: 110px;
    margin-top: 5rem;
    overflow: hidden;
    mask-image: linear-gradient(to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1) 20%,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0));
  }
  
  @keyframes scrollleft {
    to {
      left: -200px;
    }
  }
  
  .item {
    width: 200px;
    height: 100px;
    background-color: transparent;
    border: 2px solid #CA6BE5;
    border-radius: 6px;
    position: absolute;
    left: max(calc(200px * 8), 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    animation-name: scrollleft;
    animation-duration: 30s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  
  .item:hover{
    border: 2px solid white;
    transition: 300ms linear;
  }

  .light .item{
  border: 2px solid #030821;
}
  
  
  .paused .item {
    animation-play-state: paused;
  }
  
  .item1 {
    animation-delay: calc(30s / 8 * (8 - 1) * -1);
  }
  
  .item2 {
    animation-delay: calc(30s / 8 * (8 - 2) * -1);
  }
  
  .item3 {
    animation-delay: calc(30s / 8 * (8 - 3) * -1);
  }
  
  .item4 {
    animation-delay: calc(30s / 8 * (8 - 4) * -1);
  }
  
  .item5 {
    animation-delay: calc(30s / 8 * (8 - 5) * -1);
  }
  
  .item6 {
    animation-delay: calc(30s / 8 * (8 - 6) * -1);
  }
  
  .item7 {
    animation-delay: calc(30s / 8 * (8 - 7) * -1);
  }
  
  .item8 {
    animation-delay: calc(30s / 8 * (8 - 8) * -1);
  }
  
  .img-fluid {
    width: 100%;
    height: auto;
  }
  </style>
  