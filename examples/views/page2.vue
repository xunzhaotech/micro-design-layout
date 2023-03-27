<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: luyb luyb@xunzhaotech.com
-->
<template>
  <PageContainer :title="route.meta.title">
    <template #tags>
      <Tag>tag1</Tag>
      <Tag color="pink">tag2</Tag>
    </template>
    <Result
      status="404"
      :style="{
        height: '100%',
        background: '#fff',
      }"
      title="Hello World"
      sub-title="Sorry, you are not authorized to access this page."
    >
      <template #extra>
        <a-button type="primary">Back Home</a-button>
      </template>
    </Result>
  </PageContainer>
</template>

<script lang="ts" name="page2" setup>
import { useRoute } from 'vue-router';
import { Tag, Result } from 'ant-design-vue';

const route = useRoute();
</script>
