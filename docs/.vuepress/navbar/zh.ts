import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // "/home",
  // { text: "使用指南", icon: "family", link: "/guide/" },
  {
    text: "关于",
    prefix: "/about/",
    children: [
      {
        text: "About Me",
        link: "README.md",
      },
    ],
  },

  {
    text: '踩坑记录',
    prefix: '/tools/',
    children: [
      {
        text: 'Linux',
        link: 'linux',
      },
      {
        text: 'Mac',
        link: 'mac'
      },
      {
        text: 'Android',
        link: 'android'
      },
      { 
        text: 'Git & GitHub', 
        link: 'git_github_tips.md' 
      },
      {
        text: 'Vuepress',
        link: 'vuepress'
      },
      {
        text: 'Regex',
        link: "regex"
      },
    ],
  },

  {
    text: '技术博客',
    prefix: '/blog/',
    children: [
      {
        text: 'Android',
        link: 'android',
      },
      {
        text: '计算机基础',
        link: 'computer',
      },
      {
        text: '后端',
        link: 'server',
      },
      { 
        text: '数据库',
        link: 'databases' 
      },
      { 
        text: 'Python',
        link: 'python' 
      },
    ],
  },

  {
    text: '项目',
    prefix: '/projects/',
    children: [
      {
        text: 'Reading',
        link: 'reading/'
      },
    ]
  },

  {
    text: '读书笔记',
    link: '/notes/',
  }
  
]);
