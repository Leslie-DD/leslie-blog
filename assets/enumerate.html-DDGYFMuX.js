import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c as i,a,b as n,d as r,e as o}from"./app-Bc9RwNfH.js";const m={},h=o('<p>author: Early0v0, frank-xjh, Great-designer, ksyx, qiqistyle, Tiphereth-A , Saisyc, shuzhouliu, Xeonacid, xyf007</p><p>本页面将简要介绍枚举算法。</p><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>枚举（英语：Enumerate）是基于已有知识来猜测答案的一种问题求解策略。</p><p>枚举的思想是不断地猜测，从可能的集合中一一尝试，然后再判断题目的条件是否成立。</p><h2 id="要点" tabindex="-1"><a class="header-anchor" href="#要点"><span>要点</span></a></h2><h3 id="给出解空间" tabindex="-1"><a class="header-anchor" href="#给出解空间"><span>给出解空间</span></a></h3><p>建立简洁的数学模型。</p><p>枚举的时候要想清楚：可能的情况是什么？要枚举哪些要素？</p><h3 id="减少枚举的空间" tabindex="-1"><a class="header-anchor" href="#减少枚举的空间"><span>减少枚举的空间</span></a></h3><p>枚举的范围是什么？是所有的内容都需要枚举吗？</p><p>在用枚举法解决问题的时候，一定要想清楚这两件事，否则会带来不必要的时间开销。</p><h3 id="选择合适的枚举顺序" tabindex="-1"><a class="header-anchor" href="#选择合适的枚举顺序"><span>选择合适的枚举顺序</span></a></h3><p>根据题目判断。比如例题中要求的是最大的符合条件的素数，那自然是从大到小枚举比较合适。</p><h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题"><span>例题</span></a></h2><p>以下是一个使用枚举解题与优化枚举范围的例子。</p>',16),c=a("p",null,[n("??? 例题"),a("br"),n(" 一个数组中的数互不相同，求其中和为 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mn",null,"0")]),a("annotation",{encoding:"application/x-tex"},"0")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6444em"}}),a("span",{class:"mord"},"0")])])]),n(" 的数对的个数。")],-1),p=a("p",null,[n('??? note "解题思路"'),a("br"),n(" 枚举两个数的代码很容易就可以写出来。")],-1),d=a("pre",null,[a("code",null,`=== "C++"
    \`\`\`cpp
    for (int i = 0; i < n; ++i)
      for (int j = 0; j < n; ++j)
        if (a[i] + a[j] == 0) ++ans;
    \`\`\`

=== "Python"
    \`\`\`python
    for i in range(n):
        for j in range(n):
            if a[i] + a[j] == 0:
                ans += 1
    \`\`\`

=== "Java"
    \`\`\`java
    for (int i = 0; i < n; ++i)
      for (int j = 0; j < n; ++j)
        if (a[i] + a[j] == 0) ++ans;
    \`\`\`

来看看枚举的范围如何优化。由于题中没要求数对是有序的，答案就是有序的情况的两倍（考虑如果 \`(a, b)\` 是答案，那么 \`(b, a)\` 也是答案）。对于这种情况，只需统计人为要求有顺序之后的答案，最后再乘上 $2$ 就好了。

不妨要求第一个数要出现在靠前的位置。代码如下：

=== "C++"
    \`\`\`cpp
    for (int i = 0; i < n; ++i)
      for (int j = 0; j < i; ++j)
        if (a[i] + a[j] == 0) ++ans;
    \`\`\`

=== "Python"
    \`\`\`python
    for i in range(n):
        for j in range(i):
            if a[i] + a[j] == 0:
                ans += 1
    \`\`\`

=== "Java"
    \`\`\`java
    for (int i = 0; i < n; ++i)
        for (int j = 0; j < i; ++j)
            if (a[i] + a[j] == 0) ++ans;
    \`\`\`

不难发现这里已经减少了 $j$ 的枚举范围，减少了这段代码的时间开销。

我们可以在此之上进一步优化。

两个数是否都一定要枚举出来呢？枚举其中一个数之后，题目的条件已经确定了其他的要素（另一个数）的条件，如果能找到一种方法直接判断题目要求的那个数是否存在，就可以省掉枚举后一个数的时间了。较为进阶地，在数据范围允许的情况下，我们可以使用桶[^1]记录遍历过的数。

=== "C++"
    \`\`\`cpp
    bool met[MAXN * 2 + 1];
    memset(met, 0, sizeof(met));
    for (int i = 0; i < n; ++i) {
      if (met[MAXN - a[i]]) ++ans;
      met[MAXN + a[i]] = true;
    }
    \`\`\`

=== "Python"
    \`\`\`python
    met = [False] * (MAXN * 2 + 1)
    for i in range(n):
        if met[MAXN - a[i]]:
            ans += 1
        met[a[i] + MAXN] = True
    \`\`\`

=== "Java"
    \`\`\`java
    boolean[] met = new boolean[MAXN * 2 + 1];
    for (int i = 0; i < n; ++i) {
        if (met[MAXN - a[i]]) ++ans;
        met[MAXN + a[i]] = true;
    }
    \`\`\`
`)],-1),u=a("h3",{id:"复杂度分析",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#复杂度分析"},[a("span",null,"复杂度分析")])],-1),g=a("ul",null,[a("li",null,[n("时间复杂度分析：对 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"a")]),a("annotation",{encoding:"application/x-tex"},"a")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"a")])])]),n(" 数组遍历了一遍就能完成题目要求，当 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"n")]),a("annotation",{encoding:"application/x-tex"},"n")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"n")])])]),n(" 足够大的时候时间复杂度为 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"O"),a("mo",{stretchy:"false"},"("),a("mi",null,"n"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"O(n)")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mclose"},")")])])]),n("。")]),a("li",null,[n("空间复杂度分析："),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"O"),a("mo",{stretchy:"false"},"("),a("mi",null,"n"),a("mo",null,"+"),a("mi",null,"max"),a("mo",null,"⁡"),a("mo",{stretchy:"false"},"{"),a("mi",{mathvariant:"normal"},"∣"),a("mi",null,"x"),a("mi",{mathvariant:"normal"},"∣"),a("mo",null,":"),a("mi",null,"x"),a("mo",null,"∈"),a("mi",null,"a"),a("mo",{stretchy:"false"},"}"),a("mo",{stretchy:"false"},")")]),a("annotation",{encoding:"application/x-tex"},"O(n+\\max\\{|x|:x\\in a\\})")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),a("span",{class:"mopen"},"("),a("span",{class:"mord mathnormal"},"n"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),a("span",{class:"mbin"},"+"),a("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mop"},"max"),a("span",{class:"mopen"},"{"),a("span",{class:"mord"},"∣"),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mord"},"∣"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},":"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.5782em","vertical-align":"-0.0391em"}}),a("span",{class:"mord mathnormal"},"x"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"∈"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),a("span",{class:"mord mathnormal"},"a"),a("span",{class:"mclose"},"})")])])]),n("。")])],-1),x=a("h2",{id:"习题",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#习题"},[a("span",null,"习题")])],-1),f={href:"http://bailian.openjudge.cn/practice/2811/",target:"_blank",rel:"noopener noreferrer"},y=a("h2",{id:"脚注",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#脚注"},[a("span",null,"脚注")])],-1);function k(_,b){const e=t("ExternalLinkIcon");return l(),i("div",null,[h,c,p,d,u,g,x,a("ul",null,[a("li",null,[a("a",f,[n("2811: 熄灯问题 - OpenJudge"),r(e)])])]),y])}const w=s(m,[["render",k],["__file","enumerate.html.vue"]]),M=JSON.parse('{"path":"/algorithms/sort/enumerate.html","title":"","lang":"zh-CN","frontmatter":{"description":"author: Early0v0, frank-xjh, Great-designer, ksyx, qiqistyle, Tiphereth-A , Saisyc, shuzhouliu, Xeonacid, xyf007 本页面将简要介绍枚举算法。 简介 枚举（英语：Enumerate）是基于已有知识来猜测答案的一种问题求解策略。 枚举的思想是不断...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/algorithms/sort/enumerate.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:description","content":"author: Early0v0, frank-xjh, Great-designer, ksyx, qiqistyle, Tiphereth-A , Saisyc, shuzhouliu, Xeonacid, xyf007 本页面将简要介绍枚举算法。 简介 枚举（英语：Enumerate）是基于已有知识来猜测答案的一种问题求解策略。 枚举的思想是不断..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:24:37.000Z"}],["meta",{"property":"article:author","content":"Leslie"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T07:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"要点","slug":"要点","link":"#要点","children":[{"level":3,"title":"给出解空间","slug":"给出解空间","link":"#给出解空间","children":[]},{"level":3,"title":"减少枚举的空间","slug":"减少枚举的空间","link":"#减少枚举的空间","children":[]},{"level":3,"title":"选择合适的枚举顺序","slug":"选择合适的枚举顺序","link":"#选择合适的枚举顺序","children":[]}]},{"level":2,"title":"例题","slug":"例题","link":"#例题","children":[{"level":3,"title":"复杂度分析","slug":"复杂度分析","link":"#复杂度分析","children":[]}]},{"level":2,"title":"习题","slug":"习题","link":"#习题","children":[]},{"level":2,"title":"脚注","slug":"脚注","link":"#脚注","children":[]}],"git":{"createdTime":1713511477000,"updatedTime":1713511477000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":3.01,"words":904},"filePathRelative":"algorithms/sort/enumerate.md","localizedDate":"2024年4月19日","excerpt":"<p>author: Early0v0, frank-xjh, Great-designer, ksyx, qiqistyle, Tiphereth-A , Saisyc, shuzhouliu, Xeonacid, xyf007</p>\\n<p>本页面将简要介绍枚举算法。</p>\\n<h2>简介</h2>\\n<p>枚举（英语：Enumerate）是基于已有知识来猜测答案的一种问题求解策略。</p>\\n<p>枚举的思想是不断地猜测，从可能的集合中一一尝试，然后再判断题目的条件是否成立。</p>\\n<h2>要点</h2>\\n<h3>给出解空间</h3>\\n<p>建立简洁的数学模型。</p>\\n<p>枚举的时候要想清楚：可能的情况是什么？要枚举哪些要素？</p>","autoDesc":true}');export{w as comp,M as data};
