module.exports = {
  title: "Zxd的技术文档",
  description: "Document library",
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: "主页", link: "/" },
      {
        text: "博文",
        items: [
          { text: "Android", link: "/android/" },
          { text: "ios", link: "/ios/" },
          { text: "Web", link: "/web/" }
        ]
      },
      { text: "关于", link: "/about/" },
      { text: "Github", link: "https://github.com/OneZx" }
    ],
    // 侧边栏配置
    sidebar: [
      {
        title: "入门",
        children: ["/install/", "get-started/"]
      },
      {
        title: "组件",
        children: ["/components/button"]
      }
    ]
  }
};
