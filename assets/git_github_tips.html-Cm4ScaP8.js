import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-gMXvAc3I.js";const t={},l=e(`<h2 id="输出-commits-到文件" tabindex="-1"><a class="header-anchor" href="#输出-commits-到文件"><span>输出 commits 到文件</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --pretty=format:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;%H|%s|%an&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --since=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;100 day ago&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/Desktop/commit.txt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><a href="https://www.cnblogs.com/bellkosmos/p/5923439.html" target="_blank" rel="noopener noreferrer">参考博客</a></p><h2 id="分支基本操作" tabindex="-1"><a class="header-anchor" href="#分支基本操作"><span>分支基本操作</span></a></h2><h3 id="_1-新建远程分支" tabindex="-1"><a class="header-anchor" href="#_1-新建远程分支"><span>1. 新建远程分支</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> alpha</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 先在本地新建分支</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> alpha:alpha</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 把本地分支push到远程仓库</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-新建本地分支并跟随远程分支" tabindex="-1"><a class="header-anchor" href="#_2-新建本地分支并跟随远程分支"><span>2. 新建本地分支并跟随远程分支</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 新建本地分支test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --set-upstream-to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remotes/origin/alpha</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 将本地分支test跟随远程分支origin/alpha</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin/alpha</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-删除远程分支" tabindex="-1"><a class="header-anchor" href="#_3-删除远程分支"><span>3. 删除远程分支</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> :dbg_lichen_star</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 推送一个空分支到远程分支，其实就相当于删除远程分支</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 或者</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --delete</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> dbg_lichen_star</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-取消本地分支与远程分支的跟随" tabindex="-1"><a class="header-anchor" href="#_4-取消本地分支与远程分支的跟随"><span>4. 取消本地分支与远程分支的跟随</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --unset-upstream</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_5-修改本地分支名称" tabindex="-1"><a class="header-anchor" href="#_5-修改本地分支名称"><span>5. 修改本地分支名称</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> OldBranchName</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> NewBranchName</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_6-本地删除远程已删除的分支" tabindex="-1"><a class="header-anchor" href="#_6-本地删除远程已删除的分支"><span>6. 本地删除远程已删除的分支</span></a></h3><blockquote><p>每次将一个分支在 gitlab 上 merge 到开发分支，默认都会是删除，但是有次<code>git branch -r</code>发现对应的分支还有。</p><p>原因是本地和远端没有同步。</p></blockquote><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 这个命令可以看到分支的详细信息，远程仓库已经不存在的分支会提示\`(stale (use &#39;git remote prune&#39; to remove))\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> prune</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 根据提示删除或者说同步本地分支</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="修改-gitignore-不起作用" tabindex="-1"><a class="header-anchor" href="#修改-gitignore-不起作用"><span>修改 gitignore 不起作用</span></a></h2><div class="hint-container note"><p class="hint-container-title">注</p><p>.gitignore中已经标明忽略的文件目录下的文件，git push的时候还会出现在push的目录中，或者用git status查看状态，想要忽略的文件还是显示被追踪状态。</p></div><div class="hint-container tip"><p class="hint-container-title">原因</p><p>在git忽略目录中，新建的文件在git中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在.gitignore中已经声明了忽略路径也是不起作用的，<br> 这时候我们就应该先把本地缓存删除，然后再进行git的提交，这样就不会出现忽略的文件了。</p></div><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --cached</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;update .gitignore&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> master</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://blog.csdn.net/Saintmm/article/details/120847019" target="_blank" rel="noopener noreferrer">Ref</a></p><h2 id="git-pull-每次都要输入密码" tabindex="-1"><a class="header-anchor" href="#git-pull-每次都要输入密码"><span>git pull 每次都要输入密码</span></a></h2><p>其实有两种方式</p><h4 id="_1、ssh方式clone项目-并把本机token托管到github-ssh-keys" tabindex="-1"><a class="header-anchor" href="#_1、ssh方式clone项目-并把本机token托管到github-ssh-keys"><span>1、ssh方式clone项目，并把本机token托管到github ssh keys</span></a></h4><h4 id="_2、保存username和personal-access-tokens" tabindex="-1"><a class="header-anchor" href="#_2、保存username和personal-access-tokens"><span>2、保存Username和personal access tokens</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --local</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> credential.helper</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> store</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>下次pull的时候输一次密码以后就不用输了</p><h2 id="pull远程分支并解冲突" tabindex="-1"><a class="header-anchor" href="#pull远程分支并解冲突"><span>pull远程分支并解冲突</span></a></h2><blockquote><p>如果在master分支下面新建一个分支，开发的同时，master又新增了一下代码，需要在新的master上面继续开发</p></blockquote><ol><li>先把自己写的代码，保存到本地库，然后推送到来远程库（至关重要），然后拉下来远程库，也很重要</li><li>切换到本地master分支，pull取远程仓库中最新的master代码</li><li>切换到你现在开发的分支，在git命令中输入：git rebase origin/MASTER</li><li>这样就会把你现在正在开发的分支中已经写好的代码与最新的Master分支的代码融合在一起</li><li>输入 git status 显示冲突的文件，然后找到一个文件解决冲突，git add 文件名<br> 这样才算解决一个冲突。输入 git rebase --continue ，继续git status ....... 直到所有的冲突全部解决（git status如果不显示冲突文件，但又处于rebase状态，输入git rebase --skip)。如果不想解决冲突了，输入 git rebase --abort ，回到最初的状态，前面解决的所有冲突都会恢复到以前的状态</li><li>解决完冲突后，推送到远程库。</li><li>完成</li></ol><blockquote><p>如何查看rebase完成了呢？git branch看看自己是否在当前的分支，如果回到当前分支，就是rebase完成。<br> 如果rebase没有完成，git branch不会在当前分支，会在rebase新开的分支（一个临时的分支）里面。<br> git branch -vv 查看自己的分支，以及自己的分支与远程分支落后多少个文件，如果落后了就git pull，解决冲突.<br> git push失败，可能是本地这个分支有一些文件落后远程分支，需要git pull.</p></blockquote><h2 id="本地多个ssh-key-如何区分" tabindex="-1"><a class="header-anchor" href="#本地多个ssh-key-如何区分"><span>本地多个ssh-key，如何区分</span></a></h2><ol><li>生成ssh-key</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.ssh</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -C</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;xxx@xx.com&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> id_rsa_second</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>将新的ssh public key添加到内部的gitlab仓库</p></li><li><p>在~/.ssh 目录下创建config文件,用于配置私钥对应的服务器,内容：</p></li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Host</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab.xxx.com</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #可以随意命名  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">HostName</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gitlab.xxx.com</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">User</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Port</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 22</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">IdentityFile</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.ssh/id_rsa_second</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>克隆仓库即可</li></ol><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git@gitlab.xxx.com/xx.git</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="撤销-git-commit-amend" tabindex="-1"><a class="header-anchor" href="#撤销-git-commit-amend"><span>撤销 git commit --amend</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> reflog</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 查看操作记录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> reset</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --soft</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> HEAD@{</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span><strong>参考</strong></span></a></h2><p><a href="https://www.huaweicloud.com/articles/3987ec9dfbd9f650e70ceb9eebe05287.html" target="_blank" rel="noopener noreferrer">https://www.huaweicloud.com/articles/3987ec9dfbd9f650e70ceb9eebe05287.html</a><br><a href="https://www.jianshu.com/p/97341ed9d89e" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/97341ed9d89e</a></p>`,43),h=[l];function n(r,k){return a(),s("div",null,h)}const g=i(t,[["render",n],["__file","git_github_tips.html.vue"]]),c=JSON.parse('{"path":"/tutorial/git_github_tips.html","title":"Git & GitHub","lang":"zh-CN","frontmatter":{"title":"Git & GitHub","author":"Leslie-D","date":"2022-03-27T00:00:00.000Z","star":true,"tag":["Git","Github"],"editLink":false,"comment":false,"description":"输出 commits 到文件 参考博客 分支基本操作 1. 新建远程分支 2. 新建本地分支并跟随远程分支 3. 删除远程分支 4. 取消本地分支与远程分支的跟随 5. 修改本地分支名称 6. 本地删除远程已删除的分支 每次将一个分支在 gitlab 上 merge 到开发分支，默认都会是删除，但是有次git branch -r发现对应的分支还有。 原...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/tutorial/git_github_tips.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:title","content":"Git & GitHub"}],["meta",{"property":"og:description","content":"输出 commits 到文件 参考博客 分支基本操作 1. 新建远程分支 2. 新建本地分支并跟随远程分支 3. 删除远程分支 4. 取消本地分支与远程分支的跟随 5. 修改本地分支名称 6. 本地删除远程已删除的分支 每次将一个分支在 gitlab 上 merge 到开发分支，默认都会是删除，但是有次git branch -r发现对应的分支还有。 原..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-20T03:36:48.000Z"}],["meta",{"property":"article:author","content":"Leslie-D"}],["meta",{"property":"article:tag","content":"Git"}],["meta",{"property":"article:tag","content":"Github"}],["meta",{"property":"article:published_time","content":"2022-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-20T03:36:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git & GitHub\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-20T03:36:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie-D\\"}]}"]]},"headers":[{"level":2,"title":"输出 commits 到文件","slug":"输出-commits-到文件","link":"#输出-commits-到文件","children":[]},{"level":2,"title":"分支基本操作","slug":"分支基本操作","link":"#分支基本操作","children":[{"level":3,"title":"1. 新建远程分支","slug":"_1-新建远程分支","link":"#_1-新建远程分支","children":[]},{"level":3,"title":"2. 新建本地分支并跟随远程分支","slug":"_2-新建本地分支并跟随远程分支","link":"#_2-新建本地分支并跟随远程分支","children":[]},{"level":3,"title":"3. 删除远程分支","slug":"_3-删除远程分支","link":"#_3-删除远程分支","children":[]},{"level":3,"title":"4. 取消本地分支与远程分支的跟随","slug":"_4-取消本地分支与远程分支的跟随","link":"#_4-取消本地分支与远程分支的跟随","children":[]},{"level":3,"title":"5. 修改本地分支名称","slug":"_5-修改本地分支名称","link":"#_5-修改本地分支名称","children":[]},{"level":3,"title":"6. 本地删除远程已删除的分支","slug":"_6-本地删除远程已删除的分支","link":"#_6-本地删除远程已删除的分支","children":[]}]},{"level":2,"title":"修改 gitignore 不起作用","slug":"修改-gitignore-不起作用","link":"#修改-gitignore-不起作用","children":[]},{"level":2,"title":"git pull 每次都要输入密码","slug":"git-pull-每次都要输入密码","link":"#git-pull-每次都要输入密码","children":[]},{"level":2,"title":"pull远程分支并解冲突","slug":"pull远程分支并解冲突","link":"#pull远程分支并解冲突","children":[]},{"level":2,"title":"本地多个ssh-key，如何区分","slug":"本地多个ssh-key-如何区分","link":"#本地多个ssh-key-如何区分","children":[]},{"level":2,"title":"撤销 git commit --amend","slug":"撤销-git-commit-amend","link":"#撤销-git-commit-amend","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1664720147000,"updatedTime":1689824208000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":3.89,"words":1168},"filePathRelative":"tutorial/git_github_tips.md","localizedDate":"2022年3月27日","excerpt":"<h2>输出 commits 到文件</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> log</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --pretty=format:</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"%H|%s|%an\\"</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> --since=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"100 day ago\\"</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#ABB2BF\\"> &gt;&gt;</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> ~/Desktop/commit.txt</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{g as comp,c as data};