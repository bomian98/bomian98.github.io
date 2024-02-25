<template>
    <SkipLink />
  <CommonWrapper>
    <div class="container pt-4">
      <div id="memos"></div>
      <div id="memo-list"></div>
    </div>
  </CommonWrapper>
</template>

<script setup lang="ts">
import CommonWrapper from "@theme-hope/components/CommonWrapper";
import SkipLink from "@theme-hope/components/SkipLink";
import { withBase } from "vuepress/client";
import { ref, onMounted } from "vue";

import { usePageData, usePageFrontmatter } from "vuepress/client";
import {
  useThemeData,
  useThemeLocaleData,
  useWindowSize,
} from "@theme-hope/composables/index";

declare const ENABLE_BLOG: boolean
const themeData = useThemeData();
const themeLocale = useThemeLocaleData();
const page = usePageData();
const frontmatter = usePageFrontmatter();
const { isMobile } = useWindowSize();


// import "../../public/cdn/twikoo.min.js";
import "../../public/cdn/ArtalkLite.js";
import "../../public/cdn/marked.min.js";
import "../../public/cdn/APlayer.min.js";
// import "../../public/cdn/twikoo.min.js";
// import "../../public/cdn/ArtalkLite.js";
// import "../../public/cdn/marked.min.js";
// import "../../public/cdn/APlayer.min.js";
// import "$withBase('public/cdn/twikoo.min.js')";
// import "$withBase('public/cdn/ArtalkLite.js')";
// import "$withBase('public/cdn/marked.min.js')";
// import "$withBase('public/cdn/APlayer.min.js')";

const meting_api = ref(
  "https://api.injahow.cn/meting/?server=:server&type=:type&id=:id&auth=:auth&r=:r"
);

import "../../public/cdn/Meting.min.js";
// import "../../public/cdn/lozad.min.js";
import "../../public/memos.js";
// import "$withBase('public/cdn/Meting.min.js')";
// import "$withBase('public/cdn/lozad.min.js')";
// import "$withBase('public/cdn/memos.js')";

// 你可以使用ref来保留响应性
const memosJson = ref({
  url: "base/memos.json",
});

const memosMyList = ref([
  {
    creatorName: "林木木",
    website: "https://bomian98.github.io",
    link: "http://20.255.52.45:5230/",
    creatorId: "101",
    avatar:
      "https://gravatar.memobbs.app/avatar/ba83fa02fc4b2ba621514941307e21be?s=80",
    twikoo: "https://metk.edui.fun",
  },
]);

// 假设你需要在组件挂载时执行一些逻辑
onMounted(() => {
  // 这里可以写一些组件挂载时需要的额外逻辑
});
</script>

<style scoped>
@import "../../public/cdn/APlayer.min.css";
@import "../../public/cdn/animate.min.css";
@import "../../public/cdn/ArtalkLite.css";
@import "../../public/grid.css";
@import "../../public/memos.css";
/* @import "../../public/cdn/APlayer.min.css"; */
/* @import $withBase("cdn/animate.min.css");
@import "$withBase('cdn/ArtalkLite.css')";
@import "$withBase('grid.css')";
@import "$withBase('memos.css')"; */
h1 {
  font-size: 1.5rem;
}
a {
  outline: none;
  background-color: transparent;
  color: var(--light-color);
  text-decoration: none;
  cursor: pointer;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  -webkit-text-decoration-skip: objects;
}
.dark-theme a {
  color: var(--dark-color);
}
</style>
