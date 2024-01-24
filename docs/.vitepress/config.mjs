import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/yta/",
  title: "YTA",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "前言",
        items: [
          { text: "介绍", link: "/markdown-examples" },
          { text: "规范", link: "/specification" },
          { text: "vue", link: "/vue-specification" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/mehealing/yta" },
    ],
  },
});
