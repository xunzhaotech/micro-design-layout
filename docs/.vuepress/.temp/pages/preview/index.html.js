export const data = {
  "key": "v-ea870140",
  "path": "/preview/",
  "title": "MicroDesign",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "说明",
      "slug": "说明",
      "children": []
    },
    {
      "level": 2,
      "title": "插件",
      "slug": "插件",
      "children": [
        {
          "level": 3,
          "title": "ant-design-vue",
          "slug": "ant-design-vue",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "鸣谢",
      "slug": "鸣谢",
      "children": []
    }
  ],
  "filePathRelative": "preview/README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
