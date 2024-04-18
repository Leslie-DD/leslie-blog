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
        {
          text: '数据结构与算法',
          link: '/blog/datastructure/',
          collapsable: true,
          children: [
            {
              text: '树',
              link: '/blog/datastructure/tree.md'
            },
          ]
        },
      ],
    },
  ],

  '/projects/': [
    {
      text: '📙 Reading',
      link: '/projects/reading/',
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
