<script setup>
import pageBanner from '@/components/page-banner/index.vue'

</script>

<template>
  <div class="main-container">
    <pageBanner></pageBanner>
    <div class="max-w-[1280px] mx-auto ">
      <router-view></router-view>
    </div>

  </div>

</template>

<style scoped lang="scss">

</style>