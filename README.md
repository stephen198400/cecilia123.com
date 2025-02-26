# Cecilia Home 官方网站

这是加州建筑设计公司 Cecilia Home 的官方网站项目，使用 [Next.js](https://nextjs.org) 开发，采用 [TailwindCSS](https://tailwindcss.com) 进行样式管理。

## 项目概述

- **公司名称**: Cecilia Home
- **网址**: [cecilia123.com](https://cecilia123.com)
- **公司地址**: 1816 Enclave Place Concord CA 94519
- **公司电话**: (510)909-1933
- **公司邮箱**: contact@ceciliahome.net

## 主要功能

- 展示公司的建筑设计作品
- 提供在线咨询服务
- 响应式设计，适配各种设备
- 表单管理通过 Formspree 实现
- 提供多种专业服务：结构检查、火灾修复、厨房改造等

## 技术栈

- **框架**: Next.js 15
- **样式**: TailwindCSS
- **包管理器**: pnpm
- **表单处理**: Formspree
- **UI 组件**: Headless UI

## 开发指南

### 环境准备

确保您已安装以下工具:

- Node.js (推荐使用 v18 或更高版本)
- pnpm

### 安装依赖

```bash
pnpm install
```

### 开发服务器

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建项目

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 项目结构

- `src/app/`: 页面组件和路由
- `src/components/`: 可复用的客户端组件
- `src/hooks/`: 自定义 React Hooks
- `public/`: 静态资源文件

## 设计规范

- 网站为全英文设计
- 布局采用 TailwindCSS 的 container 布局
- 开发时图片先用色块占位，并根据出现顺序用数字命名
- 网站需包含适量动画效果

## 部署

网站构建后可部署到各种静态托管服务，如 Vercel、Netlify 等。

```bash
pnpm build
```

## 联系方式

如有问题，请联系 Cecilia Home:

- 电话: (510)909-1933
- 邮箱: contact@ceciliahome.net
