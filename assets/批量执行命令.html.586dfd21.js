import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,f as t}from"./app.069ffa5f.js";const e={},p=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> re
<span class="token triple-quoted-string string">&#39;&#39;&#39;
\u6279\u91CF\u6267\u884C\u547D\u4EE4, example: 
cwebp 80 /xxx/dir/bc_00029.png -o /yyy/dir/tts_status_29.webp
&#39;&#39;&#39;</span>
<span class="token keyword">def</span> <span class="token function">getFlist</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>path<span class="token punctuation">)</span>

source_dir <span class="token operator">=</span> <span class="token string">&#39;/xxx/dir/&#39;</span>
target_dir <span class="token operator">=</span> <span class="token string">&#39;/yyy/dir/&#39;</span>

isExists<span class="token operator">=</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>target_dir<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token keyword">not</span> isExists<span class="token punctuation">:</span>
    os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>target_dir<span class="token punctuation">)</span> 
    <span class="token keyword">print</span><span class="token punctuation">(</span>target_dir <span class="token operator">+</span> <span class="token string">&#39; \u521B\u5EFA\u6210\u529F&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>target_dir <span class="token operator">+</span> <span class="token string">&#39; \u76EE\u5F55\u5DF2\u5B58\u5728&#39;</span><span class="token punctuation">)</span>

file_names <span class="token operator">=</span> getFlist<span class="token punctuation">(</span>source_dir<span class="token punctuation">)</span>

<span class="token keyword">for</span> file_name <span class="token keyword">in</span> file_names<span class="token punctuation">:</span>
    file_count <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span>
    file_counts <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">&#39;[1-9]\\d*&#39;</span><span class="token punctuation">,</span> file_name<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>file_counts<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        file_count <span class="token operator">=</span> file_counts<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    cmd <span class="token operator">=</span> <span class="token string">&quot;cwebp 80 %s%s -o %stts_start_%s.webp&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>source_dir<span class="token punctuation">,</span> <span class="token builtin">str</span><span class="token punctuation">(</span>file_name<span class="token punctuation">)</span><span class="token punctuation">,</span> target_dir<span class="token punctuation">,</span> file_count<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>
    os<span class="token punctuation">.</span>system<span class="token punctuation">(</span>cmd<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(e,[["render",o],["__file","\u6279\u91CF\u6267\u884C\u547D\u4EE4.html.vue"]]);export{d as default};
