import {createRouter,createWebHistory} from "vue-router";

const route=[
    {
        name:'index',
        path:'/',
        component:()=>import('@/views/Home.vue'),
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes: route
})

export default router;