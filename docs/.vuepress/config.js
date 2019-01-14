module.exports = {
  title: "Every step counts",
  description: "一直在路上",
  base: "/zxdfe.github.io/",
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  head: [["link", { rel: "icon", href: `/z.png` }]],
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: "Home", link: "/" },
      {
        text: "2019",
        items: [
          { text: "Web", link: "/web/" },
          { text: "python", link: "/python/" },
          { text: "Node", link: "/Node/" }
        ]
      },
      { text: "About", link: "https://onezx.github.io" },
      { text: "Github", link: "https://github.com/OneZx" }
    ],
    // 侧边栏配置
    sidebar: "auto"
  }
};
