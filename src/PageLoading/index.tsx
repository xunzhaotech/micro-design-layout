/*
 * @Author: luyb luyb@xunzhaotech.com
 * @Date: 2022-12-02 12:13:51
 * @LastEditors: luyb luyb@xunzhaotech.com
 * @LastEditTime: 2023-03-11 10:18:54
 * @FilePath: \micro-design-layout\src\PageLoading\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineComponent, h } from 'vue';
import { Spin, SpinProps } from 'ant-design-vue';
import { spinProps } from 'ant-design-vue/es/spin/Spin';

export type PageLoadingProps = SpinProps;

const PageLoading = defineComponent({
  name: 'PageLoading',
  props: {
    ...spinProps(),
  },
  render() {
    return h(
      'div',
      { style: { paddingTop: '100px', textAlign: 'center' } },
      h(Spin, { ...this.$props }),
    );
  },
});

export default PageLoading;
