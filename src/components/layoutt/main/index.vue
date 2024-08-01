<script setup>
import pageBanner from '@/components/page-banner/index.vue'

</script>

<template>
  <div class="main-container">
    <pageBanner style="margin-bottom: 60px"></pageBanner>
    <div class="max-w-[1280px] mx-auto md:px-[40px] md:pt-[60px] px-[10px] pt-[60px] ">
      <router-view></router-view>
    </div>

  </div>

</template>

<style scoped lang="scss">

</style>