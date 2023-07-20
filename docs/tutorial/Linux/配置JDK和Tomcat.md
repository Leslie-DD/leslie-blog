---
tag:
  - Tomcat
  - JDK
  - Linux
  - Ubuntu
  - Server
editLink: false
comment: false
---

# 配置JDK和Tomcat

## 一、安装JDK

### 1. [下载JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
根据自己ubuntu系统选择jdk-8u271-linux-x64.tar.gz 我电脑Windows 64位系统，我下载到了本地

### 2. 用scp命令在cmd中上传到linux服务器的新建的/usr/java/文件夹

```bash
scp jdk-8u271-linux-x64.tar.gz xxxxx@xx.xx.xx.xx:/usr/java/
```
xxxxx是登录服务器的用户名，xx.xx.xx.xx是服务器地址

### 3. 进到服务器/usr/java/文件夹下解压
```bash
tar -zxvf jdk-8u181-linux-x64.tar.gz
```

用mv命令将解压好的jdk文件夹重命名为jdk1.8
```bash
mv jdk1.8.0_271 jdk1.8
```

### 4. 配置环境
打开profile文件
```bash
sudo gedit /etc/profile
```

在文件末尾添加path
```bash 
export JAVA_HOME=/usr/java/jdk1.8
export JRE_HOME=/usr/java/jdk1.8/jre
export CLASSPATH=.:$JAVA_HOME/lib:$JRE_HOME/lib:$CLASSPATH
export PATH=$JAVA_HOME/bin:$JRE_HOME/bin:$PATH
```

使变量生效
```bash
source /etc/profile
```

### 5. 查看java版本信息
```bash
java -version
```

## 二、安装tomcat7

### 1. [下载tomcat7](https://tomcat.apache.org/download-70.cgi)

选择tar.gz下载到本地windows桌面
同样scp传到自己的linux服务器

```bash
scp apache-tomcat-7.0.106.tar.gz xxxxx@xx.xx.xx.xx:/usr/java
```

### 2. 到linux服务器usr/java文件夹下解压

```bash
sudo tar -zxvf apache-tomcat-7.0.106.tar.gz
```

### 3. 重命名个简单的文件夹名

```bash
mv apache-tomcat-7.0.106 tomcat7
```
### 4. 赋权限
```bash
sudo chmod 755 -R tomcat7
```

### 5. 修改启动脚本
进入tomcat的bin目录下
```bash
sudo vim startup.sh
```

在最后一行之前加入如下信息（注意根据自己实际情况修改JAVA_HOME和TOMCAT_HOME）：
```bash
#set java environment
export JAVA_HOME=/usr/java/jdk1.8
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:%{JAVA_HOME}/lib:%{JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH
#tomcat
export TOMCAT_HOME=/usr/java/tomcat7
```

### 6. 启动服务
执行startup.sh，提示Tomcat started就是服务启动正常了
```bash
sudo ./startup.sh
```

### 7. 报错
如果提示 `Neither the JAVA_HOME nor the JRE_HOME environment variable is defined`，是因为启动tomcat会调用tomcat安装文件中的startup.bat，而它调用了catalina.bat则调用了setclasspath.bat。因此需要在setclasspath.bat的开头手动声明环境变量。

打开tomcat的bin目录下的`setclasspath.sh`，添加`JAVA_HOME`和`JRE_HOME`两个环境变量

```bash
export JAVA_HOME=/usr/java/jdk1.8
export JRE_HOME=${JAVA_HOME}/jre
```

### 8. 在浏览器输入你的（服务器ip地址:端口号）（xx.xx.xx.xx:8080)显示Tomcat信息说明启动成功
