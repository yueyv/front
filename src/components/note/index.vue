<script setup lang='ts'>
import { ref, reactive } from 'vue'
import search from './note_search.vue';
import note from './main.vue';

</script>

<template>
    <search></search>
<div class="note_container">

    <note v-for="n in 8"></note>
</div>

    
</template>

<style scoped lang='less'>
.note_container{
    display: grid;
    align-items: center;
    justify-content: center;
    min-width: 60vw;
    grid-template-columns: repeat(auto-fill, minmax(215px,1fr)) minmax(215px,1fr);
    grid-row-gap:15px;
    justify-items: center;

}
</style>