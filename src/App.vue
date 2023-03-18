<script setup lang='ts'>
import parent from './components/parent.vue';
</script>

<template>
    <div id="parent">
        <parent></parent>
    </div>


</template>

<style scoped lang='less'>
#parent{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
</style>