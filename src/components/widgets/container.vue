<script setup>
import LineMdSunnyOutlineToMoonLoopTransition from '~icons/line-md/sunny-outline-to-moon-loop-transition?width=2rem&height=2rem';
import {storeToRefs} from "pinia";
import {configStore} from "@/store/index.js";
import {ref} from "vue";
const {getIsDark}=storeToRefs(configStore())
const isDark = ref(getIsDark.value)

const isCon=()=>{
  configStore().setToggleDark()
  isDark.value = getIsDark.value
}
</script>

<template>
  <span class="line-md--moon-to-sunny-outline-loop-transition" v-if="isDark"  @click="isCon"></span>
  <line-md-sunny-outline-to-moon-loop-transition v-else @click="isCon"></line-md-sunny-outline-to-moon-loop-transition>

</template>

<style scoped>
.line-md--moon-to-sunny-outline-loop-transition {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23f2b882' stroke-dasharray='2' stroke-dashoffset='2' stroke-linecap='round' stroke-width='2'%3E%3Cpath d='M0 0'%3E%3Canimate fill='freeze' attributeName='d' begin='1.2s' dur='0.2s' values='M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1.2s' dur='0.2s' values='2;0'/%3E%3C/path%3E%3Cpath d='M0 0'%3E%3Canimate fill='freeze' attributeName='d' begin='1.5s' dur='0.2s' values='M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'/%3E%3Canimate fill='freeze' attributeName='stroke-dashoffset' begin='1.5s' dur='1.2s' values='2;0'/%3E%3C/path%3E%3CanimateTransform attributeName='transform' dur='30s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'/%3E%3C/g%3E%3Cg fill='%23f2b882'%3E%3Cpath d='M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z'%3E%3Canimate fill='freeze' attributeName='fill-opacity' dur='0.4s' values='1;0'/%3E%3C/path%3E%3Cpath d='M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z'%3E%3Canimate fill='freeze' attributeName='fill-opacity' begin='0.2s' dur='0.4s' values='1;0'/%3E%3C/path%3E%3C/g%3E%3Cg fill='none' stroke='%23f2b882' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'/%3E%3Cset attributeName='opacity' begin='0.6s' to='0'/%3E%3C/g%3E%3Cmask id='lineMdMoonToSunnyOutlineLoopTransition0'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23fff'/%3E%3Ccircle cx='12' cy='12' r='8'%3E%3Canimate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='8;4'/%3E%3C/circle%3E%3Ccircle cx='18' cy='6' r='12' fill='%23fff'%3E%3Canimate fill='freeze' attributeName='cx' begin='0.6s' dur='0.4s' values='18;22'/%3E%3Canimate fill='freeze' attributeName='cy' begin='0.6s' dur='0.4s' values='6;2'/%3E%3Canimate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='12;3'/%3E%3C/circle%3E%3Ccircle cx='18' cy='6' r='10'%3E%3Canimate fill='freeze' attributeName='cx' begin='0.6s' dur='0.4s' values='18;22'/%3E%3Canimate fill='freeze' attributeName='cy' begin='0.6s' dur='0.4s' values='6;2'/%3E%3Canimate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='10;1'/%3E%3C/circle%3E%3C/mask%3E%3Ccircle cx='12' cy='12' r='10' fill='%23f2b882' mask='url(%23lineMdMoonToSunnyOutlineLoopTransition0)' opacity='0'%3E%3Cset attributeName='opacity' begin='0.6s' to='1'/%3E%3Canimate fill='freeze' attributeName='r' begin='0.6s' dur='0.4s' values='10;6'/%3E%3C/circle%3E%3C/svg%3E");
}


</style>