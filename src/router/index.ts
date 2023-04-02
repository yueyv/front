import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
const routes:Array<RouteRecordRaw>=[
    // {
    //     path:'/',
    //     name:'index',
    //     component:()=>  import("../components/moveBox.vue")
    // },
    // {
    //     path:'/element',
    //     name:"element",
    //     component:()=>  import("../components/elementTest.vue")
    // },
    // {
    //     path:'/antd',
    //     component:()=>  import("../components/Antdtest.vue")
    // },
    {
        path:'/',
        name:'loading',
        component:()=>import('../components/loading.vue')
    }
]
export const router=createRouter({
    history:createWebHistory(),
    routes
})
