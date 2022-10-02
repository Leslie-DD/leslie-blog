---
index: 1
title: MTK刷机工具缺少libpng12-0
author: Leslie-D
date: 2022-06-08
star: true
editLink: false
comment: false
---
# MTK MT8167版本刷机工具打不开，提示缺少libpng12-0

这玩意应该是ubuntu16+之后就废弃了，我用的ubuntu22.04，装不上
看了国外的一个问答，发现可以通过自己编译来解决，膜拜大神
[参考博文](https://askubuntu.com/questions/1404213/install-libpng12-on-ubuntu-22-04)
## 解决方法
```bash
sudo apt install build-essential zlib1g-dev
mkdir src
cd src
wget https://ppa.launchpadcontent.net/linuxuprising/libpng12/ubuntu/pool/main/libp/libpng/libpng_1.2.54.orig.tar.xz
tar Jxfv libpng_1.2.54.orig.tar.xz
cd libpng-1.2.54
./configure
make
sudo make install
sudo ln -s /usr/local/lib/libpng12.so.0.54.0 /usr/lib/libpng12.so
sudo ln -s /usr/local/lib/libpng12.so.0.54.0 /usr/lib/libpng12.so.0
```