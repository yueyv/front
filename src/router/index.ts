import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

declare module 'vue-router'{
    interface RouterMeta{
        title:string
    }
}

const routes:Array<RouteRecordRaw>=[
   
    {
        path:'/login',
        // alias:'/',
        name:'登录',
        meta:{
            title:'登录'
        },
        component:()=>import('../components/login.vue')
    },
    {
        path:'/loading',
        name:'loading',
        meta:{
            title:'验证中',
        },
        component:()=>import('../components/loading.vue')
    },
    {
        path:'/register',
        name:'注册',
        meta:{
            title:'注册'
        },
        component:()=>import('../components/register.vue')
    },
    {
        path:'/home',
        alias:'/',
        name:'主页',
        meta:{
            title:'mywebsite'
        },
        component:()=>import('../pages/home.vue')
    },
]
export const router=createRouter({
    history:createWebHistory(),
    routes
})
