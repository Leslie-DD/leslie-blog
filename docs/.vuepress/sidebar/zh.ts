import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "": [],
  "home": [],
  "slide": [],
  "/guide/": [
    {
      text: "如何使用",
      icon: "creative",
      children: ['disable.md', 'encrypt.md'],
    },
  ],

  "/about/": [
    {
      text: "About",
      // link: "/about/",
      children: [
        {
          text: "简介",
          link: "/about/me/self_intro.md",
        },
        {
          text: "站点介绍",
          link: "/about/site/",
          collapsable: true,
          children: [
            {
              text: '启动项目与部署',
              link: '/about/site/start_project_and_deploy.md'
            },
          ]
        }
      ],
    },
  ],

  '/tutorial/': [
    {
      text: "教程",
      link: "/tutorial/",
      children: [
        {
          text: "🖥 Linux",
          link: '/tutorial/linux/',
          collapsable: true,
          children: [
            {
              text: '配置JDK和Tomcat',
              link: '/tutorial/linux/配置JDK和Tomcat.md'
            },
            {
              text: '安装MySQL8',
              link: '/tutorial/linux/安装MySQL8.md'
            },
            {
              text: '增大swap空间',
              link: '/tutorial/linux/增大swap空间.md'
            },
            {
              text: "💽 Ubuntu",
              link: '/tutorial/linux/ubuntu/', // 写了link标签就要在该路径下新建README.md文件，不然点击这一栏会404
              collapsable: true,
              children: [
                {
                  text: '装机初始化',
                  link: '/tutorial/linux/ubuntu/装机初始化.md'
                },
                {
                  text: '刷机问题',
                  link: '/tutorial/linux/ubuntu/刷机问题.md'
                },
                {
                  text: '开机自动发送邮件',
                  link: '/tutorial/linux/ubuntu/开机自动发送邮件.md'
                },
              ]
            }
          ],
        },
        {
          text: "💻 Mac",
          link: '/tutorial/mac/',
          collapsable: true,
          children: [
            {
              text: '配置JDK和Tomcat',
              link: '/tutorial/mac/MacOS终端配置.md'
            },
          ]
        },
        {
          text: "📱 Android",
          link: '/tutorial/android/',
          collapsable: true,
          children: [
            {
              text: 'adb卸载app失败',
              link: '/tutorial/android/adb卸载app失败.md'
            },
            {
              text: 'Mac下adb命令无法执行',
              link: '/tutorial/android/Mac下adb命令无法执行.md'
            },
          ]
        },
        {
          text: "📡 Server",
          link: '/tutorial/server/',
          collapsable: true,
          children: [
            {
              text: "Idea部署远程Tomcat",
              link: "/tutorial/server/IdeaRemoteDeploy.md",
            },
            {
              text: "Tomcat Docker镜像",
              link: "/tutorial/server/BuildDocker.md",
            },
            {
              text: "Idea部署远程Docker Tomcat",
              link: "/tutorial/server/IdeaRemoteDockerDeploy.md"
            }
          ]
        },
        {
          text: "🌿 Git & Github",
          link: "/tutorial/git_github_tips.md",
        },
        {
          text: "💱 Regex",
          link: "/tutorial/regex.md",
        }
      ],
    },
  ],



  '/java/': [
    {
      text: "Java",
      children: [
        {
          text: 'Java Exception',
          link: '/java/JavaException.md',
        },
        {
          text: 'Java 多线程',
          link: '/java/concurrency/',
          collapsable: true,
          children: [
            {
              text: '关键字 Synchronized 详解',
              link: '/java/concurrency/synchronized.md'
            },
            {
              text: '关键字 Volatile 详解',
              link: '/java/concurrency/volatile.md'
            },
            {
              text: '关键字 final 详解',
              link: '/java/concurrency/final.md'
            },
            {
              text: '内存屏障',
              link: '/java/concurrency/memorybarrier.md'
            },
          ],
        }
      ]
    }
  ],

  '/blog/': [
    {
      text: '技术博客',
      // link: '/blog/',
      // collapsable: true,
      children: [
        {
          text: '📱 Android',
          link: '/blog/android/',
          collapsable: true,
          children: [
            {
              text: 'Canvas.drawText解析',
              link: '/blog/android/drawText解析.md'
            },
            {
              text: 'SurfaceView VS TextureView ',
              link: '/blog/android/SurfaceVIew_VS_TextureView.md'
            }
          ],
        },
        {
          text: '💻 计算机基础',
          link: '/blog/computer/',
          collapsable: true,
          children: [
            {
              text: '计算机中的Float是怎么存储的',
              link: '/blog/computer/计算机中的Float是怎么存储的.md'
            }
          ],
        },
        {
          text: '🖨 后端',
          link: '/blog/server/',
          collapsable: true,
          children: [
            {
              text: 'Mybatis事务管理',
              link: '/blog/server/Mybatis事务管理.md'
            }
          ],
        },
        {
          text: '💾 数据库',
          link: '/blog/databases/',
          collapsable: true,
          children: [
            {
              text: '关系型数据，非关系型数据库，文档型数据库',
              link: '/blog/databases/关系型数据，非关系型数据库，文档型数据库.md'
            }
          ]
        },
        {
          text: 'Python',
          link: '/blog/python/',
          collapsable: true,
          children: [
            {
              text: '操作excel数据',
              link: '/blog/python/python操作excel数据.md'
            },
            {
              text: '批量执行命令',
              link: '/blog/python/批量执行命令.md'
            }
          ]
        },
        {
          text: 'Java',
          link: '/blog/java/',
          collapsable: true,
          children: [
            {
              text: 'Java 异常',
              link: '/blog/java/JavaException.md'
            },
          ]
        },
      ],
    },
  ],

  '/datastructure/': [
    {
      text: '数据结构',
      link: '/datastructure/',
      children: [
        {
          text: '🌳 树',
          link: '/datastructure/tree/',
          collapsible: true,
          children: [
            {
              text: '二叉树',
              link: '/datastructure/tree/binary-tree.md'
            },
            {
              text: 'B 树',
              link: '/datastructure/tree/b-tree.md'
            },
            {
              text: 'B+ 树',
              link: '/datastructure/tree/bplus-tree.md'
            },
          ]
        },
      ]
    },
  ],

  '/algorithms/': [
    {
      text: '算法',
      link: '/algorithms/',
      children: [
        {
          text: '排序算法',
          link: '/algorithms/sort/',
          collapsible: true,
          children: [
            {
              text: '选择排序', link: '/algorithms/sort/selection-sort.md'
            },
            {
              text: '冒泡排序', link: '/algorithms/sort/bubble-sort.md'
            },
            {
              text: '插入排序', link: '/algorithms/sort/insertion-sort.md'
            },
            {
              text: '计数排序', link: '/algorithms/sort/counting-sort.md'
            },
            {
              text: '基数排序', link: '/algorithms/sort/radix-sort.md'
            },
            {
              text: '快速排序', link: '/algorithms/sort/quick-sort.md'
            },
            {
              text: '归并排序', link: '/algorithms/sort/merge-sort.md'
            },
            {
              text: '堆排序', link: '/algorithms/sort/heap-sort.md'
            },
            {
              text: '桶排序', link: '/algorithms/sort/bucket-sort.md'
            },
            {
              text: '希尔排序', link: '/algorithms/sort/shell-sort.md'
            },
            {
              text: '锦标赛排序', link: '/algorithms/sort/tournament-sort.md'
            },
            {
              text: 'tim排序', link: '/algorithms/sort/tim-sort.md'
            },
            {
              text: '排序相关 STL', link: '/algorithms/sort/stl-sort.md'
            },
            {
              text: '排序应用', link: '/algorithms/sort/use-of-sort.md'
            }
          ]
        }
      ]

    }
  ],

  '/projects/': [
    {
      text: '📙 Reading',
      link: '/projects/reading/',
      collapsible: true,
      children: [
        {
          text: '模块解析',
          link: '/projects/reading/模块解析.md'
        },
        {
          text: '脚本工具',
          link: '/projects/reading/脚本工具.md'
        },
        {
          text: '数据字典',
          link: '/projects/reading/数据字典.md'
        },
      ]
    },
    {
      text: '🔐 Passwd',
      link: '/projects/passwd/',
    }
  ],

  '/notes/': [
    {
      text: '🖋 随笔',
      link: '/notes/',
      children: [
        // 这么写，目录会展示二级标题
        // '/notes/三国随笔.md',
        // '/notes/张国荣与程蝶衣.md',

        // 这么写，目录只会展示题目
        {
          text: '三国随笔',
          link: '/notes/三国随笔.md'
        },
        {
          text: '张国荣与程蝶衣',
          link: '/notes/张国荣与程蝶衣.md'
        },
      ]
    }
  ],
});
