import {createRouter,createWebHistory} from "vue-router";
// 引入NProgress进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const route=[
    {
        name:'layout',
        path:'/',
        component:()=>import('@/components/layoutt/index.vue'),
        redirect:"/home",
        children:[
            {
                name:'home',
                path:'/home',
                component:()=>import('@/views/Home.vue')
            },
            {
                name:'更多',
                path:'/more',
                children:[
                    {
                        name:'关于',
                        path:'/more/about',
                        component:()=>import('@/views/about.vue')
                    }
                ]
            },
            {
                name:'说说',
                path:'/talk',
                component:()=>import('@/views/talk.vue')
            },
            {
                name:'时间轴',
                path:'/archive',
                component:()=>import('@/views/archive.vue')
            },
            {
                name:"文章详情",
                path: '/Article',
                component:()=>import('@/views/Article.vue')
            },
        ]
    },
    {
        name:"NotFound",
        path:'/404',
        meta: {
            title: 'Page not found',
            isLogin: false
        },
        component:()=>import('@/views/404.vue')
    },
    {
        path:'/:catchAll(.*)',
        redirect: '/404'
    }
]



const router=createRouter({
    history: createWebHistory(),
    routes: route
})




// 路由守卫
router.beforeEach((to,from,next)=>{
    // 进度条
    NProgress.start()
    next()
})

router.afterEach(()=>{
    NProgress.done()
})


export default router;