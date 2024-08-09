<script setup>
import {ref,onMounted,reactive,nextTick,onBeforeUnmount} from "vue";
import bg from '@/assets/images/home.jpg'


const staticTalkList=[
  {
    id:1,
    user_id:1,
    nick_name:"M",
    content:"要天天开心！",
    imageList:[bg,bg,bg]
  },
  {
    id:2,
    user_id:2,
    nick_name:"M",
    content:"要天天开心！",
    imageList:[bg,bg,bg]
  },
  {
    id:3,
    user_id:3,
    nick_name:"M",
    content:"要天天开心！",
    imageList:[bg,bg,bg]
  },
  {
    id:4,
    user_id:4,
    nick_name:"M",
    content:"要天天开心！",
    imageList:[bg,bg,bg]
  },
  {
    id:5,
    user_id:5,
    nick_name:"M",
    content:"要天天开心！",
    imageList:[bg]
  },
  {
    id:6,
    user_id:6,
    nick_name:"M",
    content:"要天天开心！",
    imageList:[bg,bg,bg]
  },
]

const talkList=ref([])
const page=reactive({
  // 当前页
  currentPage:1,
  // 每页显示条数
  pageSize:5
})
const getTalkList=()=>{
  //分到第几条
  let current=(page.currentPage-1)*page.pageSize
  //截取数据
  let sliceList=staticTalkList.slice(current,current+page.pageSize)
  //当前第一页时直接截取，第二页时追加与原始数据合并
  talkList.value=page.currentPage===1?sliceList:[...talkList.value,...sliceList]
  // 控制下拉还有，已经到底了
  if (talkList.value.length===staticTalkList.length){
    loadMore.value=false
  }
}



const initTalk=()=>{
  getTalkList()
  nextTick(()=>{
    observeTalk()
  })
}

onMounted(()=>{
  initTalk()
})


// 控制底部
const loadMore=ref(true)

let observeDom=null,observe=null;

// 滚动加载
const observeTalk=()=>{
  observeDom=document.querySelector('.observer')
  observe=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        // 重置当前页码，并获取数据，将当前页码+1
        page.currentPage++
        getTalkList()
      }
    })
  })
  observeDom && observe.observe(observeDom)
}

onBeforeUnmount(()=>{
  observe &&observe.unobserve(observeDom)
  observe=null

})
</script>

<template>
  <el-card>
    <div class="p-[40px]">
<!--      说说-->
      <div class="talk-item flex mb-[2rem] border-b pb-[2rem]" v-for="item in talkList" :key="item.id">
        <div class="left mr-[1rem]">
          <el-avatar :size="64" shape="square">{{item.nick_name}}</el-avatar>
        </div>
        <div class="right flex flex-col items-start">
          <div class="nick-name text-xl mb-[2rem]">{{item.nick_name}}</div>
          <div class="center mb-[1rem]">
            {{item.content}}
          </div>
          <div class="image grid grid-cols-3  gap-1" v-if="item.imageList.length > 1">
            <div class="images w-[100px] h-[100px] overflow-hidden" v-for="url in item.imageList">
              <el-image :src="url" class="w-[100%] h-[100%]" fit="cover"></el-image>
            </div>
          </div>
          <div v-else>
            <div class="images w-[308px] h-[308px] overflow-hidden">
              <el-image :src="item.imageList[0]" class="w-[100%] h-[100%]" fit="cover"></el-image>
            </div>
          </div>
        </div>
        <div> </div>
      </div>

      <div class="observer text-center">
        {{loadMore?"下拉更多":"已经到底了"}}
      </div>
    </div>
  </el-card>
</template>

<style scoped>

</style>