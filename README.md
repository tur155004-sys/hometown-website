# 家乡实景展示网页

这是一个使用 HTML + CSS + JavaScript 开发的静态家乡宣传网页，适合展示家乡风景、文化、美食、地标和一日游路线。

## 文件结构

```text
hometown-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── hero.jpg
│   ├── about.jpg
│   ├── scenery1.jpg
│   ├── scenery2.jpg
│   ├── food1.jpg
│   └── landmark1.jpg
└── README.md
```

## 本地预览

方式一：直接双击 `index.html`，用浏览器打开。

方式二：在项目目录启动一个静态服务：

```bash
cd hometown-website
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 发布到 GitHub Pages

1. 在 GitHub 新建一个公开仓库，例如 `hometown-website`。
2. 把本文件夹 `hometown-website` 里的所有内容上传到仓库根目录，不要再套一层外层文件夹。
3. 进入仓库 `Settings` -> `Pages`。
4. 在 `Build and deployment` 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. 保存后等待 1 到 3 分钟，GitHub 会生成类似下面的公网链接：

```text
https://你的GitHub用户名.github.io/hometown-website/
```

本项目已包含 `.nojekyll`，适合直接作为静态网页发布。

## 如何修改家乡名称

打开 `index.html`，搜索“我的家乡”，替换成你的真实家乡名称。建议重点修改这些位置：

- 页面标题 `<title>`
- 导航栏 `.brand`
- 首页首屏 `<h1>`
- 底部标语
- 简介、地标、美食和路线中的示例文案

代码中已经用注释标出可替换位置。

## 如何替换图片

把真实图片放进 `images` 文件夹，并使用下面的文件名覆盖占位文件：

- `hero.jpg`：首页大图，建议横向高清照片
- `about.jpg`：家乡简介配图，建议使用生活化实景
- `scenery1.jpg`：实景风光主图
- `scenery2.jpg`：城市街景
- `scenery3.jpg`：乡村田野
- `scenery4.jpg`：夜景
- `landmark1.jpg` 到 `landmark4.jpg`：地标图片
- `food1.jpg` 到 `food3.jpg`：美食图片

如果暂时没有图片，页面会显示渐变占位效果，后期替换同名图片即可。

## 如何修改内容

主要内容都在 `index.html` 中：

- `#about`：家乡简介
- `#scenery`：实景风光
- `#landmarks`：地标建筑
- `#food`：家乡美食
- `#culture`：人文记忆
- `#route`：推荐路线

样式在 `css/style.css` 中，交互在 `js/main.js` 中。

## 如何替换外部跳转链接

页面中的“开始探索”、快速探索卡片、风光/地标/美食/路线卡片按钮都已设置为外部链接，并使用新窗口打开。打开 `index.html`，搜索 `target="_blank"`，把示例链接替换成你的真实链接即可。

推荐替换为：

- 高德地图或百度地图地点链接
- 携程、马蜂窝、小红书等旅游攻略链接
- 大众点评或本地美食店铺链接
- 天气查询、酒店预订、交通路线链接

## 已实现功能

- 电脑、平板、手机响应式布局
- 首屏大图视觉
- 导航平滑滚动
- 手机端折叠菜单
- 外部资源跳转按钮
- 滚动渐入动画
- 图片悬停放大
- 图片缺失时的占位兜底效果
