<script setup>

import {defineProps} from 'vue'
import EosIconsBubbleLoading from '~icons/eos-icons/bubble-loading';
import FluentMdl2Error from '~icons/fluent-mdl2/error';

defineProps({
  src: {
    type: String,
    default:''
  },
  lazy: {
    type: Boolean,
    default: true
  },
  fit:{
    type:String,
    default:"cover"
  },
  animate:{
    type:Boolean,
    default:false
  }
})



</script>

<template>
  <el-image :class="['w-[100%]','h-[100%]',animate?'duration-300 hover:scale-110':'']" :src="src" lazy :fit="fit" v-bind="$attrs">
    <template #placeholder>
      <div class="w-[100%] h-[100%] grid place-items-center">
        <EosIconsBubbleLoading class="w-[2rem] h-[2rem]"></EosIconsBubbleLoading>
      </div>
    </template>
    <template #error>
      <div class="w-[100%] h-[100%] grid place-items-center">
        <FluentMdl2Error class="w-[2rem] h-[2rem]"></FluentMdl2Error>
      </div>
    </template>
  </el-image>

</template>

<style scoped>

</style>