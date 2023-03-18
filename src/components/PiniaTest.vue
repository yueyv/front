<script setup lang='ts'>
import { ref,reactive} from 'vue'
import { useTestStore } from '../store';
const Test=useTestStore()
const change=()=>{
    Test.setUser()
    // Test.setName("learn")
}
const reset=()=>{
    Test.$reset()
}
// Test.$subscribe((args,state)=>{
//     console.log("====>",args)
//     console.log("====>",state)
// })
const changeN=()=>{
    Test.name++
}
</script>

<template>
<div>
    <div>
        <p>actions-user:{{ Test.user }}</p>
        <p>actions-name:{{ Test.name }}</p>
        <hr>
        <!-- <p>getters:{{ Test.newName }}</p> -->
        <hr>
        <button @click="change">change</button>
        <hr>
        <button @click="changeN">changeN</button>
    </div>
</div>
</template>

<style scoped lang='less'>

</style>