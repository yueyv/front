<script setup lang='ts'>
import { ref, reactive } from 'vue'
import card from "../components/firstCard.vue"
import { message } from 'ant-design-vue';
// const emit=defineEmits<>('nav')
const index = ref(0)
const lists = ref([1, 2, 3, 4, 5, 6, 7, 8, 9,10,14])


</script>

<template>
    
    <div class="main">
         <a href="#5"><button >a</button></a>
         <router-link to="login"><a-button>login</a-button></router-link>
        <div class="card">
            <card v-for="list in lists" :img="list" :key="list" :id="list"></card>
        </div>
    </div>
    
</template>

<style scoped lang='less'>
.main {
    background: linear-gradient(200deg, #80d0c7, #13547a);
    overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
}

.card {
    /* 100%窗口高度 */
    /* 弹性布局 水平垂直居中 */
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);

    // justify-content: center;
    // align-items: center;
    /* 渐变背景 */
    width: 80vw;
    margin-top: 20vh;
    margin-bottom: 20vh;
    // top: 80vh;
    // position: fixed;
    // left: 50%;
    // top: 50%;
    // transform: translate(-50%, -50%);
    // overflow: scroll;

    
}
</style>