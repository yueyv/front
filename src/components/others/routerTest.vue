<script setup lang='ts'>
import { useRouter } from 'vue-router';

const router=useRouter()
const toPage=(url:string)=>{
    router.push({ //replace
        path:url
        // name:url
    })
}
const next=()=>{
    router.go(1)
}
const prev=()=>{
    router.back()
}
</script>

<template>
    <div>
        <router-link replace :to="{ name: 'element' }">element</router-link>
        <hr>
        <router-link to="/antd">element</router-link>
        <hr>
        <router-view></router-view>
    </div>
    <button @click="toPage('/')">default</button>
    <button @click="next()">next</button>
    <button @click="prev()">prev</button>
</template>

<style scoped lang='less'></style>