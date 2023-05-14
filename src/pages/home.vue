<script setup lang='ts'>
import { ref, reactive } from 'vue'
import card from "../components/firstCard/firstCard.vue"
import headerbox from '../components/header/header.vue'
import innerTime from '../components/header/innerTime.vue';
import footer_vue from '../components/footer/footer.vue';
import navbox from '../components/nav/index.vue'
import { message } from 'ant-design-vue';
import axios from 'axios';
import { da } from 'element-plus/es/locale';
import { debounce } from '../utils/debounce'
import { throttle } from '../utils/throttle'
import secondCard from '../components/secondCard/index.vue'
import note from '../components/note/index.vue';
// const emit=defineEmits<>('nav')
const index = 10
const lists = ref()
const inner = ref("01:00")
const time = ref<boolean>(true)
interface data_first_card {
    id: number
    content: string
    title: string
}
let data = ref<data_first_card[]>()

function changeList() {
    lists.value = new Array()
    for (let i = 1; i <= index; i++) {
        lists.value.push(i)
    }
}
onBeforeMount(() => {
    changeList()
    get_data()
})


const debouncedLeave = debounce(() => {
    time.value = false
}, 60000);
const throttleEnter=throttle(()=>{
    time.value=true
},5000)
debouncedLeave()
// 从后端获取firstcard数据
async function get_data() {
    await axios.post('/api/get_first_card')
        .then((response) => {
            if (response.status === 200) {
                sessionStorage.setItem("first_card", JSON.stringify(response.data.data))
            }
        })
        .catch(err => {
            console.log(err)
        })
    data.value = JSON.parse(sessionStorage.getItem("first_card") ?? "[{}]")
}
const nav_list=ref(["样式","笔记","工具","其他"])
const nav_show=ref([false,false,true,false])
function nav_choose(value:number){
    // message.info(value)
    for(let i=0;i<nav_show.value.length;i++){
        nav_show.value[i]=false
    }
    nav_show.value[value]=true
}
</script>

<template>
    <div class="main">
       
        <header>
            <!-- <innerTime :innertime="inner" @click="time = false" class='animate__animated'
                :class="{ 'animate__backInLeft': time, 'animate__backOutLeft': !time }"></innerTime> -->
            <headerbox @mouseenter="throttleEnter()" @mouseleave="debouncedLeave()"
                class="animate__animated animate__rubberBand">
            </headerbox>
        </header>
        <navbox :nav_list="nav_list" style="z-index: 3;" :nav_show="nav_show" @nav_choose="nav_choose"></navbox>
        <!-- 样式 -->
        <div class="card" v-if="nav_show[0]">
            <card v-for="list in lists" :img="list" :title="data?.[list]?.title" :content="data?.[list]?.content"
                :key="list" :id="list"></card>
        </div>
        <!-- 笔记 -->
        <div class="card_note" v-if="nav_show[1]">
        <note></note></div>
        <!-- 工具 -->
        <div class="card_utils" v-if="nav_show[2]">
        <secondCard></secondCard></div>
        <!-- 其他 -->
        <footer>
            <footer_vue></footer_vue>
        </footer>

    </div>
</template>

<style scoped lang='less'>
.main {
    background-image: linear-gradient(200deg, #80d0c7, #13547a);
    // overflow: scroll;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    min-height: 100vh;
    flex: 1;
    transition: all 1s ;
}

a:hover {
    color: aliceblue;
}


.card {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) minmax(300px, 1fr);
    width: 80vw;
    margin-top: 20vh;
    margin-bottom: 20vh;
}
.card_utils,.card_note {
    display: grid;
    grid-template-columns: repeat(auto-fit);
    width: 70vw;
    // margin-right: 10vw;
    justify-content: center;
    margin-top: 20vh;
    margin-bottom: 20vh;
}
</style>