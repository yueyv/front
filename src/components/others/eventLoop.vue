<script setup lang='ts'>
import { ref, reactive } from 'vue'
async function Prom() {
    console.log("Y")
    await Promise.resolve()
    console.log("X")
}
setTimeout(() => {
    console.log(1)
    Promise.resolve().then(() => {
        console.log(2)
    })
}, 0);
setTimeout(() => {
    console.log(3)
    Promise.resolve().then(() => {
        console.log(4)
    })
}, 0);
Promise.resolve().then(() => {
    console.log(5)
})
Promise.resolve().then(() => {
    console.log(6)
})
Promise.resolve().then(() => {
    console.log(7)
})
Promise.resolve().then(() => {
    console.log(8)
})
Prom()
console.log("0")
</script>

<template></template>

<style scoped lang='less'></style>