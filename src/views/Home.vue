<script setup>
import bg from "@/assets/images/home.jpg"
import IonCalendarOutline from '~icons/ion/calendar-outline';
import PhClockLight from '~icons/ph/clock-light';
import MingcuteClassify2Line from '~icons/mingcute/classify-2-line';
import PajamasLabel from '~icons/pajamas/label';
import PhThumbsUpBold from '~icons/ph/thumbs-up-bold';
import HugeiconsView from '~icons/hugeicons/view';
import {ref,onMounted,reactive,watch} from 'vue'
import SimpleIconsTencentqq from '~icons/simple-icons/tencentqq';
import SimpleIconsWechat from '~icons/simple-icons/wechat';
import SimpleIconsBilibili from '~icons/simple-icons/bilibili';
import SimpleIconsGithub from '~icons/simple-icons/github';
import LucideBell from '~icons/lucide/bell';
import IconParkOutlineAnnouncement from '~icons/icon-park-outline/announcement';
import {useRouter} from "vue-router";

const articleList=ref([])

const params=reactive({
  currentPage:1,
  pageSize:5,
})

const staticArticleList=[
  {
    id:1,
    title:"这是一个标题",
    desc:"记录一下啊",
    cover:bg,
    createTime:"2023-5-14 17:00:00",
    updateTime:"2023-5-14 17:00:00",
    views:"1w",
    likes:100,
    tags:["Vue","js"],
    category:"博客部署",
  },
  {
    id:2,
    title:"这是一个标题",
    desc:"记录一下啊",
    cover:bg,
    createTime:"2023-5-14 17:00:00",
    updateTime:"2023-5-14 17:00:00",
    views:"1w",
    likes:100,
    tags:["Vue","js"],
    category:"博客部署",
  },
  {
    id:3,
    title:"这是一个标题",
    desc:"记录一下啊",
    cover:bg,
    createTime:"2023-5-14 17:00:00",
    updateTime:"2023-5-14 17:00:00",
    views:"1w",
    likes:100,
    tags:["Vue","js"],
    category:"博客部署",
  },
  {
    id:4,
    title:"这是一个标题",
    desc:"记录一下啊",
    cover:bg,
    createTime:"2023-5-14 17:00:00",
    updateTime:"2023-5-14 17:00:00",
    views:"1w",
    likes:100,
    tags:["Vue","js"],
    category:"博客部署",
  },
  {
    id:5,
    title:"这是一个标题",
    desc:"记录一下啊",
    cover:bg,
    createTime:"2023-5-14 17:00:00",
    updateTime:"2023-5-14 17:00:00",
    views:"1w",
    likes:1010,
    tags:["Vue","js"],
    category:"博客部署",
  },
  {
    id:6,
    title:"这是一个标题",
    desc:"记录一下啊1",
    cover:bg,
    createTime:"2023-5-14 17:00:00",
    updateTime:"2023-5-14 17:00:00",
    views:"111w",
    likes:100,
    tags:["Vue","js1"],
    category:"博客部署",
  },
]

const getArticleList=()=>{
  let current =(params.currentPage-1)*params.pageSize
  articleList.value=staticArticleList.slice(current,current+params.pageSize)
}

onMounted(() => {
  getArticleList()
})

const tagList=["Vue","Js","Go","Node","Npm","Vite","Vue","Js","Go","Node","Npm","Vite",];

let router =useRouter()
let Article=(id)=>{
  router.push({
    path:'/Article',
    query:{
      id
    }
  })
}



</script>

