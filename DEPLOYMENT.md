# 🚀 CatBreedAI 部署指南

本文档提供详细的部署步骤和注意事项，确保 CatBreedAI 能够顺利上线。

---

## 📋 目录

- [部署前准备](#部署前准备)
- [推荐部署平台](#推荐部署平台)
- [详细部署步骤](#详细部署步骤)
- [环境变量配置](#环境变量配置)
- [性能优化](#性能优化)
- [监控与分析](#监控与分析)
- [常见问题](#常见问题)

---

## 部署前准备

### ✅ 检查清单

在部署之前，请确保完成以下检查：

#### 1. 文件完整性

- [ ] 所有 HTML 文件无语法错误
- [ ] JavaScript 文件无 linter 错误
- [ ] AI 模型文件存在（`models/catbreed_model.onnx`，约 2.4MB）
- [ ] 品种类别文件存在（`models/class_index.txt`）
- [ ] 所有品种页面已生成（67+ 个 HTML 文件）

#### 2. 配置更新

- [ ] 更新 `manifest.json` 中的网站 URL
- [ ] 检查 `js/config.js` 中的配置项
- [ ] 更新 SEO 元标签（`og:url`, `twitter:url`）
- [ ] 配置 Google Analytics（可选）

#### 3. 资源优化

- [ ] 图片已压缩（推荐使用 TinyPNG）
- [ ] 图片格式已优化（推荐 WebP）
- [ ] 模型文件已启用 Gzip/Brotli 压缩

#### 4. 测试验证

- [ ] 本地测试所有功能正常
- [ ] 移动端适配测试通过
- [ ] 不同浏览器兼容性测试通过
- [ ] AI 识别功能正常工作
- [ ] 所有链接可点击且正确跳转

---

## 推荐部署平台

### 1. Vercel（⭐ 推荐）

**优点**：
- ✅ 免费额度充足
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ Git 集成，推送即部署
- ✅ 支持自定义域名

**缺点**：
- ❌ 中国大陆访问可能较慢（可配置 CDN）

### 2. Netlify

**优点**：
- ✅ 友好的 UI 界面
- ✅ 免费 SSL 证书
- ✅ 表单处理功能
- ✅ 易于配置重定向规则

**缺点**：
- ❌ 构建分钟数有限制

### 3. GitHub Pages

**优点**：
- ✅ 完全免费
- ✅ 与 GitHub 深度集成
- ✅ 稳定可靠

**缺点**：
- ❌ 只支持公开仓库（免费版）
- ❌ 不支持服务器端逻辑

### 4. Cloudflare Pages

**优点**：
- ✅ 全球 CDN 性能优秀
- ✅ 免费无限带宽
- ✅ 支持自定义域名和 SSL

**缺点**：
- ❌ 配置相对复杂

---

## 详细部署步骤

### 方式一：Vercel（推荐）

#### 通过 Git 部署

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录 Vercel
vercel login

# 3. 在项目根目录执行部署
cd cat-breed-identifier-web
vercel

# 4. 按照提示完成配置
# - Set up and deploy? [Y/n] y
# - Which scope? (选择你的账户)
# - Link to existing project? [y/N] n
# - What's your project's name? cat-breed-ai
# - In which directory is your code located? ./

# 5. 生产环境部署
vercel --prod
```

#### 通过 Web UI 部署

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入 GitHub 仓库
4. 配置项目：
   - Framework Preset: **Other**
   - Root Directory: `./`
   - Build Command: 留空
   - Output Directory: 留空
5. 点击 "Deploy"

### 方式二：Netlify

#### 通过拖拽部署

1. 将项目文件夹压缩为 ZIP
2. 访问 [netlify.com](https://www.netlify.com/)
3. 拖拽 ZIP 文件到部署区域
4. 等待部署完成

#### 通过 Git 部署

1. 登录 Netlify
2. 点击 "New site from Git"
3. 选择 GitHub 仓库
4. 配置构建设置：
   - Build command: 留空
   - Publish directory: `.`
5. 点击 "Deploy site"

### 方式三：GitHub Pages

```bash
# 1. 确保代码已推送到 GitHub

# 2. 在仓库设置中启用 GitHub Pages
# Settings -> Pages -> Source -> 选择 main 分支 -> Save

# 3. 访问你的网站
# https://yourusername.github.io/cat-breed-identifier-web/
```

### 方式四：Cloudflare Pages

1. 登录 Cloudflare 控制台
2. 进入 "Pages" 页面
3. 点击 "Create a project"
4. 连接 GitHub 仓库
5. 配置构建设置：
   - Framework preset: **None**
   - Build command: 留空
   - Build output directory: `/`
6. 点击 "Save and Deploy"

---

## 环境变量配置

虽然 CatBreedAI 是纯静态网站，但你可以在 `js/config.js` 中配置以下项：

```javascript
// 修改生产环境配置
export const SHARE_CONFIG = {
    // 更新为你的实际域名
    BASE_URL: 'https://yourdomain.com',
    // ...
};

// 更新社会证明数据
export const SOCIAL_PROOF = {
    TOTAL_USERS: '12,846+',  // 根据实际数据更新
    AVERAGE_RATING: '4.8/5',
    WAITLIST_COUNT: '2,847+'
};

// 设置产品状态
export const LAUNCH_CONFIG = {
    EXPECTED_LAUNCH: 'Q1 2025',
    PRODUCT_STATUS: 'coming_soon'  // 'available' | 'coming_soon'
};
```

---

## 性能优化

### 1. 启用压缩

确保服务器启用 Gzip 或 Brotli 压缩：

**Vercel** - 自动启用

**Netlify** - 在 `netlify.toml` 添加：
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Encoding = "gzip"
```

**Cloudflare Pages** - 自动启用

### 2. 缓存策略

在 `netlify.toml` 或 `vercel.json` 中配置缓存：

```json
{
  "headers": [
    {
      "source": "/models/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/js/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=604800"
        }
      ]
    }
  ]
}
```

### 3. 图片优化

```bash
# 使用 imagemin 压缩图片
npm install -g imagemin-cli

# 压缩 PNG
imagemin images/*.png --out-dir=images-optimized

# 转换为 WebP
npm install -g cwebp-bin
cwebp -q 80 input.png -o output.webp
```

### 4. 模型文件优化

AI 模型文件已经是优化后的版本，但你可以：

- 启用服务器端压缩（Gzip/Brotli）
- 使用 CDN 加速模型下载
- 优化模型加载策略（可选）

---

## 监控与分析

### 1. Google Analytics

在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. 性能监控

```javascript
// 在 main.js 中添加性能追踪
window.addEventListener('load', () => {
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    console.log(`Page load time: ${pageLoadTime}ms`);
    
    // 可以发送到分析服务
    // sendToAnalytics('pageLoad', pageLoadTime);
});
```

### 3. 错误监控

推荐使用 Sentry 或类似服务：

```html
<script src="https://browser.sentry-cdn.com/7.x.x/bundle.min.js"></script>
<script>
  Sentry.init({ 
    dsn: 'YOUR_DSN_HERE',
    environment: 'production'
  });
</script>
```

---

## 常见问题

### Q1: 模型加载失败

**问题**：控制台显示 404 错误，模型无法加载

**解决方案**：
- 确认 `models/` 目录已正确上传
- 检查文件路径是否正确
- 确认服务器支持模型文件类型
- 检查浏览器控制台的网络请求

### Q2: 页面加载缓慢

**问题**：首次加载时间超过 5 秒

**解决方案**：
- 启用服务器压缩（Gzip/Brotli）
- 使用 CDN 加速静态资源
- 优化图片大小和格式
- 延迟加载非关键资源

### Q3: 移动端识别失败

**问题**：手机上传照片后无法识别

**解决方案**：
- 检查照片文件大小（推荐 < 5MB）
- 确认浏览器支持 Canvas API
- 测试不同图片格式（JPEG/PNG/HEIC）
- 查看浏览器控制台错误信息

### Q4: CORS 错误

**问题**：跨域资源加载失败

**解决方案**：
- 确保所有资源在同一域名下
- 配置正确的 CORS 头
- 检查 `manifest.json` 中的路径

### Q5: SEO 不生效

**问题**：搜索引擎未收录页面

**解决方案**：
- 提交网站地图到 Google Search Console
- 确认 `robots.txt` 未屏蔽爬虫
- 检查 meta 标签是否正确
- 等待 1-2 周让搜索引擎索引

---

## 后续步骤

部署成功后，建议：

1. **提交到搜索引擎**
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)

2. **配置自定义域名**
   - 购买域名（推荐 Namecheap、GoDaddy）
   - 在部署平台添加自定义域名
   - 配置 DNS 记录

3. **设置邮件收集**
   - 集成 Mailchimp、ConvertKit 或 EmailOctopus
   - 更新 `index.html` 中的表单提交逻辑

4. **监控网站表现**
   - 使用 Google Analytics 跟踪流量
   - 监控 Core Web Vitals
   - 定期检查错误日志

---

## 获取帮助

如有部署问题，请：

- 查看 [README.md](./README.md) 文档
- 提交 [GitHub Issue](https://github.com/yourusername/cat-breed-identifier-web/issues)
- 发送邮件到 support@catbreedai.com

---

<div align="center">

**🎉 祝你部署顺利！🎉**

[← 返回 README](./README.md)

</div>
