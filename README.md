# Loop - AI驱动的互动短视频体验

## 项目概述

Loop是一个完全复现Google Flow网站设计的互动短视频应用展示网站。使用Vue 3框架构建，完全模仿Flow网站的视觉效果、交互功能和视频元素。

### 🎯 项目特色

- **完全复现** Google Flow网站的设计和布局
- **Vue 3 + Vite** 现代化开发框架
- **完整视频集成** 使用Flow原始视频资源
- **响应式设计** 适配各种设备尺寸
- **流畅动画** 复现原网站的交互效果
- **模块化组件** 易于维护和扩展

### 🏗️ 技术架构

- **前端框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **样式**: 原生CSS (完全复现Flow样式)
- **视频处理**: HTML5 Video API
- **动画**: CSS动画 + Canvas

## 📦 安装和运行

### 环境要求

- Node.js 16.0+
- npm 7.0+ 或 yarn 1.22+

### 快速开始

1. **安装依赖**
```bash
npm install
```

2. **启动开发服务器**
```bash
npm run dev
```

3. **打开浏览器**
访问 `http://localhost:3000`

### 其他命令

```bash
# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 代码检查
npm run lint
```

## 📁 项目结构

```
loopwave/
├── src/
│   ├── App.vue          # 主应用组件
│   ├── main.js          # 应用入口
│   └── style.css        # 全局样式
├── 视频资源/             # 视频资源文件夹
│   ├── *.mp4           # 各种功能演示视频
│   └── *.webp          # 海报图片
├── public/              # 静态资源
├── index.html           # HTML模板
├── package.json         # 项目配置
├── vite.config.js       # Vite配置
└── README.md           # 项目文档
```

## 🎬 视频资源

项目集成了Flow网站的所有视频元素：

### 主要视频类型
- **背景视频**: 主页英雄区域循环播放
- **功能演示**: 8个不同功能的演示视频
- **作品展示**: 12个创作者作品视频
- **交互元素**: 播放控制和用户交互

### 视频文件说明
- `RNDR_TunnelVidoes_*.mp4` - 背景隧道视频（多分辨率）
- `01_Ingredients_*.mp4` - 素材管理功能
- `02_Ingredients_to_video_*.mp4` - 素材转视频
- `03_Frames_to_Video_*.mp4` - 帧到视频
- `04_Scene_Builder_*.mp4` - 场景构建器
- `05_JumpTo_*.mp4` - 跳转功能
- `06_Extend_*.mp4` - 视频扩展
- `07_CameraControls_*.mp4` - 摄像机控制
- `08_VEO_Cinematic_*.mp4` - 电影级渲染

## 🎨 设计特色

### 视觉效果
- **深色主题**: 科技感的深色配色方案
- **紫色渐变**: 品牌色彩系统
- **玻璃态效果**: 现代化的模糊背景
- **粒子动画**: Canvas实现的动态背景

### 交互功能
- **滚动动画**: 视差滚动和淡入效果
- **视频控制**: 自动播放、暂停、循环
- **导航交互**: 平滑锚点跳转
- **响应式布局**: 移动端优化

### 组件结构
- **Header**: 固定导航栏
- **Hero**: 英雄区域与背景视频
- **SpacerText**: 间隔文本区域
- **VideoSection**: 主要视频展示
- **Capabilities**: 功能介绍轮播
- **Partners**: 创作者展示
- **Gallery**: 作品库滚动展示
- **Pricing**: 定价方案
- **Footer**: 页脚信息

## 🔧 自定义配置

### 修改内容
- 编辑 `src/App.vue` 中的数据部分
- 替换 `视频资源/` 文件夹中的视频文件
- 修改 `src/style.css` 中的样式变量

### 添加新功能
1. 在 `src/App.vue` 中添加新的响应式数据
2. 在模板中添加对应的HTML结构
3. 在 `src/style.css` 中添加样式

### 视频替换
1. 保持原有文件名格式
2. 确保视频格式为MP4
3. 推荐分辨率：1920x1080或以上
4. 使用H.264编码以确保兼容性

## 🚀 部署

### 静态部署
```bash
npm run build
# 将 dist/ 文件夹部署到任何静态服务器
```

### 推荐平台
- Vercel
- Netlify  
- GitHub Pages
- 任何支持静态文件的CDN

### 部署注意事项
- 确保视频资源正确上传
- 配置正确的baseURL（如果部署在子目录）
- 启用HTTPS以确保视频自动播放

## 🛠️ 开发说明

### 代码风格
- 使用Vue 3 Composition API
- 遵循ESLint规则
- 组件采用单文件格式
- CSS使用BEM命名规范

### 性能优化
- 视频懒加载
- 图片压缩和WebP格式
- CSS动画硬件加速
- 组件按需加载

### 浏览器兼容性
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 更新日志

### v1.0.0 (2024-01-XX)
- ✅ 完全复现Google Flow网站设计
- ✅ 集成所有原版视频资源  
- ✅ 实现响应式布局
- ✅ 添加交互动画效果
- ✅ 优化移动端体验

## 🤝 贡献指南

1. Fork本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 📄 许可证

本项目仅用于学习和参考目的。视频资源版权归Google所有。

## 🔗 相关链接

- [Google Flow官网](https://labs.google/flow/about)
- [Vue 3文档](https://vuejs.org/)
- [Vite文档](https://vitejs.dev/)

## 💬 技术支持

如有问题，请创建Issue或联系开发团队。

---

**注意**: 这是一个完全复现Google Flow网站设计的学习项目，内容已根据Loop应用的需求进行了本地化调整。 