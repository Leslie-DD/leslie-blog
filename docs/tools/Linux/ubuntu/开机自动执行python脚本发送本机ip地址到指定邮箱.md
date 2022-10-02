---
index: 1
title: 开机自动发送email附带IP地址
author: Leslie-D
date: 2022-06-08
star: true
editLink: false
comment: false
---

# VNC开机自动执行python脚本发送本机ip地址到指定邮箱

## 一、背景
### 问题：
工作中主力机用MacBook，平常有些工具需要用Ubuntu（比如MTK装机软件）。
MacBook切换到Ubuntu主机的时候每次都需要将显示器从MacBook连接到Ubuntu主机上，比较麻烦。
### 解决方法：
Ubuntu每次开机都发送ip地址到指定邮箱，然后在MacBook上用vnc通过ip远程连接Ubuntu（Ubuntu主机接了个HDMI欺骗器，这样远程连接的时候才能显示桌面）
## 二、脚本及开机自动执行
### 1. 安装ifconfig
获取ip地址用到`ifconfig`这个命令，先在终端试一下有没有安装，没装的话先执行下面命令安装：
```bash
sudo apt install net-tools
```
### 2. 编写发送邮件脚本
这里用python实现`send_email_when_power_on.py`
```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

import os
from email.mime.text import MIMEText
import smtplib
from email.header import Header
import time


# check network availability 
TIMEOUT=5

while True:
  SITE_TO_CHECK="www.baidu.com"
  RET_CODE='curl -I -s --connect-timeout $TIMEOUT $SITE_TO_CHECK -w %{http_code} | tail -n1'
  if [ "x$RET_CODE" == "x200" ]:
    print ("Network OK, will send mail...")
    break
  else:
    print ("Network not ready, wait...")
    time.sleep(1)


#call ifconfig
cmd='ifconfig'
m=os.popen(cmd)
t=m.read()
#send result of ifconfigi
m.close()
msg=MIMEText(t,'plain','utf-8')
msg['From']='Raspberry'
msg['To']='desticion'
msg['Subject']=Header('Ip Address Report','utf-8').encode()
#sender email address, replace with your sender email
from_add='xxxxxx@163.com' 
#receiver email address, replace with your receiver email
to_add='yyyyyy@qq.com'
#pwd of sender email, if return 550 error code ,please use authorization code
password='zzzzzzzzzzzzzzz'
#smtp of sender email
smtp_sever='smtp.163.com'
sever=smtplib.SMTP(smtp_sever,25)
sever.set_debuglevel(1)
sever.login(from_add,password)
sever.sendmail(from_add,[to_add],msg.as_string())
sever.quit()
```
### 3. 设置开机执行

编辑rc.local文件
```bash
sudo vim /etc/rc.local
```
将下面命令添加到rc.local文件中
```sh
#!/bin/sh -e
#
# rc.local
#
# This script is executed at the end of each multiuser runlevel.
# Make sure that the script will "exit 0" on success or any other
# value on error.
#
# In order to enable or disable this script just change the execution
# bits.
#
# By default this script does nothing.

python /home/leslie/send_email_when_power_on.py

exit 0
```
设置执行权限
```bash
sudo chmod +x /etc/rc.local
sudo systemctl daemon-reload
sudo systemctl list-dependencies multi-user.target | grep rc-local
```
输出如下内容：
```bash
● ├─rc-local.service
```

### 4. reboot 检查是否发送成功
## 三、VNC实现Mac远程连接Ubuntu
[参考链接，点击查看](https://zhuanlan.zhihu.com/p/357334969)