# 筑基·学习笔记

基于 VitePress 的中文学习笔记站点，包含公专、行测、申论三个板块，支持本地全文搜索、深浅色模式和移动端阅读。

## 本地使用

使用 Node.js 22 或更高版本。项目采用官方入门文档推荐的 VitePress 2 预发布版本（`next`），具体版本由 `package-lock.json` 锁定。

```sh
npm install
npm run docs:dev
```

打开终端显示的本地地址。修改 Markdown 文件后，浏览器会自动更新。

```sh
npm run docs:build
npm run docs:preview
```

构建产物位于 `docs/.vitepress/dist`。

## GitHub Pages

访问地址：[筑基·学习笔记](https://tiany-l.github.io/docs-note/)。

推送到 `main` 后，`.github/workflows/deploy.yml` 会自动安装依赖、构建并发布站点。可在仓库 Actions 页面查看部署结果。

GitHub Actions 构建时自动使用 `/docs-note/` 作为路径前缀，本地开发仍使用 `/`。页面使用 `.html` 链接，支持在 GitHub Pages 上直接访问和刷新笔记页。

仓库 Settings → Pages → Source 需设为 **GitHub Actions**。如果更改仓库名，需要同步修改 `docs/.vitepress/config.mts` 中的部署路径。

## 目录

```text
docs/
├── .vitepress/       # 导航、侧边栏、主题配置
├── gongzhuan/        # 公专
├── xingce/           # 行测
├── shenlun/          # 申论
├── guide.md          # 写作说明与可复制模板
└── index.md          # 首页
```

新增笔记时，在对应目录添加 `.md` 文件，并在 `docs/.vitepress/config.mts` 的 `sidebar` 中添加链接。

VitePress 使用说明参考：[官方文档](https://vitepress.dev/zh/guide/getting-started)。
