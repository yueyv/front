<script setup lang='ts'>
import { ref,reactive} from 'vue'
import { ElButton } from 'element-plus';
</script>

<template>
<ElButton class="button"></ElButton>
</template>

<style scoped lang='less'>
.button{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 200px;
}
</style>