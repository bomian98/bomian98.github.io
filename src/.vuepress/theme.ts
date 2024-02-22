import { MyTheme } from "./theme/index";
import { zhNavbar } from "./navbar/index.js";
// import { zhSidebar } from "./sidebar/index.js";
export default MyTheme({
  hotReload: true,

  hostname: "https://oragekk.me",
  author: {
    name: "不眠",
    url: "https://orgaekk.me",
  },

  // 图标资源 https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E5%85%A8%E5%B1%80%E8%AE%BE%E7%BD%AE
  iconAssets: [
    "//at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
    "//at.alicdn.com/t/c/font_3941380_40oya9bsklp.css",
  ],
  // 目录侧会出现打印按钮
  print: false,
  // sidebar setting
  sidebar: false,
  // 页面关闭文件路径显示
  breadcrumb: false,
  // footer setting
  footer: "默认页脚",
  displayFooter: true,

  // PageMeta
  contributors: false,
  editLink: false,

  logo: "/logo.svg",

  docsDir: "src",

  /*
    导航栏布局选项：
    https://vuepress-theme-hope.github.io/v2/zh/config/theme/layout.html
  */
  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Links", "Outlook", "Search"],
  },

  blog: {
    name: "不眠",
  },
  locales: {
    "/": {
      navbar: zhNavbar,

      blog: {
        description: "",
        intro: "/intro.html",
      },
      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },
  // navbarAutoHide: "always",
  // 加密
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },
  plugins: {
    components: {
      components: ["BiliBili", "Badge"],
    },
    blog: {
      filter: ({ filePathRelative, frontmatter }) => {
        // 将标记为非文章，并且是说说的加入文章采集中，以便后续筛选
        if (!frontmatter.article && frontmatter.news) return true;
        return true;
      },
      type: [
        {
          key: "news",
          filter: (page) => page.frontmatter.news === true,
          path: "/news/",
          layout: "News",
          frontmatter: () => ({ title: "说说" }),
        },
      ],
    },

    photoSwipe: {
      selector: [
        ".theme-hope-content :not(a) > img:not([no-view])",
        ".news-content :not(a) > .vp-article-excerpt img",
      ],
    },

    git: true,

    feed: {
      rss: true,
    },

    comment: {
      provider: "Waline",
      serverURL: "https://talk.oragekk.me/", // your server url
      reaction: true,
      requiredMeta: ["nick"],
      wordLimit: 300,
      emoji: [
        "https://unpkg.com/@waline/emojis@1.1.0/tieba",
        "https://unpkg.com/@waline/emojis@1.1.0/weibo",
        "https://emoji.shojo.cn/bili/webp/tv_小电视_动图",
        "https://emoji.shojo.cn/bili/webp/罗小黑战记",
        "https://emoji.shojo.cn/bili/webp/2233娘",
        "https://emoji.shojo.cn/bili/webp/装扮小姐姐梦幻冬季",
        "https://emoji.shojo.cn/bili/webp/装扮小姐姐·秋日午后",
        "https://emoji.shojo.cn/bili/webp/星尘",
        "https://emoji.shojo.cn/bili/webp/池年",
      ],
      locales: {
        "/": {
          placeholder:
            "欢迎留言~ _(≧∇≦」∠)_ (填写常用邮箱即可快速收到回复通知~)",
        },
      },
    },

    // @vuepress/plugin-prismjs 代码主题
    // prismjs: false,

    /*
      代码复制 @vuepress/plugin-copy-code
      https://theme-hope.vuejs.press/zh/guide/feature/copy-code.html
    */
    copyCode: {
      showInMobile: true,
    },

    copyright: {
      author: "不眠",
      license: "CC BY-NC-SA 4.0",
      global: true,
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      tasklist: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
