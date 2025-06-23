# 📅 when-off

> 一个用于处理日期、日历、节假日和工作日的 TypeScript 工具库

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/Node.js-20.15.0-green.svg)](https://nodejs.org/)

## 📖 项目介绍

`when-off` 是一个专注于日期和时间处理的 TypeScript 工具库，并且提供各个国家法定节假日和调休安排信息数据，主要用于：
- 🎉 节假日识别与处理
- 💼 工作日计算

## 🛠️ 技术栈

- **语言**: TypeScript 5.8.3
- **运行时**: Node.js 20.15.0
- **包管理器**: pnpm
- **代码风格**: ESLint + Prettier
- **提交规范**: Commitizen + Commitlint
- **Git 钩子**: Husky

## 📦 环境要求

- Node.js >= 20.15.0
- pnpm >= 8.0.0 (推荐使用 pnpm 作为包管理器)

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/BallerJay/when-off.git
cd when-off
```

### 2. 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 3. 开发环境准备

项目使用 Volta 管理 Node.js 版本，如果你安装了 Volta，它会自动使用正确的 Node.js 版本。

```bash
# 如果你使用 Volta
volta install node@20.15.0
```

## 📁 项目结构

```
📦 when-off/
├── 📂 src/              # 源代码目录
│   └── index.ts         # 主入口文件
├── 📂 lib/              # 工具库目录
│   ├── index.ts         # 库入口文件
│   └── 📂 data/         # 数据文件目录
│       └── 2025.ts      # 2025年数据
├── 📂 types/            # TypeScript 类型定义
│   ├── index.ts         # 类型导出文件
│   └── date.ts          # 日期相关类型
├── 📄 package.json      # 项目配置文件
├── 📄 tsconfig.json     # TypeScript 配置
├── 📄 eslint.config.js  # ESLint 配置
├── 📄 commitlint.config.js # 提交规范配置
└── 📄 README.md         # 项目说明文档
```

## 🔧 开发命令

### 代码检查与格式化

```bash
# 运行 ESLint 检查
pnpm lint

# 自动修复 ESLint 错误
pnpm lint:fix

# 使用 Prettier 格式化代码
pnpm format
```

### 代码提交

项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范和 Commitizen 工具来标准化提交信息。

```bash
# 使用交互式提交工具
pnpm commit

# 或者使用 git-cz
git add .
git cz
```

### 产物输出

```
dist/
├── index.js          # ESM 格式
├── index.cjs         # CommonJS 格式
├── index.global.js   # IIFE 格式（浏览器直接使用）
├── index.d.ts        # TypeScript 类型声明
└── *.map             # Source maps
```

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`pnpm commit`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 🐛 问题反馈

如果你发现任何问题或有改进建议，请在 [Issues](https://github.com/BallerJay/when-off/issues) 页面提交。

---

⭐ 如果这个项目对你有帮助，请给它一个 Star！
