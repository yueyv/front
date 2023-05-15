<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<template>
    <div class="note_box">
        <div class="title">测试</div>

        <div class="content_note">开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。开发后端中。</div>
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
    white-space: break-spaces; /* 禁止换行 */
    margin-right: 15px;
    margin-left: 15px;
    font-size: 24px;
}
.content_note{
    margin-right: 15px;
    margin-left: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    // white-space: break-spaces; /* 禁止换行 */
    height: 100%-24px;
    font-size: 16px;
    display: -webkit-box; /* 设置为弹性盒子布局 */
    -webkit-box-orient: vertical; /* 设置为垂直方向 */
    -webkit-line-clamp: 6; /* 显示的行数 */
    max-height: calc(20px * 8); /* 行高乘以行数 */
}
</style>