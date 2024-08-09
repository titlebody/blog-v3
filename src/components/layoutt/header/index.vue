<script setup>
import BiCodeSlash from '~icons/bi/code-slash';
import {defineAsyncComponent,ref} from 'vue'
import {useRouter} from "vue-router";
import {configStore} from "@/store/index.js";
import {storeToRefs} from "pinia";
import container from '@/components/widgets/container.vue'

const {getIsDark}=storeToRefs(configStore())
const isDark = ref(getIsDark.value)


const mentsList=[
  {
    title:"首页",
    icon:defineAsyncComponent(()=>import ('~icons/bi/house-door')),
    path:"/home",
    children:[]
  },
  {
    title:"时间轴",
    icon:defineAsyncComponent(()=>import ('~icons/carbon/time')),
    path:"/archive",
    children:[]
  },
  {
    title:"说说",
    icon:defineAsyncComponent(()=>import ('~icons/bi/chat-dots')),
    path:"/talk",
    children:[]
  },
  {
    title:"更多",
    icon:defineAsyncComponent(()=>import ('~icons/icon-park-outline/geometric-flowers')),
    path:"/more",
    children:[
      {
        title:"关于我",
        icon:defineAsyncComponent(()=>import ('~icons/bi/emoji-sunglasses')),
        path:"/more/about"
      }
    ]
  },
]
const router =useRouter()
function handleSelect(path){
  console.log(path)
  if (path){
    router.push(path)
  }
}



</script>

<template>
  <div class="header-container">
    <div class="left">
      <BiCodeSlash class="logo"></BiCodeSlash>
    </div>
    <div class="right">
      <el-menu
          :ellipsis="false"
          class="el-menu-popper-demo"
          mode="horizontal"
          style="max-width: 600px"
          @select="handleSelect"
          menu-trigger="click"
      >
        <div v-for="menu in mentsList" :key="menu.path">
          <el-sub-menu :index="menu.path" v-if="menu.children.length">
            <template #title>
              <component :is="menu.icon" class="menuIcon"></component>
              {{menu.title}}
            </template>
            <el-menu-item :index="men.path" v-for="men in menu.children" style="background: transparent">
              <component :is="men.icon" class="menuIcon !text-black"></component>
              <span class="!text-black"> {{men.title}}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item :index="menu.path" v-else>
            <component :is="menu.icon" class="menuIcon"></component>
            <span>{{menu.title}}</span>
          </el-menu-item>
        </div>
      </el-menu>
      <el-avatar>M</el-avatar>
      <container class="ml-[2rem]"></container>
    </div>
  </div>

</template>

<style scoped lang="scss">
.header-container{
  display: flex;
  align-items: center;
  .left{
    display: flex;
    align-items: center;
    width: 20%;
    .title{
      margin-left: 30px;
    }
    .logo{
      width: 3rem;
      height: 3rem;
      transition: all 0.3s;
    }
    .logo:hover{
      transform: rotate(180deg);
    }

  }
  .right{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    margin-right: 100px;
  }
}
.menuIcon{
  margin-right: 0.5rem;
  font-size: 1rem;
  width: 16px;
  height: 16px;
}
.el-menu-item{
  background: transparent !important;
}

</style>