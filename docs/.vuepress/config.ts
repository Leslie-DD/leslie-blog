import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/leslie-blog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Leslie的博客",
      description: "Leslie的个人博客站点",
    },
  },

  theme,

  shouldPrefetch: false,
});
