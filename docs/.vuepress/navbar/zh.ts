import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // "/home",
  // { text: "使用指南", icon: "family", link: "/demo/" },
  {
    text: "关于",
    prefix: '/about/',
    children: [
      {
        text: "About Me",
        link: "me/self_intro.md",
      },
      {
        text: "About this site",
        link: "site/",
      },
    ],
  },

  {
    text: '教程',
    prefix: '/tutorial/',
    children: [
      {
        text: 'Linux',
        link: 'linux/',
      },
      {
        text: 'Mac',
        link: 'mac/'
      },
      {
        text: 'Android',
        link: 'android/'
      },
      {
        text: 'Server',
        link: 'server/'
      },
      { 
        text: 'Git & GitHub', 
        link: 'git_github_tips.md' 
      },
      {
        text: 'Regex',
        link: "regex.md"
      },
    ],
  },

  {
    text: '技术博客',
    prefix: '/blog/',
    children: [
      {
        text: 'Android',
        link: 'android/',
      },
      {
        text: '计算机基础',
        link: 'computer/',
      },
      {
        text: '后端',
        link: 'server/',
      },
      { 
        text: '数据库',
        link: 'databases/' 
      },
      { 
        text: 'Python',
        link: 'python/' 
      },
      { 
        text: 'Java',
        link: 'java/' 
      },
      { 
        text: '数据结构与算法',
        link: 'datastructure/' 
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
  },
  
]);
