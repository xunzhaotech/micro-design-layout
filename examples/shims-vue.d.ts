/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: luyb luyb@xunzhaotech.com
 */

declare module '*.vue' {
  // import { DefineComponent } from 'vue';
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  // const Component: ReturnType<typeof defineComponent>;
  export default component;
}
