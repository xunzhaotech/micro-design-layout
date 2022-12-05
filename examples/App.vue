<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: luyb luyb@xunzhaotech.com
-->
<template>
  <a-config-provider>
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup(props, context) {
    const demoFun = (str: string) => {
      console.log('demo component tsx', str)
    }
    const getPopupContainer = (el: Element, dialogContext: any) => {
      if (dialogContext) {
        return dialogContext.getDialogWrap();
      }
      return document.body;
    };
    // 使用 expose 暴露组件内部的方法
    context.expose({ demoFun })
    return {
      getPopupContainer,
    };
  },
});
</script>

<style>
#app {
  height: 100%;
}
</style>
