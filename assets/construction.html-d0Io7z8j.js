import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as t,e as o}from"./app-CfghY5LJ.js";const i={},a=o(`<p>author: leoleoasd, yzxoi</p><p>本页面将简要介绍构造题这类题型。</p><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h2><p>构造题是比赛中常见的一类题型。</p><p>从形式上来看，问题的答案往往具有某种规律性，使得在问题规模迅速增大的时候，仍然有机会比较容易地得到答案。</p><p>这要求解题时要思考问题规模增长对答案的影响，这种影响是否可以推广。例如，在设计动态规划方法的时候，要考虑从一个状态到后继状态的转移会造成什么影响。</p><h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h2><p>构造题一个很显著的特点就是高自由度，也就是说一道题的构造方式可能有很多种，但是会有一种较为简单的构造方式满足题意。看起来是放宽了要求，让题目变的简单了，但很多时候，正是这种高自由度导致题目没有明确思路而无从下手。</p><p>构造题另一个特点就是形式灵活，变化多样。并不存在一个通用解法或套路可以解决所有构造题，甚至很难找出解题思路的共性。</p><h2 id="例题" tabindex="-1"><a class="header-anchor" href="#例题"><span>例题</span></a></h2><p>下面将列举一些例题帮助读者体会构造题的一些思想内涵，给予思路上的启发。建议大家深入思考后再查看题解，也欢迎大家参与分享有趣的构造题。</p><h3 id="例题-1" tabindex="-1"><a class="header-anchor" href="#例题-1"><span>例题 1</span></a></h3><div class="hint-container info"><p class="hint-container-title">&quot;[Codeforces Round #384 (Div. 2) C.Vladik and fractions](http://codeforces.com/problemset/problem/743/C)&quot;</p><pre><code>构造一组 $x,y,z$，使得对于给定的 $n$，满足 $\\dfrac{1}{x}+\\dfrac{1}{y}+\\dfrac{1}{z}=\\dfrac{2}{n}$
</code></pre></div><div class="hint-container info"><p class="hint-container-title">&quot;解题思路&quot;</p><pre><code>从样例二可以看出本题的构造方法。

显然 $n,n+1,n(n+1)$ 为一组合法解。特殊地，当 $n=1$ 时，无解，这是因为 $n+1$ 与 $n(n+1)$ 此时相等。

至于构造思路是怎么产生的，大概就是观察样例加上一点点数感了吧。此题对于数学直觉较强的人来说并不难。
</code></pre></div><h3 id="例题-2" tabindex="-1"><a class="header-anchor" href="#例题-2"><span>例题 2</span></a></h3><div class="hint-container info"><p class="hint-container-title">&quot;[Luogu P3599 Koishi Loves Construction](https://www.luogu.com.cn/problem/P3599)&quot;</p><pre><code>Task1：试判断能否构造并构造一个长度为 $n$ 的 $1\\dots n$ 的排列，满足其 $n$ 个前缀和在模 $n$ 的意义下互不相同

Task2：试判断能否构造并构造一个长度为 $n$ 的 $1\\dots n$ 的排列，满足其 $n$ 个前缀积在模 $n$ 的意义下互不相同
</code></pre></div><div class="hint-container info"><p class="hint-container-title">&quot;解题思路&quot;</p><pre><code>对于 task1：

当 $n$ 为奇数时，无法构造出合法解；

当 $n$ 为偶数时，可以构造一个形如 $n,1,n-2,3,\\cdots$ 这样的数列。

首先，我们可以发现 $n$ 必定出现在数列的第一位，否则 $n$ 出现前后的两个前缀和必然会陷入模意义下相等的尴尬境地；

然后，我们考虑构造出整个序列的方式：

考虑通过构造前缀和序列的方式来获得原数列，可以发现前缀和序列两两之间的差在模意义下不能相等，因为前缀和序列的差分序列对应着原来的排列。

因此我们尝试以前缀和数列在模意义下为

$$
0,1,-1,2,-2,\\cdots
$$

这样的形式来构造这个序列，不难发现它完美地满足所有限制条件。

对于 task2：

当 $n$ 为除 $4$ 以外的合数时，无法构造出合法解

当 $n$ 为质数或 $4$ 时，可以构造一个形如 $1,\\dfrac{2}{1},\\dfrac{3}{2},\\cdots,\\dfrac{n-1}{n-2},n$ 这样的数列

先考虑什么时候有解：

显然，当 $n$ 为合数时无解。因为对于一个合数来说，存在两个比它小的数 $p,q$ 使得 $p\\times q \\equiv 0 \\pmod n$，如 $(3\\times6)\\%9=0$。那么，当 $p,q$ 均出现过后，数列的前缀积将一直为 $0$，故合数时无解。特殊地，我们可以发现 $4=2\\times 2$，无满足条件的 $p,q$，因此存在合法解。

我们考虑如何构造这个数列：

和 task1 同样的思路，我们发现 $1$ 必定出现在数列的第一位，否则 $1$ 出现前后的两个前缀积必然相等；而 $n$ 必定出现在数列的最后一位，因为 $n$ 出现位置后的所有前缀积在模意义下都为 $0$。分析题目给出的几组样例以后发现，所有样例中均有一组合法解满足前缀积在模意义下为 $1,2,3,\\cdots,n$，因此我们可以构造出上文所述的数列来满足这个条件。那么我们只需证明这 $n$ 个数互不相同即可。

我们发现这些数均为 $1 \\cdots n-2$ 的逆元 $+1$，因此各不相同，此题得解。
</code></pre></div><h3 id="例题-3" tabindex="-1"><a class="header-anchor" href="#例题-3"><span>例题 3</span></a></h3><div class="hint-container info"><p class="hint-container-title">&quot;[AtCoder Grand Contest 032 B](https://atcoder.jp/contests/agc032/tasks/agc032_b)&quot;</p><pre><code>给定一个整数 $N$，试构造一个节点数为 $N$ 无向图。令节点编号为 $1\\ldots N$，要求其满足以下条件：

-   这是一个简单连通图。
-   存在一个整数 $S$ 使得对于任意节点，与其相邻节点的下标和为 $S$。

保证输入数据有解。
</code></pre></div><div class="hint-container info"><p class="hint-container-title">&quot;解题思路&quot;</p><pre><code>通过分析 $n=3,4,5$ 的情况，我们可以找到一个构造思路。

构造一个完全 $k$ 分图，保证这 $k$ 部分和相等。则每个点的 $S$ 均相等，为 $\\dfrac{(k-1)\\sum_{i=1}^{n}i}{k}$。

如果 $n$ 为偶数，那么我们可以前后两两配对，即 $\\{1,n\\},\\{2,n-1\\}\\cdots$

如果 $n$ 为奇数，那么我们可以把 $n$ 单拿出来作为一组，剩余的 $n-1$ 个两两配对，即 $\\{n\\},\\{1,n-1\\},\\{2,n-2\\}\\cdots$

这样构造出的图在 $n\\ge 3$ 时连通性易证，在此不加赘述。

此题得解。
</code></pre></div><h3 id="例题-4" tabindex="-1"><a class="header-anchor" href="#例题-4"><span>例题 4</span></a></h3><div class="hint-container info"><p class="hint-container-title">&quot;BZOJ 4971「Lydsy1708 月赛」记忆中的背包&quot;</p><pre><code>经过一天辛苦的工作，小 Q 进入了梦乡。他脑海中浮现出了刚进大学时学 01 背包的情景，那时还是大一萌新的小 Q 解决了一道简单的 01 背包问题。这个问题是这样的：

给定 $n$ 个物品，每个物品的体积分别为 $v_1,v_2,…,v_n$，请计算从中选择一些物品（也可以不选），使得总体积恰好为 $w$ 的方案数。因为答案可能非常大，你只需要输出答案对 $P$ 取模的结果。

因为长期熬夜刷题，他只看到样例输入中的 $w$ 和 $P$，以及样例输出是 $k$，看不清到底有几个物品，也看不清每个物品的体积是多少。直到梦醒，小 Q 也没有看清 $n$ 和 $v$，请写一个程序，帮助小 Q 一起回忆曾经的样例输入。
</code></pre></div><div class="hint-container info"><p class="hint-container-title">&quot;解题思路&quot;</p><pre><code>这道题是自由度最高的构造题之一了。这就导致了没有头绪，难以入手的情况。

首先，不难发现模数是假的。由于我们自由构造数据，我们一定可以让方案数不超过模数。

通过奇怪的方式，我们想到可以通过构造 $n$ 个 代价为 $1$ 的小物品和几个代价大于 $\\dfrac{w}{2}$ 的大物品。

由于大物品只能取一件，所以每个代价为 $x$ 的大物品对方案数的贡献为 $\\dbinom{n}{w-x}$。

令 $f_{i,j}$ 表示有 $i$ 个 $1$，方案数为 $j$ 的最小大物品数。

用 dp 预处理出 $f$，通过计算可知只需预处理 $i\\le 20$ 的所有值即可。

此题得解。
</code></pre></div>`,23),$=[a];function s(c,r){return e(),t("div",null,$)}const d=n(i,[["render",s],["__file","construction.html.vue"]]),h=JSON.parse('{"path":"/algorithms/sort/construction.html","title":"","lang":"zh-CN","frontmatter":{"description":"author: leoleoasd, yzxoi 本页面将简要介绍构造题这类题型。 引入 构造题是比赛中常见的一类题型。 从形式上来看，问题的答案往往具有某种规律性，使得在问题规模迅速增大的时候，仍然有机会比较容易地得到答案。 这要求解题时要思考问题规模增长对答案的影响，这种影响是否可以推广。例如，在设计动态规划方法的时候，要考虑从一个状态到后继状态的...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/algorithms/sort/construction.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:description","content":"author: leoleoasd, yzxoi 本页面将简要介绍构造题这类题型。 引入 构造题是比赛中常见的一类题型。 从形式上来看，问题的答案往往具有某种规律性，使得在问题规模迅速增大的时候，仍然有机会比较容易地得到答案。 这要求解题时要思考问题规模增长对答案的影响，这种影响是否可以推广。例如，在设计动态规划方法的时候，要考虑从一个状态到后继状态的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:24:37.000Z"}],["meta",{"property":"article:author","content":"Leslie"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T07:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"引入","slug":"引入","link":"#引入","children":[]},{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":2,"title":"例题","slug":"例题","link":"#例题","children":[{"level":3,"title":"例题 1","slug":"例题-1","link":"#例题-1","children":[]},{"level":3,"title":"例题 2","slug":"例题-2","link":"#例题-2","children":[]},{"level":3,"title":"例题 3","slug":"例题-3","link":"#例题-3","children":[]},{"level":3,"title":"例题 4","slug":"例题-4","link":"#例题-4","children":[]}]}],"git":{"createdTime":1713511477000,"updatedTime":1713511477000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":6.33,"words":1899},"filePathRelative":"algorithms/sort/construction.md","localizedDate":"2024年4月19日","excerpt":"<p>author: leoleoasd, yzxoi</p>\\n<p>本页面将简要介绍构造题这类题型。</p>\\n<h2>引入</h2>\\n<p>构造题是比赛中常见的一类题型。</p>\\n<p>从形式上来看，问题的答案往往具有某种规律性，使得在问题规模迅速增大的时候，仍然有机会比较容易地得到答案。</p>\\n<p>这要求解题时要思考问题规模增长对答案的影响，这种影响是否可以推广。例如，在设计动态规划方法的时候，要考虑从一个状态到后继状态的转移会造成什么影响。</p>\\n<h2>特点</h2>\\n<p>构造题一个很显著的特点就是高自由度，也就是说一道题的构造方式可能有很多种，但是会有一种较为简单的构造方式满足题意。看起来是放宽了要求，让题目变的简单了，但很多时候，正是这种高自由度导致题目没有明确思路而无从下手。</p>","autoDesc":true}');export{d as comp,h as data};