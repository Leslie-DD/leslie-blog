import { defineClientConfig } from "vuepress/client";

import "vuepress-theme-hope/presets/shinning-feature-panel.scss"
import "vuepress-theme-hope/presets/left-blog-info.scss"
import "vuepress-theme-hope/presets/hr-driving-car.scss"
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    if (typeof window !== 'undefined') {
      // router.beforeEach((to, from, next) => {
      //   console.log('Before navigation:', {
      //     from: from.path, // 当前页面路径
      //     to: to.path,     // 即将导航到的页面路径
      //   });
      //   next(); // 必须调用 next() 才能继续导航
      // });

      router.afterEach((to) => {
        console.log(`Navigated to: ${to.path}`); // 输出当前路径
        // 匹配包含 '/self_intro' 的路径
        const demoPathPattern = /\/self_intro/;
        if (demoPathPattern.test(to.path)) {
          // 检查是否已经加载了 script，避免重复添加
          // if (!document.querySelector('script[src="https://clustrmaps.com/globe.js?d=Cz5VPItXGVzefWoMiEU8Ll8wQk5Je7uR1EsnOmG41-k"]')) {
          //   console.log(`Add clustrmaps script to: ${to.path}`); // 输出当前路径  
          //   const script = document.createElement('script');
          //   script.id = 'clstr_globe';
          //   script.src = 'https://clustrmaps.com/globe.js?d=Cz5VPItXGVzefWoMiEU8Ll8wQk5Je7uR1EsnOmG41-k';
          //   script.async = true;
          //   document.body.appendChild(script);
          // } else {
          //   console.log(`Already added clustrmaps script to: ${to.path}`); // 输出当前路径  
          // }

          if (!document.getElementById('clstr_globe')) {
            console.log(`Adding Clustrmaps script to: ${to.path}`);

            // 动态创建 script 标签
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.id = 'clstr_globe';
            script.src = '//clustrmaps.com/globe.js?d=Cz5VPItXGVzefWoMiEU8Ll8wQk5Je7uR1EsnOmG41-k';
            script.async = true;

            // 将 script 添加到 body
            document.body.appendChild(script);

            // 等待脚本加载完成后初始化（如需初始化）
            script.onload = () => {
              console.log('Clustrmaps script loaded successfully');
            };

            script.onerror = () => {
              console.error('Failed to load Clustrmaps script');
            };
          } else {
            console.log(`Clustrmaps script already added to: ${to.path}`);
          }
        }
      });
    }
  },
  setup() { },
  rootComponents: [],


});

