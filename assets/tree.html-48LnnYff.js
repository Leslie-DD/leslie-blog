import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,e as l}from"./app-CUkK_AtP.js";const a="/leslie-blog/assets/RR_concept-BZ8dr9Ij.jpeg",s="/leslie-blog/assets/RR_example-CZ1H9ju5.png",t="/leslie-blog/assets/LL_concept-D00bGkF1.jpeg",d="/leslie-blog/assets/LL_example-Daz2PEf6.png",r="/leslie-blog/assets/LR_1-CHyfUZz2.jpeg",v="/leslie-blog/assets/LR_2-BJN2uDqs.jpeg",c="/leslie-blog/assets/LR_3-D8cvrCGb.jpeg",b="/leslie-blog/assets/LR_4-DJRcneqp.jpeg",u="/leslie-blog/assets/RL_1-C8DX9DAR.jpeg",m="/leslie-blog/assets/RL_2-Bdrg-Ydw.jpeg",p="/leslie-blog/assets/RL_3-4oBOgyfv.jpeg",o="/leslie-blog/assets/RL_4-D_4KzcSu.jpeg",h={},g=l('<h2 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树</span></a></h2><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><p>二叉搜索树是一种二叉树的树形数据结构，其定义如下：</p><ol><li>空树是二叉搜索树。</li><li>若二叉搜索树的左子树不为空，则其左子树上所有点的附加权值均小于其根节点的值。</li><li>若二叉搜索树的右子树不为空，则其右子树上所有点的附加权值均大于其根节点的值。</li><li>二叉搜索树的左右子树均为二叉搜索树。</li></ol><p>二叉搜索树上的基本操作所花费的时间与这棵树的高度成正比。对于一个有 n 个结点的二叉搜索树中，这些操作的最优时间复杂度为 O(\\log n)，最坏为 O(n)。随机构造这样一棵二叉搜索树的期望高度为 <code>O(log n)</code>。</p><h2 id="avl-树-平衡二叉查找树" tabindex="-1"><a class="header-anchor" href="#avl-树-平衡二叉查找树"><span>AVL 树（平衡二叉查找树）</span></a></h2><h3 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1"><span>定义</span></a></h3><p>AVL（得名于其发明者的名字（Adelson-Velskii 以及 Landis）树，是一种平衡的二叉搜索树。由于各种算法教材上对 AVL 的介绍十分冗长，造成了很多人对 AVL 树复杂、不实用的印象。但实际上，AVL 树的原理简单，实现也并不复杂。</p><h3 id="性质" tabindex="-1"><a class="header-anchor" href="#性质"><span>性质</span></a></h3><ol><li>空二叉树是一个 AVL 树</li><li>如果 T 是一棵 AVL 树，那么其左右子树也是 AVL 树，并且 <code>|h(ls) - h(rs)| ≤ 1</code>，h 是其左右子树的高度</li><li>树高为 <code>O(log n)</code></li></ol><p>平衡因子（Balance Factor）：右子树高度 - 左子树高度。</p><p>基于平衡因子，我们就可以这样定义 AVL 树：</p><blockquote><p>AVL 树： 所有结点的平衡因子的绝对值都不超过 1 的二叉树。</p></blockquote><h3 id="操作" tabindex="-1"><a class="header-anchor" href="#操作"><span>操作</span></a></h3><p>对 AVL 树的修改操作一般有两种情况：插入、删除，在此过程中需要对树进行平衡化操作。</p><h4 id="树的平衡化操作——旋转" tabindex="-1"><a class="header-anchor" href="#树的平衡化操作——旋转"><span>树的平衡化操作——旋转</span></a></h4><p>在每一次插入数值之后，树的平衡性都可能被破坏，这时可以通过一个简单的操作来矫正平衡–旋转。</p><p>旋转的目的就是减少高度，通过降低整棵树的高度来平衡。哪边的树高，就把那边的树向上旋转。</p><p>通过旋转可以降低高度。</p><ul><li>所谓的左旋和右旋都是以子树为原点的：如b是a的子树，那么旋转就围绕b来进行。</li><li>如果b是a的左子树，那么就围绕b将a向右旋转，看着就像是a直接掉下来了，掉成了b的右子树。</li><li>如果b是a的右子树，那么就围绕b将a向左旋转，看着就像是a直接掉下来了，掉成了b的左子树。</li></ul><p>插入节点时分四种情况，四种情况对应的旋转方法是不同的：</p><p>例如对于被破坏平衡的节点 a 来说：</p><table><thead><tr><th>插入方式</th><th>描述</th><th>旋转方式</th></tr></thead><tbody><tr><td>LL</td><td>在a的左子树根节点的左子树上插入节点而破坏平衡</td><td>右旋转</td></tr><tr><td>RR</td><td>在a的右子树根节点的右子树上插入节点而破坏平衡</td><td>左旋转</td></tr><tr><td>LR</td><td>在a的左子树根节点的右子树上插入节点而破坏平衡</td><td>先左旋后右旋</td></tr><tr><td>RL</td><td>在a的右子树根节点的左子树上插入节点而破坏平衡</td><td>先右旋后左旋</td></tr></tbody></table><h4 id="左旋——rr" tabindex="-1"><a class="header-anchor" href="#左旋——rr"><span>左旋——RR</span></a></h4><p><strong>左旋操作</strong></p><p><img src="'+a+'" alt="左旋操作——concept"></p><p>上图就是一个标准的X结点的左旋流程。<br> 在第一步图示仅仅将X结点进行左旋，成为Y结点的一个子节点。</p><p>但是此时出现一个问题，就是Y结点有了三个子节点，这连最基础的二叉树都不是了，所以需要进行第二部操作。</p><p>在第二部操作的时候，我们将B结点设置为X结点的右孩子，这里可以仔细想一下，B结点一开始为X结点的右子树Y的左孩子，那么其肯定比X结点大，比Y结点小，所以这里设置为X结点的右孩子是没有问题的。</p><p><strong>上图中Y结点有左子树B，如果没有左子树B，那么第二部也就不需要操作了，这里很容易理解，都没有还操作什么鬼。</strong></p><p>到这里一个标准的左旋流程就完成了。</p><p>左旋操作具体应用</p><p>在构建AVL树的过程中我们到底怎么使用左旋操作呢？这里我们先举一个例子，如下图：</p><p><img src="'+s+`" alt="左旋操作——example"></p><p>在上图中我们插入结点5的时候就出现不平衡了，3结点的平衡因子为-2，这时候我们可以将结点3进行左旋，如右图，这样就重新达到平衡状态了。</p><div class="hint-container info"><p class="hint-container-title">左旋代码实现</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>private void left_rotate(AVL&lt;E&gt;.Node&lt;E&gt; t) {
    if (t != null) {
        Node tr = t.right;
        //将t结点的右孩子的左结点设置为t结点的右孩子
        t.right = tr.left;
        if (tr.left != null) {
            //重置其父节点
            tr.left.parent = t;
        }
        //t结点旋转下来，其右孩子相当于替换t结点的位置
        //所以这里同样需要调整其右孩子的父节点为t结点的父节点
        tr.parent = t.parent;
        //整棵树只有根结点没有父节点，这里检测我们旋转的是否为根结点
        //如果是则需要重置root结点
        if (t.parent == null) {
            root = tr;
        } else {
            //如果t结点位于其父节点的左子树，则旋转上去的右结点则
            //位于父节点的左子树，反之一样
            if (t.parent.left == t) {
                t.parent.left = tr;
            } else if (t.parent.right == t) {
                t.parent.right = tr;
            }
        }
        //将t结点设置为其右子树的左结点
        tr.left = t;
        //重置t结点的父节点
        t.parent = tr;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="右旋——ll" tabindex="-1"><a class="header-anchor" href="#右旋——ll"><span>右旋——LL</span></a></h4><p><strong>右旋操作</strong></p><p><img src="`+t+'" alt="右旋操作——concept"></p><p>上图就是对Y结点进行右旋操作的流程，有了左旋操作的基础这里应该很好理解了。</p><p>第一步同样仅仅将Y结点右旋，成为X的一个结点，同样这里会出现问题X有了三个结点。</p><p>第二步，如果一开始Y左子树存在右结点，上图中也就是B结点，则将其设置为Y的右孩子。</p><p>到这里一个标准的右旋流程就完成了。</p><p><strong>右旋操作具体应用</strong></p><p>我们看一个右旋的例子，如图：</p><p><img src="'+d+`" alt="右旋操作——example"></p><p>在我们插入结点1的时候就会出现不平衡现象，结点5的平衡因子变为2，这里我们将结点5进行右旋，变为右图就又变为一颗AVL树了。</p><div class="hint-container info"><p class="hint-container-title">右旋代码实现</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>private void right_rotate(AVL&lt;E&gt;.Node&lt;E&gt; t) {
    if (t != null) {
        Node&lt;E&gt; tl = t.left;
        t.left =tl.right;
        if (tl.right != null) {
            tl.right.parent = t;
        }

        tl.parent = t.parent;
        if (t.parent == null) {
            root = tl;
        } else {
            if (t.parent.left == t) {
                t.parent.left = tl;
            } else if (t.parent.right == t) {
                t.parent.right = tl;
            }
        }
        tl.right = t;
        t.parent = tl;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="左平衡操作与右平衡操作" tabindex="-1"><a class="header-anchor" href="#左平衡操作与右平衡操作"><span>左平衡操作与右平衡操作</span></a></h4><p>上面我们了解了左旋与右旋的概念，也通过具体案例明白到底怎么通过左旋或者右旋来使二叉排序树重新达到AVL树的要求，但是这里要明白有些情况并不是仅仅靠一次左旋或者右旋就能实现平衡的目的，这是就需要左旋右旋一起使用来使其达到平衡的目的。</p><p>那么到底怎么区分是使用左旋或者右旋或者左旋右旋一起使用才能使树重新达到平衡呢？</p><p>这里我们就需要仔细分情况来处理了，我们在构建AVL树插入某一个元素候如果出现不平衡现象肯定是左子树或者右子树出现了不平衡现象，这里有点绕，不过也很好理解，某一结点平衡因子绝对值超过1了，肯定是左子树过高或者右子树过高产生的，这里，我们采用分治的思想来解决，分治思想是算法思想的一种，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。</p><p>这里我们怎么使用分治的思想呢？首先出现不平衡只有两种可能，某一结左子树或者右子树过高导致的，我们可以先考虑左子树过高该怎么处理，然后考虑右子树过高怎么处理，当然这里只是粗略的分为两大解决问题的方向，往下还会继续分析不同情况，接下来我们将会仔细分析。</p><h4 id="左平衡操作" tabindex="-1"><a class="header-anchor" href="#左平衡操作"><span>左平衡操作</span></a></h4><p>左平衡操作，即结点t的不平衡是因为左子树过深造成的，这时我们需要对t左子树分情况进行解决。</p><p>左平衡操作情况分类</p><p>1、如果新的结点插入后t的左孩子的平衡因子为1，也就是插入到t左孩子的左侧，则直接对结点t进行右旋操作即可</p><p><img src="`+r+'" alt=""></p><p>2、如果新的结点插入后t的左孩子的平衡因子为-1，也就是插入到t左孩子的右侧,则需要进行分情况讨论</p><ul><li>情况a：当t的左孩子的右子树根节点的平衡因子为-1，这时需要进行两步操作，先以tl进行左旋，在以t进行右旋。</li></ul><p><img src="'+v+'" alt=""></p><p>经过上述过程，最终又达到了平衡状态。</p><ul><li>情况b：当p的左孩子的右子树根节点的平衡因子为1，这时需要进行两步操作，先以tl进行左旋，在以t进行右旋。</li></ul><p><img src="'+c+'" alt=""></p><ul><li>情况c：当p的左孩子的右子树根节点的平衡因子为0，这时需要进行两步操作，先以tl进行左旋，在以t进行右旋。</li></ul><p><img src="'+b+`" alt=""></p><p>到这里细心的同学肯定有一个疑问，情况a,b,c不都是先以tl左旋，再以t右旋吗？为什么还要拆分出来？</p><p>首先观察a,b,c三种情况，旋转之前是叶子结点的，在两次旋转之后依然是叶子结点，也就是说其平衡因子旋转前后无变化，均是0。</p><p>但是再观察一下t,tl,tlr这三个节点旋转前后的平衡因子，不同情况下前后是不一样的，所以这里需要区分一下，具体旋转后t,tl,tlr的平衡因子如下：</p><ul><li><p>情况a: <br> t.balance = 0; <br> tlr.balance = 0; <br> tl.balance = 1;</p></li><li><p>情况b: <br> t.balance = -1; <br> tl.balance =0; <br> tlr.balance = 0;</p></li><li><p>情况c: <br> t.balance = 0; <br> tl.balance = 0; <br> tlr.balance = 0;</p></li></ul><p>以上就是左平衡操作的所有情况。</p><div class="hint-container info"><p class="hint-container-title">左平衡具体代码</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>private void leftBalance(AVL&lt;E&gt;.Node&lt;E&gt; t) {
    Node&lt;E&gt; tl = t.left;
    switch (tl.balance) {
        case LH:
            right_rotate(t);
            tl.balance = EH;
            t.balance = EH;
            break;
        case RH:
            Node&lt;E&gt; tlr = tl.right;
            switch (tlr.balance) {
                case RH:
                    t.balance = EH;
                    tlr.balance = EH;
                    tl.balance = LH;
                    break;
                case LH:
                    t.balance = RH;
                    tl.balance =EH;
                    tlr.balance = EH;
                    break;
                case EH:
                    t.balance = EH;
                    tl.balance = EH;
                    tlr.balance =EH;
                    break;
                //统一旋转
                default:
                    break;
            }
            //统一先以tl左旋，在以t右旋
            left_rotate(t.left);
            right_rotate(t);
            break;
        default:
            break;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>好了，左平衡操作所有情况讲解以及具体代码实现，主要就是分治思想，加以细分然后逐个情况逐个解决的套路。</p><h4 id="右平衡操作" tabindex="-1"><a class="header-anchor" href="#右平衡操作"><span>右平衡操作</span></a></h4><p>右平衡操作，即结点t的不平衡是因为右子树过深造成的，这时我们需要对t右子树分情况进行解决。</p><p>右平衡操作情况分类</p><ol><li>如果新的结点插入后t的右孩子的平衡因子为1，也就是插入到t左孩子的右侧，则直接对结点t进行左旋操作即可</li></ol><p><img src="`+u+'" alt=""></p><ol start="2"><li>如果新的结点插入后t的右孩子的平衡因子为-1，也就是插入到t右孩子的左侧,则需要进行分情况讨论</li></ol><ul><li>情况a：当t的右孩子的左子树根节点的平衡因子为1，这时需要进行两步操作，先以tr进行右旋，在以t进行左旋。</li></ul><p><img src="'+m+'" alt=""></p><ul><li>情况b：当p的右孩子的左子树根节点的平衡因子为-1，这时需要进行两步操作，先以tr进行右旋，在以t进行左旋。</li></ul><p><img src="'+p+'" alt=""></p><ul><li>情况c：当p的右孩子的左子树根节点的平衡因子为0，这时需要进行两步操作，先以tr进行右旋，在以t进行左旋。</li></ul><p><img src="'+o+`" alt=""></p><p>同样，a,b,c三种情况旋转前后叶子结点依然是叶子结点，变化的<br> 只是t,tr,trl结点的平衡因子，并且三种情况trl最后平衡因子均为0.</p><div class="hint-container info"><p class="hint-container-title">右平衡代码实现</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>private void rightBalance(AVL&lt;E&gt;.Node&lt;E&gt; t) {
    Node&lt;E&gt; tr = t.right;
    switch (tr.balance) {
        case RH:
            left_rotate(t);
            t.balance = EH;
            tr.balance = EH;
            break;
        case LH:
            Node&lt;E&gt; trl = tr.left;
            switch (trl.balance) {
                case LH:
                    t.balance = EH;
                    tr.balance = RH;
                    break;
                case RH:
                    t.balance = LH;
                    tr.balance = EH;
                    break;
                case EH:
                    t.balance = EH;
                    tr.balance = EH;
                    break;

            }
            trl.balance = EH;
            right_rotate(t.right);
            left_rotate(t);
            break;
        default:
            break;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>到此，左平衡与右平衡操作也就讲解完了，主要思想是采用的分治思想，大问题化为小问题，然后逐个解决，到这里，如果能全部理解，那么AVL树的最核心部分就完全理解了，对于红黑树来说上面也是很核心的部分。</p><h3 id="avl树的创建过程" tabindex="-1"><a class="header-anchor" href="#avl树的创建过程"><span>AVL树的创建过程</span></a></h3><p>这部分我们主要了解下怎么创建AVL树，也就是添加元素方法的整体逻辑。</p><div class="hint-container info"><p class="hint-container-title">结点类</p><p>先看下每个结点类所包含的信息</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>public class Node&lt;E extends Comparable&lt;E&gt;&gt;{
       E element; // data
       int balance = 0; // 每个结点的平衡因子
       Node&lt;E&gt; left;
       Node&lt;E&gt; right;
       Node&lt;E&gt; parent;
       public Node(E element, Node&lt;E&gt; parent) {
           this.element = element;
           this.parent = parent;
       }

       @Override
       public String toString() {
           // TODO Auto-generated method stub
           return element + &quot;BF: &quot; + balance;
       }

       public E getElement() {
           return element;
       }

       public void setElement(E element) {
           this.element = element;
       }

       public int getBalance() {
           return balance;
       }

       public void setBalance(int balance) {
           this.balance = balance;
       }

       public Node&lt;E&gt; getLeft() {
           return left;
       }

       public void setLeft(Node&lt;E&gt; left) {
           this.left = left;
       }

       public Node&lt;E&gt; getRight() {
           return right;
       }

       public void setRight(Node&lt;E&gt; right) {
           this.right = right;
       }

       public Node&lt;E&gt; getParent() {
           return parent;
       }

       public void setParent(Node&lt;E&gt; parent) {
           this.parent = parent;
       }
   }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>最主要的是每个结点类添加了一个balance属性，也就是记录自己的平衡因子，在插入元素的时候需要动态的调整。</p><p>我们看下插入元素方法的Java实现：</p><div class="hint-container info"><p class="hint-container-title">插入元素方法 Java 实现</p><div class="language-Java line-numbers-mode" data-ext="Java" data-title="Java"><pre class="language-Java"><code>public boolean addElement(E element) {
    Node&lt;E&gt; t = root;
    //t检查root是否为空，如果为空则表示AVL树还没有创建，
    //则需要创建根结点即可
    if (t == null) {
        root = new Node&lt;E&gt;(element, null);
        size = 1;
        root.balance = 0;
        return true;
    } else {
        int cmp = 0;
        Node&lt;E&gt; parent;
        Comparable&lt;? super E&gt; e = (Comparable&lt;? super E&gt;)element;
        //查找父类的过程，逻辑和讲解二叉排序树时查找父类是一样的
        do {
            parent = t;
            cmp = e.compareTo(t.element);
            if (cmp &lt; 0) {
                t= t.left;
            } else if (cmp &gt; 0) {
                t= t.right;
            } else {
                return false;
            }
        } while (t != null);
        //创建结点，并挂载到父节点上
        Node&lt;E&gt; child = new Node&lt;E&gt;(element, parent);
        if (cmp &lt; 0) {
            parent.left = child;
        } else {
            parent.right = child;
        }
        //节点已经插入，
        // 插入元素后 检查平衡性，回溯查找
        while (parent != null) {
            cmp = e.compareTo(parent.element);
            //元素在左边插入
            if (cmp &lt; 0) {
                parent.balance++;
            } else{ //元素在右边插入
                parent.balance --;
            }
            //插入之后父节点balance正好完全平衡，则不会出现平衡问题
            if (parent.balance == 0) {
                break;
            }
            //查找最小不平衡二叉树
            if (Math.abs(parent.balance) == 2) {
                //出现平衡问题
                fix(parent);
                break;
            } else {
                parent = parent.parent;
            }
        }
        size++;
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>其大体流程主要分为两大部分，前半部分和二叉排序树插入元素的逻辑一样，主要是查找父节点，将其挂载到父节点上，而后半部分就是AVL树特有的了，也就是查找最小不平衡二叉树然后对其修复，修复也就是通过左旋右旋操作使其达到平衡状态，我们看下fix方法主要逻辑：</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><div class="language-C line-numbers-mode" data-ext="C" data-title="C"><pre class="language-C"><code>private void fix(AVL&lt;E&gt;.Node&lt;E&gt; parent) {
    if (parent.balance == 2) {
        leftBalance(parent);
    }
    if (parent.balance == -2) {
        rightBalance(parent);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><p>很简单，就是判断左边与右边哪边不平衡，进而进行左平衡或者右平衡操作，至于左平衡右平衡上面已经详细讲解过，不在过多说明。</p><p>好了，以上就是构建一颗AVL树的过程讲解，如果有不懂得地方可以静下心来自己好好分析一下。</p><h3 id="avl树总结" tabindex="-1"><a class="header-anchor" href="#avl树总结"><span>AVL树总结</span></a></h3><p>本篇主要讲解了AVL的概念以及通过最基础的左旋，右旋使其保持树中每一个结点的平衡因子值保证在「-1，0，1」中，这样构建出来的树具有很好的查找特性。</p><p>AVL树相对于红黑树来说是一颗严格的平衡二叉树，平衡条件非常严格（树高差只有1），只要插入或删除不满足上面的条件就要通过旋转来保持平衡。由于旋转是非常耗费时间的。AVL树适合用于插入删除次数比较少，但查找多的情况。</p><p>在平衡二叉树中应用比较多的是红黑树，红黑树对高度差要求没有AVL那么严格，用以保持平衡的左旋右旋操作次数比较少，用于搜索时，插入删除次数多的情况下通常用红黑树来取代AVL树。TreeMap的实现以及JDK1.8以后的HashMap中都有红黑树的具体应用。</p>`,102),f=[g];function L(_,E){return i(),n("div",null,f)}const x=e(h,[["render",L],["__file","tree.html.vue"]]),C=JSON.parse('{"path":"/blog/datastructure/tree.html","title":"树","lang":"zh-CN","frontmatter":{"title":"树","author":"Leslie-D","editLink":false,"comment":false,"date":"2024-04-18T00:00:00.000Z","description":"二叉树 定义 二叉搜索树是一种二叉树的树形数据结构，其定义如下： 空树是二叉搜索树。 若二叉搜索树的左子树不为空，则其左子树上所有点的附加权值均小于其根节点的值。 若二叉搜索树的右子树不为空，则其右子树上所有点的附加权值均大于其根节点的值。 二叉搜索树的左右子树均为二叉搜索树。 二叉搜索树上的基本操作所花费的时间与这棵树的高度成正比。对于一个有 n 个...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/blog/datastructure/tree.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:title","content":"树"}],["meta",{"property":"og:description","content":"二叉树 定义 二叉搜索树是一种二叉树的树形数据结构，其定义如下： 空树是二叉搜索树。 若二叉搜索树的左子树不为空，则其左子树上所有点的附加权值均小于其根节点的值。 若二叉搜索树的右子树不为空，则其右子树上所有点的附加权值均大于其根节点的值。 二叉搜索树的左右子树均为二叉搜索树。 二叉搜索树上的基本操作所花费的时间与这棵树的高度成正比。对于一个有 n 个..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-18T09:26:08.000Z"}],["meta",{"property":"article:author","content":"Leslie-D"}],["meta",{"property":"article:published_time","content":"2024-04-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-18T09:26:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"树\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-18T09:26:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie-D\\"}]}"]]},"headers":[{"level":2,"title":"二叉树","slug":"二叉树","link":"#二叉树","children":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]}]},{"level":2,"title":"AVL 树（平衡二叉查找树）","slug":"avl-树-平衡二叉查找树","link":"#avl-树-平衡二叉查找树","children":[{"level":3,"title":"定义","slug":"定义-1","link":"#定义-1","children":[]},{"level":3,"title":"性质","slug":"性质","link":"#性质","children":[]},{"level":3,"title":"操作","slug":"操作","link":"#操作","children":[]},{"level":3,"title":"AVL树的创建过程","slug":"avl树的创建过程","link":"#avl树的创建过程","children":[]},{"level":3,"title":"AVL树总结","slug":"avl树总结","link":"#avl树总结","children":[]}]}],"git":{"createdTime":1713432368000,"updatedTime":1713432368000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":14.48,"words":4344},"filePathRelative":"blog/datastructure/tree.md","localizedDate":"2024年4月18日","excerpt":"<h2>二叉树</h2>\\n<h3>定义</h3>\\n<p>二叉搜索树是一种二叉树的树形数据结构，其定义如下：</p>\\n<ol>\\n<li>空树是二叉搜索树。</li>\\n<li>若二叉搜索树的左子树不为空，则其左子树上所有点的附加权值均小于其根节点的值。</li>\\n<li>若二叉搜索树的右子树不为空，则其右子树上所有点的附加权值均大于其根节点的值。</li>\\n<li>二叉搜索树的左右子树均为二叉搜索树。</li>\\n</ol>\\n<p>二叉搜索树上的基本操作所花费的时间与这棵树的高度成正比。对于一个有 n 个结点的二叉搜索树中，这些操作的最优时间复杂度为 O(\\\\log n)，最坏为 O(n)。随机构造这样一棵二叉搜索树的期望高度为 <code>O(log n)</code>。</p>","autoDesc":true}');export{x as comp,C as data};
