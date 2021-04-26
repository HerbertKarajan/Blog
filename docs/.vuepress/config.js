const utils = require('./utils')
module.exports = {
  base:"/Blog/",
  title: 'Karajan\'s Blog',
  description: 'Karajan\'s Blog',
  head: [
    ['link', { rel: 'icon', href: `https://github.githubassets.com/favicon.ico` }]
  ],
  markdown: {
    toc: { includeLevel: [2, 3] }, //[[toc]]包含的级别
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blog/' },
      { text: 'BookStore', link: '/book/' },
      { text: 'MyStars', link: '/mystars/' },
      { text: 'SomeoneStars', link: '/getsomeonestars/' },
      { text: '博客园', link: 'https://www.cnblogs.com/karajanking' },
    ],
    sidebar: utils.inferSiderbars(),
    // sidebar: {
    //   '/blog/': [
    //     {
    //       title: 'Css',
    //       collapsable: false,
    //       children: [
    //         'Css/css3样式效果.md',
    //       ]
    //     }
    //   ]
    // },
    repo: 'https://github.com/HerbertKarajan/Blog',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    docsBranch: 'main',
    // 默认为 true，设置为 false 来禁用
    editLinks: true,
    sidebarDepth: 1,
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
  },
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      return {
        resolve: {
          alias: {
            '@public': './public'
          }
        },
        devServer: {
          open: true,
          hot: true,
          https: true
        }
      }
    }
  },
  chainWebpack: (config, isServer) => {
    config.module
      .rule('images')
        .test(/\.(png|jpe?g|gif)(\?.*)?$/)
        .use('url-loader')
          .loader('url-loader')
          .options({
            limit: 10000,
            name: `public/images/[name].[hash:8].[ext]`,
            esModule: false
          })
      
    // config.get('file').use.find(item => item.loader === 'file-loader').options.esModule = false
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}
