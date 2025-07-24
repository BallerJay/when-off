# 📅 when-off

> 一个用于处理日期、日历、节假日和工作日的 TypeScript 工具库

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE) [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/) [![Node.js](https://img.shields.io/badge/Node.js-20.15.0-green.svg)](https://nodejs.org/)

## 📖 项目介绍

`when-off` 是一个专注于日期和时间处理的 TypeScript 工具库，提供全球多个国家的法定节假日和调休安排数据，主要功能包括：
- 🎉 节假日识别与处理
- 💼 工作日计算
- 📅 调休安排查询
- 📊 节假日统计信息
- 🌍 多地区数据支持

## 🚀 安装

### 使用 npm

```bash
npm install when-off
```

### 使用 yarn

```bash
yarn add when-off
```

### 使用 pnpm

```bash
pnpm add when-off
```

### 使用 bun

```bash
bun add when-off
```

## 📋 使用方法

### 基本用法

```typescript
import WhenOff from 'when-off';

// 创建实例，默认为中国地区当前年份
const whenOff = new WhenOff();

// 指定地区和年份
const whenOff2025 = new WhenOff('CN', 2025);
```

## 数据访问

原始 JSON 文件可通过以下方式访问：

1. unpkg：
```
https://unpkg.com/when-off/json/CN/2025.json
```

2. jsDelivr CDN：
```
https://cdn.jsdelivr.net/npm/when-off/json/CN/2025.json
```

### 浏览器直接使用

```html
<script src="https://unpkg.com/when-off"></script>
<!-- <script src="https://cdn.jsdelivr.net/npm/when-off" ></script> -->
<script>
  const whenOff = new WhenOff();
  console.log(whenOff.isHoliday(new Date('2024-01-01')));
</script>
```

## 📚 API 参考

### 构造函数

```typescript
constructor(region?: RegionEnum, year?: number)
```

**参数：**
- `region` (可选): 地区代码，默认为 `'CN'`，目前仅支持中国
- `year` (可选): 年份，默认为当前年份

**示例：**
```typescript
const whenOff = new WhenOff(); // 默认中国，当前年份
const whenOff2024 = new WhenOff('CN', 2024); // 中国，2024年
```

### 方法

#### `isHoliday(date: Date, region?: string): boolean`

判断指定日期是否为法定节假日。

**参数：**
- `date`: 要检查的日期
- `region` (可选): 地区代码，默认使用实例创建时的地区

**返回值：**
- `boolean`: 如果是法定节假日返回 `true`，否则返回 `false`

**示例：**
```typescript
const whenOff = new WhenOff();

// 检查2024年1月1日是否为节假日
console.log(whenOff.isHoliday(new Date('2024-01-01'))); // true

// 检查2024年1月2日是否为节假日
console.log(whenOff.isHoliday(new Date('2024-01-02'))); // false
```

#### `isWorkingDay(date: Date): boolean`

判断指定日期是否为工作日。

**参数：**
- `date`: 要检查的日期

**返回值：**
- `boolean`: 如果是工作日返回 `true`，否则返回 `false`

**示例：**
```typescript
const whenOff = new WhenOff();

// 检查2024年1月2日是否为工作日
console.log(whenOff.isWorkingDay(new Date('2024-01-02'))); // true

// 检查2024年1月1日是否为工作日（元旦）
console.log(whenOff.isWorkingDay(new Date('2024-01-01'))); // false
```

#### `isAlternateWorkDay(date: Date, region?: string): boolean`

判断指定日期是否为调休工作日。

**参数：**
- `date`: 要检查的日期
- `region` (可选): 地区代码，默认使用实例创建时的地区

**返回值：**
- `boolean`: 如果是调休工作日返回 `true`，否则返回 `false`

**示例：**
```typescript
const whenOff = new WhenOff();

// 检查某个周末是否为调休工作日
console.log(whenOff.isAlternateWorkDay(new Date('2024-02-04'))); // true (春节调休)
```

#### `getDateInfo(date: Date, region?: string): HolidayInfo | undefined`

获取指定日期的节假日相关信息。

**参数：**
- `date`: 要查询的日期
- `region` (可选): 地区代码，默认使用实例创建时的地区

**返回值：**
- `HolidayInfo | undefined`: 节假日信息对象，如果该日期没有特殊信息则返回 `undefined`

**示例：**
```typescript
const whenOff = new WhenOff();

const info = whenOff.getDateInfo(new Date('2024-01-01'));
console.log(info);
// 输出: { date: '2024-01-01', type: 'public_holiday', name: '元旦' }
```

#### `getHolidayStats(region?: string): HolidayStats | undefined`

获取指定年份的节假日统计信息。

**参数：**
- `region` (可选): 地区代码，默认使用实例创建时的地区

**返回值：**
- `HolidayStats | undefined`: 统计信息对象，包含节假日和调休工作日的总数

**示例：**
```typescript
const whenOff = new WhenOff();

const stats = whenOff.getHolidayStats();
console.log(stats);
// 输出: { totalHolidays: 11, totalAlternateWorkdays: 8 }
```

## 🗓️ 支持的数据范围

### 地区支持
- 🇨🇳 **中国 (CN)**: 2015-2025年完整数据

### 年份支持
- **2015-2025年**: 完整的法定节假日和调休数据

## 💡 使用示例

### 1. 基础日期判断

```typescript
import WhenOff from 'when-off';

const whenOff = new WhenOff();

// 判断今天是否为节假日
const today = new Date();
if (whenOff.isHoliday(today)) {
  console.log('🎉 今天是节假日，好好休息！');
} else if (whenOff.isWorkingDay(today)) {
  console.log('💼 今天是工作日，加油工作！');
}
```

### 2. 批量日期处理

```typescript
import WhenOff from 'when-off';

const whenOff = new WhenOff();

// 检查一周内的日期
const dates = [
  new Date('2024-01-01'),
  new Date('2024-01-02'),
  new Date('2024-01-03'),
];

dates.forEach(date => {
  const dateStr = date.toISOString().split('T')[0];
  if (whenOff.isHoliday(date)) {
    console.log(`📅 ${dateStr} 是节假日`);
  } else if (whenOff.isAlternateWorkDay(date)) {
    console.log(`🔄 ${dateStr} 是调休工作日`);
  } else if (whenOff.isWorkingDay(date)) {
    console.log(`💼 ${dateStr} 是工作日`);
  } else {
    console.log(`🌟 ${dateStr} 是周末`);
  }
});
```

### 3. 统计信息查询

```typescript
import WhenOff from 'when-off';

const whenOff = new WhenOff('CN', 2024);

// 获取2024年节假日统计
const stats = whenOff.getHolidayStats();
console.log(`📊 2024年统计：`);
console.log(`🎉 法定节假日: ${stats.totalHolidays} 天`);
console.log(`🔄 调休工作日: ${stats.totalAlternateWorkdays} 天`);
```

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

### 代码提交

项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范和 Commitizen 工具来标准化提交信息。

```bash
# 使用交互式提交工具
pnpm commit
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
