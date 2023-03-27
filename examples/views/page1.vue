<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: luyb luyb@xunzhaotech.com
-->
<template>
  <page-container title="Page 1" sub-title="is a sub-title.">
    <template #content>
      <div>
        container.content
        <h1>{{ text }}</h1>
      </div>
    </template>
    <span>page-content</span>
    <Button @click="handleClick">Button</Button>
  </page-container>
</template>

<script lang="ts" name="page1" setup>
import { ref } from 'vue';
import { Button, message } from 'ant-design-vue';

const text = ref<string>('1');
const handleClick = () => {
  message.info('clicked');
  text.value = `${Math.random()}`;
};
</script>
