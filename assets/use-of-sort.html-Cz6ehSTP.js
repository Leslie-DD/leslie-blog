import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o,c as l,a as e,b as t,d as r,w as i,e as p}from"./app-CfghY5LJ.js";const c={},m=p(`<p>本页面将简要介绍排序的用法。</p><h2 id="理解数据的特点" tabindex="-1"><a class="header-anchor" href="#理解数据的特点"><span>理解数据的特点</span></a></h2><p>使用排序处理数据有利于理解数据的特点，方便我们之后的分析与视觉化。像一些生活中的例子比如词典，菜单，如果不是按照一定顺序排列的话，人们想要找到自己需要的东西的时间就会大大增加。</p><p>计算机需要处理大规模的数据，排序后，人们可以根据数据的特点和需求来设计计算机的后续处理流程。</p><h2 id="降低时间复杂度" tabindex="-1"><a class="header-anchor" href="#降低时间复杂度"><span>降低时间复杂度</span></a></h2><p>使用排序预处理可以降低求解问题所需要的时间复杂度，通常是一个以空间换取时间的平衡。如果一个排序好的列表需要被多次分析的话，只需要耗费一次排序所需要的资源是很划算的，因为之后的每次分析都可以减少很多时间。</p><div class="hint-container info"><p class="hint-container-title">&quot;示例：检查给定数列中是否有相等的元素&quot;</p><pre><code>考虑一个数列，你需要检查其中是否有元素相等。

一个朴素的做法是检查每一个数对，并判断这一对数是否相等。时间复杂度是 $O(n^2)$。

我们不妨先对这一列数排序，之后不难发现：如果有相等的两个数，它们一定在新数列中处于相邻的位置上。这时，只需要 $O(n)$ 地扫一遍新数列了。

总的时间复杂度是排序的复杂度 $O(n\\log n)$。
</code></pre></div><h2 id="作为查找的预处理" tabindex="-1"><a class="header-anchor" href="#作为查找的预处理"><span>作为查找的预处理</span></a></h2>`,8),h=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"O"),e("mo",{stretchy:"false"},"("),e("mi",null,"log"),e("mo",null,"⁡"),e("mi",null,"n"),e("mo",{stretchy:"false"},")")]),e("annotation",{encoding:"application/x-tex"},"O(\\log n)")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),e("span",{class:"mopen"},"("),e("span",{class:"mop"},[t("lo"),e("span",{style:{"margin-right":"0.01389em"}},"g")]),e("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),e("span",{class:"mord mathnormal"},"n"),e("span",{class:"mclose"},")")])])],-1);function d(u,g){const a=n("RouteLink");return o(),l("div",null,[m,e("p",null,[t("排序是 "),r(a,{to:"/algorithms/sort/binary.html"},{default:i(()=>[t("二分查找")]),_:1}),t(" 所要做的预处理工作。在排序后使用二分查找，可以以 "),h,t(" 的时间在序列中查找指定的元素。")])])}const y=s(c,[["render",d],["__file","use-of-sort.html.vue"]]),x=JSON.parse('{"path":"/algorithms/sort/use-of-sort.html","title":"","lang":"zh-CN","frontmatter":{"description":"本页面将简要介绍排序的用法。 理解数据的特点 使用排序处理数据有利于理解数据的特点，方便我们之后的分析与视觉化。像一些生活中的例子比如词典，菜单，如果不是按照一定顺序排列的话，人们想要找到自己需要的东西的时间就会大大增加。 计算机需要处理大规模的数据，排序后，人们可以根据数据的特点和需求来设计计算机的后续处理流程。 降低时间复杂度 使用排序预处理可以降...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/algorithms/sort/use-of-sort.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:description","content":"本页面将简要介绍排序的用法。 理解数据的特点 使用排序处理数据有利于理解数据的特点，方便我们之后的分析与视觉化。像一些生活中的例子比如词典，菜单，如果不是按照一定顺序排列的话，人们想要找到自己需要的东西的时间就会大大增加。 计算机需要处理大规模的数据，排序后，人们可以根据数据的特点和需求来设计计算机的后续处理流程。 降低时间复杂度 使用排序预处理可以降..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:24:37.000Z"}],["meta",{"property":"article:author","content":"Leslie"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T07:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"理解数据的特点","slug":"理解数据的特点","link":"#理解数据的特点","children":[]},{"level":2,"title":"降低时间复杂度","slug":"降低时间复杂度","link":"#降低时间复杂度","children":[]},{"level":2,"title":"作为查找的预处理","slug":"作为查找的预处理","link":"#作为查找的预处理","children":[]}],"git":{"createdTime":1713511477000,"updatedTime":1713511477000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":1.51,"words":453},"filePathRelative":"algorithms/sort/use-of-sort.md","localizedDate":"2024年4月19日","excerpt":"<p>本页面将简要介绍排序的用法。</p>\\n<h2>理解数据的特点</h2>\\n<p>使用排序处理数据有利于理解数据的特点，方便我们之后的分析与视觉化。像一些生活中的例子比如词典，菜单，如果不是按照一定顺序排列的话，人们想要找到自己需要的东西的时间就会大大增加。</p>\\n<p>计算机需要处理大规模的数据，排序后，人们可以根据数据的特点和需求来设计计算机的后续处理流程。</p>\\n<h2>降低时间复杂度</h2>\\n<p>使用排序预处理可以降低求解问题所需要的时间复杂度，通常是一个以空间换取时间的平衡。如果一个排序好的列表需要被多次分析的话，只需要耗费一次排序所需要的资源是很划算的，因为之后的每次分析都可以减少很多时间。</p>","autoDesc":true}');export{y as comp,x as data};