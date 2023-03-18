<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  msg: String,
  wish: String,
  wishes: String
}>()

const emit = defineEmits(['carried'])
 
function dream() {
  emit('carried', 666)
}
</script>
 
<template>
  <p>=================helloworld================</p>
  <h1>{{ msg }}</h1>
  <button @click="dream">点击实现</button>
  <slot></slot>
  <slot name="dome"></slot>
  <p>=================helloworld================</p>
</template>
 
<style scoped>
* {
  color: aqua;
}
button {
  background-color: aqua;
  color: white;
}
</style>