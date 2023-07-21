<template>
  <div>
    <router-view v-slot="{ Component }">
      <Suspense>
        <div>
          <component :is="Component" />
        </div>
      </Suspense>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
</script>
<style lang="less">
@import '../src/assets/less/reset.less';
/* @import 'uno.css'; */
@import 'animate.css';
/* @import 'ant-design-vue/dist/antd.css'; */

::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
</style>

