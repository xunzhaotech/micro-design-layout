<!--
 * @Author: luyb luyb@xunzhaotech.com
 * @Date: 2022-12-04 13:39:17
 * @LastEditors: luyb luyb@xunzhaotech.com
 * @LastEditTime: 2022-12-04 17:32:15
 * @FilePath: \micro-design-layout\docs\configs\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 配置
## 1. 搭建Vite+Vue项目
```sh
# npm 6.x
npm init vite@latest micro-design-app --template vue

# npm 7+, 需要额外的双横线：
npm init vite@latest micro-design-app -- --template vue

# yarn
yarn create vite micro-design-app --template vue

# pnpm
pnpm create vite micro-design-app -- --template vue
```
## 2.Vite配置
```sh
import { defineConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';

import { viteMockServe } from 'vite-plugin-mock';

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    base: './',
    plugins: [
      vue(),
      // mock
      viteMockServe({
        mockPath: 'mock', //mock文件地址
        localEnabled: !!process.env.USE_MOCK, // 开发打包开关
        prodEnabled: !!process.env.USE_CHUNK_MOCK, // 生产打包开关
        logger: false, //是否在控制台显示请求日志
        supportTs: true
      }),
      styleImport({
        libs: [
          // nutui按需加载配置，详见  https://nutui.jd.com/#/start
          {
            libraryName: '@nutui/nutui',
            libraryNameChangeCase: 'pascalCase',
            resolveStyle: name => {
              return `@nutui/nutui/dist/packages/${name}/index.scss`;
            }
          }
        ]
      })
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src'
        }
      ]
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          // 配置 nutui 全局 scss 变量
          additionalData: `@import "@nutui/nutui/dist/styles/variables.scss";`
        },
        less: {
          charset: false,
          additionalData: '@import "./src/assets/less/common.less";'
        }
      }
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      },
      outDir: 'dist', //指定输出路径
      assetsDir: 'assets' //指定生成静态资源的存放路径
    }
  };
});
```
## 3. tsconfig配置
```sh
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "lib": ["esnext", "dom"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
```
## 4. prettier配置
```sh
// .prettierrc.json

{
  "semi": true,
  "eslintIntegration": true,
  "singleQuote": true,
  "endOfLine": "lf",
  "tabWidth": 2,
  "trailingComma": "none",
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```
## 5. eslint配置
```sh
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint'
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    // 分号
    semi: [1, 'always'],
    // 对象参数前的空格
    'object-curly-spacing': [1, 'always']
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ],
  globals: {
    defineProps: 'readonly'
  }
};
```