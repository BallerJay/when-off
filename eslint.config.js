import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import js from '@eslint/js';

export default tseslint.config([
  {
    ignores: [
      // 📦 依赖和构建产物
      '**/node_modules/**',
      '**/dist/**',
      '**/es/**',
      '**/lib/**',
      // 🎯 特定目录
      '.vscode/**',
      '.husky/**',
      // ⚙️ 配置文件
      // 'eslint.config.js',
      // 'prettier.config.js',
      // 📄 其他文件
      'pnpm-lock.yaml',
      '*.log',
      'json/demo/**',
    ],
  },
  {
    files: ['**/*.{js,ts}'],
    plugins: {
      js,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'warn',
    },
  },
  tseslint.configs.recommended,
  prettierConfig,
]);
