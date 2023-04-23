import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
    interface RouterMeta {
        title: string
    }
}

const routes: Array<RouteRecordRaw> = [

    {
        path: '/login',
        // alias:'/',
        name: '登录',
        meta: {
            title: '登录'
        },
        component: () => import('../components/login/login.vue')
    },
    {
        path: '/loading',
        name: 'loading',
        meta: {
            title: '验证中',
        },
        component: () => import('../components/login/loading.vue')
    },
    {
        path: '/register',
        name: '注册',
        meta: {
            title: '注册'
        },
        component: () => import('../components/login/register.vue')
    },
    {
        path: '/home',
        alias: '/',
        name: '主页',
        meta: {
            title: 'mywebsite'
        },
        component: () => import('../pages/home.vue')
    },
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})
// 路由守卫
router.beforeEach((to, from) => {
    if (router.hasRoute(to.name ?? '404')) {
        if (to.name === "不存在") {
            return false
        }
        return true
    } else {
        console.log(233);
        // 返回
        router.back()
        return false
    }
})
