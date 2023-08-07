<script setup lang="ts">
import HeaderCom from '@/components/HeaderCom.vue'
import FooterCom from '@/components/FooterCom.vue'
</script>

<template>
  <div class="app">
    <HeaderCom></HeaderCom>
    <RouterView />
    <FooterCom></FooterCom>
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
