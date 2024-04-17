---
index: 1
title: MacOS终端配置
author: Leslie-D
date: 2022-06-08
star: true
tag:
  - Mac
  - Terminal
editLink: false
comment: false
---

## 主题 powerlevel10k

```bash
brew install romkatv/powerlevel10k/powerlevel10k
echo "source $(brew --prefix)/opt/powerlevel10k/powerlevel10k.zsh-theme" >>~/.zshrc
```

## 鸟枪换炮 nvim

```bash
brew install neovim
alias vim='nvim'
```

## 终端配色

```bash
export CLICOLOR=1
export LSCOLORS=ExGxFxdaCxDaDahbadeche

autoload -U colors && colors
NEWLINE=$'\n'
PROMPT="%{$fg_bold[green]%}%n%{$reset_color%}@%{$fg_bold[cyan]%}%m%{$fg_bold[green]%}:%D %* ${NEWLINE} ⤷ %{$reset_color%}"
```

## 语法高亮和命令提示插件

```bash
brew install zsh-syntax-highlighting
brew install zsh-autosuggestions

echo 'source /Users/leslie/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh' >>~/.zshrc
echo 'source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh' >>~/.zshrc
```

## 安装 node npm pnpm

```bash
# 安装node，同时安装了npm
brew install node
# 安装pnpm
npm install pnpm -g
```