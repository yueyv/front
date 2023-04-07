<script setup lang='ts'>
import { ref, reactive } from 'vue'
import card from "../components/firstCard.vue"
// const emit=defineEmits<>('nav')
const index = ref(0)
const lists = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

</script>

<template>
    <div class="main">
        <div id="card">
            <card v-for="list in lists" :img="list" :key="list"></card>
        </div>
    </div>
</template>

<style scoped lang='less'>
.main {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(200deg, #80d0c7, #13547a);
}

#card {
    /* 100%窗口高度 */
    /* 弹性布局 水平垂直居中 */
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);

    // justify-content: center;
    // align-items: center;
    /* 渐变背景 */
    width: 80vw;
    height: 60vh;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>