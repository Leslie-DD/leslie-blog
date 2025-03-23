---
title: Idea 部署项目到远程 Tomcat 踩坑
author: Evan
date: 2023-07-20
# category:
#   - Tutorial
tag:
  - Idea
  - Tomcat
  - Server
copyright: Copyright © 2023 Evan
---

::: note 背景
由于
1. 本地 Tomcat 和 服务器 Tomcat 配置可能有略微差异
2. 每次部署到服务器还得用 scp 上传 war 包
所以想直接将 project 通过 idea 编译运行并直接部署到远程服务器的 Tomcat。一来更方便，二来也更能发现代码或环境配置等的问题。

但没想到这是个大坑……
:::


首先 Idea 如何配置远程 Tomcat 连接网上的参考都比较多了，这里主要记录下遇到的问题，主要在于服务器 Tomcat 的配置。

::: danger 服务器 Tomcat 配置遇到的问题
1. idea 提示 Unable to connect to the [你的服务器ip地址]:1099
2. 配置好 tomcat cataline.sh 后，Tomcat 启动失败
:::

## 针对问题一
其实网上有很多解决方法，要在../你的tomcat目录/bin/cataline.sh中添加额外配置。
类似于下面这样：
```bash
JAVA_OPTS="-Dcom.sun.management.jmxremote=
-Dcom.sun.management.jmxremote.port=1099
-Dcom.sun.management.jmxremote.ssl=false
-Dcom.sun.management.jmxremote.authenticate=false
-Djava.rmi.server.hostname=[你的服务器ip地址]"

export JAVA_OPTS
```

但是添加后又出问题了，`sudo ./startup.sh` 启动 tomcat 报错， 说什么配置的这几行东西 not found 啥的……

## 针对新出现的问题二

**最后发现是换行的问题** [参考博客](https://blog.csdn.net/weixin_47405768/article/details/127309113?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522168978198716800188599605%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=168978198716800188599605&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-19-127309113-null-null.142)

整了一晚上的问题，最后发现是没有换行，谁能体会这种痛苦，真 CTM 了……

真正起作用的配置：(注意配置自己的服务器ip地址)

```bash
CATALINA_OPTS="-Dcom.sun.management.jmxremote -Dcom.sun.management.jmxremote.port=1099 -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false -Djava.rmi.server.hostname=[你的服务器ip地址]"
JAVA_OPTS="-Dcom.sun.management.jmxremote= -Dcom.sun.management.jmxremote.port=1099 -Dcom.sun.management.jmxremote.rmi.port=1099 -Dcom.sun.management.jmxremote.ssl=false -Dcom.sun.management.jmxremote.authenticate=false -Djava.rmi.server.hostname=[你的服务器ip地址]"
JAVA_OPTS="$JAVA_OPTS -Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"
export JAVA_OPTS
```

配置完成后，先执行 cataline.sh `sudo ./cataline.sh`，然后启动 tomcat `sudo ./startup.sh`，应该就没问题了


::: warning 其他小问题
- 重新通过 idea 往 remote Tomcat 部署项目的时候可能会提示 upload file permission denied，这是因为 tomcat 文件夹权限的原因，对于 linux 权限不是很了解，直接 `sudo chmod 777 -R ./tomcat9` 赋了 777 权限（**很不推荐**）
- 关闭 Tomcat `sudo ./shutup.sh` 如果执行失败，可以尝试直接杀死 Tomcat 进程 `sudo pkill -9 -f tomcat`
:::
