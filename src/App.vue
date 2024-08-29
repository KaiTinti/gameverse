<template>
  <div :class="theme">
    <router-view />
    <button class="mode" @click="toggleTheme">{{ theme === 'dark' ? 'Light Mode' : 'Dark Mode' }}</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      theme: 'dark',
    };
  },
  provide() {
    return {
      theme: this.theme,
      toggleTheme: this.toggleTheme,
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      document.body.className = this.theme;
    },
  },
  mounted() {
    document.body.className = this.theme;
  }
}
</script>

<style>
body {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  transition: background-color 0.3s ease;
}

.dark {
  background-color: #030821;
  color: #e4e4e4;
}

.light {
  background-color: #e4e4e4;
  color: #030821;
}

.mode {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
