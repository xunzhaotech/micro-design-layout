/*
 * @Author: luyb luyb@xunzhaotech.com
 * @Date: 2022-12-04 12:15:51
 * @LastEditors: luyb luyb@xunzhaotech.com
 * @LastEditTime: 2022-12-04 17:08:19
 * @FilePath: \micro-design-layout\docs\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
 import { demoBlockPlugin } from 'vitepress-theme-demoblock'
 import { defineConfig } from 'vitepress'
 import { version } from '../../package.json'
const config = defineConfig({
    base: '/micro-design-layout/',
    lang: 'en-US',
    title: 'MicroDesign UI',
    description: 'Vite & Vue powered static site generator.',
  
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    themeConfig: {
      siteTitle: "MicroDesign UI",
      logo: "/logo.png",
      // 展示搜索框
      // algolia: {
      //   appKey: '12122121212',
      //   indexName: '',
      //   searchParameters: {
      //     faeFilters: ['tags:guide,api']
      //   }
      // },
      nav: [
          { text: '说明', link: '/guide/', activeMatch: '/guide/' },
          { text: '配置', link: '/configs/', activeMatch: '/configs/' },
          { text: '注释', link: '/pages/notes/', activeMatch: '/pages/components/' },
          { 
            text: '开发规范',
            items: [
              { text: '插件', link: '/pages/plugins/', activeMatch: '/pages/plugins/' },
              { text: '组件', link: '/pages/components/', activeMatch: '/pages/theme/' },
              { text: '主题', link: '/pages/themes/', activeMatch: '/pages/theme/' },
            ] 
          },
          { text: 'AP1文档', link: '/dist/README.md', activeMatch: '/pages/docs/' },
          { text: '社区', link: '/pages/community/', activeMatch: '/pages/community/' },
          { text: '关于', link: '/pages/about/', activeMatch: '/pages/about/' },
          { text: '链接', link: '/pages/links/', activeMatch: '/pages/links/' },
          {
          text: version ,
          items: [
              {
              text: 'Github',
              link: 'https://github.com/xunzhaotech/micro-design-layout.git'
              },
              {
              text: 'Gitee',
              link: 'https://gitee.com/MicroDesign/micro-design-layout.git'
              }
          ]}
      ],
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
      },
      // sidebar: [
            // {
            //   text: "Button 按钮",
            //   link: "/components/button/"
            // },
            // {
            //   text: "Icon 图标",
            //   link: "/components/icon/"
            // },
      // ],
      socialLinks: [
        { icon: "github", link: "https://github.com/xunzhaotech/micro-design-layout.git" },
        // You can also add custom icons by passing SVG as string:
        {
          icon: {
            svg: '<svg role="img" viewBox="0 0 24 24" xmlns="SVG namespace"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
          },
          link: "...",
        },
      ],
      docFooter: {
        prev: 'Pagina prior',
        next: 'Proxima pagina'
      },
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2022-present MicroDesign UI'
      }
    },
    markdown: {
      config: (md) => {
        md.use(demoBlockPlugin)
      },
      lineNumbers: true
    }
   })
  export default config
    