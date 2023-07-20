---
title: 自定义 Tomcat9 Docker 镜像
author: Leslie-D
date: 2022-10-03
tag:
  - Docker
  - Tomcat
  - Linux
  - Ubuntu
  - Server
editLink: false
comment: false
---

> 在Ubuntu服务器自定义一个Tomcat9的Docker镜像，带JDK8

## 1. 准备文件
- 新建文件夹 `docker-tomcat9-image`
- 准备 `apache-tomcat-9.0.67.tar.gz` 和 `jdk-8u281-linux-x64.tar.gz` 上传到服务器。
- 创建 `readme.txt`
- 创建 `Dockerfile` 文件

所有文件如下

```bash
╭─leslie@leslie-server ~/docker-tomcat9-image
╰─$ ll
total 151700
drwxrwxr-x  2 leslie leslie      4096 Oct  3 20:05 .
drwxr-xr-x 12 leslie leslie      4096 Oct  3 20:56 ..
-rw-r--r--  1 leslie leslie  11596906 Oct  3 19:47 apache-tomcat-9.0.67.tar.gz
-rw-r--r--  1 root   root        1371 Oct  3 20:01 Dockerfile
-rw-r--r--  1 leslie leslie 143722924 Oct  3 19:46 jdk-8u281-linux-x64.tar.gz
-rw-rw-r--  1 leslie leslie         0 Oct  3 19:49 readme.txt
```

## 2. 编写Dockerfile文件
> docker build 时会自动寻找这个Dockerfile文件

```bash
FROM ubuntu
MAINTAINER leslie<XXXXXX@xxx.com>

# 把宿主机当前上下文的readme.txt拷贝到容器/usr/local/路径下
# 并把readme.txt文件重命名cincontainer.txt文件
COPY readme.txt /usr/local/cincontainer.txt

# 把宿主机当前上下文的（也就是当前目录）java与tomcat安装包添加到容器中
ADD apache-tomcat-9.0.67.tar.gz /usr/local/
ADD jdk-8u281-linux-x64.tar.gz /usr/local/
ADD reading_pictures.tar.gz /root/

# 安装vim编辑器
# RUN apt install vim

# 设置工作访问时候的MORKDIR路径，登录DE 落脚点
ENV MYPATH /usr/local
WORKDIR $MYPATH

# 配置java与tomcat环境变量
# 配置java环境
ENV JAVA_HOME /usr/local/jdk1.8.0_281
ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar # 通过冒号隔开
# 配置tomcat环境
ENV CATALINA_HOME /usr/local/apache-tomcat-9.0.67
ENV CATALINA_BASE /usr/local/apache-tomcat-9.0.67
# 把上面配置的环境放入到PATH环境变量中
ENV PATH $PATH:$JAVA_HOME/bin:$CATALINA_HOME/lib:$CATALINA_HOME/bin

# 容器运行时监听的端口（暴露端口）
EXPOSE 8080

# 启动时运行tomcat
# ENTRYPOINT ["/usr/local/apache-tomcat-9.0.67/bin/startup.sh"]
# CMD ["/usr/local/apache-tomcat-9.0.67/bin/catalina.sh","run"]
CMD /usr/local/apache-tomcat-9.0.67/bin/startup.sh && tail -F /usr/local/apache-tomcat-9.0.67/bin/logs/catalina.out
# && 表示拼接下一条命令，可以无线的拼接。
```

## 3. 构建镜像

```bash
sudo docker build -t leslie-tomcat9 .
```

> 如果出现timeout问题，可以尝试修改docker的镜像地址

修改或新建`/ect/docker/daemon.json`文件,在里面加入阿里云镜像地址
```bash
{
 "registry-mirrors":["https://6kx4zyno.mirror.aliyuncs.com"]
}
```
重启docker
```bash
sudo service docker restart
```

## 4. 启动镜像

```bash
sudo docker run -p 8081:8080 \
--name leslie-tomcat \
-v ~/leslie-tomcat9/webapps:/usr/local/apache-tomcat-9.0.67/webapps \
-v ~/leslie-tomcat9/tomcatlogs:/usr/local/apache-tomcat-9.0.67/logs \
--privileged=true \
-d leslie-tomcat9
```

## 参考

https://www.cnblogs.com/liuyuelinfighting/p/16415468.html
https://blog.csdn.net/qq_46153157/article/details/126122042