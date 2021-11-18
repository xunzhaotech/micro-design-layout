<!--
 * @Author: xunzhaotech
 * @Email: luyb@xunzhaotech.com
 * @QQ: 1525572900
 * @LastEditors: xunzhaotech
-->
# MicroDesign
## 说明
MicroDesign是一款基于微服务的后端管理系统架构,致力于打造高效、规范、统一的企业级后端管理平台，采用全新的[Vue3.0](https://v3.cn.vuejs.org/guide/introduction.html)新版API之Composition API搭建，UI采用开源[Ant Design Vue](https://next.antdv.com/docs/vue/introduce-cn/)框架，致力打造服务企业的微服务架构后端管理框架。
## 插件
### [ant-design-vue](https://github.com/vueComponent/ant-design-vue)
#### 安装
使用 npm 或 yarn或cnpm 安装
:::: code-group
::: code-group-item NPM
```bash
$ npm install ant-design-vue@next --save
```
:::
::: code-group-item YARN
``` bash
$ yarn add ant-design-vue@next
```
:::
::: code-group-item CNPM
```bash
# $ npm install cnpm -g --registry=https://registry.npmmirror.com
$cnpm install ant-design-vue@next --save
```
:::
::::

#### 配置
main引入文件
:::: code-group
::: code-group-item TS
```bash
import 'ant-design-vue/es/layout/style';
import { Layout } from 'ant-design-vue';
import Antd from 'ant-design-vue'
```
:::
::: code-group-item JS
``` bash
import 'ant-design-vue/es/layout/style';
import { Layout } from 'ant-design-vue';
```
:::
::::
## 鸣谢
- https://github.com/vueComponent/pro-layout