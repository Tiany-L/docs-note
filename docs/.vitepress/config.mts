import { defineConfig } from 'vitepress'

const base = process.env.GITHUB_ACTIONS === 'true' ? '/docs-note/' : '/'

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: '筑基·学习笔记',
  description: '公专、行测、申论学习笔记，记录知识，也记录进步。',
  cleanUrls: false,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
  ],
  themeConfig: {
    siteTitle: '筑基·学习笔记',
    nav: [
      { text: '首页', link: '/' },
      { text: '公专', link: '/gongzhuan/knowledge/administrative-cases/filing', activeMatch: '/gongzhuan/' },
      { text: '行测', link: '/xingce/', activeMatch: '/xingce/' },
      { text: '申论', link: '/shenlun/', activeMatch: '/shenlun/' },
    ],
    sidebar: {
      '/gongzhuan/': [
        {
          text: '知识点速记',
          items: [
            {
              text: '第一章 办理行政案件能力',
              collapsed: false,
              items: [
                { text: '立案', link: '/gongzhuan/knowledge/administrative-cases/filing' },
                { text: '管辖', link: '/gongzhuan/knowledge/administrative-cases/jurisdiction' },
                { text: '回避', link: '/gongzhuan/knowledge/administrative-cases/recusal' },
                { text: '证据、继续盘问、约束', link: '/gongzhuan/knowledge/administrative-cases/evidence-questioning-restraint' },
                { text: '传唤、行政强制措施', link: '/gongzhuan/knowledge/administrative-cases/summons-coercive-measures' },
              ],
            },
          ],
        },
        { text: '错题复盘', link: '/gongzhuan/review' },
      ],
      '/xingce/': [{ text: '行测', items: [
        { text: '学习总览', link: '/xingce/' },
        { text: '政治理论与常识判断', link: '/xingce/general' },
        { text: '言语理解与表达', link: '/xingce/verbal' },
        { text: '数量关系', link: '/xingce/quantitative' },
        { text: '判断推理', link: '/xingce/reasoning' },
        { text: '资料分析', link: '/xingce/data' },
        { text: '错题复盘', link: '/xingce/review' },
      ] }],
      '/shenlun/': [{ text: '申论', items: [
        { text: '学习总览', link: '/shenlun/' },
        { text: '归纳概括', link: '/shenlun/summary' },
        { text: '综合分析', link: '/shenlun/analysis' },
        { text: '提出对策', link: '/shenlun/solutions' },
        { text: '应用文写作', link: '/shenlun/practical' },
        { text: '文章写作', link: '/shenlun/essay' },
        { text: '素材积累', link: '/shenlun/materials' },
      ] }],
    },
    search: {
      provider: 'local',
      options: { locales: { root: { translations: {
        button: { buttonText: '搜索笔记', buttonAriaLabel: '搜索笔记' },
        modal: {
          displayDetails: '显示详细列表', resetButtonTitle: '清空搜索',
          backButtonTitle: '关闭搜索', noResultsText: '没有找到相关笔记',
          footer: { selectText: '选择', selectKeyAriaLabel: '回车', navigateText: '切换', navigateUpKeyAriaLabel: '向上', navigateDownKeyAriaLabel: '向下', closeText: '关闭', closeKeyAriaLabel: '退出' },
        },
      } } } },
    },
    outline: { label: '本页目录', level: [2, 3] },
    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '笔记目录',
    returnToTopLabel: '返回顶部',
    notFound: { title: '这页笔记还没写', quote: '回到首页，继续今天的学习。', linkLabel: '返回首页', linkText: '返回首页' },
    footer: { message: '把知识写下来，把方法留下来。' },
  },
})
