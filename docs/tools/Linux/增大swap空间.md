---
title: 增大swap空间
author: Leslie-D
date: 2022-07-04
editLink: false
comment: false
---

查看内存信息，会现实内存大小和交换区大小
```bash
free -m 
```
创建swapfile
```bash
sudo fallocate -l 15G /swapfile
```
如果提示`fallocate: fallocate 失败: 文本文件忙`，尝试先执行命令`swapoff -a`，再重新运行`sudo fallocate -l 15G /swapfile`

设置合适的权限
```bash
sudo chmod 600 /swapfile
```

分别对应文件实际拥有者，文件实际拥有者所在的组，其它用户的权限，数字权限是基于八进制数字系统而创建的，读权限（read，r）的值是4，写权限（write，w）的值是2，执行权限（execute，x）的值是1，没有授权的值是0。

```bash
sudo mkswap -f /swapfile
```


激活swap文件
```bash
sudo swapon /swapfile
```

```bash
swapon -a
```

最后查看内存信息
```bash
free -m
```
