<!--
 * @Author: luyb luyb@xunzhaotech.com
 * @Date: 2022-12-04 13:39:26
 * @LastEditors: luyb luyb@xunzhaotech.com
 * @LastEditTime: 2022-12-04 14:19:39
 * @FilePath: \micro-design-layout\docs\guide\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# MicroDesign UI官方开发文档
## 说明
MicroDesign开发主要包括主题、组件、插件的开发方式,开发语言采用[TypeScript](https://www.typescriptlang.org/),注释符合官方的 [TSDoc](https://tsdoc.org/) 标准,文档生产工具采用[TYPEDOC](https://typedoc.org/guides/installation/),组件发布在[NPM](https://www.npmjs.com/)`@microdesign`目录。
## 平台及版本要求

## 包管理工具规范
- 从 `v16.13` 开始，`Node.js` 发布了 [Corepack](https://nodejs.org/api/corepack.html) 来管理包管理器。这是一项实验性功能，因此您需要通过运行如下脚本来启用它：`corepack enable`,这将自动在您的系统上安装 pnpm。 但是，它可能不是最新版本的 pnpm。 若要升级，请检查 最新的 pnpm 版本 并运行： `corepack prepare pnpm@<version> --activate`开发`MicoDesign UI`体系全部采用[pnpm](https://pnpm.io/zh/motivation)作为包管理工具。
### 安装
<CodeGroup>
  <CodeGroupItem title="YARN">

```bash
yarn
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash
npm install
```

  </CodeGroupItem>
</CodeGroup>

```sh
npm install -g pnpm
```
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## 开发注释规范
## 组件开发规范
## 插件开发规范
## 主题开发规范
## 组件发布规范