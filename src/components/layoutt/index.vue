<script setup>
import Header from './header/index.vue'
import Footer from './footer/index.vue'
import Main from './main/index.vue'

</script>
<template>
  <div>
    <Header />
    <Main><router-view></router-view></Main>
    <Footer />
  </div>

</template>

<style scoped>

</style>