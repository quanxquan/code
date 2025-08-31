# 单页照片展示项目

本项目是一个基于 fullpage.js 和 Bootstrap 的响应式单页照片展示网页，适合用于作品集、摄影展示等场景。

## 特征

- 使用 fullpage.js 实现全屏滑动切换照片，体验流畅。
- 集成 Bootstrap 5，界面美观且自适应各种设备（PC、平板、手机）。
- 支持自定义照片，只需在 `main.js` 的 `photos` 数组中添加图片链接。
- 结构简洁，易于扩展和二次开发。
- 兼容主流现代浏览器。

## 快速预览

1. 推荐在 VS Code 中安装 Live Server 插件。
2. 右键 `index.html`，选择“Open with Live Server”即可实时预览。

## 目录结构

```
copilot/
  ├── index.html      # 主页面
  ├── main.js         # 主要 JS 逻辑，配置照片数组
  ├── style.css       # 自定义样式
```

## 自定义照片

编辑 `main.js` 文件，将你的图片链接添加到 `photos` 数组中，例如：

```js
const photos = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg'
];
```

## 依赖
- [fullpage.js](https://alvarotrigo.com/fullPage/)
- [Bootstrap 5](https://getbootstrap.com/)

---
如需更多功能或美化，欢迎继续提问！
