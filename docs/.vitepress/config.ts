/*
 * @Author: luyb luyb@xunzhaotech.com
 * @Date: 2022-12-04 12:15:51
 * @LastEditors: luyb luyb@xunzhaotech.com
 * @LastEditTime: 2022-12-04 12:16:17
 * @FilePath: \micro-design-layout\docs\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vitepress';
export default defineConfig({
    title: 'MicroDesign Layout',
    themeConfig: {
      sidebar: {
        '/dist/': [
          {
            text: 'API 文档',
            items: [
              { text: 'Entry', link: '/dist/modules' },
              { text: 'Class', link: '/dist/classes/index.MyClass' },
              { text: 'Interface', link: '/dist/interfaces/index.MyInterface' },
            ],
          },
        ],
      }
    }
  })