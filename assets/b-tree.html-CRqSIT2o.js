import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c,a as e,b as t,d as n,w as o,e as s}from"./app-BU-DSkfy.js";const d="/leslie-blog/assets/b-tree-1-CtFHxlZt.svg",h="/leslie-blog/assets/b-tree-2-BaawHOQb.svg",b="/leslie-blog/assets/b-tree-3-CVYt1_JP.svg",g="/leslie-blog/assets/b-tree-4-DTikipTj.svg",k="/leslie-blog/assets/b-tree-5-BbU1TWYC.svg",u="/leslie-blog/assets/b-tree-6-CAqrC-WD.svg",m="/leslie-blog/assets/b-tree-7-Cgi95dwc.svg",y={},$=e("p",null,"author: Persdre",-1),f=e("h2",{id:"引入",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#引入"},[e("span",null,"引入")])],-1),B=e("p",null,"在计算机科学中，B 树（B-tree）是一种自平衡的树，能够保持数据有序。这种数据结构能够让查找数据、顺序访问、插入数据及删除的动作，都在对数时间内完成。",-1),_=e("p",null,"在 B 树中，有两种节点：",-1),v=e("ol",null,[e("li",null,"内部节点（internal node）：存储了数据以及指向其子节点的指针。"),e("li",null,"叶子节点（leaf node）：与内部节点不同的是，叶子节点只存储数据，并没有子节点。")],-1),x=e("br",null,null,-1),w=s('<h2 id="性质" tabindex="-1"><a class="header-anchor" href="#性质"><span>性质</span></a></h2><p>首先介绍一下一棵 $m$ 阶的 B 树的特性。$m$ 表示这个树的每一个节点最多可以拥有的子节点个数。一棵 $m$ 阶的 B 树满足的性质如下：</p><ol><li>每个节点最多有 $m$ 个子节点。</li><li>每一个非叶子节点（除根节点）最少有 $\\lceil \\dfrac{m}{2} \\rceil$ 个子节点。</li><li>如果根节点不是叶子节点，那么它至少有两个子节点。</li><li>有 $k$ 个子节点的非叶子节点拥有 $k−1$ 个键，且升序排列，满足 $k[i] &lt; k[i+1]$。</li><li>每个节点至多包含 $2k-1$ 个键。</li><li>所有的叶子节点都在同一层。</li></ol><p>一个简单的图例如下：</p><p><img src="'+d+'" alt=""></p><h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程"><span>过程</span></a></h2>',6),C=s(`<h3 id="查找" tabindex="-1"><a class="header-anchor" href="#查找"><span>查找</span></a></h3><p>B 树中的节点包含有多个键。假设需要查找的是 $k$，那么从根节点开始，从上到下递归的遍历树。在每一层上，搜索的范围被减小到包含了搜索值的子树中。<br> 子树值的范围被它的父节点的键确定。因为是从根节点开始的二分法查找，所以查找一个键的代码如下：</p><p>???+ note &quot;实现&quot;<br> \`\`\`cpp<br> BTreeNode *BTreeNode::search(int k) {<br> // 找到第一个大于等于待查找键 k 的键<br> int i = 0;<br> while (i &lt; n &amp;&amp; k &gt; keys[i]) i++;</p><pre><code>  // 如果找到的第一个键等于 k , 返回节点指针
  if (keys[i] == k) return this;

  // 如果没有找到键 k 且当前节点为叶子节点则返回NULL
  if (leaf == true) return NULL;

  // 递归
  return C[i]-&gt;search(k);
}
\`\`\`
</code></pre><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h3><p>B 树的中序遍历与二叉搜索树的中序遍历也很相似，从最左边的孩子节点开始，递归地打印最左边的孩子节点，然后对剩余的孩子和键重复相同的过程。<br> 最后，递归打印最右边的孩子节点。</p><p>遍历的代码如下：</p><p>???+ note &quot;实现&quot;<br> \`\`\`cpp<br> void BTreeNode::traverse() {<br> // 有 n 个键和 n+1 个孩子<br> // 遍历 n 个键和前 n 个孩子<br> int i;<br> for (i = 0; i &lt; n; i++) {<br> // 如果当前节点不是叶子节点, 在打印 key[i] 之前,<br> // 先遍历以 C[i] 为根的子树.<br> if (leaf == false) C[i]-&gt;traverse();<br> cout &lt;&lt; &quot; &quot; &lt;&lt; keys[i];<br> }</p><pre><code>  // 打印以最后一个孩子为根的子树
  if (leaf == false) C[i]-&gt;traverse();
}
\`\`\`
</code></pre><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入"><span>插入</span></a></h3><p>为了方便表述，插入设定为在以 $o$ 为根节点的 B 树中插入一个值为 $v$ 的新节点。</p><p>一个新插入的 $v$ 总是被插入到叶子节点。与二叉搜索树的插入操作类似，从根节点开始，向下遍历直到叶子节点，将值为 $v$ 的新节点插入到相应的叶子节点。<br> 与二叉搜索树不同的是，通过最小度定义了一个节点可以包含键的个数的一个取值范围，所以在插入一个新节点时，就需要确认插入这个叶子节点之后，它的父节点是否超出该节点本身最大可容纳的节点个数。</p><p>针对一棵高度为 $h$ 的 $m$ 阶 B 树，插入一个元素时，首先要验证该元素在 B 树中是否存在，如果不存在，那么就要在叶子节点中插入该新的元素，此时分 3 种情况：</p><ol><li>如果叶子节点空间足够，即该节点的关键字数小于 $m-1$，则直接插入在叶子节点的左边或右边；</li><li>如果空间满了以至于没有足够的空间去添加新的元素，即该节点的关键字数已经有了 $m$ 个，则需要将该节点进行「分裂」，将一半数量的关键字元素分裂到新的其相邻右节点中，中间关键字元素上移到父节点中，而且当节点中关键元素向右移动了，相关的指针也需要向右移。 <ol><li>从该节点的原有元素和新的元素中选择出中位数</li><li>小于这一中位数的元素放入左边节点，大于这一中位数的元素放入右边节点，中位数作为分隔值。</li><li>分隔值被插入到父节点中，这可能会造成父节点分裂，分裂父节点时可能又会使它的父节点分裂，以此类推。如果没有父节点（这一节点是根节点），就创建一个新的根节点（增加了树的高度）。</li></ol></li></ol><p>如果一直分裂到根节点，那么就需要创建一个新的根节点。它有一个分隔值和两个子节点。</p><p>这就是根节点并不像内部节点一样有最少子节点数量限制的原因。每个节点中元素的最大数量是 $U-1$。当一个节点分裂时，一个元素被移动到它的父节点，但是一个新的元素增加了进来。所以最大的元素数量 $U-1$ 必须能够被分成两个合法的节点。<br> 如果 $U-1$ 是奇数，那么 $U=2L$，总共有 $2L-1$ 个元素，一个新的节点有 $L-1$ 个元素，另外一个有 $L$ 个元素，都是合法的节点。如果 $U-1$ 是偶数，那么 $U=2L-1$, 总共有 $2L-2$ 个元素。一半是 $L-1$，正好是节点允许的最小元素数量。</p><p>插入的代码如下：</p><p>???+ note &quot;实现&quot;<br> \`\`\`cpp<br> void BTree::insert(int k) {<br> // 如果树为空树<br> if (root == NULL) {<br> // 为根节点分配空间<br> root = new BTreeNode(t, true);<br> root-&gt;keys[0] = k; // 插入节点 k<br> root-&gt;n = 1; // 更新根节点的关键字的个数为 1<br> } else {<br> // 当根节点已满，则对B-树进行生长操作<br> if (root-&gt;n == 2 * t - 1) {<br> // 为新的根节点分配空间<br> BTreeNode *s = new BTreeNode(t, false);</p><pre><code>      // 将旧的根节点作为新的根节点的孩子
      s-&gt;C[0] = root;

      // 将旧的根节点分裂为两个，并将一个关键字上移到新的根节点
      s-&gt;splitChild(0, root);

      // 新的根节点有两个孩子节点
      // 确定哪一个孩子将拥有新插入的关键字
      int i = 0;
      if (s-&gt;keys[0] &lt; k) i++;
      s-&gt;C[i]-&gt;insertNonFull(k);

      // 新的根节点更新为 s
      root = s;
    } else  // 根节点未满，调用 insertNonFull() 函数进行插入
      root-&gt;insertNonFull(k);
  }
}

// 将关键字 k 插入到一个未满的节点中
void BTreeNode::insertNonFull(int k) {
  // 初始化 i 为节点中的最后一个关键字的位置
  int i = n - 1;

  // 如果当前节点是叶子节点
  if (leaf == true) {
    // 下面的循环做两件事：
    // a) 找到新插入的关键字位置并插入
    // b) 移动所有大于关键字 k 的向后移动一个位置
    while (i &gt;= 0 &amp;&amp; keys[i] &gt; k) {
      keys[i + 1] = keys[i];
      i--;
    }

    // 插入新的关键字，节点包含的关键字个数加 1
    keys[i + 1] = k;
    n = n + 1;
  } else {
    // 找到第一个大于关键字 k 的关键字 keys[i] 的孩子节点
    while (i &gt;= 0 &amp;&amp; keys[i] &gt; k) i--;

    // 检查孩子节点是否已满
    if (C[i + 1]-&gt;n == 2 * t - 1) {
      // 如果已满，则进行分裂操作
      splitChild(i + 1, C[i + 1]);

      // 分裂后，C[i] 中间的关键字上移到父节点，
      // C[i] 分裂称为两个孩子节点
      // 找到新插入关键字应该插入的节点位置
      if (keys[i + 1] &lt; k) i++;
    }
    C[i + 1]-&gt;insertNonFull(k);
  }
}

// 节点 y 已满，则分裂节点 y
void BTreeNode::splitChild(int i, BTreeNode *y) {
  // 创建一个新的节点存储 t - 1 个关键字
  BTreeNode *z = new BTreeNode(y-&gt;t, y-&gt;leaf);
  z-&gt;n = t - 1;

  // 将节点 y 的后 t -1 个关键字拷贝到 z 中
  for (int j = 0; j &lt; t - 1; j++) z-&gt;keys[j] = y-&gt;keys[j + t];

  // 如果 y 不是叶子节点，拷贝 y 的后 t 个孩子节点到 z中
  if (y-&gt;leaf == false) {
    for (int j = 0; j &lt; t; j++) z-&gt;C[j] = y-&gt;C[j + t];
  }

  // 将 y 所包含的关键字的个数设置为 t -1
  // 因为已满则为2t -1 ，节点 z 中包含 t - 1 个
  // 一个关键字需要上移
  // 所以 y 中包含的关键字变为 2t-1 - (t-1) -1
  y-&gt;n = t - 1;

  // 给当前节点的指针分配新的空间，
  // 因为有新的关键字加入，父节点将多一个孩子。
  for (int j = n; j &gt;= i + 1; j--) C[j + 1] = C[j];

  // 当前节点的下一个孩子设置为z
  C[i + 1] = z;

  // 将所有父节点中比上移的关键字大的关键字后移
  // 找到上移节点的关键字的位置
  for (int j = n - 1; j &gt;= i; j--) keys[j + 1] = keys[j];

  // 拷贝 y 的中间关键字到其父节点中
  keys[i] = y-&gt;keys[t - 1];

  // 当前节点包含的关键字个数加 1
  n = n + 1;
}
\`\`\`
</code></pre><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h3><p>B 树的删除操作相比于插入操作更为复杂，因为删除之后经常需要重新排列节点。</p><p>与 B 树的插入操作类似，必须确保删除操作不违背 B 树的特性。正如插入操作中每一个节点所包含的键的个数不能超过 $2k-1$ 一样，删除操作要保证每一个节点包含的键的个数不少于 $k-1$ 个（除根节点允许包含比 $k-1$ 少的关键字的个数）。</p><p>有两种常用的删除策略：</p><ol><li>定位并删除元素，然后调整树使它满足约束条件。</li><li>从上到下处理这棵树，在进入一个节点之前，调整树使得之后一旦遇到了要删除的键，它可以被直接删除而不需要再进行调整。</li></ol><p>下面介绍使用第一种策略的删除。</p><p>首先，查找 B 树中需删除的元素，如果该元素在 B 树中存在，则将该元素在其节点中进行删除；删除该元素后，首先判断该元素是否有左右孩子节点，<br> 如果有，则上移孩子节点中的某相近元素（「左孩子最右边的节点」或「右孩子最左边的节点」）到父节点中，然后是移动之后的情况；如果没有，直接删除。</p><ol><li>某节点中元素数目小于 $m/2-1$，$m/2$ 向上取整，则需要看其某相邻兄弟节点是否丰满。</li><li>如果丰满（节点中元素个数大于 $m/2-1$），则向父节点借一个元素来满足条件。</li><li>如果其相邻兄弟都不丰满，即其节点数目等于 $m/2-1$，则该节点与其相邻的某一兄弟节点进行「合并」成一个节点。</li></ol><p>接下来用一个 5 阶 B 树为例，详细讲解删除的操作。</p><p><img src="`+h+'" alt=""></p><p>如图所示，接下来要依次删除 8，20，18，5。<br> 首先要删除元素 8。先查找到元素 8 在叶子节点中，删除 8 后叶子节点的元素个数为 2，符合 B 树的规则。然后需要把元素 11 和 12 都向前移动一位。完成后如图所示。</p><p><img src="'+b+'" alt=""></p><p>下一步，删除 20，因为 20 没有在叶子节点中，而是在中间节点中找到，可以发现 20 的继承者是 23（字母升序的下个元素），然后需要将 23 上移到 20 的位置，之后将孩子节点中的 23 进行删除。<br> 删除后检查一下，该孩子节点中元素个数大于 2，无需进行合并操作。</p><p>所以这一步之后，B 树如下图所示。</p><p><img src="'+g+'" alt=""></p><p>下一步删除 18，18 在叶子节点中，但是该节点中元素数目为 2，删除导致只有 1 个元素，已经小于最小元素数目 2。<br> 而由前面已经知道：如果其某个相邻兄弟节点中比较丰满（元素个数大于 $\\lceil \\dfrac{5}{2} \\rceil$），则可以向父节点借一个元素，然后将最丰满的相邻兄弟节点中上移最后或最前一个元素到父节点中。<br> 在这个实例中，右相邻兄弟节点中比较丰满（3 个元素大于 2），所以先向父节点借一个元素 23 下移到该叶子节点中，代替原来 19 的位置。19 前移。<br> 然后 24 在相邻右兄弟节点中，需要上移到父节点中。最后在相邻右兄弟节点中删除 24，后面的元素前移。</p><p>这一步之后，B 树如下图所示。</p><p><img src="'+k+'" alt=""></p><p>最后一步需要删除元素 5，但是删除后会导致很多问题。因为 5 所在的节点数目刚好达标也就是刚好满足最小元素个数 2。<br> 而相邻的兄弟节点也是同样的情况，删除一个元素都不能满足条件，所以需要该节点与某相邻兄弟节点进行合并操作；首先移动父节点中的元素（该元素在两个需要合并的两个节点元素之间）下移到其子节点中。<br> 然后将这两个节点进行合并成一个节点。所以在该实例中，首先将父节点中的元素 4 下移到已经删除 5 而只有 6 的节点中，然后将含有 4 和 6 的节点和含有 1，3 的相邻兄弟节点进行合并成一个节点。</p><p>这一步之后，B 树如下图所示。</p><p><img src="'+u+'" alt=""></p><p>但是这里观察到父节点只包含了一个元素 7，这就没有达标（因为非根节点包括叶子节点的元素数量 $K$ 必须满足于 $2&lt;=K&lt;=4$，而此处的 $K=1$）。<br> 如果这个问题节点的相邻兄弟比较丰满，则可以向父节点借一个元素。而此时兄弟节点元素刚好为 2，刚刚满足，只能进行合并，而根节点中的唯一元素 13 下移到子节点。<br> 这样，树的高度减少一层。</p><p>所以最终的效果如下图。</p><p><img src="'+m+'" alt=""></p><p>删除的伪代码如下：</p><p>???+ note &quot;实现&quot;<br><code>text B-Tree-Delete-Key(x, k) if not leaf[x] then y ← Preceding-Child(x) z ← Successor-Child(x) if n[[y] &gt; t − 1 then k&#39; ← Find-Predecessor-Key(k, x)]() Move-Key(k&#39;, y, x) Move-Key(k, x, z) B-Tree-Delete-Key(k, z) else if n[z] &gt; t − 1 then k&#39; ← Find-Successor-Key(k, x) Move-Key(k&#39;, z, x) Move-Key(k, x, y) B-Tree-Delete-Key(k, y) else Move-Key(k, x, y) Merge-Nodes(y, z) B-Tree-Delete-Key(k, y) else (leaf node) y ← Preceding-Child(x) z ← Successor-Child(x) w ← root(x) v ← RootKey(x) if n[x] &gt; t − 1 then Remove-Key(k, x) else if n[y] &gt; t − 1 then k&#39; ← Find-Predecessor-Key(w, v) Move-Key(k&#39;, y,w) k&#39; ← Find-Successor-Key(w, v) Move-Key(k&#39;,w, x) B-Tree-Delete-Key(k, x) else if n[w] &gt; t − 1 then k&#39; ← Find-Successor-Key(w, v) Move-Key(k&#39;, z,w) k&#39; ← Find-Predecessor-Key(w, v) Move-Key(k&#39;,w, x) B-Tree-Delete-Key(k, x) else s ← Find-Sibling(w) w&#39; ← root(w) if n[w&#39;] = t − 1 then Merge-Nodes(w&#39;,w) Merge-Nodes(w, s) B-Tree-Delete-Key(k, x) else Move-Key(v,w, x) B-Tree-Delete-Key(k, x) </code></p><h2 id="b-树优势" tabindex="-1"><a class="header-anchor" href="#b-树优势"><span>B 树优势</span></a></h2><p>之前已经介绍过二叉查找树。但是这类型数据结构的问题在于，由于每个节点只能容纳一个数据，导致树的高度很高，逻辑上挨着的节点数据可能离得很远。</p><p>考虑在磁盘中存储数据的情况，与内存相比，读写磁盘有以下不同点：</p><ol><li>读写磁盘的速度相比内存读写慢很多。</li><li>每次读写磁盘的单位要比读写内存的最小单位大很多。</li></ol><p>由于读写磁盘的这个特点，因此对应的数据结构应该尽量的满足「局部性原理」：「当一个数据被用到时，其附近的数据也通常会马上被使用」，为了满足局部性原理，<br> 所以应该将逻辑上相邻的数据在物理上也尽量存储在一起。这样才能减少读写磁盘的数量。</p><p>所以，对比起一个节点只能存储一个数据的 BST 类数据结构来，要求这种数据结构在形状上更「胖」、更加「扁平」，即：每个节点能容纳更多的数据，<br> 这样就能降低树的高度，同时让逻辑上相邻的数据都能尽量存储在物理上也相邻的硬盘空间上，减少磁盘读写。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>',52),T={href:"https://zh.m.wikipedia.org/zh-sg/B%E6%A0%91",target:"_blank",rel:"noopener noreferrer"},K={href:"https://www.cnblogs.com/lwhkdash/p/5313877.html",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.codedump.info/post/20200609-btree-1/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.cnblogs.com/lianzhilei/p/11250589.html",target:"_blank",rel:"noopener noreferrer"};function z(j,F){const r=i("RouteLink"),l=i("ExternalLinkIcon");return p(),c("div",null,[$,f,B,_,v,e("p",null,[t("树是一种数据结构。树用多个节点储存元素。某些节点存在一定的关系，用连线表示。二叉树是一种特殊的树，每个节点最多有两个子树。二叉树常用于实现二叉搜索树和二叉堆。"),x,t(" 而 "),n(r,{to:"/blog/datastructure/avl.html"},{default:o(()=>[t("AVL 树")]),_:1}),t(" 是特殊的二叉树，是最早被发明的自平衡二叉查找树。B 树保留了自平衡的特点，但 B 树的每个节点可以拥有两个以上的子节点，因此 B 树是一种多路搜索树。")]),w,e("p",null,[t("与 "),n(r,{to:"/blog/datastructure/bst.html"},{default:o(()=>[t("二叉搜索树")]),_:1}),t(" 类似，B 树的基本操作有查找，遍历，插入，删除。")]),C,e("ul",null,[e("li",null,[e("a",T,[t("B 树 - 维基百科，自由的百科全书"),n(l)])]),e("li",null,[e("a",K,[t("B 树详解"),n(l)])]),e("li",null,[e("a",N,[t("B 树、B + 树索引算法原理（上）"),n(l)])]),e("li",null,[e("a",L,[t("B 树，B + 树详解"),n(l)])])])])}const P=a(y,[["render",z],["__file","b-tree.html.vue"]]),q=JSON.parse('{"path":"/blog/datastructure/b-tree.html","title":"","lang":"zh-CN","frontmatter":{"description":"author: Persdre 引入 在计算机科学中，B 树（B-tree）是一种自平衡的树，能够保持数据有序。这种数据结构能够让查找数据、顺序访问、插入数据及删除的动作，都在对数时间内完成。 在 B 树中，有两种节点： 内部节点（internal node）：存储了数据以及指向其子节点的指针。 叶子节点（leaf node）：与内部节点不同的是，叶子...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/blog/datastructure/b-tree.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:description","content":"author: Persdre 引入 在计算机科学中，B 树（B-tree）是一种自平衡的树，能够保持数据有序。这种数据结构能够让查找数据、顺序访问、插入数据及删除的动作，都在对数时间内完成。 在 B 树中，有两种节点： 内部节点（internal node）：存储了数据以及指向其子节点的指针。 叶子节点（leaf node）：与内部节点不同的是，叶子..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T10:53:20.000Z"}],["meta",{"property":"article:author","content":"Leslie"}],["meta",{"property":"article:modified_time","content":"2024-04-18T10:53:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-18T10:53:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie\\",\\"url\\":\\"https://mrhope.site\\"}]}"]]},"headers":[{"level":2,"title":"引入","slug":"引入","link":"#引入","children":[]},{"level":2,"title":"性质","slug":"性质","link":"#性质","children":[]},{"level":2,"title":"过程","slug":"过程","link":"#过程","children":[{"level":3,"title":"查找","slug":"查找","link":"#查找","children":[]},{"level":3,"title":"遍历","slug":"遍历","link":"#遍历","children":[]},{"level":3,"title":"插入","slug":"插入","link":"#插入","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]}]},{"level":2,"title":"B 树优势","slug":"b-树优势","link":"#b-树优势","children":[]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1713437600000,"updatedTime":1713437600000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":14.84,"words":4453},"filePathRelative":"blog/datastructure/b-tree.md","localizedDate":"2024年4月18日","excerpt":"<p>author: Persdre</p>\\n<h2>引入</h2>\\n<p>在计算机科学中，B 树（B-tree）是一种自平衡的树，能够保持数据有序。这种数据结构能够让查找数据、顺序访问、插入数据及删除的动作，都在对数时间内完成。</p>\\n<p>在 B 树中，有两种节点：</p>\\n<ol>\\n<li>内部节点（internal node）：存储了数据以及指向其子节点的指针。</li>\\n<li>叶子节点（leaf node）：与内部节点不同的是，叶子节点只存储数据，并没有子节点。</li>\\n</ol>\\n<p>树是一种数据结构。树用多个节点储存元素。某些节点存在一定的关系，用连线表示。二叉树是一种特殊的树，每个节点最多有两个子树。二叉树常用于实现二叉搜索树和二叉堆。<br>\\n而 <a href=\\"/leslie-blog/blog/datastructure/avl.html\\" target=\\"_blank\\">AVL 树</a> 是特殊的二叉树，是最早被发明的自平衡二叉查找树。B 树保留了自平衡的特点，但 B 树的每个节点可以拥有两个以上的子节点，因此 B 树是一种多路搜索树。</p>","autoDesc":true}');export{P as comp,q as data};
