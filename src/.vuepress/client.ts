

import { onMounted } from "vue";
import { defineClientConfig } from "vuepress/client";
import Layout from "@theme-hope/layouts/Layout";
import NotFound from "@theme-hope/layouts/NotFound";
import MemosLayout from "./theme/layouts/MemosLayout.vue";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import packageJson from '../../package.json';
export default defineClientConfig({
  // 你可以在这里覆盖或新增布局
  layouts: {
    Layout,
    NotFound,
    MemosLayout,
  },
  setup: () => {
    onMounted(() => {
      console.log(
        `%c ✨上冬十二的博客 v${packageJson.version}✨ %c ✨Oragekk's Blog✨ %c\n
               你，对，你，就是你\n
                  🍻- ( ゜- ゜)つロ 乾杯~🍻\n
                          ---- 最是春风留不住，徒留我孤直。\n
                                  欲寄彩笺兼尺素，山长水阔知何处？\n`,
        `background: #eb507e; padding:5px; font-size:12px; color: #f9f4dc;`,
        `background: #030307; padding:5px; font-size:12px; color:#fff;`,
        `color: #51c4d3; font-size:12px;`
      );
    });
  }
});