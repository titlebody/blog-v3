<script setup>
import {articleStore} from "@/store";
import {onMounted,ref} from "vue";

import bg from "@/assets/images/home.jpg";
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

let Store=articleStore()

const id = 'preview-only';
const articleContent = ref(`# 最近想做的 &#x274E;

1. 三方登录
2. 组件代码优化
- 上传图片组件 增加判断是否应该上传图片的判断 从而达到组件自动上传未上传的图片 直接返回排好序的图片url 降低使用心智负担 之前没写是因为懒
- 评论组件 优化代码逻辑 把所有的状态管理放在父组件 或者是抽离公共状态管理js 推崇数据单向流动 减少数据双向流动 降低心智负担 音乐播放器的逻辑也应该单独写 然后把应该缓存的数据存到pinia 之前为了方便直接写到了 pinia中 导致迁移音乐组件必须要使用pinia
- 图片加载指令 优化
3. 优化博客整体布局 博客应该是一个展示文档的网站 当前主题的文档展示部分单个文章太大了 看不到其他文章 背景色也应该不要渐变色 影响阅读
4. 登录注册页面应该做成弹窗 比较友好
5. 由于单页面应用的seo太差 博客前台后续希望能增加Nuxt版
6. 这个博客其实更注重的是前端的内容 所以后端的那些权限管理、系统监控做的相对简单 后续如果想做了就会去做那些方面的内容 目前比较侧重于前端

# 最近在干啥 2024/4/2
最近在刷算法、看一些vue、微前端、面试的一些书籍 所以没有花很多时间去优化博客 个人想写出好的项目 对项目进行优化 一定是需要丰富的知识作为基础的 多看看这些书籍 我们可以知道代码怎么去设计、优化是合理的

# 最近完成的 24/03/26 &#x2705;

不知不觉 博客已经运行一年了 服务器也快到期了 续费也续费不起 今天买了一个相同配置的阿里云ECS云服务器 花了两三个把博客迁移过去了 主要花时间的点就是minio的迁移 我是在服务器里找到了minio存储文件的地方 然后把文件整体迁移过去的 不然那么多图片还真不知道咋迁移

最近在刷面试、算法、看vue/微前端相关的书籍 提升自己 所以博客管理的较少 年前事情太多啦 全在工作 天天加班 也是最近轻松一点 博客暂时不能加新东西了 提升自己先

## 动画 &#x2705;

最近用 IntersectionObserver 简单的写了一个元素出现在视图中的进场动画和退场动画，感觉还行，但是和成熟的动画库比起来差远了。图片加载动画也写了一个指令来显示。
2023 年 11 月 1 日 已经该用专业的动画库 gsap 来改进了动画，会丝滑一些。

## 敏感词过滤 &#x2705;

目前只过滤了几个敏感词，敏感词库太多了，好难整理呀，格式化都快疯了就放弃了。只能说防君子不防小人，请大家善良发言。
2023 年 11 月 1 日

## 用户点赞 &#x2705;

之前：
点赞信息目前是存到本地的，但是本地 localStorage 被清空了就没有了，所以后面想把文章、说说点赞加在数据库里，加一个字段保存用户的 id，来判断当前用户是否点赞。
现在：
点赞功能重做了，使用了表来存，还加了说说的点赞

## 音乐播放器 &#x2705;

音乐播放器是纯手撸的，功能还很少，后续加一些功能吧，组件代码写的有点不太优雅，可以写一套类似 hooks 来控制的，现在很多逻辑都是写在组件里，想实现随处可用就有点难。

## 留言 &#x2705;

之前：
留言数据库设计的字段太少，可扩展性不高，之前看了一个专门搞设计写的留言(yike)，后续想改成那样
现在：
已经写好了，哈哈

## 用户登录 &#x2705;

之前
用户登录刚开始写的时候是存在了 ctx.state 下,可以通过 state 直接获取当前的用户信息，但是当多个用户登录的时候就会被挤掉；还可以通过 token 解密来获取用户信息，就需要请求携带 token，token 是可以伪造的，打算后面再加一次密；没有引入安全框架，自己写一套安全逻辑还是太繁琐了，个人觉得 token 就够用了。前端是直接使用的用户 id 来获取用户信息的，之前被同学发现了这个秘密，直接在本地修改用户 id 就可以切换用户了，所以我加了一次密，嘿嘿
现在：
根据用户 token 来获取用户信息可以解决这个问题，已经解决了

## 9 月 28 日 &#x2705;

引入 prettier 格式化代码，使代码看起来优美一些
引入 eslint 校验代码，确实改了许多写的不好的地方，比如忘记写 key 的情况
优化了评论组件，实现了下标的控制，表情改为使用 unicode 编码的表情符号。
首页改成了使用了一言 api 的每日一言来获取名言警句。
[官网](https://luckycola.com.cn/public/docs/shares/api/yiyan.html)

## 10 月 1 日 &#x2705;

增加了首次加载的动画，根据开发规范规范了代码
可能是 vue3 的版本迭代了，之前的组件自动导入在新版本不支持，也有可能是我下了自动导入插件，我忘记了，就把一些公共组件重新导入了一下(尽量没有使用一些听起来不太规范的方式写代码，这样大家参考我的代码不会遇到太多问题)，可以直接使用我的组件在自己的项目里，只要是技术栈一致，版本没有差一个大版本就行。如果有问题的话，建议去看一看最新的文档的写法，我的博客都快开发一年了，一些框架肯定会有大大小小的更新的。

## 重大 bug 修改记录

### 7 月

有童鞋发现了我的用户信息是通过本地的用户 id 去取的，于是便可以通过修改 id 去篡改用户，还好这位善良的童鞋发现了这个 bug，所以我后面对本地用户加了一次密，其实可以通过 token 拿到用户信息的，但是目前这个博客对这方面的需求不是很大，所以咱们就暂时先这样吧。使用 token 去取用户信息其实我有写，但是我去改的话可能还会搞个 token 无感刷新，还没想通这个无感刷新对博客项目的实际帮助，所以就暂时不写。

### 9 月 6 日

有童鞋在部署博客的时候，使用宝塔面板安装的 pm2 可视化工具部署，明明博客的端口号是 8888，但是 pm2 给识别的却是 3000，我也是百思不得其解，在经过一个上午断断续续的摸鱼测试后发现，是我的教程写的有问题，运行目录不对，宝塔在选择运行文件的时候自动给我们选择了运行目录，其实那个目录是不对的，都怪博主没有认真写文档。（此时我的解决方法就是放弃 pm2 可视化工具，直接使用命令 npm run prd 去运行脚本启动服务，不用管那些乱七八糟的，就是简单粗暴，最能解决问题）
但是，这不符合我们洁癖程序员的准则
然后我就开始了漫长的测试
首先我修改了项目启动文件的位置，改到了最外层，这样 pm2 就可以自动拿到正确的运行目录。
但是，当我满怀期待的点击启动以后，还是运行报错，打开报错日志一看，哦.......，原来是数据库没连上，我认认真真检查了.env 下的数据库名称、账号、密码无误后，再次满怀期待地运行项目，还是连不上，wq。
最后实在是没办法了，出大招吧，一个点一个点地跟着代码走，终于发现了数据库密码在 pm2 可视化工具去启动的时候，没有了，你敢信，我那么大一串密码，说没有就没有。使用命令行去运行的时候就没事。
于是我猜测是数据库密码的命名有冲突，于是就改了一下数据库密码的名称，从 MYSQL_PWD 改为了 MYSQL_PASSWORD，再次运行，wq，连上了，pm2 的端口号也可以和我们配置的端口号对上了，芜湖，起飞。

### 12 月 17 日

今天做了使用 minio 来进行图片的上传 之前使用的七牛云或者是上传到服务器的指定目录 效果都不是很好 因为服务器文件访问速度有限 就搁置了 后来了解到了 minio 于是就装了一个 minio 上传到 minio 里 minio 也是装在服务器里 只是访问速度很快 做了一下午 效果还不错 以后都不用压缩图片了 之前写压缩是因为七牛云免费的版本传不了太大的 现在自己的服务器 可以适当压缩率低一些
优化了后台所有页面的布局 按照填满整个屏幕的规则去填充的 会比之前的好看一些 舒服一些 也不会出现很多内容太多了滚动到很下面去了 直接一个屏幕就能看完

`);
const scrollElement = document.body;

