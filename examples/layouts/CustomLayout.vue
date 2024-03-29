<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: luyb luyb@xunzhaotech.com
-->
<template>
  <micro-layout
    v-model:collapsed="baseState.collapsed"
    v-model:selectedKeys="baseState.selectedKeys"
    v-model:openKeys="baseState.openKeys"
    v-bind="state"
    :loading="loading"
    :breadcrumb="{ routes: breadcrumb }"
  >
    <template #menuHeaderRender>
      <a>
        <img src="https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg" />
        <h1>Micro Layout</h1>
      </a>
    </template>
    <!-- only work layout `Side` -->
    <template #headerContentRender>
      <a :style="{ margin: '0 8px', fontSize: '20px' }" @click="handleCollapsed">
        <MenuUnfoldOutlined v-if="baseState.collapsed" />
        <MenuFoldOutlined v-else />
      </a>
      <span>some..</span>
    </template>
    <!-- custom right-content -->
    <template #rightContentRender>
      <span style="color: #0f0">right</span>
    </template>
    <!-- custom breadcrumb itemRender  -->
    <template #breadcrumbRender="{ route, params, routes }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        <SmileOutlined />
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="{ path: route.path, params }">
        <SmileOutlined />
        {{ route.breadcrumbName }}
      </router-link>
    </template>
    <!-- custom menu-item -->
    <template #menuItemRender="{ item, icon }">
      <a-menu-item
        :key="item.path"
        :disabled="item.meta?.disabled"
        :danger="item.meta?.danger"
        :icon="icon"
      >
        <router-link :to="{ path: item.path }">
          <div class="a-menu-item-title">
            <Badge count="5" dot>
              {{ item.meta.title }}
            </Badge>
          </div>
        </router-link>
      </a-menu-item>
    </template>
    <!-- content begin -->
    <router-view />
    <!-- content end -->
    <template #footerRender>
      <GlobalFooter
        :links="[
          {
            key: '讯曌官网',
            title: '讯曌官网',
            href: 'http://www.xunzhaotech.com/#/home',
            blankTarget: true,
          },
          {
            key: '快智岛',
            title: '快智岛',
            href: 'https://xunzhaotech.gitee.io/kuaizhidao',
            blankTarget: true,
          },
          {
            key: '答神',
            title: '答神',
            href: 'https://xunzhaotech.gitee.io/kuaizhidao',
            blankTarget: true,
          },
        ]"
        copyright="@2016-2021 &copy; Xunzhaotech"
      ></GlobalFooter>
    </template>
  </micro-layout>
</template>

<script lang="ts" name="CustomLayout" setup>
import { computed, reactive, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { Button, Switch, Select, Space, Badge, Menu } from 'ant-design-vue';
import { getMenuData, clearMenuItem, GlobalFooter } from 'micro-layout';
import { SmileOutlined } from '@ant-design/icons-vue';
import type { RouteContextProps } from 'micro-layout';

// const i18n = (t: string) => t;
const loading = ref(false);
const router = useRouter();
const { menuData } = getMenuData(clearMenuItem(router.getRoutes()));
const baseState = reactive<Omit<RouteContextProps, 'menuData'>>({
  selectedKeys: [],
  openKeys: [],
  // default
  collapsed: false,
});

const state = reactive({
  menuData,
  splitMenus: false,
  // title: 'ProLayout',
  // logo: 'https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg',
  navTheme: 'dark',
  layout: 'mix',
});
const breadcrumb = computed(() =>
  router.currentRoute.value.matched.concat().map(item => {
    return {
      path: item.path,
      breadcrumbName: item.meta.title || '',
    };
  }),
);

const handleCollapsed = () => {
  baseState.collapsed = !baseState.collapsed;
};
watchEffect(() => {
  if (router.currentRoute) {
    const matched = router.currentRoute.value.matched.concat();
    baseState.selectedKeys = matched.filter(r => r.name !== 'index').map(r => r.path);
    baseState.openKeys = matched
      .filter(r => r.path !== router.currentRoute.value.path)
      .map(r => r.path);
  }
});

function handlePageLoadingClick() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}
</script>
