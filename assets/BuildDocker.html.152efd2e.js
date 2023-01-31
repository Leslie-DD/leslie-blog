import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c,b as n,d as a,e,f as t,r}from"./app.6f2b58be.js";const o={},p=t(`<blockquote><p>\u5728Ubuntu\u670D\u52A1\u5668\u81EA\u5B9A\u4E49\u4E00\u4E2ATomcat9\u7684Docker\u955C\u50CF\uFF0C\u5E26JDK8</p></blockquote><h2 id="_1-\u51C6\u5907\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u51C6\u5907\u6587\u4EF6" aria-hidden="true">#</a> 1. \u51C6\u5907\u6587\u4EF6</h2><ul><li>\u65B0\u5EFA\u6587\u4EF6\u5939 <code>docker-tomcat9-image</code></li><li>\u51C6\u5907 <code>apache-tomcat-9.0.67.tar.gz</code> \u548C <code>jdk-8u281-linux-x64.tar.gz</code> \u4E0A\u4F20\u5230\u670D\u52A1\u5668\u3002</li><li>\u521B\u5EFA <code>readme.txt</code></li><li>\u521B\u5EFA <code>Dockerfile</code> \u6587\u4EF6</li></ul><p>\u6240\u6709\u6587\u4EF6\u5982\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>\u256D\u2500leslie@leslie-server ~/docker-tomcat9-image
\u2570\u2500$ ll
total <span class="token number">151700</span>
drwxrwxr-x  <span class="token number">2</span> leslie leslie      <span class="token number">4096</span> Oct  <span class="token number">3</span> <span class="token number">20</span>:05 <span class="token builtin class-name">.</span>
drwxr-xr-x <span class="token number">12</span> leslie leslie      <span class="token number">4096</span> Oct  <span class="token number">3</span> <span class="token number">20</span>:56 <span class="token punctuation">..</span>
-rw-r--r--  <span class="token number">1</span> leslie leslie  <span class="token number">11596906</span> Oct  <span class="token number">3</span> <span class="token number">19</span>:47 apache-tomcat-9.0.67.tar.gz
-rw-r--r--  <span class="token number">1</span> root   root        <span class="token number">1371</span> Oct  <span class="token number">3</span> <span class="token number">20</span>:01 Dockerfile
-rw-r--r--  <span class="token number">1</span> leslie leslie <span class="token number">143722924</span> Oct  <span class="token number">3</span> <span class="token number">19</span>:46 jdk-8u281-linux-x64.tar.gz
-rw-rw-r--  <span class="token number">1</span> leslie leslie         <span class="token number">0</span> Oct  <span class="token number">3</span> <span class="token number">19</span>:49 readme.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u7F16\u5199dockerfile\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u7F16\u5199dockerfile\u6587\u4EF6" aria-hidden="true">#</a> 2. \u7F16\u5199Dockerfile\u6587\u4EF6</h2><blockquote><p>docker build \u65F6\u4F1A\u81EA\u52A8\u5BFB\u627E\u8FD9\u4E2ADockerfile\u6587\u4EF6</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>FROM ubuntu
MAINTAINER leslie<span class="token operator">&lt;</span>XXXXXX@xxx.com<span class="token operator">&gt;</span>

<span class="token comment"># \u628A\u5BBF\u4E3B\u673A\u5F53\u524D\u4E0A\u4E0B\u6587\u7684readme.txt\u62F7\u8D1D\u5230\u5BB9\u5668/usr/local/\u8DEF\u5F84\u4E0B</span>
<span class="token comment"># \u5E76\u628Areadme.txt\u6587\u4EF6\u91CD\u547D\u540Dcincontainer.txt\u6587\u4EF6</span>
COPY readme.txt /usr/local/cincontainer.txt

<span class="token comment"># \u628A\u5BBF\u4E3B\u673A\u5F53\u524D\u4E0A\u4E0B\u6587\u7684\uFF08\u4E5F\u5C31\u662F\u5F53\u524D\u76EE\u5F55\uFF09java\u4E0Etomcat\u5B89\u88C5\u5305\u6DFB\u52A0\u5230\u5BB9\u5668\u4E2D</span>
ADD apache-tomcat-9.0.67.tar.gz /usr/local/
ADD jdk-8u281-linux-x64.tar.gz /usr/local/
ADD reading_pictures.tar.gz /root/

<span class="token comment"># \u5B89\u88C5vim\u7F16\u8F91\u5668</span>
<span class="token comment"># RUN apt install vim</span>

<span class="token comment"># \u8BBE\u7F6E\u5DE5\u4F5C\u8BBF\u95EE\u65F6\u5019\u7684MORKDIR\u8DEF\u5F84\uFF0C\u767B\u5F55DE \u843D\u811A\u70B9</span>
ENV MYPATH /usr/local
WORKDIR <span class="token variable">$MYPATH</span>

<span class="token comment"># \u914D\u7F6Ejava\u4E0Etomcat\u73AF\u5883\u53D8\u91CF</span>
<span class="token comment"># \u914D\u7F6Ejava\u73AF\u5883</span>
ENV JAVA_HOME /usr/local/jdk1.8.0_281
ENV CLASSPATH <span class="token variable">$JAVA_HOME</span>/lib/dt.jar:<span class="token variable">$JAVA_HOME</span>/lib/tools.jar <span class="token comment"># \u901A\u8FC7\u5192\u53F7\u9694\u5F00</span>
<span class="token comment"># \u914D\u7F6Etomcat\u73AF\u5883</span>
ENV CATALINA_HOME /usr/local/apache-tomcat-9.0.67
ENV CATALINA_BASE /usr/local/apache-tomcat-9.0.67
<span class="token comment"># \u628A\u4E0A\u9762\u914D\u7F6E\u7684\u73AF\u5883\u653E\u5165\u5230PATH\u73AF\u5883\u53D8\u91CF\u4E2D</span>
ENV <span class="token environment constant">PATH</span> <span class="token environment constant">$PATH</span><span class="token builtin class-name">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$CATALINA_HOME</span>/lib:<span class="token variable">$CATALINA_HOME</span>/bin

<span class="token comment"># \u5BB9\u5668\u8FD0\u884C\u65F6\u76D1\u542C\u7684\u7AEF\u53E3\uFF08\u66B4\u9732\u7AEF\u53E3\uFF09</span>
EXPOSE <span class="token number">8080</span>

<span class="token comment"># \u542F\u52A8\u65F6\u8FD0\u884Ctomcat</span>
<span class="token comment"># ENTRYPOINT [&quot;/usr/local/apache-tomcat-9.0.67/bin/startup.sh&quot;]</span>
<span class="token comment"># CMD [&quot;/usr/local/apache-tomcat-9.0.67/bin/catalina.sh&quot;,&quot;run&quot;]</span>
CMD /usr/local/apache-tomcat-9.0.67/bin/startup.sh <span class="token operator">&amp;&amp;</span> <span class="token function">tail</span> <span class="token parameter variable">-F</span> /usr/local/apache-tomcat-9.0.67/bin/logs/catalina.out
<span class="token comment"># &amp;&amp; \u8868\u793A\u62FC\u63A5\u4E0B\u4E00\u6761\u547D\u4EE4\uFF0C\u53EF\u4EE5\u65E0\u7EBF\u7684\u62FC\u63A5\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u6784\u5EFA\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_3-\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a> 3. \u6784\u5EFA\u955C\u50CF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> build <span class="token parameter variable">-t</span> leslie-tomcat9 <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5982\u679C\u51FA\u73B0timeout\u95EE\u9898\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u4FEE\u6539docker\u7684\u955C\u50CF\u5730\u5740</p></blockquote><p>\u4FEE\u6539\u6216\u65B0\u5EFA<code>/ect/docker/daemon.json</code>\u6587\u4EF6,\u5728\u91CC\u9762\u52A0\u5165\u963F\u91CC\u4E91\u955C\u50CF\u5730\u5740</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">{</span>
 <span class="token string">&quot;registry-mirrors&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;https://6kx4zyno.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u542Fdocker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">docker</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-\u542F\u52A8\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_4-\u542F\u52A8\u955C\u50CF" aria-hidden="true">#</a> 4. \u542F\u52A8\u955C\u50CF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">8081</span>:8080 <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> leslie-tomcat <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> ~/leslie-tomcat9/webapps:/usr/local/apache-tomcat-9.0.67/webapps <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> ~/leslie-tomcat9/tomcatlogs:/usr/local/apache-tomcat-9.0.67/logs <span class="token punctuation">\\</span>
<span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> leslie-tomcat9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,18),d={href:"https://www.cnblogs.com/liuyuelinfighting/p/16415468.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://blog.csdn.net/qq_46153157/article/details/126122042",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const s=r("ExternalLinkIcon");return i(),c("div",null,[p,n("p",null,[n("a",d,[a("https://www.cnblogs.com/liuyuelinfighting/p/16415468.html"),e(s)]),n("a",u,[a("https://blog.csdn.net/qq_46153157/article/details/126122042"),e(s)])])])}const g=l(o,[["render",m],["__file","BuildDocker.html.vue"]]);export{g as default};
