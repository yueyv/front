<script setup lang="ts">
import child from './child.vue'
 
function carried(value:any) {
  alert(`牛呀，都实现了！！！${value}`)
}
</script>
 
<template>
  <p>❀❀❀❀❀❀❀❀❀❀❀❀---app--vue---❀❀❀❀❀❀❀❀❀❀❀</p>
 
  <child msg="Vite + Vue" wish="不掉发" wishes="变瘦" @carried="carried">
    <h3>实现插槽1</h3>
 
    <template v-slot:dome>
      <h4>实现插槽2</h4>
    </template>
  </child>
 
  <p>❀❀❀❀❀❀❀❀❀❀❀❀---app--vue---❀❀❀❀❀❀❀❀❀❀❀</p>
</template>
 
<style scoped>
* {
  color: red;
}
</style>