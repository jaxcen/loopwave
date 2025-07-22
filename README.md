# Loop AI - 互动视频体验平台

Loop crafts your story. You direct life.

## 项目概述

这是Loop AI的官方网站，展示了AI驱动的互动短视频体验。用户的选择将交由AI生成下一步的浪潮，每一次播放都是独一无二的人生体验。

## 功能特性

- 🎯 **英雄区域**: 动态logo展示和品牌文案
- 🎵 **音量控制**: YouTube风格的音量控制按钮
- 📱 **响应式设计**: 支持各种设备尺寸
- 🎬 **视频展示**: 高质量的视频内容展示
- 🚀 **GitHub Pages**: 自动化部署

## 开发指南

### 本地运行
```bash
npm install
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### GitHub Pages部署

项目已配置自动化GitHub Pages部署：

1. 推送代码到 `master` 分支
2. GitHub Actions 自动触发构建和部署
3. 网站将发布到 `https://jaxcen.github.io/loopwave/`

### Flow预览图配置

要更新overview模块的视频预览图：

1. **方法一**: 将 `Flow (2).html` 页面截图并保存为 `.png` 或 `.webp` 格式
2. **方法二**: 使用浏览器开发者工具截图：
   - 打开 `Flow (2).html` 文件
   - 按 F12 打开开发者工具
   - 按 Ctrl+Shift+P 打开命令面板
   - 输入 "screenshot" 选择 "Capture full size screenshot"
   - 将截图保存到 `public/` 目录
3. **方法三**: 使用在线工具如 html-to-image 转换器

然后在 `src/App.vue` 中更新 poster 路径：
```vue
:poster="getAssetPath('your-flow-screenshot.png')"
```

## 技术栈

- **框架**: Vue 3 + Composition API
- **构建工具**: Vite
- **样式**: CSS3 + 响应式设计
- **部署**: GitHub Pages + GitHub Actions
- **图标**: Material Icons

## 项目结构

```
├── public/               # 静态资源
├── src/
│   ├── App.vue          # 主组件
│   ├── style.css        # 主要样式
│   └── main.js          # 入口文件
├── .github/workflows/   # GitHub Actions配置
└── dist/               # 构建输出目录
```

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

---

From LoopAI, for the future.


