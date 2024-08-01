<script setup>
import bg from '@/assets/images/home.jpg'
import {reactive} from "vue";

const params=reactive({
  currentPage:1,
  pageSize:5,
})

const activities = [
  {
    id: 1,
    title: '博客部署',
    cover: bg,
    createTime: '2018-04-12 20:46',
  },
  {
    id: 2,
    title: '博客部署',
    cover: bg,
    createTime: '2018-04-12 20:46',
  },
  {
    id: 3,
    title: '博客部署',
    cover: bg,
    createTime: '2018-04-12 20:46',
  },
  {
    id: 4,
    title: '博客部署',
    cover: bg,
    createTime: '2018-04-12 20:46',
  },
  {
    id: 5,
    title: '博客部署',
    cover: bg,
    createTime: '2018-04-12 20:46',
  },

]

const getArticleList=()=>{
  let current =(params.currentPage-1)*params.pageSize
  articleList.value=staticArticleList.slice(current,current+params.pageSize)
}
</script>

<template>
  <el-card>
    <div class="max-w-[800px] p-[40px]" >
      <el-timeline style="max-width: 600px">
        <el-timeline-item
            v-for="(activity, index) in activities"
            :key="activity.id"
            :center="true"
        >
          <div class="flex items-center">
            <div class="w-[6rem] h-[6rem] overflow-hidden ">
              <el-image :src="activity.cover" class="duration-300 hover:scale-110 w-[100%] h-[100%]">
              </el-image>
            </div>
            <div class="ml-[2rem]">
              <div class="text-2xl">{{activity.title}}</div>
              <div>{{activity.createTime}}</div>

            </div>
          </div>



        </el-timeline-item>

      </el-timeline>
      <div class="flex justify-center items-center ">
        <el-pagination v-model:current-page="params.currentPage" background layout="prev, pager, next" :total="activities.length"
                       :page-size="params.pageSize"
                       @change="getArticleList"
        />
      </div>
    </div>

  </el-card>

</template>

<style scoped>

</style>