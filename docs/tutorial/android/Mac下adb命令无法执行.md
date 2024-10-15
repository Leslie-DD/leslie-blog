---
author: Leslie D
title: adb 在某些机型上无法执行命令
tag:
  - adb
  - Android
  - Mac
editLink: false
comment: false
date: 2023-06-25
---

## 背景
adb 命令执行过程在某些机型上总是卡住。
后来发现是 adb 版本的问题。
真机 Android 版本比较低，需要用老版本的 adb。
Version 28.0.2 没有问题，就重新下载并配置了旧版本的 platform-tools。


## 0. 卸载当前adb
如果使用 brew 下载的，也用 brew 卸载
```bash
brew uninstall android-platform-tools
```


##  1. 下载旧版本
https://dl.google.com/android/repository/platform-tools_r28.0.2-darwin.zip

下载哪个版本，就把链接中的版本号替换一下


## 2. 配置环境变量
```bash
export ANDROID_HOME=/Users/leslie/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools-28
```

```bash
source ~/.zshrc
```