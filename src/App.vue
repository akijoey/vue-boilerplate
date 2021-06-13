<template>
  <div id="app">
    <Logo />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Logo from './components/logo.vue'
  export default defineComponent({
    name: 'App',
    components: {
      Logo
    }
  })
</script>

<style lang="scss">
  #app {
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
  }
</style>
