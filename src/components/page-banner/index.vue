<script setup>
import {useRoute} from "vue-router";
import homebanner from "@/assets/images/home.jpg";
import IconParkOutlineDown from '~icons/icon-park-outline/down';
import {ref,onMounted} from "vue";
import {articleStore} from "@/store/index.js";
import {storeToRefs} from "pinia";
import IonCalendarOutline from '~icons/ion/calendar-outline';
import PhClockLight from '~icons/ph/clock-light';
import MingcuteClassify2Line from '~icons/mingcute/classify-2-line';
import PajamasLabel from '~icons/pajamas/label';
import PhThumbsUpBold from '~icons/ph/thumbs-up-bold';
import HugeiconsView from '~icons/hugeicons/view';
import PhAirplayLight from '~icons/ph/airplay-light';


let {getArticle} =storeToRefs(articleStore())



let route = useRoute();
const showScroll=ref(true)

const scrollToBottom=()=>{
  const homeElment = document.querySelector("#home");
  if(homeElment){
    document.body.scrollTo({
      top:homeElment.clientHeight,
      behavior:"smooth"
    })
  }
}


const debounce = (func, delay) => {
  let debounceTimer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const handleScroll = () => {
  if (document.body.scrollTop > 100) {
    showScroll.value = false;
  } else {
    showScroll.value = true;
  }
};

const initScrollEvent = () => {
  document.body.addEventListener("scroll", debounce(handleScroll, 200));
};

onMounted(() => {
  initScrollEvent();
  console.log(getArticle.value)
});


</script>

<template>
  <div class="page-banner">
    <div class="home" v-if="route.path==='/home'" id="home">
        <el-image :src="homebanner" class="homebanner" fit="cover"></el-image>
      <div class="conter">
        <div class="title">
          Blog
        </div>
        <div class="saying">
          aaaaaa
        </div>
      </div>
      <div class="mask"></div>
      <div class="scroll-bottom">
        <IconParkOutlineDown class="w-[4rem] h-[4rem] text-white  scroll-icon w-6 h-6" @click="scrollToBottom" v-if="showScroll"></IconParkOutlineDown>
      </div>
    </div>
    <div class="archive" v-else-if="route.path==='/archive'">
      <el-image :src="homebanner" class="homebanner" fit="cover"></el-image>
      <div class="conter">
        <div class="title">
          时间轴
        </div>
      </div>
    </div>
    <div class="talk" v-else-if="route.path==='/talk'">
      <el-image :src="homebanner" class="homebanner" fit="cover"></el-image>
      <div class="conter">
        <div class="title">
          说说
        </div>
      </div>
    </div>
    <div class="about" v-else-if="route.path==='/more/about'">
      <el-image :src="homebanner" class="homebanner" fit="cover"></el-image>
      <div class="conter">
        <div class="title">
          关于我
        </div>
      </div>
    </div>
    <div class="Article" v-else>
      <el-image :src="homebanner" class="homebanner" fit="cover"></el-image>
      <div class="conter">
        <div class="title mb-3">
          {{getArticle.title}}11
        </div>
        <div class="author info text-md mb-3 flex-wrap justify-center items-center flex max-w-[60vw]">
          <div class="item me-[0.9rem] flex items-center">
            <IonCalendarOutline class="mr-[0.3rem]" ></IonCalendarOutline>
            <span>发表于：{{getArticle.createTime}}</span>
          </div>
          <div class="item me-[0.3rem] flex items-center">
            <PhClockLight class="mr-[0.3rem]" ></PhClockLight>
            <span class="mr-[0.3rem]">更新于：{{getArticle.updateTime}}</span>
          </div>
          <br>
          <div class="item me-[0.3rem] flex items-center">
            <MingcuteClassify2Line class="mr-[0.3rem]" ></MingcuteClassify2Line>
            <span class="mr-[0.3rem]">{{getArticle.category}}</span>|
          </div>
          <div class="item me-[0.3rem] flex items-center">
            <PajamasLabel class="mr-[0.3rem]" ></PajamasLabel>
            <span class="mr-[0.3rem]">{{getArticle.tags?.join(',')}}</span>|
          </div>
          <div class="item me-[0.3rem] flex items-center">
            <PhThumbsUpBold class="mr-[0.3rem]" ></PhThumbsUpBold>
            <span class="mr-[0.3rem]">点赞数：{{getArticle.likes}}</span>|
          </div>
          <div class="item me-[0.3rem] flex items-center">
            <HugeiconsView class="mr-[0.3rem]" ></HugeiconsView>
            <span class="mr-[0.3rem]">浏览量：{{getArticle.views}}</span>
          </div>
          <div class="item me-[0.3rem] flex items-center">
            <PhAirplayLight class="mr-[0.3rem]" ></PhAirplayLight>
            <span class="mr-[0.3rem]">阅读时长：{{getArticle.readDuration}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.page-banner{
  width: 100%;
  .home{
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    .scroll-bottom{
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      z-index: 2;

      .scroll-icon{
        animation: bounce 1.5s infinite ease-in-out;
        cursor: pointer;
      }
    }
    .conter{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      z-index: 2;

      .title{
        font-size: 2.4rem;
        font-weight: 700;
        color: #fff;
        text-align: center;
      }
      .saying{
        font-size: 1.4rem;
        color: #fff;
        text-align: center;
      }
    }

    .homebanner{
      width: 100%;
      height: 100%;
    }
  }
  .archive{
    width: 100%;
    height: 21rem;
    overflow: hidden;
    position: relative;

  }
  .Article{
    width: 100%;
    height: 21rem;
    overflow: hidden;
    position: relative;
    .conter{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }
  .talk{
    width: 100%;
    height: 21rem;
    overflow: hidden;
    position: relative;

  }
  .about{
    width: 100%;
    height: 21rem;
    overflow: hidden;
    position: relative;

  }
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  .conter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    z-index: 2;

    .title {
      font-size: 2.4rem;
      font-weight: 700;
      color: #fff;
      text-align: center;
    }
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    opacity: 1;
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    opacity: 0.3;
  }
}


</style>

