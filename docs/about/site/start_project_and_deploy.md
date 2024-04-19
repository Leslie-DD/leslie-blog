---
editLink: false
comment: false
title: 启动项目与部署
date: 2022-04-17
---

## 一、准备运行环境
[准备运行环境](https://theme-hope.vuejs.press/zh/get-started/env.html)

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
# Deprecated
npm i -D @vuepress/bundler-vite@next && npm install && npm update

pnpm install --frozen-lockfile
 ```
 ```bash
 pnpm run docs:dev
 ```

<img src="./启动开发服务器成功.png">’

 **注：[Vuepress-theme-hope 官网配置教程](https://theme-hope.vuejs.press/zh/)**