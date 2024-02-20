import { defineUserConfig } from "vuepress";
// import { getDirname, path } from "vuepress/utils";
// import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme";
// const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",
  // theme: hopeTheme(options, { custom: true }),
  theme,
});
