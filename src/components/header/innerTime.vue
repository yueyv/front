<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from "vue-router";
const router=useRouter()
interface Props {
    innertime?:string,
}
const props = withDefaults(defineProps<Props>(), {
    innertime:"Error"
})

</script>

<template>
    <div class="box">
        <h1>{{ innertime }}</h1>
    </div>
</template>

<style scoped lang='less'>
.box {
    transition: all 1s ;
    z-index: 2;
    width: 200px;
    top: 5vh;
    right: 70vw;
    position: absolute;
    height: 50px;
    background-color: #ff719a;
    border-radius: 20px;
    display: flex;
    box-shadow:5ch;
    // visibility: hidden;
    z-index: 3;

    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    background: linear-gradient(to top left, #ffe29f, #ffa99f, #ff719a);
    color: #ccfffafd;
    h1 {
        text-align: center;
        line-height: 50px;
        display: inline-block;
        position: absolute;
        left: 50px;
        font-size: 40px;
        color: #ccfffafd;
        &:hover{
            color: #befa94;
        }
    }
    &:hover{
        visibility: visible;
        box-shadow: 5px 5px 2px 1px rgba(255, 255, 255,0.3);
        background: linear-gradient(to bottom right, #ffe29f, #ffa99f, #ff719a);
    }
}
</style>