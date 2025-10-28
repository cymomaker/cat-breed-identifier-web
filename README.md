# 🐱 CatBreedAI - AI驱动的猫咪品种识别

<div align="center">

**使用人工智能在3秒内识别你的猫咪品种**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[在线体验](https://catbreedai.com) | [功能特性](#-功能特性) | [快速开始](#-快速开始) | [部署指南](#-部署)

</div>

---

## 📖 项目简介

CatBreedAI 是一个基于 Web 的猫咪品种识别应用，使用先进的深度学习技术，能够在浏览器中直接识别 **67+ 种猫咪品种**。

### ✨ 核心亮点

- 🚀 **3秒识别** - 上传照片或拍照，AI 立即给出结果
- 🔒 **100% 隐私** - 所有处理在浏览器本地完成，图片不上传服务器
- 📱 **跨平台支持** - 完美适配桌面端和移动端
- 🎯 **高准确率** - 基于 MobileNetV3 模型，识别准确率高达 85%+
- 🌐 **零服务器成本** - 纯静态网站，可托管在任何静态服务器

---

## 🎯 功能特性

### 核心功能

- ✅ **多种上传方式**
  - 📤 拖拽上传图片
  - 📁 本地文件选择
  - 📷 实时摄像头拍照

- ✅ **智能识别结果**
  - 显示 Top 5 最匹配的品种
  - 实时置信度评分
  - 品种详细介绍和特征

- ✅ **互动演示**
  - 无需上传即可体验识别效果
  - 预置多个示例猫咪照片

### 增值功能

- 📊 **生成识别报告** - 可下载 PDF 格式的详细报告
- 🎨 **生成分享卡片** - 创建精美的社交媒体分享图
- 🔗 **社交分享** - 一键分享到 Twitter、Facebook 等平台
- 📚 **品种百科** - 67+ 种猫咪品种的完整介绍
- 🔍 **智能搜索** - 根据名称、原产地、性格等快速筛选品种

### UX 优化

- 🎭 **精美动画** - 流畅的加载动画和过渡效果
- 📬 **邮件订阅** - 加入等待列表，获取产品更新通知
- 🎁 **Coming Soon 预告** - AI 猫咪护理指南即将上线
- 🔔 **自定义通知系统** - 统一、美观的用户提示

---

## 🛠️ 技术栈

### 前端技术

- **HTML5** - 语义化结构
- **Tailwind CSS** - 实用优先的CSS框架
- **Vanilla JavaScript** (ES6+) - 原生JS，无框架依赖

### AI / 机器学习

- **Web-based AI Runtime** - 浏览器端AI推理引擎
- **Lightweight Neural Network** - 轻量级图像识别模型
- **Canvas API** - 图像预处理和后处理

### 其他技术

- **PWA** - 渐进式Web应用特性
- **Schema.org** - 结构化数据，SEO优化
- **Git** - 版本控制

---

## 🚀 快速开始

### 环境要求

- 现代浏览器（Chrome 90+, Firefox 88+, Safari 14+）
- 本地开发服务器（推荐使用 VS Code Live Server）

### 本地运行

```bash
# 1. 克隆项目
git clone https://github.com/yourusername/cat-breed-identifier-web.git
cd cat-breed-identifier-web

# 2. 启动本地服务器
# 方式一：使用 VS Code Live Server 插件
# 右键 index.html -> Open with Live Server

# 方式二：使用 Python（Python 3）
python -m http.server 8000

# 方式三：使用 Node.js（需要安装 http-server）
npx http-server -p 8000

# 3. 在浏览器中打开
# http://localhost:8000
```

### 项目结构

```
cat-breed-identifier-web/
├── index.html              # 主页
├── manifest.json           # PWA 配置文件
├── README.md               # 项目文档
├── DEPLOYMENT.md           # 部署指南
│
├── js/                     # JavaScript 文件
│   ├── main.js            # 主应用逻辑（识别、上传、结果展示）
│   ├── config.js          # 全局配置和常量
│   ├── notifications.js   # 自定义通知系统
│   ├── breeds.js          # 品种目录页逻辑
│   └── breed-data.js      # 67种品种的详细数据
│
├── models/                 # AI 模型文件
│   ├── catbreed_model.onnx         # AI 模型文件（约 2.4MB）
│   └── class_index.txt             # 品种类别列表
│
├── breeds/                 # 品种详情页
│   ├── index.html         # 品种目录页
│   ├── british-shorthair.html
│   ├── maine-coon.html
│   └── ... (67+ 品种页面)
│
├── blog/                   # 博客文章（SEO）
│   └── how-to-identify-cat-breed-ai.html
│
├── compare/                # 品种对比页（SEO）
│   └── maine-coon-vs-ragdoll.html
│
└── assets/                 # 静态资源
    └── README.md
```

---

## 📦 部署

CatBreedAI 是一个纯静态网站，可以部署到任何静态托管服务。

### 推荐平台

#### 1. **Vercel**（推荐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

#### 2. **Netlify**

1. 连接 GitHub 仓库
2. 构建设置：无需构建命令
3. 发布目录：`.`（根目录）
4. 点击 Deploy

#### 3. **GitHub Pages**

```bash
# 在仓库设置中启用 GitHub Pages
# 选择分支：main
# 目录：/ (root)
```

#### 4. **Cloudflare Pages**

1. 连接 GitHub 仓库
2. 框架预设：None
3. 构建命令：留空
4. 输出目录：留空
5. 部署

### 部署检查清单

在部署前，请确认：

- ✅ 所有模型文件（`/models/`）正确上传
- ✅ 所有品种页面（`/breeds/`）已生成
- ✅ `manifest.json` 中的 URL 已更新为生产域名
- ✅ SEO 元标签已配置
- ✅ 所有图片已优化（推荐使用 WebP 格式）

详细部署指南请参考 [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 🎨 代码质量

### 代码规范

- ✅ **详细注释** - 所有函数都有中文注释说明
- ✅ **常量化** - 魔数抽离为配置常量
- ✅ **模块化** - 功能独立，职责清晰
- ✅ **可维护性** - 代码结构清晰，易于初级工程师理解

### 文件说明

| 文件 | 行数 | 说明 |
|------|------|------|
| `js/main.js` | 1200+ | 核心识别逻辑，包含模型加载、图像处理、结果展示 |
| `js/config.js` | 150+ | 全局配置和常量定义 |
| `js/notifications.js` | 550+ | 自定义通知系统 |
| `js/breeds.js` | 200+ | 品种目录页逻辑 |
| `js/breed-data.js` | 3000+ | 67种品种的详细数据 |

---

## 🔧 开发指南

### 添加新品种

1. 在 `js/breed-data.js` 中添加品种数据
2. 运行品种页面生成脚本：
   ```bash
   node generate-breed-pages.js
   ```
3. 更新 `models/class_index.txt` 文件

### 修改配置

所有配置项统一在 `js/config.js` 中管理：

```javascript
// AI 模型配置
export const AI_CONFIG = {
    MODEL_PATH: '/models/catbreed_model.onnx',
    IMAGE_SIZE: 224,
    // ...
};

// UI 配置
export const UI_CONFIG = {
    SCROLL_THRESHOLD: 300,
    TOAST_DURATION: 4000,
    // ...
};
```

### 自定义样式

项目使用 Tailwind CSS，可以直接在 HTML 中修改类名，或在 `<style>` 标签中添加自定义 CSS。

---

## 🌐 支持的品种

项目当前支持识别 **67+ 种猫咪品种**，包括：

- British Shorthair（英国短毛猫）
- Maine Coon（缅因猫）
- Persian（波斯猫）
- Ragdoll（布偶猫）
- Siamese（暹罗猫）
- Bengal（孟加拉猫）
- Scottish Fold（苏格兰折耳猫）
- 等等...

完整品种列表请访问：[/breeds/](https://catbreedai.com/breeds/)

---

## 📈 SEO 优化

项目已实施全面的 SEO 优化：

- ✅ Schema.org 结构化数据
- ✅ Open Graph 和 Twitter Card 元标签
- ✅ 语义化 HTML5 标签
- ✅ 移动端友好设计
- ✅ 快速加载速度（< 3s）
- ✅ 67+ 品种独立页面（内容营销）
- ✅ 博客文章和对比页（长尾关键词）

---

## 🤝 贡献指南

欢迎贡献！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 贡献建议

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📝 改进文档
- 🎨 优化 UI/UX
- 🌍 添加多语言支持

---

## 📄 许可证

本项目采用 MIT 许可证。详情请查看 [LICENSE](LICENSE) 文件。

---

## 📞 联系方式

- **项目主页**: [https://catbreedai.com](https://catbreedai.com)
- **问题反馈**: [GitHub Issues](https://github.com/yourusername/cat-breed-identifier-web/issues)
- **邮箱**: support@catbreedai.com

---

## 🙏 致谢

- [Tailwind CSS](https://tailwindcss.com/) - 优秀的 CSS 框架
- [Web AI Community](https://webai.community/) - 提供浏览器端 AI 技术支持
- [Open Source Community](https://opensource.org/) - 为深度学习模型开发做出贡献

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我们一个 Star！⭐**

Made with ❤️ by CatBreedAI Team

</div>
