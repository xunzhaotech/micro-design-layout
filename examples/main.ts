/*
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
 */
import 'ant-design-vue/es/style';
import { ConfigProvider, Button } from 'ant-design-vue';
import { createApp } from 'vue';
import router from './router';
import icons from './icons';
import App from './App.vue';

import MicroLayout, { PageContainer } from '../src'; // '../dist/pro-layout.es';

const app = createApp(App);
app.use(router);
app.use(icons);
app.use(ConfigProvider);
app.use(Button);
app.use(MicroLayout);
app.use(PageContainer);
app.mount('#app');
