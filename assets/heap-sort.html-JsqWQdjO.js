import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,c as t,b as i,e as s,d as k,w as e,a,o as p}from"./app-BU8wc123.js";const r={},d=i("p",null,"本页面将简要介绍堆排序。",-1),g=i("h2",{id:"定义",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#定义"},[i("span",null,"定义")])],-1),B=i("h2",{id:"过程",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#过程"},[i("span",null,"过程")])],-1),y=i("p",null,"堆排序的本质是建立在堆上的选择排序。",-1),c=i("h3",{id:"排序",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#排序"},[i("span",null,"排序")])],-1),A=i("p",null,"首先建立大顶堆，然后将堆顶的元素取出，作为最大值，与数组尾部的元素交换，并维持残余堆的性质；",-1),o=i("p",null,"之后将堆顶的元素取出，作为次大值，与数组倒数第二位元素交换，并维持残余堆的性质；",-1),D=i("p",null,[s("以此类推，在第 "),i("span",{class:"katex"},[i("span",{class:"katex-mathml"},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("semantics",null,[i("mrow",null,[i("mi",null,"n"),i("mo",null,"−"),i("mn",null,"1")]),i("annotation",{encoding:"application/x-tex"},"n-1")])])]),i("span",{class:"katex-html","aria-hidden":"true"},[i("span",{class:"base"},[i("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),i("span",{class:"mord mathnormal"},"n"),i("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),i("span",{class:"mbin"},"−"),i("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),i("span",{class:"base"},[i("span",{class:"strut",style:{height:"0.6444em"}}),i("span",{class:"mord"},"1")])])]),s(" 次操作后，整个数组就完成了排序。")],-1),C=a(`<h3 id="在数组上建立二叉堆" tabindex="-1"><a class="header-anchor" href="#在数组上建立二叉堆"><span>在数组上建立二叉堆</span></a></h3><p>从根节点开始，依次将每一层的节点排列在数组里。</p><p>于是有数组中下标为 <code>i</code> 的节点，对应的父结点、左子结点和右子结点如下：</p><div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">iParent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">iLeftChild</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">iRightChild</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性质" tabindex="-1"><a class="header-anchor" href="#性质"><span>性质</span></a></h2><h3 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性"><span>稳定性</span></a></h3><p>同选择排序一样，由于其中交换位置的操作，所以是不稳定的排序算法。</p><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h3>`,8),m=i("p",null,[s("堆排序的最优时间复杂度、平均时间复杂度、最坏时间复杂度均为 "),i("span",{class:"katex"},[i("span",{class:"katex-mathml"},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("semantics",null,[i("mrow",null,[i("mi",null,"O"),i("mo",{stretchy:"false"},"("),i("mi",null,"n"),i("mi",null,"log"),i("mo",null,"⁡"),i("mi",null,"n"),i("mo",{stretchy:"false"},")")]),i("annotation",{encoding:"application/x-tex"},"O(n\\log n)")])])]),i("span",{class:"katex-html","aria-hidden":"true"},[i("span",{class:"base"},[i("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),i("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),i("span",{class:"mopen"},"("),i("span",{class:"mord mathnormal"},"n"),i("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),i("span",{class:"mop"},[s("lo"),i("span",{style:{"margin-right":"0.01389em"}},"g")]),i("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),i("span",{class:"mord mathnormal"},"n"),i("span",{class:"mclose"},")")])])]),s("。")],-1),E=a(`<h3 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度"><span>空间复杂度</span></a></h3><p>由于可以在输入数组上建立堆，所以这是一个原地算法。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><div class="hint-container info"><p class="hint-container-title">&quot;C++&quot;</p><div class="language-cpp line-numbers-mode" data-highlighter="shiki" data-ext="cpp" data-title="cpp" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sift_down</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[], </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> end</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 计算父结点和子结点的下标</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> start;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> child </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  while</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (child </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> end) {</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 子结点下标在范围内才做比较</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 先比较两个子结点大小，选择最大的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (child </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> &lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> end </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[child] </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[child </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]) child</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 如果父结点比子结点大，代表调整完毕，直接跳出函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[parent] </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[child])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 否则交换父子内容，子结点再和孙结点比较</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">      swap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[parent], </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[child]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> child;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      child </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> heap_sort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[], </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 从最后一个节点的父节点开始 sift down 以完成堆化 (heapify)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (len </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sift_down</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(arr, i, len </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 先将第一个元素和已经排好的元素前一位做交换，再重新调整（刚调整的元素之前的元素），直到排序完毕</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> len </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    swap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[i]);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    sift_down</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(arr, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container info"><p class="hint-container-title">&quot;Python&quot;</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sift_down</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">end</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    # 计算父结点和子结点的下标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(start)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    child </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> child </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> end: </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 子结点下标在范围内才做比较</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        # 先比较两个子结点大小，选择最大的</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> child </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> end </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> arr[child] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> arr[child </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            child </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        # 如果父结点比子结点大，代表调整完毕，直接跳出函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> arr[parent] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> arr[child]:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        else</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 否则交换父子内容，子结点再和孙结点比较</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            arr[parent], arr[child] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> arr[child], arr[parent]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> child</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            child </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(parent </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> heap_sort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">arr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">len</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # 从最后一个节点的父节点开始 sift down 以完成堆化 (heapify)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">len</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">        sift_down</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(arr, i, </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">len</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # 先将第一个元素和已经排好的元素前一位做交换，再重新调整（刚调整的元素之前的元素），直到排序完毕</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> len</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], arr[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> arr[i], arr[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">        sift_down</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(arr, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="外部链接" tabindex="-1"><a class="header-anchor" href="#外部链接"><span>外部链接</span></a></h2><ul><li><a href="https://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F" target="_blank" rel="noopener noreferrer">堆排序 - 维基百科，自由的百科全书</a></li></ul>`,7);function F(v,u){const n=h("RouteLink");return p(),t("div",null,[d,g,i("p",null,[s("堆排序（英语：Heapsort）是指利用 "),k(n,{to:"/algorithms/ds/binary-heap.html"},{default:e(()=>[s("二叉堆")]),_:1}),s(" 这种数据结构所设计的一种排序算法。堆排序的适用数据结构为数组。")]),B,y,c,A,o,D,C,m,E])}const _=l(r,[["render",F],["__file","heap-sort.html.vue"]]),x=JSON.parse('{"path":"/algorithms/sort/heap-sort.html","title":"","lang":"zh-CN","frontmatter":{"description":"本页面将简要介绍堆排序。 定义 堆排序（英语：Heapsort）是指利用 这种数据结构所设计的一种排序算法。堆排序的适用数据结构为数组。 过程 堆排序的本质是建立在堆上的选择排序。 排序 首先建立大顶堆，然后将堆顶的元素取出，作为最大值，与数组尾部的元素交换，并维持残余堆的性质； 之后将堆顶的元素取出，作为次大值，与数组倒数第二位元素交换，并维持残余堆...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/algorithms/sort/heap-sort.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:description","content":"本页面将简要介绍堆排序。 定义 堆排序（英语：Heapsort）是指利用 这种数据结构所设计的一种排序算法。堆排序的适用数据结构为数组。 过程 堆排序的本质是建立在堆上的选择排序。 排序 首先建立大顶堆，然后将堆顶的元素取出，作为最大值，与数组尾部的元素交换，并维持残余堆的性质； 之后将堆顶的元素取出，作为次大值，与数组倒数第二位元素交换，并维持残余堆..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:24:37.000Z"}],["meta",{"property":"article:author","content":"DYF"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T07:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"DYF\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"过程","slug":"过程","link":"#过程","children":[{"level":3,"title":"排序","slug":"排序","link":"#排序","children":[]},{"level":3,"title":"在数组上建立二叉堆","slug":"在数组上建立二叉堆","link":"#在数组上建立二叉堆","children":[]}]},{"level":2,"title":"性质","slug":"性质","link":"#性质","children":[{"level":3,"title":"稳定性","slug":"稳定性","link":"#稳定性","children":[]},{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]},{"level":3,"title":"空间复杂度","slug":"空间复杂度","link":"#空间复杂度","children":[]}]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]},{"level":2,"title":"外部链接","slug":"外部链接","link":"#外部链接","children":[]}],"git":{"createdTime":1713511477000,"updatedTime":1713511477000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":2.87,"words":862},"filePathRelative":"algorithms/sort/heap-sort.md","localizedDate":"2024年4月19日","excerpt":"<p>本页面将简要介绍堆排序。</p>\\n<h2>定义</h2>\\n<p>堆排序（英语：Heapsort）是指利用 <a href=\\"/leslie-blog/algorithms/ds/binary-heap.html\\" target=\\"_blank\\">二叉堆</a> 这种数据结构所设计的一种排序算法。堆排序的适用数据结构为数组。</p>\\n<h2>过程</h2>\\n<p>堆排序的本质是建立在堆上的选择排序。</p>\\n<h3>排序</h3>\\n<p>首先建立大顶堆，然后将堆顶的元素取出，作为最大值，与数组尾部的元素交换，并维持残余堆的性质；</p>\\n<p>之后将堆顶的元素取出，作为次大值，与数组倒数第二位元素交换，并维持残余堆的性质；</p>","autoDesc":true}');export{_ as comp,x as data};