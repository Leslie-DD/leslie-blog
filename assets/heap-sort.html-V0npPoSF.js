import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as c,c as i,a as n,b as s,d as t,w as r,e as p}from"./app-CfghY5LJ.js";const u={},k=n("p",null,"本页面将简要介绍堆排序。",-1),d=n("h2",{id:"定义",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#定义"},[n("span",null,"定义")])],-1),m=n("h2",{id:"过程",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#过程"},[n("span",null,"过程")])],-1),h=n("p",null,"堆排序的本质是建立在堆上的选择排序。",-1),v=n("h3",{id:"排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#排序"},[n("span",null,"排序")])],-1),b=n("p",null,"首先建立大顶堆，然后将堆顶的元素取出，作为最大值，与数组尾部的元素交换，并维持残余堆的性质；",-1),g=n("p",null,"之后将堆顶的元素取出，作为次大值，与数组倒数第二位元素交换，并维持残余堆的性质；",-1),y=n("p",null,[s("以此类推，在第 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"n"),n("mo",null,"−"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"n-1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.6444em"}}),n("span",{class:"mord"},"1")])])]),s(" 次操作后，整个数组就完成了排序。")],-1),f=p(`<h3 id="在数组上建立二叉堆" tabindex="-1"><a class="header-anchor" href="#在数组上建立二叉堆"><span>在数组上建立二叉堆</span></a></h3><p>从根节点开始，依次将每一层的节点排列在数组里。</p><p>于是有数组中下标为 <code>i</code> 的节点，对应的父结点、左子结点和右子结点如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token function">iParent</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token function">iLeftChild</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">iRightChild</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性质" tabindex="-1"><a class="header-anchor" href="#性质"><span>性质</span></a></h2><h3 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性"><span>稳定性</span></a></h3><p>同选择排序一样，由于其中交换位置的操作，所以是不稳定的排序算法。</p><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h3>`,8),w=n("p",null,[s("堆排序的最优时间复杂度、平均时间复杂度、最坏时间复杂度均为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"O"),n("mo",{stretchy:"false"},"("),n("mi",null,"n"),n("mi",null,"log"),n("mo",null,"⁡"),n("mi",null,"n"),n("mo",{stretchy:"false"},")")]),n("annotation",{encoding:"application/x-tex"},"O(n\\log n)")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),n("span",{class:"mopen"},"("),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mop"},[s("lo"),n("span",{style:{"margin-right":"0.01389em"}},"g")]),n("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),n("span",{class:"mord mathnormal"},"n"),n("span",{class:"mclose"},")")])])]),s("。")],-1),_=p(`<h3 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度"><span>空间复杂度</span></a></h3><p>由于可以在输入数组上建立堆，所以这是一个原地算法。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><div class="hint-container info"><p class="hint-container-title">&quot;C++&quot;</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">sift_down</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 计算父结点和子结点的下标</span>
  <span class="token keyword">int</span> parent <span class="token operator">=</span> start<span class="token punctuation">;</span>
  <span class="token keyword">int</span> child <span class="token operator">=</span> parent <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>child <span class="token operator">&lt;=</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 子结点下标在范围内才做比较</span>
    <span class="token comment">// 先比较两个子结点大小，选择最大的</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>child <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> end <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>child<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>child <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> child<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果父结点比子结点大，代表调整完毕，直接跳出函数</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>parent<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> arr<span class="token punctuation">[</span>child<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>  <span class="token comment">// 否则交换父子内容，子结点再和孙结点比较</span>
      <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>child<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      parent <span class="token operator">=</span> child<span class="token punctuation">;</span>
      child <span class="token operator">=</span> parent <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">heap_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span> arr<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">int</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 从最后一个节点的父节点开始 sift down 以完成堆化 (heapify)</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token punctuation">(</span>len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token function">sift_down</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 先将第一个元素和已经排好的元素前一位做交换，再重新调整（刚调整的元素之前的元素），直到排序完毕</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">sift_down</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container info"><p class="hint-container-title">&quot;Python&quot;</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">sift_down</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 计算父结点和子结点的下标</span>
    parent <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>
    child <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>parent <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> child <span class="token operator">&lt;=</span> end<span class="token punctuation">:</span> <span class="token comment"># 子结点下标在范围内才做比较</span>
        <span class="token comment"># 先比较两个子结点大小，选择最大的</span>
        <span class="token keyword">if</span> child <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;=</span> end <span class="token keyword">and</span> arr<span class="token punctuation">[</span>child<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>child <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            child <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token comment"># 如果父结点比子结点大，代表调整完毕，直接跳出函数</span>
        <span class="token keyword">if</span> arr<span class="token punctuation">[</span>parent<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> arr<span class="token punctuation">[</span>child<span class="token punctuation">]</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span> <span class="token comment"># 否则交换父子内容，子结点再和孙结点比较</span>
            arr<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>child<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>child<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>parent<span class="token punctuation">]</span>
            parent <span class="token operator">=</span> child
            child <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>parent <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">heap_sort</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token comment"># 从最后一个节点的父节点开始 sift down 以完成堆化 (heapify)</span>
    i <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">len</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        sift_down<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token builtin">len</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        i <span class="token operator">-=</span> <span class="token number">1</span>
  <span class="token comment"># 先将第一个元素和已经排好的元素前一位做交换，再重新调整（刚调整的元素之前的元素），直到排序完毕</span>
    i <span class="token operator">=</span> <span class="token builtin">len</span> <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        sift_down<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        i <span class="token operator">-=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="外部链接" tabindex="-1"><a class="header-anchor" href="#外部链接"><span>外部链接</span></a></h2>`,6),x={href:"https://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"};function L(C,E){const e=a("RouteLink"),o=a("ExternalLinkIcon");return c(),i("div",null,[k,d,n("p",null,[s("堆排序（英语：Heapsort）是指利用 "),t(e,{to:"/algorithms/ds/binary-heap.html"},{default:r(()=>[s("二叉堆")]),_:1}),s(" 这种数据结构所设计的一种排序算法。堆排序的适用数据结构为数组。")]),m,h,v,b,g,y,f,w,_,n("ul",null,[n("li",null,[n("a",x,[s("堆排序 - 维基百科，自由的百科全书"),t(o)])])])])}const T=l(u,[["render",L],["__file","heap-sort.html.vue"]]),q=JSON.parse('{"path":"/algorithms/sort/heap-sort.html","title":"","lang":"zh-CN","frontmatter":{"description":"本页面将简要介绍堆排序。 定义 堆排序（英语：Heapsort）是指利用 这种数据结构所设计的一种排序算法。堆排序的适用数据结构为数组。 过程 堆排序的本质是建立在堆上的选择排序。 排序 首先建立大顶堆，然后将堆顶的元素取出，作为最大值，与数组尾部的元素交换，并维持残余堆的性质； 之后将堆顶的元素取出，作为次大值，与数组倒数第二位元素交换，并维持残余堆...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/algorithms/sort/heap-sort.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:description","content":"本页面将简要介绍堆排序。 定义 堆排序（英语：Heapsort）是指利用 这种数据结构所设计的一种排序算法。堆排序的适用数据结构为数组。 过程 堆排序的本质是建立在堆上的选择排序。 排序 首先建立大顶堆，然后将堆顶的元素取出，作为最大值，与数组尾部的元素交换，并维持残余堆的性质； 之后将堆顶的元素取出，作为次大值，与数组倒数第二位元素交换，并维持残余堆..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:24:37.000Z"}],["meta",{"property":"article:author","content":"Leslie"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T07:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"过程","slug":"过程","link":"#过程","children":[{"level":3,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":3,"title":"在数组上建立二叉堆","slug":"在数组上建立二叉堆","link":"#在数组上建立二叉堆","children":[]}]},{"level":2,"title":"性质","slug":"性质","link":"#性质","children":[{"level":3,"title":"稳定性","slug":"稳定性","link":"#稳定性","children":[]},{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]},{"level":3,"title":"空间复杂度","slug":"空间复杂度","link":"#空间复杂度","children":[]}]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"外部链接","slug":"外部链接","link":"#外部链接","children":[]}],"git":{"createdTime":1713511477000,"updatedTime":1713511477000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":2.87,"words":862},"filePathRelative":"algorithms/sort/heap-sort.md","localizedDate":"2024年4月19日","excerpt":"<p>本页面将简要介绍堆排序。</p>\\n<h2>定义</h2>\\n<p>堆排序（英语：Heapsort）是指利用 <a href=\\"/leslie-blog/algorithms/ds/binary-heap.html\\" target=\\"_blank\\">二叉堆</a> 这种数据结构所设计的一种排序算法。堆排序的适用数据结构为数组。</p>\\n<h2>过程</h2>\\n<p>堆排序的本质是建立在堆上的选择排序。</p>\\n<h3>排序</h3>\\n<p>首先建立大顶堆，然后将堆顶的元素取出，作为最大值，与数组尾部的元素交换，并维持残余堆的性质；</p>\\n<p>之后将堆顶的元素取出，作为次大值，与数组倒数第二位元素交换，并维持残余堆的性质；</p>","autoDesc":true}');export{T as comp,q as data};