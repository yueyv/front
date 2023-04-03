import { createApp } from 'vue'
import './assets/less/reset.less'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import 'uno.css';
import { createPinia, PiniaPluginContext } from "pinia"
import { da } from 'element-plus/es/locale';
import {router} from './router/index';
// pinia 持久化插件
type Options={
    key?:string
}

const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}
const getStorage=(key:string)=>{
    return localStorage.getItem(key)? JSON.parse(localStorage.getItem(key) as string):{}
}
const __piniaKey__ ='key'
const piniaPlugin = (options:Options) => {
    return (context: PiniaPluginContext) => {
        const { store } = context
        const data=getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
    
        store.$subscribe(() => {
            setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`,toRaw(store.$state))
        })
        console.log(store)
        return {
            ...data
        }
    }

}
const store = createPinia()

store.use(piniaPlugin({
    key: "pinia"
}))

const whilelist=['/']
router.beforeEach((to,from,next)=>{
    document.title=to.meta.title as string
    next()
})

export const app = createApp(App)
// app.config.globalProperties.$env='dev'
app.use(Antd)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
