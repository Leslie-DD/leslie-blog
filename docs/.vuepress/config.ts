import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({

  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

  base: "/leslie-blog/",

  lang: "zh-CN",
  title: "Evan 的博客",
  description: "Evan 的个人博客站点",

  head: [
    ['script',
      { src: '/js/base.js' }
    ]
  ],

  theme,

  shouldPrefetch: false,
  
});
