import {createRouter,createWebHistory} from "vue-router";

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

        ]
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes: route
})

export default router;