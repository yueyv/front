<script setup lang='ts'>
import { message } from 'ant-design-vue';
import { ref, reactive } from 'vue'
import { useRouter } from "vue-router";
const router = useRouter()
// 去除错误存储
if ((sessionStorage.getItem("userId")?.length ?? 1) <= 2 || (sessionStorage.getItem("userId")?.length ?? 51) >= 50) {
    if (sessionStorage.getItem('userId')) {
        sessionStorage.removeItem("userId")
    } 
}

let userId = window.atob(JSON.parse(sessionStorage.getItem("userId") ?? JSON.stringify({ "token": `${window.btoa("Not logined in")}` })).token)
function login() {
    router.push('/login')
}



</script>

<template>
    <div class="box" @click="login()">
        <img src="/FeHeart.svg" alt="no">
        <h1>{{ userId }}</h1>
    </div>
</template>

<style scoped lang='less'>
.box {
    transition: all 1s ;
    z-index: 2;
    width: 200px;
    top: 5vh;
    left: 70vw;
    position: absolute;
    height: 50px;
    background-color: #ff719a;
    border-radius: 20px;
    display: flex;
    box-shadow: 5ch;
    // visibility: hidden;
    z-index: 3;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to top left, #ffe29f, #ffa99f, #ff719a);

    img {
        display: inline-block;
        position: absolute;
        left: 25px;
        top: 10px;
        width: 32px;
        height: 32px;

    }

    h1 {
        text-align: center;
        line-height: 50px;
        display: inline-block;
        position: absolute;
        left: 80px;
    }

    &:hover {
        box-shadow: 5px 5px 2px 1px rgba(255, 255, 255,0.3);
        visibility: visible;
        background: linear-gradient(to bottom right, #ffe29f, #ffa99f, #ff719a);
        transform: all 0.6s linear;
        transition-delay: 0.5s;
    }
}
</style>