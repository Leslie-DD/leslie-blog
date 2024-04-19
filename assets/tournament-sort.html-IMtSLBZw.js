import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as m,c as p,a as t,b as n,d as a,w as e,e as l}from"./app-BMIN2c_3.js";const c="/leslie-blog/assets/tournament-sort1-84ZuLv-d.png",h="/leslie-blog/assets/tournament-sort2-Dq3H-Evg.png",u={},d=t("p",null,"本页面将简要介绍锦标赛排序。",-1),g=t("h2",{id:"定义",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#定义"},[t("span",null,"定义")])],-1),x=l('<h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h2><p>锦标赛排序的名字来源于单败淘汰制的竞赛形式。在这种赛制中有许多选手参与比赛，他们两两比较，胜者进入下一轮比赛。这种淘汰方式能够决定最好的选手，但是在最后一轮比赛中被淘汰的选手不一定是第二好的——他可能不如先前被淘汰的选手。</p><h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程"><span>过程</span></a></h2><p>以 <strong>最小锦标赛排序树</strong> 为例：</p><p><img src="'+c+'" alt="tournament-sort1"></p><p>待排序元素是叶子节点显示的元素。红色边显示的是每一轮比较中较小的元素的胜出路径。显然，完成一次＂锦标赛＂可以选出一组元素中最小的那一个。</p>',6),_=t("p",null,[n("每一轮对 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"n")]),t("annotation",{encoding:"application/x-tex"},"n")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.4306em"}}),t("span",{class:"mord mathnormal"},"n")])])]),n(" 个元素进行比较后可以得到 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mfrac",null,[t("mi",null,"n"),t("mn",null,"2")])]),t("annotation",{encoding:"application/x-tex"},"\\frac{n}{2}")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1.0404em","vertical-align":"-0.345em"}}),t("span",{class:"mord"},[t("span",{class:"mopen nulldelimiter"}),t("span",{class:"mfrac"},[t("span",{class:"vlist-t vlist-t2"},[t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.6954em"}},[t("span",{style:{top:"-2.655em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"mord mtight"},"2")])])]),t("span",{style:{top:"-3.23em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),t("span",{style:{top:"-3.394em"}},[t("span",{class:"pstrut",style:{height:"3em"}}),t("span",{class:"sizing reset-size6 size3 mtight"},[t("span",{class:"mord mtight"},[t("span",{class:"mord mathnormal mtight"},"n")])])])]),t("span",{class:"vlist-s"},"​")]),t("span",{class:"vlist-r"},[t("span",{class:"vlist",style:{height:"0.345em"}},[t("span")])])])]),t("span",{class:"mclose nulldelimiter"})])])])]),n(" 个「优胜者」，每一对中较小的元素进入下一轮比较。如果无法凑齐一对元素，那么这个元素直接进入下一轮的比较。")],-1),f=t("p",null,[t("img",{src:h,alt:"tournament-sort2"})],-1),k=t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",{mathvariant:"normal"},"∞")]),t("annotation",{encoding:"application/x-tex"},"\\infty")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.4306em"}}),t("span",{class:"mord"},"∞")])])],-1),w=l('<p>之后一直重复这个操作，直至所有元素有序。</p><h2 id="性质" tabindex="-1"><a class="header-anchor" href="#性质"><span>性质</span></a></h2><h3 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性"><span>稳定性</span></a></h3><p>锦标赛排序是一种不稳定的排序算法。</p><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h3>',5),v=t("p",null,[n("锦标赛排序的最优时间复杂度、平均时间复杂度和最坏时间复杂度均为 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mi",null,"log"),t("mo",null,"⁡"),t("mi",null,"n"),t("mo",{stretchy:"false"},")")]),t("annotation",{encoding:"application/x-tex"},"O(n\\log n)")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),t("span",{class:"mopen"},"("),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mop"},[n("lo"),t("span",{style:{"margin-right":"0.01389em"}},"g")]),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mclose"},")")])])]),n("。它用 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mo",{stretchy:"false"},")")]),t("annotation",{encoding:"application/x-tex"},"O(n)")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),t("span",{class:"mopen"},"("),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mclose"},")")])])]),n(" 的时间初始化「锦标赛」，然后用 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"log"),t("mo",null,"⁡"),t("mi",null,"n"),t("mo",{stretchy:"false"},")")]),t("annotation",{encoding:"application/x-tex"},"O(\\log n)")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),t("span",{class:"mopen"},"("),t("span",{class:"mop"},[n("lo"),t("span",{style:{"margin-right":"0.01389em"}},"g")]),t("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mclose"},")")])])]),n(" 的时间从 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"n")]),t("annotation",{encoding:"application/x-tex"},"n")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"0.4306em"}}),t("span",{class:"mord mathnormal"},"n")])])]),n(" 个元素中选取一个元素。")],-1),y=t("h3",{id:"空间复杂度",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#空间复杂度"},[t("span",null,"空间复杂度")])],-1),b=t("p",null,[n("锦标赛排序的空间复杂度为 "),t("span",{class:"katex"},[t("span",{class:"katex-mathml"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("semantics",null,[t("mrow",null,[t("mi",null,"O"),t("mo",{stretchy:"false"},"("),t("mi",null,"n"),t("mo",{stretchy:"false"},")")]),t("annotation",{encoding:"application/x-tex"},"O(n)")])])]),t("span",{class:"katex-html","aria-hidden":"true"},[t("span",{class:"base"},[t("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),t("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),t("span",{class:"mopen"},"("),t("span",{class:"mord mathnormal"},"n"),t("span",{class:"mclose"},")")])])]),n("。")],-1),M=l(`<h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><p>=== &quot;C++&quot;<br> \`\`\`cpp<br> int n, a[maxn], tmp[maxn &lt;&lt; 1];</p><pre><code>int winner(int pos1, int pos2) {
  int u = pos1 &gt;= n ? pos1 : tmp[pos1];
  int v = pos2 &gt;= n ? pos2 : tmp[pos2];
  if (tmp[u] &lt;= tmp[v]) return u;
  return v;
}

void creat_tree(int &amp;value) {
  for (int i = 0; i &lt; n; i++) tmp[n + i] = a[i];
  for (int i = 2 * n - 1; i &gt; 1; i -= 2) {
    int k = i / 2;
    int j = i - 1;
    tmp[k] = winner(i, j);
  }
  value = tmp[tmp[1]];
  tmp[tmp[1]] = INF;
}

void recreat(int &amp;value) {
  int i = tmp[1];
  while (i &gt; 1) {
    int j, k = i / 2;
    if (i % 2 == 0 &amp;&amp; i &lt; 2 * n - 1)
      j = i + 1;
    else
      j = i - 1;
    tmp[k] = winner(i, j);
    i = k;
  }
  value = tmp[tmp[1]];
  tmp[tmp[1]] = INF;
}

void tournament_sort() {
  int value;
  creat_tree(value);
  for (int i = 0; i &lt; n; i++) {
    a[i] = value;
    recreat(value);
  }
}
\`\`\`
</code></pre><p>=== &quot;Python&quot;<br> \`\`\`python<br> n = 0<br> a = [0] * maxn<br> tmp = [0] * maxn * 2</p><pre><code>def winner(pos1, pos2):
    u = pos1 if pos1 &gt;= n else tmp[pos1]
    v = pos2 if pos2 &gt;= n else tmp[pos2]
    if tmp[u] &lt;= tmp[v]:
        return u
    return v

def creat_tree():
    for i in range(0, n):
        tmp[n + i] = a[i]
    for i in range(2 * n -1, 1, -2):
        k = int(i / 2)
        j = i - 1
        tmp[k] = winner(i, j)
    value = tmp[tmp[1]]
    tmp[tmp[1]] = INF
    return value

def recreat():
    i = tmp[1]
    while i &gt; 1:
        j = k = int(i / 2)
        if i % 2 == 0 and i &lt; 2 * n - 1:
            j = i + 1
        else:
            j = i - 1
        tmp[k] = winner(i, j)
        i = k
    value = tmp[tmp[1]]
    tmp[tmp[1]] = INF
    return value

def tournament_sort():
    value = creat_tree()
    for i in range(0, n):
        a[i] = value
        value = recreat()
\`\`\`
</code></pre><h2 id="外部链接" tabindex="-1"><a class="header-anchor" href="#外部链接"><span>外部链接</span></a></h2>`,6),L={href:"https://en.wikipedia.org/wiki/Tournament_sort",target:"_blank",rel:"noopener noreferrer"};function j(O,T){const s=i("RouteLink"),r=i("ExternalLinkIcon");return m(),p("div",null,[d,g,t("p",null,[n("锦标赛排序（英文：Tournament sort），又被称为树形选择排序，是 "),a(s,{to:"/algorithms/sort/selection-sort.html"},{default:e(()=>[n("选择排序")]),_:1}),n(" 的优化版本，"),a(s,{to:"/algorithms/sort/heap-sort.html"},{default:e(()=>[n("堆排序")]),_:1}),n(" 的一种变体（均采用完全二叉树）。它在选择排序的基础上使用优先队列查找下一个该选择的元素。")]),x,_,f,t("p",null,[n("完成一次「锦标赛」后需要将被选出的元素去除。直接将其设置为 "),k,n("（这个操作类似 "),a(s,{to:"/algorithms/sort/heap-sort.html"},{default:e(()=>[n("堆排序")]),_:1}),n("），然后再次举行「锦标赛」选出次小的元素。")]),w,v,y,b,M,t("ul",null,[t("li",null,[t("a",L,[n("Tournament sort - Wikipedia"),a(r)])])])])}const I=o(u,[["render",j],["__file","tournament-sort.html.vue"]]),q=JSON.parse('{"path":"/algorithms/sort/tournament-sort.html","title":"","lang":"zh-CN","frontmatter":{"description":"本页面将简要介绍锦标赛排序。 定义 锦标赛排序（英文：Tournament sort），又被称为树形选择排序，是 的优化版本， 的一种变体（均采用完全二叉树）。它在选择排序的基础上使用优先队列查找下一个该选择的元素。 引入 锦标赛排序的名字来源于单败淘汰制的竞赛形式。在这种赛制中有许多选手参与比赛，他们两两比较，胜者进入下一轮比赛。这种淘汰方式能够决定...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/algorithms/sort/tournament-sort.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:description","content":"本页面将简要介绍锦标赛排序。 定义 锦标赛排序（英文：Tournament sort），又被称为树形选择排序，是 的优化版本， 的一种变体（均采用完全二叉树）。它在选择排序的基础上使用优先队列查找下一个该选择的元素。 引入 锦标赛排序的名字来源于单败淘汰制的竞赛形式。在这种赛制中有许多选手参与比赛，他们两两比较，胜者进入下一轮比赛。这种淘汰方式能够决定..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:24:37.000Z"}],["meta",{"property":"article:author","content":"Leslie"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T07:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"引入","slug":"引入","link":"#引入","children":[]},{"level":2,"title":"过程","slug":"过程","link":"#过程","children":[]},{"level":2,"title":"性质","slug":"性质","link":"#性质","children":[{"level":3,"title":"稳定性","slug":"稳定性","link":"#稳定性","children":[]},{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]},{"level":3,"title":"空间复杂度","slug":"空间复杂度","link":"#空间复杂度","children":[]}]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"外部链接","slug":"外部链接","link":"#外部链接","children":[]}],"git":{"createdTime":1713511477000,"updatedTime":1713511477000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":2.8,"words":839},"filePathRelative":"algorithms/sort/tournament-sort.md","localizedDate":"2024年4月19日","excerpt":"<p>本页面将简要介绍锦标赛排序。</p>\\n<h2>定义</h2>\\n<p>锦标赛排序（英文：Tournament sort），又被称为树形选择排序，是 <a href=\\"/leslie-blog/algorithms/sort/selection-sort.html\\" target=\\"_blank\\">选择排序</a> 的优化版本，<a href=\\"/leslie-blog/algorithms/sort/heap-sort.html\\" target=\\"_blank\\">堆排序</a> 的一种变体（均采用完全二叉树）。它在选择排序的基础上使用优先队列查找下一个该选择的元素。</p>\\n<h2>引入</h2>","autoDesc":true}');export{I as comp,q as data};
