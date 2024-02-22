import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "生活所思",
    link: "/thinking/",
  },
  {
    text: "生活记录",
    link: "/life-record/",
  },
  {
    text: "Topic",
    link: "/topic",
  },
  {
    text: "友链",
    icon: "link",
    link: "/friend",
  },
  {
    text: "关于",
    icon: "info",
    children: [
      { text: "关于我", icon: "people", link: "/intro" },
      { text: "关于本站", icon: "info", link: "/about" },
    ],
  },
  //   {
  //     text: "笔记分类",
  //     icon: "edit",
  //     children: [
  //       {
  //         text: "代码笔记",
  //         prefix: "/posts/",
  //         children: [
  //           { text: "iOS笔记", icon: "hk-apple", link: "iOS/" },
  //           { text: "前端笔记", icon: "code", link: "Web/" },
  //           { text: "Linux", icon: "linux", link: "Linux/" },
  //           { text: "Python", icon: "python", link: "Python/" },
  //           { text: "Rust", icon: "hk-rust", link: "Rust/" },
  //           { text: "React", icon: "react", link: "cross-platform/ReactNative/" },
  //           {
  //             text: "Flutter",
  //             icon: "hk-flutter",
  //             link: "cross-platform/Flutter/",
  //           },
  //         ],
  //       },
  //       {
  //         text: "博客相关",
  //         prefix: "/blog/",
  //         children: [{ text: "博客相关", icon: "blog", link: "" }],
  //       },
  //     ],
  //   },
]);