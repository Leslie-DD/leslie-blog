import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as p,c as r,a as e,b as n,d as s,e as l}from"./app-CfghY5LJ.js";const d="/leslie-blog/assets/%E5%90%AF%E5%8A%A8%E5%BC%80%E5%8F%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%8A%A5%E9%94%99-Ca7CvZA0.png",c="/leslie-blog/assets/%E5%90%AF%E5%8A%A8%E5%BC%80%E5%8F%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%88%90%E5%8A%9F-C0Tmhoa9.png",i={},m=e("h2",{id:"一、准备运行环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、准备运行环境"},[e("span",null,"一、准备运行环境")])],-1),u={href:"https://theme-hope.vuejs.press/zh/get-started/env.html",target:"_blank",rel:"noopener noreferrer"},h=l('<h2 id="二、pnpm-run-docs-dev报错" tabindex="-1"><a class="header-anchor" href="#二、pnpm-run-docs-dev报错"><span>二、pnpm run docs:dev报错</span></a></h2><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3><blockquote><p>当重新把项目从github拉下来后，直接运行 <code>pnpm run docs:dev</code> 报错;</p><p>提示 <code>vuepress: not found</code>，需要先安装 <code>node_modules</code></p></blockquote><p><img src="'+d+`" alt=""></p><h3 id="_1-解决方法" tabindex="-1"><a class="header-anchor" href="#_1-解决方法"><span>1. 解决方法</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Deprecated</span>
<span class="token function">npm</span> i vuepress@next vuepress-theme-hope@next <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> update
<span class="token comment"># Deprecated</span>
<span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/bundler-vite@next <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> update

<span class="token function">pnpm</span> <span class="token function">install</span> --frozen-lockfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+c+'">’</p>',8),v={href:"https://theme-hope.vuejs.press/zh/",target:"_blank",rel:"noopener noreferrer"};function _(b,g){const t=o("ExternalLinkIcon");return p(),r("div",null,[m,e("p",null,[e("a",u,[n("准备运行环境"),s(t)])]),h,e("p",null,[e("strong",null,[n("注："),e("a",v,[n("Vuepress-theme-hope 官网配置教程"),s(t)])])])])}const E=a(i,[["render",_],["__file","start_project_and_deploy.html.vue"]]),y=JSON.parse('{"path":"/about/site/start_project_and_deploy.html","title":"启动项目与部署","lang":"zh-CN","frontmatter":{"editLink":false,"comment":false,"title":"启动项目与部署","date":"2022-04-17T00:00:00.000Z","description":"一、准备运行环境 准备运行环境 二、pnpm run docs:dev报错 背景 当重新把项目从github拉下来后，直接运行 pnpm run docs:dev 报错; 提示 vuepress: not found，需要先安装 node_modules 1. 解决方法 ’ 注：Vuepress-theme-hope 官网配置教程","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/about/site/start_project_and_deploy.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:title","content":"启动项目与部署"}],["meta",{"property":"og:description","content":"一、准备运行环境 准备运行环境 二、pnpm run docs:dev报错 背景 当重新把项目从github拉下来后，直接运行 pnpm run docs:dev 报错; 提示 vuepress: not found，需要先安装 node_modules 1. 解决方法 ’ 注：Vuepress-theme-hope 官网配置教程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T01:46:14.000Z"}],["meta",{"property":"article:author","content":"Leslie"}],["meta",{"property":"article:published_time","content":"2022-04-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-19T01:46:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"启动项目与部署\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-19T01:46:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"一、准备运行环境","slug":"一、准备运行环境","link":"#一、准备运行环境","children":[]},{"level":2,"title":"二、pnpm run docs:dev报错","slug":"二、pnpm-run-docs-dev报错","link":"#二、pnpm-run-docs-dev报错","children":[{"level":3,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":3,"title":"1. 解决方法","slug":"_1-解决方法","link":"#_1-解决方法","children":[]}]}],"git":{"createdTime":1664720147000,"updatedTime":1713491174000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":2}]},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"about/site/start_project_and_deploy.md","localizedDate":"2022年4月17日","excerpt":"<h2>一、准备运行环境</h2>\\n<p><a href=\\"https://theme-hope.vuejs.press/zh/get-started/env.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">准备运行环境</a></p>\\n<h2>二、pnpm run docs:dev报错</h2>\\n<h3>背景</h3>\\n<blockquote>\\n<p>当重新把项目从github拉下来后，直接运行 <code>pnpm run docs:dev</code> 报错;</p>\\n<p>提示 <code>vuepress: not found</code>，需要先安装 <code>node_modules</code></p>\\n</blockquote>","autoDesc":true}');export{E as comp,y as data};