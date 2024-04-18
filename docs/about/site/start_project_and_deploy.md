---
editLink: false
comment: false
title: 启动项目与部署
date: 2024-04-17
---

## 一、准备运行环境
[准备运行环境](https://vuepress-theme-hope.github.io/v2/zh/cookbook/tutorial/env.html)

## 二、pnpm run docs:dev报错

### 背景 

> 当重新把项目从github拉下来后，直接运行 `pnpm run docs:dev` 报错;
> 
> 提示 `vuepress: not found`，需要先安装 `node_modules`

 ![](./启动开发服务器报错.png)

 ### 1. 解决方法
 
 ```bash
 # Deprecated
 npm i vuepress@next vuepress-theme-hope@next && npm install && npm update

npm i -D @vuepress/bundler-vite@next && npm install && npm update
 ```
 ```bash
 yarn docs:dev
 ```

<img src="./启动开发服务器成功.png">’

 **看官网，少他妈的自己不会瞎整。**
 [ Vuepress-theme-hope 官网配置教程](https://vuepress-theme-hope.github.io/v2/zh/cookbook/tutorial/command.html#%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4)