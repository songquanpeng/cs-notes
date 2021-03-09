module.exports = {
  dest: "build",
  base: '/',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-141101198-9' // UA-00000000-0
      }
    ],
    'autobar'
  ],
  title: "JustSong's CS Notes",
  description: '我的编程笔记',
  keywords: "编程笔记，JustSong",
  themeConfig: {
    sidebarDepth: 2,
    smoothScroll: true,
    repo: 'songquanpeng/cs-notes',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '编辑本页面',
    docsDir: 'docs',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '语言',
        link: '/languages/'
      },
      {
        text: '工具',
        link: '/tools/'
      },
      {
        text: '算法',
        link: '/algorithms/'
      },
      {
        text: '其他',
        link: '/others/'
      }
    ],
  }
}