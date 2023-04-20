<script setup lang='ts'>
import { ref, reactive } from 'vue'
import type { Directive } from 'vue';
//permission
localStorage.setItem('userId','yueyv')
const permission=[
    'yueyv:shop:create',
    'yueyv:shop:edit',
    'yueyv:shop:delete'
]
const userId=localStorage.getItem('userId') as string
const vHasShow:Directive<HTMLElement,string>=(el,bingding)=>{
    if(!permission.includes(userId+':'+bingding.value)){
        el.style.display='none'
    }
}
</script>

<template>
    <div class="btns">
        <button v-has-show="'shop:create'">创建</button>
        <button v-has-show="'shop:edit'">编辑</button>
        <button v-has-show="'shop:delete'">删除</button>
    </div>
</template>

<style scoped lang='less'>
.btns{
    button{
        margin: 10px;
        width: 20vw;
        height: 30vh;
        background-color: #f3cfcf;
        font-size: 30px;
    }
}
</style>