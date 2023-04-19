<script setup lang='ts'>
import { ref, reactive } from 'vue'
import card from "../components/firstCard/firstCard.vue"
import headerbox from '../components/header/header.vue'
import innerTime from '../components/header/innerTime.vue';
import footer_vue from '../components/footer/footer.vue';
import { message } from 'ant-design-vue';
// const emit=defineEmits<>('nav')
const index = 30
const lists = ref()
const inner = ref("01:00")
const time = ref<boolean>(true)
function changeList() {
    lists.value = new Array()
    for (let i = 0; i <= index; i++) {
        lists.value.push(i)
    }
}
onBeforeMount(() => {
    changeList()
    leave()
})
function leave(){
    setTimeout(()=>{
        time.value=false
    },5*60000)
}
</script>

<template>
    <div class="main">
        <!-- <a href="#5">a</a> -->
        <innerTime  :innertime="inner" @click="time = false" class='animate__animated' :class="{'animate__backInLeft':time,'animate__backOutLeft':!time} "></innerTime>
        <headerbox @mouseenter="time = true" @mouseleave="leave()" ></headerbox>
        <div class="card">
            <card v-for="list in lists" :img="list" :key="list" :id="list"></card>
        </div>
        <footer_vue></footer_vue>
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
    flex: 1;
}
a:hover{
    color: aliceblue;
}


.card {

    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(300px,2fr));


    width: 80vw;
    margin-top: 20vh;
    margin-bottom: 20vh;
    flex: 1;

}
</style>