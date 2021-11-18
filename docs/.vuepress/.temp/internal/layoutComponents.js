import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/360极速浏览器下载/MicroDesign/micro-design-layout/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/360极速浏览器下载/MicroDesign/micro-design-layout/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
