import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'index',
        component:()=>  import("../components/moveBox.vue")
    },
    {
        path:'/element',
        name:"element",
        component:()=>  import("../components/elementTest.vue")
    },
    {
        path:'/antd',
        component:()=>  import("../components/Antdtest.vue")
    },
]
export const router=createRouter({
    history:createWebHashHistory(),
    routes
})
