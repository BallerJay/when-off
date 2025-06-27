import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    outDir: 'es',
    clean: true,
    dts: true,
    minify: false,
  },
  {
    entry: ['src/index.ts'],
    format: ['cjs'],
    outDir: 'lib',
    clean: true,
    minify: false,
    esbuildOptions(options) {
      options.footer = {
        // 解决 ESM 和 CJS 的兼容性问题
        js: 'module.exports = module.exports.default || module.exports;',
      };
    },
  },
  {
    entry: ['src/index.ts'],
    format: ['iife'],
    globalName: 'WhenOff',
    outDir: 'dist',
    clean: true,
    minify: true,
    outExtension() {
      return {
        js: '.min.js',
      };
    },
  },
]);
