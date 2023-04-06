<script setup lang='ts'>
import { ref,reactive} from 'vue'
import card from "../components/firstCard.vue"
</script>

<template>
    <div id="home">
        <card></card>
        <card></card>
        <card></card>

    </div>

</template>

<style scoped lang='less'>
#home{
    /* 100%窗口高度 */
    height: 100vh;
    /* 弹性布局 水平垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 渐变背景 */
    background: linear-gradient(200deg,#80d0c7,#13547a);
}
</style>