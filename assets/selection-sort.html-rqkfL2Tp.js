import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as e,a as s,b as a,e as n}from"./app-CfghY5LJ.js";const p="/leslie-blog/assets/selection-sort-animate-BzDNNOEO.svg",o={},i=s("p",null,"本页面将简要介绍选择排序。",-1),c=s("h2",{id:"定义",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#定义"},[s("span",null,"定义")])],-1),m=s("p",null,[a("选择排序（英语：Selection sort）是一种简单直观的排序算法。它的工作原理是每次找出第 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a(" 小的元素（也就是 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"A"),s("mrow",null,[s("mi",null,"i"),s("mi",{mathvariant:"normal"},"."),s("mi",{mathvariant:"normal"},"."),s("mi",null,"n")])])]),s("annotation",{encoding:"application/x-tex"},"A_{i..n}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8333em","vertical-align":"-0.15em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"A"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3117em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"i"),s("span",{class:"mord mtight"},".."),s("span",{class:"mord mathnormal mtight"},"n")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.15em"}},[s("span")])])])])])])])]),a(" 中最小的元素），然后将这个元素与数组第 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a(" 个位置上的元素交换。")],-1),r=n('<p><img src="'+p+'" alt="selection sort animate example"></p><h2 id="性质" tabindex="-1"><a class="header-anchor" href="#性质"><span>性质</span></a></h2><h3 id="稳定性" tabindex="-1"><a class="header-anchor" href="#稳定性"><span>稳定性</span></a></h3><p>由于 swap（交换两个元素）操作的存在，选择排序是一种不稳定的排序算法。</p><h3 id="时间复杂度" tabindex="-1"><a class="header-anchor" href="#时间复杂度"><span>时间复杂度</span></a></h3>',5),u=s("p",null,[a("选择排序的最优时间复杂度、平均时间复杂度和最坏时间复杂度均为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a("。")],-1),d=s("h2",{id:"代码实现",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#代码实现"},[s("span",null,"代码实现")])],-1),h=s("h3",{id:"伪代码",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#伪代码"},[s("span",null,"伪代码")])],-1),k=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.16em",columnalign:"left left",columnspacing:"1em"},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"1")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mrow",null,[s("mtext",{mathvariant:"bold"},"Input."),s("mtext",null," ")]),s("mtext",null,"An array "),s("mi",null,"A"),s("mtext",null," consisting of "),s("mi",null,"n"),s("mtext",null," elements.")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"2")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mrow",null,[s("mtext",{mathvariant:"bold"},"Output."),s("mtext",null," ")]),s("mi",null,"A"),s("mtext",null," will be sorted in nondecreasing order.")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"3")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mtext",{mathvariant:"bold"},"Method."),s("mtext",null," ")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"4")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mrow",null,[s("mtext",{mathvariant:"bold"},"for"),s("mtext",null," ")]),s("mi",null,"i"),s("mo",null,"←"),s("mn",null,"1"),s("mrow",null,[s("mtext",null," "),s("mtext",{mathvariant:"bold"},"to"),s("mtext",null," ")]),s("mi",null,"n"),s("mo",null,"−"),s("mn",null,"1")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"5")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mspace",{width:"2em"}),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"h"),s("mo",null,"←"),s("mi",null,"i")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"6")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mspace",{width:"2em"}),s("mrow",null,[s("mtext",{mathvariant:"bold"},"for"),s("mtext",null," ")]),s("mi",null,"j"),s("mo",null,"←"),s("mi",null,"i"),s("mo",null,"+"),s("mn",null,"1"),s("mrow",null,[s("mtext",null," "),s("mtext",{mathvariant:"bold"},"to"),s("mtext",null," ")]),s("mi",null,"n")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"7")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mspace",{width:"2em"}),s("mspace",{width:"2em"}),s("mrow",null,[s("mtext",{mathvariant:"bold"},"if"),s("mtext",null," ")]),s("mi",null,"A"),s("mo",{stretchy:"false"},"["),s("mi",null,"j"),s("mo",{stretchy:"false"},"]"),s("mo",null,"<"),s("mi",null,"A"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"h"),s("mo",{stretchy:"false"},"]")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"8")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mspace",{width:"2em"}),s("mspace",{width:"2em"}),s("mspace",{width:"2em"}),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"h"),s("mo",null,"←"),s("mi",null,"j")])])])]),s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mn",null,"9")])]),s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"false"},[s("mrow",null,[s("mspace",{width:"2em"}),s("mtext",null,"swap "),s("mi",null,"A"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]"),s("mtext",null," and "),s("mi",null,"A"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mi",null,"t"),s("mi",null,"h"),s("mo",{stretchy:"false"},"]")])])])])]),s("annotation",{encoding:"application/x-tex"}," \\begin{array}{ll} 1 & \\textbf{Input. } \\text{An array } A \\text{ consisting of }n\\text{ elements.} \\\\ 2 & \\textbf{Output. } A\\text{ will be sorted in nondecreasing order.} \\\\ 3 & \\textbf{Method. } \\\\ 4 & \\textbf{for } i\\gets 1\\textbf{ to }n-1\\\\ 5 & \\qquad ith\\gets i\\\\ 6 & \\qquad \\textbf{for }j\\gets i+1\\textbf{ to }n\\\\ 7 & \\qquad\\qquad\\textbf{if }A[j]<A[ith]\\\\ 8 & \\qquad\\qquad\\qquad ith\\gets j\\\\ 9 & \\qquad \\text{swap }A[i]\\text{ and }A[ith]\\\\ \\end{array} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"10.8em","vertical-align":"-5.15em"}}),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"5.65em"}},[s("span",{style:{top:"-7.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])]),s("span",{style:{top:"-6.61em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2")])]),s("span",{style:{top:"-5.41em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"3")])]),s("span",{style:{top:"-4.21em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"4")])]),s("span",{style:{top:"-3.01em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"5")])]),s("span",{style:{top:"-1.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"6")])]),s("span",{style:{top:"-0.61em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"7")])]),s("span",{style:{top:"0.59em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"8")])]),s("span",{style:{top:"1.79em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"9")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"5.15em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-l"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"5.65em"}},[s("span",{style:{top:"-7.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord textbf"},"Input. ")]),s("span",{class:"mord text"},[s("span",{class:"mord"},"An array ")]),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mord text"},[s("span",{class:"mord"}," consisting of ")]),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mord text"},[s("span",{class:"mord"}," elements.")])])]),s("span",{style:{top:"-6.61em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord textbf"},"Output. ")]),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mord text"},[s("span",{class:"mord"}," will be sorted in nondecreasing order.")])])]),s("span",{style:{top:"-5.41em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord textbf"},"Method. ")])])]),s("span",{style:{top:"-4.21em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord text"},[s("span",{class:"mord textbf"},"for ")]),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"←"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord text"},[s("span",{class:"mord textbf"}," to ")]),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1")])]),s("span",{style:{top:"-3.01em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mspace",style:{"margin-right":"2em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"←"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal"},"i")])]),s("span",{style:{top:"-1.81em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mspace",style:{"margin-right":"2em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textbf"},"for ")]),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"←"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mord text"},[s("span",{class:"mord textbf"}," to ")]),s("span",{class:"mord mathnormal"},"n")])]),s("span",{style:{top:"-0.61em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mspace",style:{"margin-right":"2em"}}),s("span",{class:"mspace",style:{"margin-right":"2em"}}),s("span",{class:"mord text"},[s("span",{class:"mord textbf"},"if ")]),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j"),s("span",{class:"mclose"},"]"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mclose"},"]")])]),s("span",{style:{top:"0.59em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mspace",style:{"margin-right":"2em"}}),s("span",{class:"mspace",style:{"margin-right":"2em"}}),s("span",{class:"mspace",style:{"margin-right":"2em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"←"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.05724em"}},"j")])]),s("span",{style:{top:"1.79em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mspace",style:{"margin-right":"2em"}}),s("span",{class:"mord text"},[s("span",{class:"mord"},"swap ")]),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]"),s("span",{class:"mord text"},[s("span",{class:"mord"}," and ")]),s("span",{class:"mord mathnormal"},"A"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord mathnormal"},"h"),s("span",{class:"mclose"},"]")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"5.15em"}},[s("span")])])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}})])])])])])])],-1),y=n(`<div class="hint-container info"><p class="hint-container-title">&quot;C++&quot;</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">selection_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> ith <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>ith<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ith <span class="token operator">=</span> j<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    std<span class="token double-colon punctuation">::</span><span class="token function">swap</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>ith<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container info"><p class="hint-container-title">&quot;Python&quot;</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">selection_sort</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">:</span>
        ith <span class="token operator">=</span> i
        <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> a<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> a<span class="token punctuation">[</span>ith<span class="token punctuation">]</span><span class="token punctuation">:</span>
                ith <span class="token operator">=</span> j
        a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>ith<span class="token punctuation">]</span> <span class="token operator">=</span> a<span class="token punctuation">[</span>ith<span class="token punctuation">]</span><span class="token punctuation">,</span> a<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><div class="hint-container info"><p class="hint-container-title">&quot;Java&quot;</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token comment">// arr代码下标从 1 开始索引</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">selection_sort</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> ith <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>ith<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ith <span class="token operator">=</span> j<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// swap</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>ith<span class="token punctuation">]</span><span class="token punctuation">;</span>
        arr<span class="token punctuation">[</span>ith<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`,3),g=[i,c,m,r,u,d,h,k,y];function v(x,w){return l(),e("div",null,g)}const _=t(o,[["render",v],["__file","selection-sort.html.vue"]]),A=JSON.parse('{"path":"/algorithms/sort/selection-sort.html","title":"","lang":"zh-CN","frontmatter":{"description":"本页面将简要介绍选择排序。 定义 选择排序（英语：Selection sort）是一种简单直观的排序算法。它的工作原理是每次找出第 i 小的元素（也就是 Ai..n​ 中最小的元素），然后将这个元素与数组第 i 个位置上的元素交换。 selection sort animate example 性质 稳定性 由于 swap（交换两个元素）操作的存在，选...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/algorithms/sort/selection-sort.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:description","content":"本页面将简要介绍选择排序。 定义 选择排序（英语：Selection sort）是一种简单直观的排序算法。它的工作原理是每次找出第 i 小的元素（也就是 Ai..n​ 中最小的元素），然后将这个元素与数组第 i 个位置上的元素交换。 selection sort animate example 性质 稳定性 由于 swap（交换两个元素）操作的存在，选..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-19T07:24:37.000Z"}],["meta",{"property":"article:author","content":"Leslie"}],["meta",{"property":"article:modified_time","content":"2024-04-19T07:24:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-19T07:24:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"性质","slug":"性质","link":"#性质","children":[{"level":3,"title":"稳定性","slug":"稳定性","link":"#稳定性","children":[]},{"level":3,"title":"时间复杂度","slug":"时间复杂度","link":"#时间复杂度","children":[]}]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[{"level":3,"title":"伪代码","slug":"伪代码","link":"#伪代码","children":[]}]}],"git":{"createdTime":1713511477000,"updatedTime":1713511477000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":1.3,"words":390},"filePathRelative":"algorithms/sort/selection-sort.md","localizedDate":"2024年4月19日","excerpt":"<p>本页面将简要介绍选择排序。</p>\\n<h2>定义</h2>\\n<p>选择排序（英语：Selection sort）是一种简单直观的排序算法。它的工作原理是每次找出第 <span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\\"application/x-tex\\">i</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6595em;\\"></span><span class=\\"mord mathnormal\\">i</span></span></span></span> 小的元素（也就是 <span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msub><mi>A</mi><mrow><mi>i</mi><mi mathvariant=\\"normal\\">.</mi><mi mathvariant=\\"normal\\">.</mi><mi>n</mi></mrow></msub></mrow><annotation encoding=\\"application/x-tex\\">A_{i..n}</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">A</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:0em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\"><span class=\\"mord mathnormal mtight\\">i</span><span class=\\"mord mtight\\">..</span><span class=\\"mord mathnormal mtight\\">n</span></span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span> 中最小的元素），然后将这个元素与数组第 <span v-pre=\\"\\" class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><mi>i</mi></mrow><annotation encoding=\\"application/x-tex\\">i</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.6595em;\\"></span><span class=\\"mord mathnormal\\">i</span></span></span></span> 个位置上的元素交换。</p>","autoDesc":true}');export{_ as comp,A as data};