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
    iconfont-url="//at.alicdn.com/t/font_2804900_nzigh7z84gc.js"
  >
    <template #menuHeaderRender>
      <a>
        <img src="https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg" />
        <h1>Micro Layout</h1>
      </a>
    </template>
    <!-- custom collapsed button -->
    <template #collapsedButtonRender="collapsed">
      <HeartOutlined v-if="collapsed" />
      <SmileOutlined v-else />
    </template>
    <!-- custom right-content -->
    <template #rightContentRender>
      <div style="margin-right: 12px">
        <a-avatar shape="square" size="small">
          <template #icon>
            <UserOutlined />
          </template>
        </a-avatar>
      </div>
    </template>
    <!-- custom breadcrumb itemRender  -->
    <template #breadcrumbRender="{ route, params, routes }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ route.breadcrumbName }}
      </span>
      <router-link v-else :to="{ path: route.path, params }">
        {{ route.breadcrumbName }}
      </router-link>
    </template>
    <template #menuExtraRender="{ collapsed }">
      <a-input-search v-if="!collapsed" @search="handleSearch" />
    </template>
    <template #menuFooterRender>
      <a
        :style="{
          lineHeight: '48rpx',
          display: 'flex',
          height: '48px',
          alignItems: 'center',
        }"
        href="https://preview.pro.antdv.com/dashboard/analysis"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="pro-logo"
          src="https://procomponents.ant.design/favicon.ico"
          :style="{
            width: '16px',
            height: '16px',
            margin: '0 16px',
            marginRight: '10px',
          }"
        />
        <span v-if="!baseState.collapsed">Preview Pro</span>
      </a>
    </template>

    <!-- content begin -->
    <router-view v-slot="{ Component }">
      <WaterMark content="Micro Design">
        <component :is="Component" />
      </WaterMark>
    </router-view>

    <!-- content end -->
    <FooterToolbar>
      <template #extra>
        <span>FooterToolbar</span>
      </template>
      <a-space>
        <span :disabled="state.layout !== 'mix'">
          <span style="margin-right: 8px">SplitMenus:</span>
          <a-switch
            v-model:checked="state.splitMenus"
            :disabled="state.layout !== 'mix'"
            checked-children="ON"
            un-checked-children="OFF"
          />
        </span>
        <a-button @click="handlePageLoadingClick">Page Loading</a-button>
        <a-select v-model:value="state.navTheme" style="width: 100px">
          <a-select-option value="light">Light</a-select-option>
          <a-select-option value="dark">Dark</a-select-option>
        </a-select>
        <a-select v-model:value="state.layout" style="width: 100px">
          <a-select-option value="side">Side</a-select-option>
          <a-select-option value="top">Top</a-select-option>
          <a-select-option value="mix">Mix</a-select-option>
        </a-select>
      </a-space>
    </FooterToolbar>
  </micro-layout>
</template>

<script lang="ts" name="BasicLayout" setup>
import { computed, reactive, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import { message } from 'ant-design-vue';
import { getMenuData, clearMenuItem, WaterMark, FooterToolbar } from 'micro-layout';
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
  splitMenus: true,
  title: 'MicroLayout',
  logo: 'https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg',
  navTheme: 'dark',
  layout: 'side',
  fixSiderbar: true,
});
const breadcrumb = computed(() =>
  router.currentRoute.value.matched.concat().map(item => {
    return {
      path: item.path,
      breadcrumbName: item.meta.title || '',
    };
  }),
);

// const handleCollapsed = () => {
//   baseState.collapsed = !baseState.collapsed;
// };
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
function handleSearch() {
  message.info('search..');
}
</script>
