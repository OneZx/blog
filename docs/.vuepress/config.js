module.exports = {
  title: "Every step counts",
  description: "一直在路上",
  locales: {
    "/": {
      lang: "zh-CN"
    }
  },
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  themeConfig: {
    // 导航栏配置
    nav: [
      { text: "Home", link: "/" },
      {
        text: "博文",
        items: [
          { text: "Android", link: "/android/" },
          { text: "ios", link: "/ios/" },
          { text: "Web", link: "/web/" }
        ]
      },
      { text: "MyBlog", link: "https://onezx.github.io" },
      { text: "Github", link: "https://github.com/OneZx" }
    ],
    // 侧边栏配置
    sidebar: "auto"
  }
};
