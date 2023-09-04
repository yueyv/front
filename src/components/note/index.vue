<script setup lang='ts'>
import { ref, onBeforeMount } from 'vue'
import search from './note_search.vue';
import note from './main.vue';
import axios from 'axios';
const index = 12
const lists = ref()

function changeList() {
    lists.value = new Array()
    for (let i = 1; i <= index; i++) {
        lists.value.push(i)
    }
}
interface data_note {
    id: number
    content: string
    title: string
}
let data = ref<data_note[]>()
async function get_data() {
    await axios.post('/api/get_note')
        .then((response) => {
            if (response.status === 200) {
                sessionStorage.setItem("note", JSON.stringify(response.data.data))
            }
        })
        .catch(err => {
            console.log(err)
        })
    data.value = JSON.parse(sessionStorage.getItem("note") ?? "[{}]")
}
onBeforeMount(() => {
    changeList()
    get_data()

})

</script>

<template>
    <search></search>
    <div class="note_container">
        <note v-for="list in lists" :title="data?.[list]?.title" :content="data?.[list]?.content" :id="list"></note>
    </div>
</template>

<style scoped lang='less'>
.note_container {
    display: grid;
    align-items: center;
    justify-content: center;
    min-width: 60vw;
    grid-template-columns: repeat(auto-fill, minmax(215px, 1fr)) minmax(215px, 1fr);
    grid-row-gap: 15px;
    justify-items: center;

}
</style>