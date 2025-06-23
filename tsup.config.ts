import { defineConfig } from 'tsup';

export default defineConfig([
  // 🎯 ESM 格式配置
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'es',
    sourcemap: false,
    clean: true,
    dts: true,
    splitting: true, // ESM 支持代码分割
    esbuildOptions: (options) => {
      options.banner = {
        js: '// 🎯 ESM build by tsup for when-off',
      };
    },
    minify: process.env.NODE_ENV === 'production',
    watch: process.env.NODE_ENV === 'development',
  },

  // 🎯 CommonJS 格式配置
  {
    entry: ['src/index.ts'],
    format: ['cjs'],
    outDir: 'lib',
    sourcemap: false,
    clean: true,
    dts: false,
    splitting: true,
    esbuildOptions: (options) => {
      options.banner = {
        js: '// 🎯 CommonJS build by tsup for when-off',
      };
    },
    minify: process.env.NODE_ENV === 'production',
    watch: process.env.NODE_ENV === 'development',
  },

  // 🎯 IIFE 格式配置（浏览器使用）
  {
    entry: ['src/index.ts'],
    format: ['iife'],
    globalName: 'WhenOff',
    outDir: 'dist',
    sourcemap: false,
    clean: true,
    dts: false,
    splitting: true,
    esbuildOptions: (options) => {
      options.banner = {
        js: '// 🎯 IIFE build by tsup for when-off',
      };
    },
    minify: process.env.NODE_ENV === 'production',
    watch: process.env.NODE_ENV === 'development',
  },
]);
