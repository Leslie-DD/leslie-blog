import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as o,e as a}from"./app-CfghY5LJ.js";const r="/leslie-blog/assets/java_exception_%20architecture-B8XvkxVM.png",i="/leslie-blog/assets/java_exception_architecture_2-CL9XKYu4.jpg",c={},n=a('<img src="'+r+'"><h3 id="java异常包含三种类型的异常" tabindex="-1"><a class="header-anchor" href="#java异常包含三种类型的异常"><span>Java异常包含三种类型的异常：</span></a></h3><ul><li><code>检查性异常：</code>（非运行时异常）最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。例如要打开一个不存在文件时，一个异常就发生了，这些异常在编译时不能被简单地忽略。原则上如果不处理，程序就不能编译通过。</li><li><code>运行时异常：</code> 运行时异常是可能被程序员避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。</li><li><code>错误：</code> 错误不是异常，而是脱离程序员控制的问题。错误在代码中通常被忽略。例如，当栈溢出时，一个错误就发生了，它们在编译也检查不到的。</li></ul><h3 id="java-中的异常都继承自-throwable。" tabindex="-1"><a class="header-anchor" href="#java-中的异常都继承自-throwable。"><span><strong>Java 中的异常都继承自 Throwable。</strong></span></a></h3><p>继承自 Throwable 的有两个主要的子类，<code>Error</code> 和 <code>Exception</code>，这两个子类除了实现父类 Throwable 的构造方法之外，没有额外实现其他的方法，WHY？</p><p>看 Exception 和 Error 的注释</p><ul><li><p>Exception</p><p>The class Exception and its subclasses are a form of Throwable that indicates conditions that a reasonable application might want to catch.<br> The class Exception and any subclasses that are not also subclasses of RuntimeException are checked exceptions. Checked exceptions need to be declared in a method or constructor&#39;s throws clause if they can be thrown by the execution of the method or constructor and propagate outside the method or constructor boundary.</p></li><li><p>Error</p><p>An Error is a subclass of Throwable that indicates serious problems that a reasonable application should not try to catch. Most such errors are abnormal conditions. The ThreadDeath error, though a &quot;normal&quot; condition, is also a subclass of Error because most applications should not try to catch it.<br> A method is not required to declare in its throws clause any subclasses of Error that might be thrown during the execution of the method but not caught, since these errors are abnormal conditions that should never occur. That is, Error and its subclasses are regarded as unchecked exceptions for the purposes of compile-time checking of exceptions.</p></li></ul><p>简单来说，Exception 是程序运行中可以预料的、应该 try catch 的错误；而 Error 是程序运行中不应该 try catch 的错误，因为这种错误是不应该出现的，绝大部分的 Error 都会导致程序（比如 JVM 自身）处于非正常的、不可恢复状态。比如网络请求失败返回的错误应该被捕获，以进行其他逻辑处理；而线程死锁（ThreadDeath）的错误不应该被捕获，类似的还有<code>OutOfMemoryError</code>、<code>StackOverflowError</code></p><h3 id="深究-error-和-exception-和" tabindex="-1"><a class="header-anchor" href="#深究-error-和-exception-和"><span>深究 Error 和 Exception 和</span></a></h3><ul><li>Error 由 JVM生成并抛出，大多数错误<strong>与代码编写者所执行的操作无关</strong>。例如，Java虚拟机运行错误（Virtual MachineError），当JVM不再有继续执行操作所需的内存资源时，将出现OutOfMemoryError。这些异常发生时，Java虚拟机（JVM）一般会选择线程终止；还有发生在虚拟机试图执行应用时，如类定义错误（NoClassDefFoundError）、链接错误（LinkageError）。这些错误是不可查的，因为它们在应用程序的控制和处理能力之外，而且绝大多数是程序运行时不允许出现的状况。对于设计合理的应用程序来说，即使确实发生了错误，本质上也不应该试图去处理它所引起的异常状况。在Java中，错误通常是使用Error的子类描述。</li><li>Exception 又分为**<code>不检查（unchecked）异常**（运行时异常）</code>和**<code>可检查（checked）异常（非运行时异常）</code>。** <ul><li>在 Exception 分支中有一个重要的子类 RuntimeException（运行时异常），该类型的异常自动为你所编写的程序定义 ArrayIndexOutOfBoundsException（数组下标越界）、NullPointerException（空指针异常）、ArithmeticException（算术异常）、MissingResourceException（丢失资源）、ClassNotFoundException（找不到类）等异常，这些异常是<strong>不检查异常</strong>，程序中可以选择捕获处理，也可以不处理。这些异常一般是由程序逻辑错误引起的，程序应该从逻辑角度尽可能避免这类异常的发生；</li><li>而RuntimeException之外的异常我们统称为<strong>非运行时异常</strong>，这是编译期检查的一部分，从程序语法角度讲是必须进行处理的异常，<strong>如果不处理，程序就不能编译通过</strong>。如IOException、SQLException等以及用户自定义的Exception异常，一般情况下不自定义检查异常。</li></ul></li></ul><p><img src="'+i+'">’</p>',11),s=[n];function l(p,d){return t(),o("div",null,s)}const m=e(c,[["render",l],["__file","JavaException.html.vue"]]),x=JSON.parse('{"path":"/java/JavaException.html","title":"Java 异常","lang":"zh-CN","frontmatter":{"title":"Java 异常","author":"Leslie-D","editLink":false,"comment":false,"tag":["Java"],"date":"2024-04-17T00:00:00.000Z","description":"Java异常包含三种类型的异常： 检查性异常：（非运行时异常）最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。例如要打开一个不存在文件时，一个异常就发生了，这些异常在编译时不能被简单地忽略。原则上如果不处理，程序就不能编译通过。 运行时异常： 运行时异常是可能被程序员避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。 错...","head":[["meta",{"property":"og:url","content":"https://leslie-dd.github.io/leslie-blog/leslie-blog/java/JavaException.html"}],["meta",{"property":"og:site_name","content":"Leslie的博客"}],["meta",{"property":"og:title","content":"Java 异常"}],["meta",{"property":"og:description","content":"Java异常包含三种类型的异常： 检查性异常：（非运行时异常）最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。例如要打开一个不存在文件时，一个异常就发生了，这些异常在编译时不能被简单地忽略。原则上如果不处理，程序就不能编译通过。 运行时异常： 运行时异常是可能被程序员避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。 错..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-13T02:21:46.000Z"}],["meta",{"property":"article:author","content":"Leslie-D"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-04-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-13T02:21:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 异常\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-17T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-13T02:21:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leslie-D\\"}]}"]]},"headers":[{"level":3,"title":"Java异常包含三种类型的异常：","slug":"java异常包含三种类型的异常","link":"#java异常包含三种类型的异常","children":[]},{"level":3,"title":"Java 中的异常都继承自 Throwable。","slug":"java-中的异常都继承自-throwable。","link":"#java-中的异常都继承自-throwable。","children":[]},{"level":3,"title":"深究 Error 和 Exception 和","slug":"深究-error-和-exception-和","link":"#深究-error-和-exception-和","children":[]}],"git":{"createdTime":1713373899000,"updatedTime":1718245306000,"contributors":[{"name":"Leslie","email":"LeslieDYF@gmail.com","commits":1}]},"readingTime":{"minutes":3.61,"words":1083},"filePathRelative":"java/JavaException.md","localizedDate":"2024年4月17日","excerpt":"\\n<h3>Java异常包含三种类型的异常：</h3>\\n<ul>\\n<li><code>检查性异常：</code>（非运行时异常）最具代表的检查性异常是用户错误或问题引起的异常，这是程序员无法预见的。例如要打开一个不存在文件时，一个异常就发生了，这些异常在编译时不能被简单地忽略。原则上如果不处理，程序就不能编译通过。</li>\\n<li><code>运行时异常：</code> 运行时异常是可能被程序员避免的异常。与检查性异常相反，运行时异常可以在编译时被忽略。</li>\\n<li><code>错误：</code> 错误不是异常，而是脱离程序员控制的问题。错误在代码中通常被忽略。例如，当栈溢出时，一个错误就发生了，它们在编译也检查不到的。</li>\\n</ul>","autoDesc":true}');export{m as comp,x as data};