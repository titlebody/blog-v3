<script setup>

import {user} from '@/store/index.js'
import {storeToRefs} from "pinia";

let {users}= storeToRefs(user());

let userStore=user()




let addFun=()=>{
  userStore.setAge()
}





</script>

<template>
<div>
  {{userStore.age}}
  {{users}}
  <el-button @click="addFun">+1</el-button>
</div>
</template>

<style scoped>

</style>