---
index: 1
# icon: page
title: Git & GitHub
author: Leslie-D
date: 2022-03-27
star: true
tag:
  - Git
  - Github
editLink: false
comment: false
---

## 输出 commits 到文件
```bash
git log --pretty=format:"%H|%s|%an" --since="100 day ago" >> ~/Desktop/commit.txt
```
[参考博客](https://www.cnblogs.com/bellkosmos/p/5923439.html)

## 分支基本操作

### 1. 新建远程分支

```bash
git checkout -b alpha # 先在本地新建分支
git push origin alpha:alpha # 把本地分支push到远程仓库
```

### 2. 新建本地分支并跟随远程分支

```bash
git checkout -b test # 新建本地分支test
git branch --set-upstream-to remotes/origin/alpha # 将本地分支test跟随远程分支origin/alpha
# 或者
git checkout -b test origin/alpha
```

### 3. 删除远程分支

```bash
git push origin :dbg_lichen_star # 推送一个空分支到远程分支，其实就相当于删除远程分支
# 或者
git push origin --delete dbg_lichen_star
```

### 4. 取消本地分支与远程分支的跟随
```bash
git branch --unset-upstream
```

### 5. 修改本地分支名称
```bash
git branch -m OldBranchName NewBranchName
```

### 6. 本地删除远程已删除的分支
> 每次将一个分支在 gitlab 上 merge 到开发分支，默认都会是删除，但是有次`git branch -r`发现对应的分支还有。
>
> 原因是本地和远端没有同步。

```bash
git remote show origin # 这个命令可以看到分支的详细信息，远程仓库已经不存在的分支会提示`(stale (use 'git remote prune' to remove))`
git remote prune origin # 根据提示删除或者说同步本地分支
```

## 修改 gitignore 不起作用

::: note
.gitignore中已经标明忽略的文件目录下的文件，git push的时候还会出现在push的目录中，或者用git status查看状态，想要忽略的文件还是显示被追踪状态。
:::

::: tip 原因
在git忽略目录中，新建的文件在git中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在.gitignore中已经声明了忽略路径也是不起作用的，
这时候我们就应该先把本地缓存删除，然后再进行git的提交，这样就不会出现忽略的文件了。
:::


```bash
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
git push -u origin master
```

[Ref](https://blog.csdn.net/Saintmm/article/details/120847019)

## git pull 每次都要输入密码
其实有两种方式
#### 1、ssh方式clone项目，并把本机token托管到github ssh keys
#### 2、保存Username和personal access tokens
```bash
git config --local credential.helper store
```
下次pull的时候输一次密码以后就不用输了

## pull远程分支并解冲突

> 如果在master分支下面新建一个分支，开发的同时，master又新增了一下代码，需要在新的master上面继续开发

1. 先把自己写的代码，保存到本地库，然后推送到来远程库（至关重要），然后拉下来远程库，也很重要
2. 切换到本地master分支，pull取远程仓库中最新的master代码
3. 切换到你现在开发的分支，在git命令中输入：git rebase origin/MASTER
4. 这样就会把你现在正在开发的分支中已经写好的代码与最新的Master分支的代码融合在一起
5. 输入 git status 显示冲突的文件，然后找到一个文件解决冲突，git add 文件名
这样才算解决一个冲突。输入 git rebase --continue ，继续git status ....... 直到所有的冲突全部解决（git status如果不显示冲突文件，但又处于rebase状态，输入git rebase --skip)。如果不想解决冲突了，输入 git rebase --abort ，回到最初的状态，前面解决的所有冲突都会恢复到以前的状态
6. 解决完冲突后，推送到远程库。
7. 完成

> 如何查看rebase完成了呢？git branch看看自己是否在当前的分支，如果回到当前分支，就是rebase完成。
> 如果rebase没有完成，git branch不会在当前分支，会在rebase新开的分支（一个临时的分支）里面。
> git branch -vv 查看自己的分支，以及自己的分支与远程分支落后多少个文件，如果落后了就git pull，解决冲突.
> git push失败，可能是本地这个分支有一些文件落后远程分支，需要git pull.



## 本地多个ssh-key，如何区分

1. 生成ssh-key
```bash
cd ~/.ssh
ssh-keygen -t rsa -C 'xxx@xx.com' -f id_rsa_second
```

2. 将新的ssh public key添加到内部的gitlab仓库

3. 在~/.ssh 目录下创建config文件,用于配置私钥对应的服务器,内容：
```bash
Host gitlab.xxx.com #可以随意命名  
HostName gitlab.xxx.com  
User git  
Port 22  
IdentityFile ~/.ssh/id_rsa_second
```

4. 克隆仓库即可
```bash
git clone git@gitlab.xxx.com/xx.git
```

## 撤销 git commit --amend

```bash
git reflog # 查看操作记录
git reset --soft HEAD@{1}
```



## **参考**

https://www.huaweicloud.com/articles/3987ec9dfbd9f650e70ceb9eebe05287.html 
https://www.jianshu.com/p/97341ed9d89e