const articleDeta={
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
  readDuration:"100小时20分钟11秒"
}

import {configStore} from "@/store";
import {storeToRefs} from "pinia";

const {getIsDark} =storeToRefs(configStore())



const articles = ref()

onMounted(() => {
  articles.value = articleDeta
  Store.setArticle(articles.value)
})

</script>

<template>
  <el-row :gutter="20">
    <el-col :sm="18" :xs="24">
      <el-card>
        <MdPreview :editorId="id" :modelValue="articleContent" :theme="getIsDark?'dark':'light'"/>
        <el-card class="p-[10px]">
          <div class="border-indigo-300 m-[20px] border">
            <div class="copyright-info p-[20px]" >
              <div class="item flex items-center w-[100%]">
                <div class="lable">文章作者</div>
                <div class="value">
                  <a href="http://www.baidu.com" target="_blank" class="underline">小张</a> </div>
              </div>
              <div class="item flex items-center w-[100%]">
                <div class="lable">类型</div>
                <div class="value">M</div>
              </div>
              <div class="item flex items-center w-[100%]">
                <div class="lable">原创</div>
                <div class="value">M</div>
              </div>
              <div class="item flex items-center w-[100%]">
                <div class="lable">本文链接</div>
                <div class="value">
                  <a href="http://mrzym.top/#/article?id=8" class="underline" target="_blank" >
                    http://mrzym.top/#/article?id=8
                  </a></div>
              </div>
              <div class="item flex items-center w-[100%]">
                <div class="lable">声明 </div>
                <div class="value">此文章版权归 Mr M 所有，如有转载，请注明来自原作者</div>
              </div>
            </div>
          </div>

        </el-card>

      </el-card>
    </el-col>
    <el-col :sm="6" :xs="0">
      <el-affix :offset="60">
        <el-card>
          <div class="w-[100%] max-h-[60vh] py-1"></div>
          <MdCatalog :editorId="id" :scrollElement="scrollElement" :offset-top="80" :scrollElementOffsetTop="60"/>
        </el-card>
      </el-affix>

    </el-col>
  </el-row>
</template>

<style scoped>
.lable{
  position: relative;
  margin-right: 9px;
}
.lable:before{
  content: ":";
  position: absolute;
  top: 0;
  right: -0.3rem;

}

</style>