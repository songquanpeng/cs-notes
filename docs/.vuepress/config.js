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
    'autobar',
    [
      'sitemap',
      {
        hostname: 'https://notes.justsong.cn'
      }
    ]
  ],
  title: "编程笔记",
  description: 'JustSong 的编程笔记',
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
        link: '/编程语言/'
      },
      {
        text: '框架',
        link: '/框架使用/'
      },
      {
        text: '工具',
        link: '/工具使用/'
      },
      {
        text: '算法',
        link: '/算法总结/'
      },
      {
        text: 'Linux',
        link: '/Linux 系统/'
      },
      { 
        text: '博客', 
        link: 'https://iamazing.cn' 
      },
    ],
  },
  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-4932639067711253",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
    ["script", { src: "./public/main.js" }]
  ],
  markdown: {
    extendMarkdown: md => {
      md.set({
        html: true,
        linkify: true
      })
    }
  }
}
