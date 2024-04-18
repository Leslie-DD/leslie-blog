import{_ as v}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as c,c as a,a as i,b as e,d as n,w as d,e as l}from"./app-BEROnbsp.js";const u="/leslie-blog/assets/bplus-tree-1-Cbm_FUBt.png",o="/leslie-blog/assets/bplus-tree-2-BY7ZlvZg.webp",b="/leslie-blog/assets/bplus-tree-3-CKVKfbgg.webp",m="/leslie-blog/assets/bplus-tree-4-YDxknuGM.webp",g="/leslie-blog/assets/bplus-tree-5-Cx54WzJh.webp",p="/leslie-blog/assets/bplus-tree-6-BVBsuIRu.webp",f="/leslie-blog/assets/bplus-tree-7-DpxIFwQp.png",h="/leslie-blog/assets/bplus-tree-8-INVkSXol.png",N="/leslie-blog/assets/bplus-tree-9-CrsRZZGW.png",z="/leslie-blog/assets/bplus-tree-10-Chf-gHhP.png",L={},k={class:"hint-container info"},y=i("p",{class:"hint-container-title"},"转载自",-1),w={href:"https://oi-wiki.org/ds/bplus-tree/",target:"_blank",rel:"noopener noreferrer"},_=i("h2",{id:"引入",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#引入"},[i("span",null,"引入")])],-1),B=l('<p>B+ 树是一种多叉排序树，即每个节点通常有多个孩子。一棵 B+ 树包含根节点、内部节点和叶子节点。根节点可能是一个叶子节点，也可能是一个包含两个或两个以上孩子节点的节点。</p><p>B+ 树的特点是能够保持数据稳定有序，其插入与修改拥有较稳定的对数时间复杂度。B+ 树元素自底向上插入，这与二叉树恰好相反。</p><p>首先介绍一棵 $m$ 阶 B+ 树的特性。$m$ 表示这个树的每一个节点最多可以拥有的子节点个数。一棵 $m$ 阶的 B+ 树和 B 树的差异在于：</p><ol><li>有 $n$ 棵子树的节点中含有 $n-1$ 个关键字（即将区间分为 $n$ 个子区间，每个子区间对应一棵子树）。</li><li>所有叶子节点中包含了全部关键字的信息，及指向含这些关键字记录的指针，且叶子节点本身依关键字的大小自小而大顺序链接。</li><li>所有的非叶子节点可以看成是索引部分，节点中仅含有其子树（根节点）中的最大（或最小）关键字。</li><li>除根节点外，其他所有节点中所含关键字的个数最少有 $\\lceil \\dfrac{m}{2} \\rceil$（注意：B 树中除根以外的所有非叶子节点至少有 $\\lceil \\dfrac{m}{2} \\rceil$ 棵子树）。</li></ol><p>同时，B+ 树为了方便范围查询，叶子节点之间还用指针串联起来。</p><p>以下是一棵 B+ 树的典型结构：</p><p><img src="'+u+'" alt=""></p><h2 id="b-树相比于-b-树的优势" tabindex="-1"><a class="header-anchor" href="#b-树相比于-b-树的优势"><span>B+ 树相比于 B 树的优势</span></a></h2><p>由于索引节点上只有索引而没有数据，所以索引节点上能存储比 B 树更多的索引，这样树的高度就会更矮。树的高度越矮，磁盘寻道的次数就会越少。</p><p>因为数据都集中在叶子节点，而所有叶子节点的高度相同，那么可以在叶子节点中增加前后指针，指向同一个父节点的相邻兄弟节点，这样可以更好地支持查询一个值的前驱或后继，使连续访问更容易实现。</p><p>比如这样的 SQL 语句：<code>select * from tbl where t &gt; 10</code>，如果使用 B+ 树存储数据的话，可以首先定位到数据为 10 的节点，再沿着它的 <code>next</code> 指针一路找到所有在该叶子节点右边的叶子节点，返回这些节点包含的数据。</p><p>而如果使用 B 树结构，由于数据既可以存储在内部节点也可以存储在叶子节点，连续访问的实现会更加繁琐（需要在树的内部结构中进行移动）。</p><h2 id="过程" tabindex="-1"><a class="header-anchor" href="#过程"><span>过程</span></a></h2>',13),j=l('<h3 id="查找" tabindex="-1"><a class="header-anchor" href="#查找"><span>查找</span></a></h3><p>B+ 树的查找过程和 B 树类似。假设需要查找的键值是 $k$，那么从根节点开始，从上到下递归地遍历树。在每一层上，搜索的范围被减小到包含搜索值的子树中。</p><p>一个实例：在如下这棵 B+ 树上查找 45。</p><p><img src="'+o+'" alt=""></p><p>先和根节点比较</p><p><img src="'+b+'" alt=""></p><p>因为根节点的键值比 45 要小，所以去往根节点的右子树查找</p><p><img src="'+m+'" alt=""></p><p>因为 45 比 35 大，所以要与右边的索引相比</p><p><img src="'+g+'" alt=""></p><p>右侧的索引也为 45，所以要去往该节点的右子树继续查找</p><p><img src="'+p+`" alt=""></p><p>然后就可以找到 45</p><p>需要注意的是，在查找时，若非叶子节点上的关键字等于给定值，并不终止，而是继续向下直到叶子节点。因此，在 B+ 树中，不管查找成功与否，每次查找都是走了一条从根到叶子节点的路径。其余同 B 树的查找类似。</p><p>查找一个键的代码如下：</p><div class="hint-container info"><p class="hint-container-title">实现</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>T find(V key) {
  int i = 0;
  while (i &lt; this.number) {
    if (key.compareTo((V)this.keys[i]) &lt;= 0) break;
    i++;
  }
  if (this.number == i) return null;
  return this.childs[i].find(key);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历"><span>遍历</span></a></h3><p>B+ 树只在叶子节点的层级上就可以实现整棵树的遍历。从根节点出发一路搜索到最左端的叶子节点之后即可根据指针遍历。</p><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入"><span>插入</span></a></h3><p>B+ 树的插入算法与 B 树的相近：</p><ol><li>若为空树，创建一个叶子节点，然后将记录插入其中，此时这个叶子节点也是根节点，插入操作结束。</li><li>针对叶子类型节点：根据关键字找到叶子节点，向这个叶子节点插入记录。插入后，若当前节点关键字的个数小于 $m$，则插入结束。否则将这个叶子节点分裂成左右两个叶子节点，左叶子节点包含前 $m/2$ 个记录，右节点包含剩下的记录，将第 $m/2+1$ 个记录的关键字进位到父节点中（父节点一定是索引类型节点），进位到父节点的关键字左孩子指针向左节点，右孩子指针向右节点。将当前节点的指针指向父节点，然后执行第 3 步。</li><li>针对索引类型节点（内部节点）：若当前节点关键字的个数小于等于 $m-1$，则插入结束。否则，将这个索引类型节点分裂成两个索引节点，左索引节点包含前 $(m-1)/2$ 个 key，右节点包含 $m-(m-1)/2$ 个 key，将第 $m/2$ 个关键字进位到父节点中，进位到父节点的关键字左孩子指向左节点，进位到父节点的关键字右孩子指向右节点。将当前节点的指针指向父节点，然后重复这一步。</li></ol><p>比如在下图的 B+ 树中，插入新的数据 10：</p><p><img src="`+f+'" alt=""></p><p>由于插入节点 $[7,11]$ 在插入之后并没有溢出，所以可以直接变成 $[7,10,11]$。</p><p><img src="'+h+'" alt=""></p><p>而如下图的 B+ 树中，插入数据 4：</p><p><img src="'+N+'" alt=""></p><p>由于所在节点 $[2,3,5]$ 在插入之后数据溢出，因此需要分裂为两个新的节点，同时调整父节点的索引数据：</p><p><img src="'+z+'" alt=""></p><p>$[2,3,4,5]$ 分裂成了 $[2,3]$ 和 $[4,5]$，因此需要在这两个节点之间新增一个索引值，这个值应该满足：</p><ol><li>大于左子树的最大值；</li><li>小于等于右子树的最小值。</li></ol><p>综上，需要在父节点中新增索引 4 和两个指向新节点的指针。</p>',32),R={href:"https://www.cs.usfca.edu/~galles/visualization/BPlusTree.html",target:"_blank",rel:"noopener noreferrer"},A=l(`<p>插入一个键的代码如下：</p><div class="hint-container info"><p class="hint-container-title">实现</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>void BPTree::insert(int x) {
  if (root == NULL) {
    root = new Node;
    root-&gt;key[0] = x;
    root-&gt;IS_LEAF = true;
    root-&gt;size = 1;
    root-&gt;parent = NULL;
  } else {
    Node* cursor = root;
    Node* parent;

    while (cursor-&gt;IS_LEAF == false) {
      parent = cursor;
      for (int i = 0; i &lt; cursor-&gt;size; i++) {
        if (x &lt; cursor-&gt;key[i]) {
          cursor = cursor-&gt;ptr[i];
          break;
        }

        if (i == cursor-&gt;size - 1) {
          cursor = cursor-&gt;ptr[i + 1];
          break;
        }
      }
    }
    if (cursor-&gt;size &lt; MAX) {
      insertVal(x, cursor);
      cursor-&gt;parent = parent;
      cursor-&gt;ptr[cursor-&gt;size] = cursor-&gt;ptr[cursor-&gt;size - 1];
      cursor-&gt;ptr[cursor-&gt;size - 1] = NULL;
    } else
      split(x, parent, cursor);
  }
}

void BPTree::split(int x, Node* parent, Node* cursor) {
  Node* LLeaf = new Node;
  Node* RLeaf = new Node;
  insertVal(x, cursor);
  LLeaf-&gt;IS_LEAF = RLeaf-&gt;IS_LEAF = true;
  LLeaf-&gt;size = (MAX + 1) / 2;
  RLeaf-&gt;size = (MAX + 1) - (MAX + 1) / 2;
  for (int i = 0; i &lt; MAX + 1; i++) LLeaf-&gt;ptr[i] = cursor-&gt;ptr[i];
  LLeaf-&gt;ptr[LLeaf-&gt;size] = RLeaf;
  RLeaf-&gt;ptr[RLeaf-&gt;size] = LLeaf-&gt;ptr[MAX];
  LLeaf-&gt;ptr[MAX] = NULL;
  for (int i = 0; i &lt; LLeaf-&gt;size; i++) {
    LLeaf-&gt;key[i] = cursor-&gt;key[i];
  }
  for (int i = 0, j = LLeaf-&gt;size; i &lt; RLeaf-&gt;size; i++, j++) {
    RLeaf-&gt;key[i] = cursor-&gt;key[j];
  }
  if (cursor == root) {
    Node* newRoot = new Node;
    newRoot-&gt;key[0] = RLeaf-&gt;key[0];
    newRoot-&gt;ptr[0] = LLeaf;
    newRoot-&gt;ptr[1] = RLeaf;
    newRoot-&gt;IS_LEAF = false;
    newRoot-&gt;size = 1;
    root = newRoot;
    LLeaf-&gt;parent = RLeaf-&gt;parent = newRoot;
  } else {
    insertInternal(RLeaf-&gt;key[0], parent, LLeaf, RLeaf);
  }
}

void BPTree::insertInternal(int x, Node* cursor, Node* LLeaf, Node* RRLeaf) {
  if (cursor-&gt;size &lt; MAX) {
    auto i = insertVal(x, cursor);
    for (int j = cursor-&gt;size; j &gt; i + 1; j--) {
      cursor-&gt;ptr[j] = cursor-&gt;ptr[j - 1];
    }
    cursor-&gt;ptr[i] = LLeaf;
    cursor-&gt;ptr[i + 1] = RRLeaf;
  }

  else {
    Node* newLchild = new Node;
    Node* newRchild = new Node;
    Node* virtualPtr[MAX + 2];
    for (int i = 0; i &lt; MAX + 1; i++) {
      virtualPtr[i] = cursor-&gt;ptr[i];
    }
    int i = insertVal(x, cursor);
    for (int j = MAX + 2; j &gt; i + 1; j--) {
      virtualPtr[j] = virtualPtr[j - 1];
    }
    virtualPtr[i] = LLeaf;
    virtualPtr[i + 1] = RRLeaf;
    newLchild-&gt;IS_LEAF = newRchild-&gt;IS_LEAF = false;
    // 这里和叶子节点有区别
    newLchild-&gt;size = (MAX + 1) / 2;
    newRchild-&gt;size = MAX - (MAX + 1) / 2;
    for (int i = 0; i &lt; newLchild-&gt;size; i++) {
      newLchild-&gt;key[i] = cursor-&gt;key[i];
    }
    for (int i = 0, j = newLchild-&gt;size + 1; i &lt; newRchild-&gt;size; i++, j++) {
      newRchild-&gt;key[i] = cursor-&gt;key[j];
    }
    for (int i = 0; i &lt; LLeaf-&gt;size + 1; i++) {
      newLchild-&gt;ptr[i] = virtualPtr[i];
    }
    for (int i = 0, j = LLeaf-&gt;size + 1; i &lt; RRLeaf-&gt;size + 1; i++, j++) {
      newRchild-&gt;ptr[i] = virtualPtr[j];
    }
    if (cursor == root) {
      Node* newRoot = new Node;
      newRoot-&gt;key[0] = cursor-&gt;key[newLchild-&gt;size];
      newRoot-&gt;ptr[0] = newLchild;
      newRoot-&gt;ptr[1] = newRchild;
      newRoot-&gt;IS_LEAF = false;
      newRoot-&gt;size = 1;
      root = newRoot;
      newLchild-&gt;parent = newRchild-&gt;parent = newRoot;
    } else {
      insertInternal(cursor-&gt;key[newLchild-&gt;size], cursor-&gt;parent, newLchild,
                      newRchild);
    }
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h3><p>B+ 树的删除也仅在叶子节点中进行，当叶子节点中的最大关键字被删除时，其在非叶子节点中的值可以作为一个分界关键字存在。若因删除而使节点中关键字的个数少于 $\\lceil \\dfrac{m}{2} \\rceil$ 时，其和兄弟节点的合并过程亦和 B 树类似。</p><p>具体步骤如下：</p><ol><li>首先查询到键值所在的叶子节点，删除该叶子节点的数据。</li><li>如果删除叶子节点之后的数据数量，满足 B+ 树的平衡条件，则直接返回。</li><li>否则，就需要做平衡操作：如果该叶子节点的左右兄弟节点的数据量可以借用，就借用过来满足平衡条件。否则，就与相邻的兄弟节点合并成一个新的子节点了。</li></ol><p>在上面平衡操作中，如果是进行了合并操作，就需要向上修正父节点的指针：删除被合并节点的键值以及指针。</p><p>由于做了删除操作，可能父节点也会不平衡，那么就按照前面的步骤也对父节点进行重新平衡操作，这样一直到某个节点平衡为止。</p>`,8),S=l(`<div class="hint-container info"><p class="hint-container-title">实现</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>// Deletion operation on a B+ tree in C++
#include &lt;climits&gt;
#include &lt;fstream&gt;
#include &lt;iostream&gt;
#include &lt;sstream&gt;
using namespace std;
int MAX = 3;

class BPTree;

class Node {
  bool IS_LEAF;
  int *key, size;
  Node **ptr;
  friend class BPTree;

  public:
  Node();
};

class BPTree {
  Node *root;
  void insertInternal(int, Node *, Node *);
  void removeInternal(int, Node *, Node *);
  Node *findParent(Node *, Node *);

  public:
  BPTree();
  void search(int);
  void insert(int);
  void remove(int);
  void display(Node *);
  Node *getRoot();
};

Node::Node() {
  key = new int[MAX];
  ptr = new Node *[MAX + 1];
}

BPTree::BPTree() { root = NULL; }

void BPTree::insert(int x) {
  if (root == NULL) {
    root = new Node;
    root-&gt;key[0] = x;
    root-&gt;IS_LEAF = true;
    root-&gt;size = 1;
  } else {
    Node *cursor = root;
    Node *parent;
    while (cursor-&gt;IS_LEAF == false) {
      parent = cursor;
      for (int i = 0; i &lt; cursor-&gt;size; i++) {
        if (x &lt; cursor-&gt;key[i]) {
          cursor = cursor-&gt;ptr[i];
          break;
        }
        if (i == cursor-&gt;size - 1) {
          cursor = cursor-&gt;ptr[i + 1];
          break;
        }
      }
    }
    if (cursor-&gt;size &lt; MAX) {
      int i = 0;
      while (x &gt; cursor-&gt;key[i] &amp;&amp; i &lt; cursor-&gt;size) i++;
      for (int j = cursor-&gt;size; j &gt; i; j--) {
        cursor-&gt;key[j] = cursor-&gt;key[j - 1];
      }
      cursor-&gt;key[i] = x;
      cursor-&gt;size++;
      cursor-&gt;ptr[cursor-&gt;size] = cursor-&gt;ptr[cursor-&gt;size - 1];
      cursor-&gt;ptr[cursor-&gt;size - 1] = NULL;
    } else {
      Node *newLeaf = new Node;
      int virtualNode[MAX + 1];
      for (int i = 0; i &lt; MAX; i++) {
        virtualNode[i] = cursor-&gt;key[i];
      }
      int i = 0, j;
      while (x &gt; virtualNode[i] &amp;&amp; i &lt; MAX) i++;
      for (int j = MAX + 1; j &gt; i; j--) {
        virtualNode[j] = virtualNode[j - 1];
      }
      virtualNode[i] = x;
      newLeaf-&gt;IS_LEAF = true;
      cursor-&gt;size = (MAX + 1) / 2;
      newLeaf-&gt;size = MAX + 1 - (MAX + 1) / 2;
      cursor-&gt;ptr[cursor-&gt;size] = newLeaf;
      newLeaf-&gt;ptr[newLeaf-&gt;size] = cursor-&gt;ptr[MAX];
      cursor-&gt;ptr[MAX] = NULL;
      for (i = 0; i &lt; cursor-&gt;size; i++) {
        cursor-&gt;key[i] = virtualNode[i];
      }
      for (i = 0, j = cursor-&gt;size; i &lt; newLeaf-&gt;size; i++, j++) {
        newLeaf-&gt;key[i] = virtualNode[j];
      }
      if (cursor == root) {
        Node *newRoot = new Node;
        newRoot-&gt;key[0] = newLeaf-&gt;key[0];
        newRoot-&gt;ptr[0] = cursor;
        newRoot-&gt;ptr[1] = newLeaf;
        newRoot-&gt;IS_LEAF = false;
        newRoot-&gt;size = 1;
        root = newRoot;
      } else {
        insertInternal(newLeaf-&gt;key[0], parent, newLeaf);
      }
    }
  }
}

void BPTree::insertInternal(int x, Node *cursor, Node *child) {
  if (cursor-&gt;size &lt; MAX) {
    int i = 0;
    while (x &gt; cursor-&gt;key[i] &amp;&amp; i &lt; cursor-&gt;size) i++;
    for (int j = cursor-&gt;size; j &gt; i; j--) {
      cursor-&gt;key[j] = cursor-&gt;key[j - 1];
    }
    for (int j = cursor-&gt;size + 1; j &gt; i + 1; j--) {
      cursor-&gt;ptr[j] = cursor-&gt;ptr[j - 1];
    }
    cursor-&gt;key[i] = x;
    cursor-&gt;size++;
    cursor-&gt;ptr[i + 1] = child;
  } else {
    Node *newInternal = new Node;
    int virtualKey[MAX + 1];
    Node *virtualPtr[MAX + 2];
    for (int i = 0; i &lt; MAX; i++) {
      virtualKey[i] = cursor-&gt;key[i];
    }
    for (int i = 0; i &lt; MAX + 1; i++) {
      virtualPtr[i] = cursor-&gt;ptr[i];
    }
    int i = 0, j;
    while (x &gt; virtualKey[i] &amp;&amp; i &lt; MAX) i++;
    for (int j = MAX + 1; j &gt; i; j--) {
      virtualKey[j] = virtualKey[j - 1];
    }
    virtualKey[i] = x;
    for (int j = MAX + 2; j &gt; i + 1; j--) {
      virtualPtr[j] = virtualPtr[j - 1];
    }
    virtualPtr[i + 1] = child;
    newInternal-&gt;IS_LEAF = false;
    cursor-&gt;size = (MAX + 1) / 2;
    newInternal-&gt;size = MAX - (MAX + 1) / 2;
    for (i = 0, j = cursor-&gt;size + 1; i &lt; newInternal-&gt;size; i++, j++) {
      newInternal-&gt;key[i] = virtualKey[j];
    }
    for (i = 0, j = cursor-&gt;size + 1; i &lt; newInternal-&gt;size + 1; i++, j++) {
      newInternal-&gt;ptr[i] = virtualPtr[j];
    }
    if (cursor == root) {
      Node *newRoot = new Node;
      newRoot-&gt;key[0] = cursor-&gt;key[cursor-&gt;size];
      newRoot-&gt;ptr[0] = cursor;
      newRoot-&gt;ptr[1] = newInternal;
      newRoot-&gt;IS_LEAF = false;
      newRoot-&gt;size = 1;
      root = newRoot;
    } else {
      insertInternal(cursor-&gt;key[cursor-&gt;size], findParent(root, cursor),
                      newInternal);
    }
  }
}

Node *BPTree::findParent(Node *cursor, Node *child) {
  Node *parent;
  if (cursor-&gt;IS_LEAF || (cursor-&gt;ptr[0])-&gt;IS_LEAF) {
    return NULL;
  }
  for (int i = 0; i &lt; cursor-&gt;size + 1; i++) {
    if (cursor-&gt;ptr[i] == child) {
      parent = cursor;
      return parent;
    } else {
      parent = findParent(cursor-&gt;ptr[i], child);
      if (parent != NULL) return parent;
    }
  }
  return parent;
}

void BPTree::remove(int x) {
  if (root == NULL) {
    cout &lt;&lt; &quot;Tree empty\\n&quot;;
  } else {
    Node *cursor = root;
    Node *parent;
    int leftSibling, rightSibling;
    while (cursor-&gt;IS_LEAF == false) {
      for (int i = 0; i &lt; cursor-&gt;size; i++) {
        parent = cursor;
        leftSibling = i - 1;
        rightSibling = i + 1;
        if (x &lt; cursor-&gt;key[i]) {
          cursor = cursor-&gt;ptr[i];
          break;
        }
        if (i == cursor-&gt;size - 1) {
          leftSibling = i;
          rightSibling = i + 2;
          cursor = cursor-&gt;ptr[i + 1];
          break;
        }
      }
    }
    bool found = false;
    int pos;
    for (pos = 0; pos &lt; cursor-&gt;size; pos++) {
      if (cursor-&gt;key[pos] == x) {
        found = true;
        break;
      }
    }
    if (!found) {
      cout &lt;&lt; &quot;Not found\\n&quot;;
      return;
    }
    for (int i = pos; i &lt; cursor-&gt;size; i++) {
      cursor-&gt;key[i] = cursor-&gt;key[i + 1];
    }
    cursor-&gt;size--;
    if (cursor == root) {
      for (int i = 0; i &lt; MAX + 1; i++) {
        cursor-&gt;ptr[i] = NULL;
      }
      if (cursor-&gt;size == 0) {
        cout &lt;&lt; &quot;Tree died\\n&quot;;
        delete[] cursor-&gt;key;
        delete[] cursor-&gt;ptr;
        delete cursor;
        root = NULL;
      }
      return;
    }
    cursor-&gt;ptr[cursor-&gt;size] = cursor-&gt;ptr[cursor-&gt;size + 1];
    cursor-&gt;ptr[cursor-&gt;size + 1] = NULL;
    if (cursor-&gt;size &gt;= (MAX + 1) / 2) {
      return;
    }
    if (leftSibling &gt;= 0) {
      Node *leftNode = parent-&gt;ptr[leftSibling];
      if (leftNode-&gt;size &gt;= (MAX + 1) / 2 + 1) {
        for (int i = cursor-&gt;size; i &gt; 0; i--) {
          cursor-&gt;key[i] = cursor-&gt;key[i - 1];
        }
        cursor-&gt;size++;
        cursor-&gt;ptr[cursor-&gt;size] = cursor-&gt;ptr[cursor-&gt;size - 1];
        cursor-&gt;ptr[cursor-&gt;size - 1] = NULL;
        cursor-&gt;key[0] = leftNode-&gt;key[leftNode-&gt;size - 1];
        leftNode-&gt;size--;
        leftNode-&gt;ptr[leftNode-&gt;size] = cursor;
        leftNode-&gt;ptr[leftNode-&gt;size + 1] = NULL;
        parent-&gt;key[leftSibling] = cursor-&gt;key[0];
        return;
      }
    }
    if (rightSibling &lt;= parent-&gt;size) {
      Node *rightNode = parent-&gt;ptr[rightSibling];
      if (rightNode-&gt;size &gt;= (MAX + 1) / 2 + 1) {
        cursor-&gt;size++;
        cursor-&gt;ptr[cursor-&gt;size] = cursor-&gt;ptr[cursor-&gt;size - 1];
        cursor-&gt;ptr[cursor-&gt;size - 1] = NULL;
        cursor-&gt;key[cursor-&gt;size - 1] = rightNode-&gt;key[0];
        rightNode-&gt;size--;
        rightNode-&gt;ptr[rightNode-&gt;size] = rightNode-&gt;ptr[rightNode-&gt;size + 1];
        rightNode-&gt;ptr[rightNode-&gt;size + 1] = NULL;
        for (int i = 0; i &lt; rightNode-&gt;size; i++) {
          rightNode-&gt;key[i] = rightNode-&gt;key[i + 1];
        }
        parent-&gt;key[rightSibling - 1] = rightNode-&gt;key[0];
        return;
      }
    }
    if (leftSibling &gt;= 0) {
      Node *leftNode = parent-&gt;ptr[leftSibling];
      for (int i = leftNode-&gt;size, j = 0; j &lt; cursor-&gt;size; i++, j++) {
        leftNode-&gt;key[i] = cursor-&gt;key[j];
      }
      leftNode-&gt;ptr[leftNode-&gt;size] = NULL;
      leftNode-&gt;size += cursor-&gt;size;
      leftNode-&gt;ptr[leftNode-&gt;size] = cursor-&gt;ptr[cursor-&gt;size];
      removeInternal(parent-&gt;key[leftSibling], parent, cursor);
      delete[] cursor-&gt;key;
      delete[] cursor-&gt;ptr;
      delete cursor;
    } else if (rightSibling &lt;= parent-&gt;size) {
      Node *rightNode = parent-&gt;ptr[rightSibling];
      for (int i = cursor-&gt;size, j = 0; j &lt; rightNode-&gt;size; i++, j++) {
        cursor-&gt;key[i] = rightNode-&gt;key[j];
      }
      cursor-&gt;ptr[cursor-&gt;size] = NULL;
      cursor-&gt;size += rightNode-&gt;size;
      cursor-&gt;ptr[cursor-&gt;size] = rightNode-&gt;ptr[rightNode-&gt;size];
      cout &lt;&lt; &quot;Merging two leaf nodes\\n&quot;;
      removeInternal(parent-&gt;key[rightSibling - 1], parent, rightNode);
      delete[] rightNode-&gt;key;
      delete[] rightNode-&gt;ptr;
      delete rightNode;
    }
  }
}

void BPTree::removeInternal(int x, Node *cursor, Node *child) {
  if (cursor == root) {
    if (cursor-&gt;size == 1) {
      if (cursor-&gt;ptr[1] == child) {
        delete[] child-&gt;key;
        delete[] child-&gt;ptr;
        delete child;
        root = cursor-&gt;ptr[0];
        delete[] cursor-&gt;key;
        delete[] cursor-&gt;ptr;
        delete cursor;
        cout &lt;&lt; &quot;Changed root node\\n&quot;;
        return;
      } else if (cursor-&gt;ptr[0] == child) {
        delete[] child-&gt;key;
        delete[] child-&gt;ptr;
        delete child;
        root = cursor-&gt;ptr[1];
        delete[] cursor-&gt;key;
        delete[] cursor-&gt;ptr;
        delete cursor;
        cout &lt;&lt; &quot;Changed root node\\n&quot;;
        return;
      }
    }
  }
  int pos;
  for (pos = 0; pos &lt; cursor-&gt;size; pos++) {
    if (cursor-&gt;key[pos] == x) {
      break;
    }
  }
  for (int i = pos; i &lt; cursor-&gt;size; i++) {
    cursor-&gt;key[i] = cursor-&gt;key[i + 1];
  }
  for (pos = 0; pos &lt; cursor-&gt;size + 1; pos++) {
    if (cursor-&gt;ptr[pos] == child) {
      break;
    }
  }
  for (int i = pos; i &lt; cursor-&gt;size + 1; i++) {
    cursor-&gt;ptr[i] = cursor-&gt;ptr[i + 1];
  }
  cursor-&gt;size--;
  if (cursor-&gt;size &gt;= (MAX + 1) / 2 - 1) {
    return;
  }
  if (cursor == root) return;
  Node *parent = findParent(root, cursor);
  int leftSibling, rightSibling;
  for (pos = 0; pos &lt; parent-&gt;size + 1; pos++) {
    if (parent-&gt;ptr[pos] == cursor) {
      leftSibling = pos - 1;
      rightSibling = pos + 1;
      break;
    }
  }
  if (leftSibling &gt;= 0) {
    Node *leftNode = parent-&gt;ptr[leftSibling];
    if (leftNode-&gt;size &gt;= (MAX + 1) / 2) {
      for (int i = cursor-&gt;size; i &gt; 0; i--) {
        cursor-&gt;key[i] = cursor-&gt;key[i - 1];
      }
      cursor-&gt;key[0] = parent-&gt;key[leftSibling];
      parent-&gt;key[leftSibling] = leftNode-&gt;key[leftNode-&gt;size - 1];
      for (int i = cursor-&gt;size + 1; i &gt; 0; i--) {
        cursor-&gt;ptr[i] = cursor-&gt;ptr[i - 1];
      }
      cursor-&gt;ptr[0] = leftNode-&gt;ptr[leftNode-&gt;size];
      cursor-&gt;size++;
      leftNode-&gt;size--;
      return;
    }
  }
  if (rightSibling &lt;= parent-&gt;size) {
    Node *rightNode = parent-&gt;ptr[rightSibling];
    if (rightNode-&gt;size &gt;= (MAX + 1) / 2) {
      cursor-&gt;key[cursor-&gt;size] = parent-&gt;key[pos];
      parent-&gt;key[pos] = rightNode-&gt;key[0];
      for (int i = 0; i &lt; rightNode-&gt;size - 1; i++) {
        rightNode-&gt;key[i] = rightNode-&gt;key[i + 1];
      }
      cursor-&gt;ptr[cursor-&gt;size + 1] = rightNode-&gt;ptr[0];
      for (int i = 0; i &lt; rightNode-&gt;size; ++i) {
        rightNode-&gt;ptr[i] = rightNode-&gt;ptr[i + 1];
      }
      cursor-&gt;size++;
      rightNode-&gt;size--;
      return;
    }
  }
  if (leftSibling &gt;= 0) {
    Node *leftNode = parent-&gt;ptr[leftSibling];
    leftNode-&gt;key[leftNode-&gt;size] = parent-&gt;key[leftSibling];
    for (int i = leftNode-&gt;size + 1, j = 0; j &lt; cursor-&gt;size; j++) {
      leftNode-&gt;key[i] = cursor-&gt;key[j];
    }
    for (int i = leftNode-&gt;size + 1, j = 0; j &lt; cursor-&gt;size + 1; j++) {
      leftNode-&gt;ptr[i] = cursor-&gt;ptr[j];
      cursor-&gt;ptr[j] = NULL;
    }
    leftNode-&gt;size += cursor-&gt;size + 1;
    cursor-&gt;size = 0;
    removeInternal(parent-&gt;key[leftSibling], parent, cursor);
  } else if (rightSibling &lt;= parent-&gt;size) {
    Node *rightNode = parent-&gt;ptr[rightSibling];
    cursor-&gt;key[cursor-&gt;size] = parent-&gt;key[rightSibling - 1];
    for (int i = cursor-&gt;size + 1, j = 0; j &lt; rightNode-&gt;size; j++) {
      cursor-&gt;key[i] = rightNode-&gt;key[j];
    }
    for (int i = cursor-&gt;size + 1, j = 0; j &lt; rightNode-&gt;size + 1; j++) {
      cursor-&gt;ptr[i] = rightNode-&gt;ptr[j];
      rightNode-&gt;ptr[j] = NULL;
    }
    cursor-&gt;size += rightNode-&gt;size + 1;
    rightNode-&gt;size = 0;
    removeInternal(parent-&gt;key[rightSibling - 1], parent, rightNode);
  }
}

void BPTree::display(Node *cursor) {
  if (cursor != NULL) {
    for (int i = 0; i &lt; cursor-&gt;size; i++) {
      cout &lt;&lt; cursor-&gt;key[i] &lt;&lt; &quot; &quot;;
    }
    cout &lt;&lt; &quot;\\n&quot;;
    if (cursor-&gt;IS_LEAF != true) {
      for (int i = 0; i &lt; cursor-&gt;size + 1; i++) {
        display(cursor-&gt;ptr[i]);
      }
    }
  }
}

Node *BPTree::getRoot() { return root; }

int main() {
  BPTree node;
  node.insert(5);
  node.insert(15);
  node.insert(25);
  node.insert(35);
  node.insert(45);

  node.display(node.getRoot());

  node.remove(15);

  node.display(node.getRoot());
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料"><span>参考资料</span></a></h2>`,2),x={href:"https://en.wikipedia.org/wiki/B%2B_tree",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.codedump.info/post/20200615-btree-2/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.cnblogs.com/JayL-zxl/p/14304178.html",target:"_blank",rel:"noopener noreferrer"},X={href:"https://www.programiz.com/dsa/deletion-from-a-b-plus-tree",target:"_blank",rel:"noopener noreferrer"};function $(P,T){const s=t("ExternalLinkIcon"),r=t("RouteLink");return c(),a("div",null,[i("div",k,[y,i("p",null,[i("a",w,[e("https://oi-wiki.org/ds/bplus-tree/"),n(s)])])]),_,i("p",null,[e("B+ 树是 "),n(r,{to:"/blog/datastructure/b-tree.html"},{default:d(()=>[e("B 树")]),_:1}),e(" 的一个升级，它比 B 树更适合实际应用中操作系统的文件索引和数据库索引。目前现代关系型数据库最广泛的支持索引结构就是 B+ 树。")]),B,i("p",null,[e("与 "),n(r,{to:"/blog/datastructure/b-tree.html"},{default:d(()=>[e("B 树")]),_:1}),e(" 类似，B+ 树的基本操作有查找，遍历，插入，删除。")]),j,i("p",null,[e("更多的例子可以参考演示网站 "),i("a",R,[e("BPlustree"),n(s)])]),A,i("p",null,[e("可以参考 "),n(r,{to:"/blog/datastructure/b-tree.html"},{default:d(()=>[e("B 树")]),_:1}),e(" 中的删除章节。")]),S,i("ul",null,[i("li",null,[i("a",x,[e("B+ tree wikipedia"),n(s)])]),i("li",null,[i("a",M,[e("B 树、B+ 树索引算法原理（下）"),n(s)])]),i("li",null,[i("a",I,[e("B+ 树详解 + 代码实现（插入篇）"),n(s)])]),i("li",null,[i("a",X,[e("Deletion from a B+ Tree"),n(s)])])])])}const F=v(L,[["render",$],["__file","bplus-tree.html.vue"]]),q=JSON.parse('{"path":"/blog/datastructure/bplus-tree.html","title":"B+树","lang":"zh-CN","frontmatter":{"title":"B+树","author":"Persdre","editLink":false,"comment":false,"date":"2024-04-18T00:00:00.000Z","description":"转载自 https://oi-wiki.org/ds/bplus-tree/ 引入 B+ 树是 的一个升级，它比 B 树更适合实际应用中操作系统的文件索引和数据库索引。目前现代关系型数据库最广泛的支持索引结构就是 B+ 树。 B+ 树是一种多叉排序树，即每个节点通常有多个孩子。一棵 B+ 树包含根节点、内部节点和叶子节点。根节点可能是一个叶子节点，也可...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/blog/datastructure/bplus-tree.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:title","content":"B+树"}],["meta",{"property":"og:description","content":"转载自 https://oi-wiki.org/ds/bplus-tree/ 引入 B+ 树是 的一个升级，它比 B 树更适合实际应用中操作系统的文件索引和数据库索引。目前现代关系型数据库最广泛的支持索引结构就是 B+ 树。 B+ 树是一种多叉排序树，即每个节点通常有多个孩子。一棵 B+ 树包含根节点、内部节点和叶子节点。根节点可能是一个叶子节点，也可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T10:53:20.000Z"}],["meta",{"property":"article:author","content":"Persdre"}],["meta",{"property":"article:published_time","content":"2024-04-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-18T10:53:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"B+树\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-18T10:53:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Persdre\\"}]}"]]},"headers":[{"level":2,"title":"引入","slug":"引入","link":"#引入","children":[]},{"level":2,"title":"B+ 树相比于 B 树的优势","slug":"b-树相比于-b-树的优势","link":"#b-树相比于-b-树的优势","children":[]},{"level":2,"title":"过程","slug":"过程","link":"#过程","children":[{"level":3,"title":"查找","slug":"查找","link":"#查找","children":[]},{"level":3,"title":"遍历","slug":"遍历","link":"#遍历","children":[]},{"level":3,"title":"插入","slug":"插入","link":"#插入","children":[]},{"level":3,"title":"删除","slug":"删除","link":"#删除","children":[]}]},{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]}],"git":{"createdTime":1713437600000,"updatedTime":1713437600000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":14.24,"words":4273},"filePathRelative":"blog/datastructure/bplus-tree.md","localizedDate":"2024年4月18日","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">转载自</p>\\n<p><a href=\\"https://oi-wiki.org/ds/bplus-tree/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://oi-wiki.org/ds/bplus-tree/</a></p>\\n</div>\\n<h2>引入</h2>\\n<p>B+ 树是 <a href=\\"/leslie-blog/blog/datastructure/b-tree.html\\" target=\\"_blank\\">B 树</a> 的一个升级，它比 B 树更适合实际应用中操作系统的文件索引和数据库索引。目前现代关系型数据库最广泛的支持索引结构就是 B+ 树。</p>","autoDesc":true}');export{F as comp,q as data};
