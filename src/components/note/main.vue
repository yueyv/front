<script setup lang='ts'>
import {marked} from 'marked';
let rendererMD = new marked.Renderer();
marked.setOptions({
    renderer: rendererMD,
    pedantic: false,
    gfm: true,
    breaks: false,
    headerIds: false,
    mangle: false,
    sanitize: false,
    smartypants: false,
    xhtml: false
});
interface Props {
    id: number,
    title?: string,
    content?: string
}
const props = withDefaults(defineProps<Props>(), {
    id: 0,
    title: '不存在',
    content: '不存在'
})
</script>

<template>
    <div class="note_box">
        <div class="title">{{ title }}</div>

        <div class="content_note">
            <div v-html="marked(content)" style="overflow: hidden;"></div>
        </div>
    </div>
</template>

<style scoped lang='less'>
.note_box {
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 15px;

    transition: all 0.5s;

    &:hover {
        // box-shadow: 0 5px 200px rgba(0, 0, 0, 0.5);
        box-shadow: 5px 5px 3px 3px rgba(255, 206, 206, 0.51);
        background-color: rgba(255, 255, 255, 0.4);

    }
}

.title {
    text-align: center;
    // border-bottom-color: aqua;
    border-bottom: 2px solid rgba(0, 255, 255, 0.438);
    justify-items: center;
    // width: 180px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* 禁止换行 */
    margin-right: 15px;
    margin-left: 15px;
    font-size: 24px;
}

.content_note {
    margin-right: 15px;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: break-spaces; /* 禁止换行 */
    height: 141px;
    font-size: 14px;

}</style>