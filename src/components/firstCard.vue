<script setup lang='ts'>
import { message } from 'ant-design-vue';
import { ref,reactive} from 'vue'
const param="1"

function getImageUrl(param:string) {
    return new URL(`../assets/images/${param}.jpg`, import.meta.url).href;
}
</script>

<template>

    <div class="container">
        <div class="card">
            <div class="img-box">
                <img :src=getImageUrl(param) alt="">
            </div>
            <div class="text-box">
                <h2>卡片一</h2>
                <p>我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一我是内容一</p>
            </div>
        </div>
    </div>

</template>

<style scoped lang='less'>

.container{
    /* 相对定位 */
    position: relative;
    /* 弹性布局 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 允许换行 */
    flex-wrap: wrap;
    padding: 30px;
    flex:1
}
.container .card{
    position: relative;
    max-width: 300px;
    height: 215px;
    background-color: #fff;
    margin: 30px 15px;
    padding: 20px 15px;
    border-radius: 5px;
    /* 阴影 */
    box-shadow: 0 5px 200px rgba(0,0,0,0.5);
    /* 动画过渡 */
    transition: 0.3s ease-in-out;
}
.container .card:hover{
    height: 420px;
}
.container .card .img-box{
    position: relative;
    width: 260px;
    height: 260px;
    border-radius: 5px;
    /* 溢出隐藏 */
    overflow: hidden;
     top: -60px;
     left: 4px;
    /* 阴影 */
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    z-index: 1;
}
.container .card .img-box img{
    width: 100%;
}
.container .card .text-box{
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    /* 设置元素不可见 */
    visibility: hidden;
    /* 不透明度 */
    opacity: 0;
    transition: 0.3s ease-in-out;
}
.container .card .text-box p{
    text-align: left;
    line-height: 25px;
    margin-top: 10px;
    font-size: 15px;
    color: #555;
}
.container .card:hover .text-box{
    /* 鼠标移入，设置元素可见 */
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    /* 动画延迟0.2秒 */
    transition-delay: 0.2s;
}
</style>