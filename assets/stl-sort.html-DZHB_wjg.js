import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as i,a as s,b as n,d as a,w as p,e}from"./app-CKkW0get.js";const u={},d=s("p",null,"本页面将简要介绍 C 和 C++ 标准库中实现的排序算法。",-1),m=s("p",null,[n("除已说明的函数外，本页所列函数默认定义于头文件 "),s("code",null,"<algorithm>"),n(" 中。")],-1),k=s("h2",{id:"qsort",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#qsort"},[s("span",null,"qsort")])],-1),h={href:"https://zh.cppreference.com/w/c/algorithm/qsort",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"qsort",-1),b={href:"https://zh.cppreference.com/w/cpp/algorithm/qsort",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"std::qsort",-1),f=s("code",null,"<stdlib.h>",-1),_=s("code",null,"<cstdlib>",-1),y=e(`<h3 id="qsort-与-bsearch-的比较函数" tabindex="-1"><a class="header-anchor" href="#qsort-与-bsearch-的比较函数"><span>qsort 与 bsearch 的比较函数</span></a></h3><p>qsort 函数有四个参数：数组名、元素个数、元素大小、比较规则。其中，比较规则通过指定比较函数来实现，指定不同的比较函数可以实现不同的排序规则。</p><p>比较函数的参数限定为两个 const void 类型的指针。返回值规定为正数、负数和 0。</p><p>比较函数的一种示例写法为：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>p1<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>p2<span class="token punctuation">)</span>  <span class="token comment">// int 类型数组的比较函数</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span>p1<span class="token punctuation">;</span>
  <span class="token keyword">int</span> <span class="token operator">*</span>b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span><span class="token punctuation">)</span>p2<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>a <span class="token operator">&gt;</span> <span class="token operator">*</span>b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 返回正数表示 a 大于 b</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>a <span class="token operator">&lt;</span> <span class="token operator">*</span>b<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 返回负数表示 a 小于 b</span>
  <span class="token keyword">else</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 返回 0 表示 a 与 b 等价</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：返回值用两个元素相减代替正负数是一种典型的错误写法，因为这样可能会导致溢出错误。</p><p>以下是排序结构体的一个示例：</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">eg</span>  <span class="token comment">// 示例结构体</span>
<span class="token punctuation">{</span>
  <span class="token keyword">int</span> e<span class="token punctuation">;</span>
  <span class="token keyword">int</span> g<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>p1<span class="token punctuation">,</span>
            <span class="token keyword">const</span> <span class="token keyword">void</span> <span class="token operator">*</span>p2<span class="token punctuation">)</span>  <span class="token comment">// struct eg 类型数组的比较函数：按成员 e 排序</span>
<span class="token punctuation">{</span>
  <span class="token keyword">struct</span> <span class="token class-name">eg</span> <span class="token operator">*</span>a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">eg</span> <span class="token operator">*</span><span class="token punctuation">)</span>p1<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token class-name">eg</span> <span class="token operator">*</span>b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">eg</span> <span class="token operator">*</span><span class="token punctuation">)</span>p2<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token operator">-&gt;</span>e <span class="token operator">&gt;</span> b<span class="token operator">-&gt;</span>e<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 返回正数表示 a 大于 b</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token operator">-&gt;</span>e <span class="token operator">&lt;</span> b<span class="token operator">-&gt;</span>e<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">// 返回负数表示 a 小于 b</span>
  <span class="token keyword">else</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 返回 0 表示 a 与 b 等价</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里也可以看出，等价不代表相等，只代表在此比较规则下两元素等价。</p><h2 id="std-sort" tabindex="-1"><a class="header-anchor" href="#std-sort"><span>std::sort</span></a></h2>`,10),w={href:"https://zh.cppreference.com/w/cpp/algorithm/sort",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"std::sort",-1),E=e(`<p>用法：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// a[0] .. a[n - 1] 为需要排序的数列</span>
<span class="token comment">// 对 a 原地排序，将其按从小到大的顺序排列</span>
std<span class="token double-colon punctuation">::</span><span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> a <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// cmp 为自定义的比较函数</span>
std<span class="token double-colon punctuation">::</span><span class="token function">sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> a <span class="token operator">+</span> n<span class="token punctuation">,</span> cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：sort 的比较函数的返回值是 true 和 false，用 true 和 false 表示两个元素的大小（先后）关系，这与 qsort 的三值比较函数的语义完全不同。具体内容详见上方给出的 sort 的文档。</p><p>如果要将 sort 简单改写为 qsort，维持排序顺序整体上不变（不考虑等价的元素），需要将返回 true 改为 - 1，返回 false 改为 1。</p><p><code>std::sort</code> 函数是更常用的 C++ 库比较函数。该函数的最后一个参数为二元比较函数，未指定 <code>cmp</code> 函数时，默认按从小到大的顺序排序。</p>`,5),q=s("p",null,[n("旧版 C++ 标准中仅要求它的 "),s("strong",null,"平均"),n(" 时间复杂度达到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n\\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),n("。C++11 标准以及后续标准要求它的 "),s("strong",null,"最坏"),n(" 时间复杂度达到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n\\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),n("。")],-1),C={href:"https://github.com/mirrors/gcc/blob/master/libstdc++-v3/include/bits/stl_algo.h",target:"_blank",rel:"noopener noreferrer"},A={href:"http://llvm.org/svn/llvm-project/libcxx/trunk/include/algorithm",target:"_blank",rel:"noopener noreferrer"},B=s("h2",{id:"std-nth-element",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#std-nth-element"},[s("span",null,"std::nth_element")])],-1),M={href:"https://zh.cppreference.com/w/cpp/algorithm/nth_element",target:"_blank",rel:"noopener noreferrer"},L=s("code",null,"std::nth_element",-1),O=e(`<p>用法：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span><span class="token function">nth_element</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> nth<span class="token punctuation">,</span> last<span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span><span class="token function">nth_element</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> nth<span class="token punctuation">,</span> last<span class="token punctuation">,</span> cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>它重排 <code>[first, last)</code> 中的元素，使得 <code>nth</code> 所指向的元素被更改为 <code>[first, last)</code> 排好序后该位置会出现的元素。这个新的 <code>nth</code> 元素前的所有元素小于或等于新的 <code>nth</code> 元素后的所有元素。</p><p>实现算法是未完成的内省排序。</p>`,4),z=s("p",null,[n("对于以上两种用法，C++ 标准要求它的平均时间复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),n("，其中 n 为 "),s("code",null,"std::distance(first, last)"),n("。")],-1),T=s("h2",{id:"std-stable-sort",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#std-stable-sort"},[s("span",null,"std::stable_sort")])],-1),N={href:"https://zh.cppreference.com/w/cpp/algorithm/stable_sort",target:"_blank",rel:"noopener noreferrer"},D=s("code",null,"std::stable_sort",-1),F=e(`<p>用法：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span><span class="token function">stable_sort</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> last<span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span><span class="token function">stable_sort</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> last<span class="token punctuation">,</span> cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>稳定排序，保证相等元素排序后的相对位置与原序列相同。</p>`,3),S=s("p",null,[n("时间复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"log"),s("mo",null,"⁡"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("msup",null,[s("mo",{stretchy:"false"},")"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n\\log (n)^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},[s("span",{class:"mclose"},")"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),n("，当额外内存可用时，复杂度为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mi",null,"log"),s("mo",null,"⁡"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n\\log n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},")")])])]),n("。")],-1),V=s("h2",{id:"std-partial-sort",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#std-partial-sort"},[s("span",null,"std::partial_sort")])],-1),R={href:"https://zh.cppreference.com/w/cpp/algorithm/partial_sort",target:"_blank",rel:"noopener noreferrer"},Z=s("code",null,"std::partial_sort",-1),j=e(`<p>用法：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// mid = first + k</span>
std<span class="token double-colon punctuation">::</span><span class="token function">partial_sort</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> last<span class="token punctuation">)</span><span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span><span class="token function">partial_sort</span><span class="token punctuation">(</span>first<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> last<span class="token punctuation">,</span> cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将序列中前 <code>k</code> 元素按 <code>cmp</code> 给定的顺序进行原地排序，后面的元素不保证顺序。未指定 <code>cmp</code> 函数时，默认按从小到大的顺序排序。</p>`,3),I=s("p",null,[n("复杂度：约 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",null,"l"),s("mi",null,"a"),s("mi",null,"s"),s("mi",null,"t")]),s("mo",null,"−"),s("mrow",null,[s("mi",null,"f"),s("mi",null,"i"),s("mi",null,"r"),s("mi",null,"s"),s("mi",null,"t")]),s("mo",{stretchy:"false"},")"),s("mi",null,"log"),s("mo",null,"⁡"),s("mo",{stretchy:"false"},"("),s("mrow",null,[s("mi",null,"m"),s("mi",null,"i"),s("mi",null,"d")]),s("mo",null,"−"),s("mrow",null,[s("mi",null,"f"),s("mi",null,"i"),s("mi",null,"r"),s("mi",null,"s"),s("mi",null,"t")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"(\\mathit{last}-\\mathit{first})\\log(\\mathit{mid}-\\mathit{first})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"last")]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"first")]),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"mid")]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathit"},"first")]),s("span",{class:"mclose"},")")])])]),n(" 次应用 "),s("code",null,"cmp"),n("。")],-1),P=e('<p>原理：</p><p><code>std::partial_sort</code> 的思想是：对原始容器内区间为 <code>[first, mid)</code> 的元素执行 <code>make_heap()</code> 操作，构造一个大根堆，然后将 <code>[mid, last)</code> 中的每个元素和 <code>first</code> 进行比较，保证 <code>first</code> 内的元素为堆内的最大值。如果小于该最大值，则互换元素位置，并对 <code>[first, mid)</code> 内的元素进行调整，使其保持最大堆序。比较完之后，再对 <code>[first, mid)</code> 内的元素做一次堆排序 <code>sort_heap()</code> 操作，使其按增序排列。注意，堆序和增序是不同的。</p><h2 id="自定义比较" tabindex="-1"><a class="header-anchor" href="#自定义比较"><span>自定义比较</span></a></h2>',3),J={href:"https://zh.cppreference.com/w/cpp/language/operators",target:"_blank",rel:"noopener noreferrer"},K=e(`<p>内置类型（如 <code>int</code>）和用户定义的结构体允许定制调用 STL 排序函数时使用的比较函数。可以在调用该函数时，在最后一个参数中传入一个实现二元比较的函数。</p><p>对于用户定义的结构体，对其使用 STL 排序函数前必须定义至少一种关系运算符，或是在使用函数时提供二元比较函数。通常推荐定义 <code>operator&lt;</code>。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>示例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> a<span class="token punctuation">[</span><span class="token number">1009</span><span class="token punctuation">]</span><span class="token punctuation">,</span> n <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
std<span class="token double-colon punctuation">::</span><span class="token function">sort</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> a <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>                  <span class="token comment">// 从小到大排序</span>
std<span class="token double-colon punctuation">::</span><span class="token function">sort</span><span class="token punctuation">(</span>a <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> a <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">,</span> <span class="token generic-function"><span class="token function">greater</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 从大到小排序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">data</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> a<span class="token punctuation">,</span> b<span class="token punctuation">;</span>

  <span class="token keyword">bool</span> <span class="token keyword">operator</span><span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token keyword">const</span> data rhs<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> rhs<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>b <span class="token operator">&lt;</span> rhs<span class="token punctuation">.</span>b<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> rhs<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> da<span class="token punctuation">[</span><span class="token number">1009</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">bool</span> <span class="token function">cmp</span><span class="token punctuation">(</span><span class="token keyword">const</span> data u1<span class="token punctuation">,</span> <span class="token keyword">const</span> data u2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>u1<span class="token punctuation">.</span>a <span class="token operator">==</span> u2<span class="token punctuation">.</span>a<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>u1<span class="token punctuation">.</span>b <span class="token operator">&gt;</span> u2<span class="token punctuation">.</span>b<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>u1<span class="token punctuation">.</span>a <span class="token operator">&gt;</span> u2<span class="token punctuation">.</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// ...</span>
std<span class="token double-colon punctuation">::</span><span class="token function">sort</span><span class="token punctuation">(</span>da <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> da <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 使用结构体中定义的 &lt; 运算符，从小到大排序</span>
std<span class="token double-colon punctuation">::</span><span class="token function">sort</span><span class="token punctuation">(</span>da <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> da <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">,</span> cmp<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 使用 cmp 函数进行比较，从大到小排序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="严格弱序" tabindex="-1"><a class="header-anchor" href="#严格弱序"><span>严格弱序</span></a></h3>`,6),Y=s("p",null,"常见的错误做法：",-1),G=s("ul",null,[s("li",null,[n("使用 "),s("code",null,"<="),n(" 来定义排序中的小于运算符。")]),s("li",null,"在调用排序运算符时，读取外部数值可能会改变的数组（常见于最短路算法）。"),s("li",null,"将多个数的最大最小值进行比较的结果作为排序运算符（如皇后游戏/加工生产调度 中的经典错误）。")],-1),H=s("h2",{id:"外部链接",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#外部链接"},[s("span",null,"外部链接")])],-1),Q={href:"https://ouuan.github.io/%E6%B5%85%E8%B0%88%E9%82%BB%E9%A1%B9%E4%BA%A4%E6%8D%A2%E6%8E%92%E5%BA%8F%E7%9A%84%E5%BA%94%E7%94%A8%E4%BB%A5%E5%8F%8A%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E7%9A%84%E9%97%AE%E9%A2%98/",target:"_blank",rel:"noopener noreferrer"},U=e('<h2 id="参考资料与注释" tabindex="-1"><a class="header-anchor" href="#参考资料与注释"><span>参考资料与注释</span></a></h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>因为大部分标准算法默认使用 <code>operator&lt;</code> 进行比较。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',3);function W(X,$){const t=l("ExternalLinkIcon"),o=l("RouteLink");return r(),i("div",null,[d,m,k,s("p",null,[n("参见："),s("a",h,[g,a(t)]),n("，"),s("a",b,[v,a(t)])]),s("p",null,[n("该函数为 C 标准库实现的 "),a(o,{to:"/algorithms/sort/quick-sort.html"},{default:p(()=>[n("快速排序")]),_:1}),n("，定义在 "),f,n(" 中。在 C++ 标准库里，该函数定义在 "),_,n(" 中。")]),y,s("p",null,[n("参见："),s("a",w,[x,a(t)])]),E,q,s("p",null,[n("C++ 标准并未严格要求此函数的实现算法，具体实现取决于编译器。"),s("a",C,[n("libstdc++"),a(t)]),n(" 和 "),s("a",A,[n("libc++"),a(t)]),n(" 中的实现都使用了 "),a(o,{to:"/algorithms/sort/quick-sort.html#%E5%86%85%E7%9C%81%E6%8E%92%E5%BA%8F"},{default:p(()=>[n("内省排序")]),_:1}),n("。")]),B,s("p",null,[n("参见："),s("a",M,[L,a(t)])]),O,z,s("p",null,[n("它常用于构建 "),a(o,{to:"/algorithms/ds/kdt.html"},{default:p(()=>[n("K-D Tree")]),_:1}),n("。")]),T,s("p",null,[n("参见："),s("a",N,[D,a(t)])]),F,S,V,s("p",null,[n("参见："),s("a",R,[Z,a(t)])]),j,I,P,s("p",null,[n("参见："),s("a",J,[n("运算符重载"),a(t)])]),K,s("p",null,[n("另请参阅："),a(o,{to:"/algorithms/math/order-theory.html#c-%E4%B8%AD%E7%9A%84%E5%BA%94%E7%94%A8"},{default:p(()=>[n("C++ 中的应用 - 序理论")]),_:1})]),s("p",null,[n("进行排序的运算符必须满足 "),a(o,{to:"/algorithms/math/order-theory.html#%E4%BA%8C%E5%85%83%E5%85%B3%E7%B3%BB"},{default:p(()=>[n("严格弱序")]),_:1}),n("，否则会出现不可预料的情况（如运行时错误、无法正确排序）。")]),Y,G,H,s("ul",null,[s("li",null,[s("a",Q,[n("浅谈邻项交换排序的应用以及需要注意的问题"),a(t)])])]),U])}const as=c(u,[["render",W],["__file","stl-sort.html.vue"]]),ts=JSON.parse('{"path":"/algorithms/sort/stl-sort.html","title":"","lang":"zh-CN","frontmatter":{"description":"本页面将简要介绍 C 和 C++ 标准库中实现的排序算法。 除已说明的函数外，本页所列函数默认定义于头文件 <algorithm> 中。 qsort 参见：qsort，std::qsort 该函数为 C 标准库实现的 ，定义在 <stdlib.h> 中。在 C++ 标准库里，该函数定义在 <cstdlib> 中。 qsort 与 bsearch 的比较...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/algorithms/sort/stl-sort.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:description","content":"本页面将简要介绍 C 和 C++ 标准库中实现的排序算法。 除已说明的函数外，本页所列函数默认定义于头文件 <algorithm> 中。 qsort 参见：qsort，std::qsort 该函数为 C 标准库实现的 ，定义在 <stdlib.h> 中。在 C++ 标准库里，该函数定义在 <cstdlib> 中。 qsort 与 bsearch 的比较..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:24:37.000Z"}],["meta",{"property":"article:author","content":"Leslie"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T07:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"qsort","slug":"qsort","link":"#qsort","children":[{"level":3,"title":"qsort 与 bsearch 的比较函数","slug":"qsort-与-bsearch-的比较函数","link":"#qsort-与-bsearch-的比较函数","children":[]}]},{"level":2,"title":"std::sort","slug":"std-sort","link":"#std-sort","children":[]},{"level":2,"title":"std::nth_element","slug":"std-nth-element","link":"#std-nth-element","children":[]},{"level":2,"title":"std::stable_sort","slug":"std-stable-sort","link":"#std-stable-sort","children":[]},{"level":2,"title":"std::partial_sort","slug":"std-partial-sort","link":"#std-partial-sort","children":[]},{"level":2,"title":"自定义比较","slug":"自定义比较","link":"#自定义比较","children":[{"level":3,"title":"严格弱序","slug":"严格弱序","link":"#严格弱序","children":[]}]},{"level":2,"title":"外部链接","slug":"外部链接","link":"#外部链接","children":[]},{"level":2,"title":"参考资料与注释","slug":"参考资料与注释","link":"#参考资料与注释","children":[]}],"git":{"createdTime":1713511477000,"updatedTime":1713511477000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":5.82,"words":1745},"filePathRelative":"algorithms/sort/stl-sort.md","localizedDate":"2024年4月19日","excerpt":"<p>本页面将简要介绍 C 和 C++ 标准库中实现的排序算法。</p>\\n<p>除已说明的函数外，本页所列函数默认定义于头文件 <code>&lt;algorithm&gt;</code> 中。</p>\\n<h2>qsort</h2>\\n<p>参见：<a href=\\"https://zh.cppreference.com/w/c/algorithm/qsort\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>qsort</code></a>，<a href=\\"https://zh.cppreference.com/w/cpp/algorithm/qsort\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>std::qsort</code></a></p>","autoDesc":true}');export{as as comp,ts as data};