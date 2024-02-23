import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Thinking",
    link: "/thinking/",
  },
  {
    text: "Record",
    link: "/life-record/",
  },
  {
    text: "Topic",
    link: "/topic",
  },
  {
    text: "Friend",
    link: "/info/friend",
  },
  {
    text: "Info",
    link: "/info/info",
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
