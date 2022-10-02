---
author: Leslie-D
title: adb uninstall 失败
editLink: false
comment: false
date: 2022-06-16
---

## 背景

使用adb Uninstall卸载app的时候出现了`Failure [DELETE_FAILED_INTERNAL_ERROR]`的提示，卸载失败!

## 解决方法：

可以通过删除安装包的方式对应用进行卸载：

### 步骤如下

1. 通过命令 `adb shell pm list packages -s` 列出的应用包列表，从中找到要删除的包名
2. 获取此要卸载的包名的地址 `adb shell pm path com.xx.xx`
3. 挂载系统读写权限 `adb remount`
4. 删除包 `adb shell rm /system/app/xxxxxx/xxxxxx.apk`
5. 最后 `adb reboot` 重启

### 注

如果第3步提示`remount of the / superblock failed: Permission denied`

需要依次执行以下命令：
```bash
adb disable-verity
adb reboot
adb root
adb remount
```

## 参考：

[卸载app的时候出现Failure [DELETE_FAILED_INTERNAL_ERROR]的解决办法](https://blog.csdn.net/weixin_42433094/article/details/107790283)

[remount of the / superblock failed: Permission denied](https://blog.csdn.net/qq_44963514/article/details/89466998)