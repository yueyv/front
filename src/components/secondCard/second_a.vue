<script setup lang='ts'>
import { ref, reactive } from 'vue'
interface Props {
    link_title: string
    link: string
    link_img: string
}
const props = defineProps<Props>()
// 转成url
function getImageUrl(param: string) {
    return param
}
</script>

<template>
    <div class="second_a_box">
        <a :href="link" class="second"><img style="width: 32px; height:auto;" :src="getImageUrl(link_img)">&nbsp;{{ link_title }}&nbsp;</a>
    </div>
</template>

<style scoped lang='less'>
.second {
    font-size: 20px;
    color: #000000;

    &:hover {
        color: rgb(245, 216, 205);
    }

    text-overflow: ellipsis;
    white-space: nowrap;
}

img {
    position: relative;
    top: -2px
}

.second_a_box {
    // width: 140px;
    position: relative;

    transition: all 1s;
    // border-style: solid ;
    border-width: 2px;
    border-radius: 5px;
    border-color: rgba(255, 255, 255, 0.4);
    // text-align: center;
    &:hover {
        // box-shadow: 0 5px 200px rgba(0, 0, 0, 0.5);
        box-shadow: 2px 2px 1px 1px rgba(255, 206, 206, 0.51);
        background-color: rgba(255, 255, 255, 0.4);
    }
}</style>