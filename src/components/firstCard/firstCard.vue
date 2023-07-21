<script setup lang='ts'>
import { message } from 'ant-design-vue';
import { ref, reactive } from 'vue'
import { NavigationFailureType } from 'vue-router';
import { isNavigationFailure } from 'vue-router';
import { useRouter } from "vue-router";
const router = useRouter()
interface Props {
    img: number,
    title?: string,
    content?: string
}
const props = withDefaults(defineProps<Props>(), {
    img: 0,
    title: '不存在',
    content: '不存在'
})
async function clickCard(list: number, title: string) {
    router.addRoute({
        path: `/card/${list}`,
        name:`${title}`,
        meta: {
            title: `${title}`
        },
        component: () => import(`./card/${list}.vue` /* @vite-ignore */)
    })
    // 路由导航
    const navigationResult =await router.push({
        path: `/card/${list}`
    })
    // 路由返回
    if(isNavigationFailure(navigationResult,NavigationFailureType.aborted)){
        message.error("页面不存在")
    }


}
// 动态图片
function getImageUrl(param: number) {

    return new URL(`../../assets/images/${param}.jpg`, import.meta.url).href;


}
// 丢失图片
// function missImg(){
//     return 'this.src='+'"'+getImageUrl(0)+'"'
// }


</script>

<template>
    <div class="container" @click="clickCard(img, title)">
        <div class="card">
            <div class="img-box">
                <img :src="getImageUrl(img)">
            </div>
            <div class="text-box">
                <h2>{{ title }}</h2>
                <p>{{ content }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang='less'>
.container {
    /* 相对定位 */
    position: relative;
    /* 弹性布局 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 允许换行 */
    flex-wrap: wrap;
    // padding: 30px;
    flex: 1
}

.container .card {
    position: relative;
    max-width: 300px;
    height: 215px;
    background-color: #fff;
    margin: 30px 15px;
    padding: 20px 15px;
    border-radius: 5px;
    /* 阴影 */
    box-shadow: 0 5px 200px rgba(0, 0, 0, 0.5);
    /* 动画过渡 */

}

.container .card:hover {
    height: 320px;
    position: absolute;
    z-index: 2;
    transition: 0.3s ease-out;
}

.container .card .img-box {
    position: relative;
    // width: 260px;
    height: 260px;
    border-radius: 5px;
    /* 溢出隐藏 */
    overflow: hidden;
    top: -60px;
    /* 阴影 */
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.container .card .img-box {
    width: 100%;
    // height: 100%;
    // object-fit: fill;
}

.container .card .text-box {
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    /* 设置元素不可见 */
    visibility: hidden;
    /* 不透明度 */
    opacity: 0;
    transition: 0.3s ease-out;
}

.container .card .text-box p {
    text-align: left;
    line-height: 25px;
    margin-top: 10px;
    font-size: 15px;
    color: #555;
}

.container .card:hover .text-box {
    /* 鼠标移入，设置元素可见 */
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    /* 动画延迟0.2秒 */
    transition-delay: 0.2s;

}
</style>