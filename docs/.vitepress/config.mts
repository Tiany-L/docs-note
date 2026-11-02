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
                { text: '询问、勘验、检查、鉴定', link: '/gongzhuan/knowledge/administrative-cases/inquiry-inspection-appraisal' },
                { text: '辨认、办案协作、处罚告知、听证', link: '/gongzhuan/knowledge/administrative-cases/identification-cooperation-hearing' },
                { text: '当场处罚、当场收缴', link: '/gongzhuan/knowledge/administrative-cases/on-site-penalties-collection' },
                { text: '快速办理、行政处罚的适用', link: '/gongzhuan/knowledge/administrative-cases/fast-track-penalty-application' },
                { text: '治安处罚的种类及执行', link: '/gongzhuan/knowledge/administrative-cases/penalty-types-enforcement' },
                { text: '治安调解、涉案财物管理', link: '/gongzhuan/knowledge/administrative-cases/mediation-property-management' },
                { text: '《治安管理处罚法》新旧对比①', link: '/gongzhuan/knowledge/administrative-cases/law-comparison-1' },
                { text: '《治安管理处罚法》新旧对比②', link: '/gongzhuan/knowledge/administrative-cases/law-comparison-2' },
              ],
            },
            {
              text: '第二章 刑法',
              collapsed: true,
              items: [
                { text: '刑法总则', link: '/gongzhuan/knowledge/criminal-law/general-principles' },
                { text: '正当防卫、紧急避险', link: '/gongzhuan/knowledge/criminal-law/self-defense-necessity' },
                { text: '量刑、自首、坦白、立功', link: '/gongzhuan/knowledge/criminal-law/sentencing-confession-merit' },
                { text: '刑法分则、人身犯罪', link: '/gongzhuan/knowledge/criminal-law/personal-crimes' },
                { text: '刑法分则、财产类犯罪', link: '/gongzhuan/knowledge/criminal-law/property-crimes' },
                { text: '刑法分则、危害公共安全罪', link: '/gongzhuan/knowledge/criminal-law/public-safety-crimes' },
                { text: '刑法分则、其他罪名', link: '/gongzhuan/knowledge/criminal-law/other-crimes' },
              ],
            },
            {
              text: '第三章 办理刑事案件能力',
              collapsed: true,
              items: [
                { text: '刑诉法流程图', link: '/gongzhuan/knowledge/criminal-procedure/procedure-overview' },
                { text: '立案、移送案件', link: '/gongzhuan/knowledge/criminal-procedure/filing-transfer' },
                { text: '刑事管辖、回避', link: '/gongzhuan/knowledge/criminal-procedure/jurisdiction-recusal' },
                { text: '刑事讯问、询问', link: '/gongzhuan/knowledge/criminal-procedure/interrogation-inquiry' },
                { text: '侦查活动', link: '/gongzhuan/knowledge/criminal-procedure/investigation' },
                { text: '刑事证据', link: '/gongzhuan/knowledge/criminal-procedure/evidence' },
                { text: '刑事强制措施', link: '/gongzhuan/knowledge/criminal-procedure/coercive-measures' },
                { text: '律师参与刑诉', link: '/gongzhuan/knowledge/criminal-procedure/defense-lawyers' },
              ],
            },
            {
              text: '第四章 公安基础与队伍管理',
              collapsed: true,
              items: [
                { text: '警察素养与纪律条令', link: '/gongzhuan/knowledge/police-foundations/professionalism-discipline' },
                { text: '公安历史沿革', link: '/gongzhuan/knowledge/police-foundations/history' },
                { text: '组织管理与基本政策', link: '/gongzhuan/knowledge/police-foundations/organization-policies' },
                { text: '人事管理01', link: '/gongzhuan/knowledge/police-foundations/personnel-management-1' },
                { text: '人事管理02', link: '/gongzhuan/knowledge/police-foundations/personnel-management-2' },
                { text: '内务条令', link: '/gongzhuan/knowledge/police-foundations/internal-affairs' },
              ],
            },
            {
              text: '第五章 法理、宪法与法治思想',
              collapsed: true,
              items: [
                { text: '法理学基础', link: '/gongzhuan/knowledge/legal-foundations/jurisprudence' },
                { text: '立法法与法律解释', link: '/gongzhuan/knowledge/legal-foundations/legislation-interpretation' },
                { text: '宪法与公民权利', link: '/gongzhuan/knowledge/legal-foundations/constitution-rights' },
                { text: '国家机构', link: '/gongzhuan/knowledge/legal-foundations/state-institutions' },
                { text: '法治思想', link: '/gongzhuan/knowledge/legal-foundations/rule-of-law' },
              ],
            },
            {
              text: '第六章 民法典',
              collapsed: true,
              items: [
                { text: '民法典、基本原则与自然人', link: '/gongzhuan/knowledge/civil-law/principles-natural-persons' },
                { text: '民法典、监护权', link: '/gongzhuan/knowledge/civil-law/guardianship' },
                { text: '民法典、宣告失踪与死亡', link: '/gongzhuan/knowledge/civil-law/missing-death' },
                { text: '民法典、诉讼时效', link: '/gongzhuan/knowledge/civil-law/limitation-periods' },
                { text: '民法典、重要分则', link: '/gongzhuan/knowledge/civil-law/specific-provisions' },
              ],
            },
            {
              text: '第七章 其他法律法规',
              collapsed: true,
              items: [
                { text: '人民警察法', link: '/gongzhuan/knowledge/related-laws/peoples-police-law' },
                { text: '行政复议、行政诉讼、国家赔偿', link: '/gongzhuan/knowledge/related-laws/administrative-remedies' },
                { text: '监察法', link: '/gongzhuan/knowledge/related-laws/supervision-law' },
              ],
            },
            {
              text: '第八章 公安业务能力',
              collapsed: true,
              items: [
                { text: '群众工作能力', link: '/gongzhuan/knowledge/police-capabilities/community-work' },
                { text: '情报分析能力', link: '/gongzhuan/knowledge/police-capabilities/intelligence-analysis' },
                { text: '公安勤务能力、接处警', link: '/gongzhuan/knowledge/police-capabilities/dispatch-response' },
                { text: '应急处突能力', link: '/gongzhuan/knowledge/police-capabilities/emergency-response' },
                { text: '警务技能', link: '/gongzhuan/knowledge/police-capabilities/policing-skills' },
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
