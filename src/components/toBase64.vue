<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useAttrs } from 'vue';
import useBase64 from '../hooks/useBase64'
useBase64({
    el:'#img'
}).then(res=>{
    console.log(res.baseUrl)
})
</script>

<template>
    <div><img id="img" src="../assets/img/test.jpg"></div>
</template>

<style scoped lang='less'>
#img{
    width: 300px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>