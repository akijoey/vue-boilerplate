<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="logo" />
    <a href="https://vuejs.org">Vue</a>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Logo'
  })
</script>

<style lang="scss">
  @import './logo.scss';
</style>
