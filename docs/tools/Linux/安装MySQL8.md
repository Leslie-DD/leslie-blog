---
editLink: false
comment: false
---

# 安装MySQL8

## 一、Ubuntu 18.04

### 下载deb包

1. 登入 mysql 官网，在官网中下载 deb 包，点击该链接，即可下载。
[下载deb包](https://dev.mysql.com/downloads/repo/apt/)

2. 下载该 deb 文件后，FTP上传到对应文件夹后 进入该文件夹，执行：`sudo dpkg -i 该deb文件名`

```bash
sudo dpkg -i mysql-apt-config_0.8.13-1_all.deb
```

3. 方向键选mysql-8.0 并按enter键
再次方向键选择mysql-8.0 并按enter键
方向键选择ok 并按enter键

### 安装MySQL 8

1. 更新apt源

```bash
sudo apt-get update
```

2. 正式安装MySQL 8.0

```bash
sudo apt install mysql-server
```

3. 安装完后，会出现一个图形界面，会让你设置root密码，输入后按enter键，并再次确认。

4. MySQL8.0 采用了新的加密方式，与 Ubuntu18.04 有兼容问题，故选择下面的旧版本5.x的加密方式。

### 登录MySQL

1.登录MySQL，查看当前的用户

```bash
mysql -u root -p密码
mysql> use mysql;
mysql> select host, user, authentication_string, plugin from user;
```

2. 设置远程连接

```bash
mysql> update user set host = '%' where user ='root';
```
3. 修改密码，注意密码格式，mysql8.0以上密码策略限制必须要大小写加数字特殊符号
```bash
mysql> alter user'root'@'%' IDENTIFIED BY 'KJHKdfsdf@98798';
mysql> flush privileges;
```
这样就可以远程连接了

4. 启动/停止mysql**
```bash
sudo service mysql stop
sudo service mysql start
```

## 二、CentOS 8
转载自[https://www.cnblogs.com/kasnti/p/11929030.html](https://www.cnblogs.com/kasnti/p/11929030.html)

### 使用最新的包管理器安装MySQL
```bash
sudo dnf install @mysql
```
### 启动服务
安装完成后，运行以下命令来启动MySQL服务并使它在启动时自动启动：
```bash
sudo systemctl enable --now mysqld
```
要检查MySQL服务器是否正在运行，请输入：
```bash
sudo systemctl status mysqld
```
### 添加密码及安全设置
运行mysql_secure_installation脚本，该脚本执行一些与安全性相关的操作并设置MySQL根密码：
```bash
sudo mysql_secure_installation
```
步骤如下：

1. 要求你配置VALIDATE PASSWORD component（验证密码组件）： 输入y ，回车进入该配置

	选择密码验证策略等级， 我这里选择0 （low），回车
	输入新密码两次
	确认是否继续使用提供的密码？输入y ，回车
	移除匿名用户？ 输入y ，回车
	不允许root远程登陆？ 我这里需要远程登陆，所以输入n ，回车

2. 移除test数据库？ 输入y ，回车

3. 重新载入权限表？ 输入y ，回车

### 配置远程登陆
如果需要设置root账户远程登陆，上一步骤中，不允许root远程登陆？这一步需要设为n。
接下来本机登录MySQL，将root用户的host字段设为'%'，意为接受root所有IP地址的登录请求：
本机登录MySQL:
```bash
mysql -uroot -p<上面步骤中设置的密码>
```
回车后即可登录，接下来终端变成了 ```mysql>``` 开头

接着继续执行mysql语句，将将root用户的host字段设为'%'：
```bash
use mysql;
update user set host='%' where user='root';
flush privileges;
```
设置完成后输入exit退出mysql，回到终端shell界面，接着开启系统防火墙的3306端口：
```bash
sudo firewall-cmd --add-port=3306/tcp --permanent
sudo firewall-cmd --reload
```
### 关闭MySQL主机查询dns
MySQL会反向解析远程连接地址的dns记录，如果MySQL主机无法连接外网，则dns可能无法解析成功，导致第一次连接MySQL速度很慢，所以在配置中可以关闭该功能。
参考文档
打开/etc/my.cnf文件，添加以下配置：
```bash
[mysqld]
skip-name-resolve
```
### 重启服务
```bash
sudo systemctl restart mysqld
```
本机测试安装后，MySQL8.0默认已经是utf8mb4字符集，所以字符集不再修改

### 新建用户时密码过于简单提示错误
ERROR 1819 (HY000): Your password does not satisfy the current policy requirements
登录MySQL
```bash
SHOW VARIABLES LIKE 'validate_password%';
```
修改密码策略
```bash
set global validate_password_policy=LOW;
```
修改密码最小长度
```bash
 set global validate_password_length=6;
 ```
 修改密码
 ```bash
 ALTER USER 'root'@'localhost' IDENTIFIED BY '123456'
 ```