<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <el-card class="mb-[1.2rem]" v-for="article in articleList" :key="article.id" shadow="always" @click="Article(article.id)">
        <div class="article-item w-[100%] h-[16rem] flex">
          <div class="article-cover w-[45%] h-[100%] overflow-hidden">
            <el-image :src="article.cover" class="w-[100%] h-[100%] duration-300 hover:scale-125" fit="cover"></el-image>
          </div>
          <div class="side w-[55%] h-[100%] flex flex-col justify-center pl-[1.2rem]">
            <div class="title text-3xl mb-5">{{article.title}}</div>
            <div class="author info text-md mb-3 flex-wrap items-center flex">
              <div class="item me-[0.9rem] flex items-center">
                <IonCalendarOutline class="mr-[0.3rem]" ></IonCalendarOutline>
                <span>{{article.createTime}}</span>
              </div>
              <div class="item me-[0.3rem] flex items-center">
                <PhClockLight class="mr-[0.3rem]" ></PhClockLight>
                <span class="mr-[0.3rem]">{{article.updateTime}}</span>
              </div>
              <br>
              <div class="item me-[0.3rem] flex items-center">
                <MingcuteClassify2Line class="mr-[0.3rem]" ></MingcuteClassify2Line>
                <span class="mr-[0.3rem]">{{article.category}}</span>|
              </div>
              <div class="item me-[0.3rem] flex items-center">
                <PajamasLabel class="mr-[0.3rem]" ></PajamasLabel>
                <span class="mr-[0.3rem]">{{article.tags.join('，')}}</span>|
              </div>
              <div class="item me-[0.3rem] flex items-center">
                <PhThumbsUpBold class="mr-[0.3rem]" ></PhThumbsUpBold>
                <span class="mr-[0.3rem]">{{article.likes}}</span>|
              </div>
              <div class="item me-[0.3rem] flex items-center">
                <HugeiconsView class="mr-[0.3rem]" ></HugeiconsView>
                <span class="mr-[0.3rem]">{{article.views}}</span>
              </div>
            </div>
            <div class="content text-xl w-[100%] overflow-hidden text-ellipsis whitespace-nowrap">
              {{article.desc}}
            </div>

          </div>

        </div>
      </el-card>
      <div class="flex justify-center items-center ">
        <el-pagination v-model:current-page="params.currentPage" background layout="prev, pager, next" :total="staticArticleList.length"
                       :page-size="params.pageSize"
                       @change="getArticleList"
        />
      </div>
    </el-col>
    <el-col :span="8">
      <el-card class="mb-[1.2rem]" >
        <div class="banner w-[100%] h-[8rem]">
          <el-image class="w-[100%] h-[100%]" fit="cover" :src="bg"></el-image>
        </div>
        <div class="info-box flex p-[5px] items-center  mb-[0.5rem]  ml-[0.8rem]">
          <el-avatar :size="48" class="mr-[5px]">M</el-avatar>
          <div>个人博客</div>
        </div>
        <div class="p-[0.5rem] text-sm">为什么每天不能睡25个小时</div>
        <div class="sort flex justify-around items-center p-[20px]">
          <div class="item">
            <div class="text-center">文章</div>
            <div class="text-center">20</div>
          </div>
          <div class="item">
            <div class="text-center">分类</div>
            <div class="text-center">20</div>
          </div>
          <div class="item">
            <div class="text-center">标签</div>
            <div class="text-center">20</div>
          </div>
        </div>
        <div class="sort flex justify-around items-center p-[20px]">
          <div class="item">
            <SimpleIconsTencentqq class=" w-[1.8rem] h-[1.8rem]"></SimpleIconsTencentqq>
          </div>
          <div class="item">
            <SimpleIconsWechat  class=" w-[1.8rem] h-[1.8rem]"></SimpleIconsWechat>
          </div>
          <div class="item">
            <SimpleIconsBilibili  class=" w-[1.8rem] h-[1.8rem]"></SimpleIconsBilibili>
          </div>
          <div class="item">
            <SimpleIconsGithub class=" w-[1.8rem] h-[1.8rem]"></SimpleIconsGithub>
          </div>
        </div>
      </el-card>
      <el-card class="mb-[1.2rem]">
        <template #header>
          <div class="text-xl font-bold flex items-center"><LucideBell class="mr-[0.4rem]"></LucideBell>公告</div>
        </template>
        <div class="p-[1rem]">
          你好，我有一个博客
        </div>
      </el-card>
      <el-card class="mb-[1.2rem]">
        <template #header>
          <div  class="text-xl font-bold flex items-center"><PajamasLabel class="mr-[0.4rem]"></PajamasLabel>标签</div>
        </template>
        <div class="flex items-center p-[1rem] flex-wrap ">
          <div class="px-[0.3rem] py-[0.1rem] bg-blue-300 mr-[0.2rem] mb-[0.1rem] rounded-md" v-for="item in tagList" :key="item">
            {{item}}
          </div>
        </div>

      </el-card>
      <el-card class="mb-[1.2rem]">
        <template #header>
          <div  class="text-xl font-bold flex items-center"><IconParkOutlineAnnouncement class="mr-[0.4rem]"></IconParkOutlineAnnouncement>网站资讯</div>
        </template>
        <div class="flex items-center p-[1rem] flex-wrap justify-center ">
          <div class="item flex items-center p-[0.2rem] w-[100%] justify-between">
            <div class="text-md">文章数目：</div>
            <div class="text-md">20</div>
          </div>
          <div class="item flex items-center p-[0.2rem] w-[100%] justify-between">
            <div class="text-md">运行时间：</div>
            <div class="text-md">20天</div>
          </div>
          <div class="item flex items-center p-[0.2rem] w-[100%] justify-between">
            <div class="text-md">博客访问次数：</div>
            <div class="text-md">20w</div>
          </div>
        </div>

      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped lang="scss">

</style>
