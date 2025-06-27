export default {
  branches: [
    'master',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  plugins: [
    // 分析提交信息，确定版本类型
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'docs', scope: 'README', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'chore', scope: 'deps', release: 'patch' },
          { type: 'build', release: 'patch' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
      },
    ],
    // 生成 release notes
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
        presetConfig: {
          types: [
            { type: 'feat', section: '✨ Features' },
            { type: 'fix', section: '🐛 Bug Fixes' },
            { type: 'docs', section: '📝 Documentation' },
            { type: 'style', section: '💄 Styles', hidden: true },
            { type: 'refactor', section: '♻️ Code Refactoring' },
            { type: 'perf', section: '⚡ Performance Improvements' },
            { type: 'test', section: '✅ Tests', hidden: true },
            { type: 'build', section: '📦 Build System' },
            { type: 'ci', section: '🎡 Continuous Integration', hidden: true },
            { type: 'chore', section: '🔨 Chore', hidden: true },
            { type: 'revert', section: '⏪ Reverts' },
          ],
        },
      },
    ],
    // 生成 CHANGELOG.md
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle:
          '# 📚 更新日志\n\n所有值得注意的更改都将记录在此文件中。\n\n该项目遵循 [语义化版本控制](https://semver.org/lang/zh-CN/)。\n',
      },
    ],

    // 更新 package.json 版本并发布到 NPM
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        tarballDir: 'dist',
      },
    ],
    // 创建 GitHub Release
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'dist/**/*',
            label: 'dist',
          },
          {
            path: 'es/**/*',
            label: 'es',
          },
          {
            path: 'lib/**/*',
            label: 'lib',
          },
        ],
        releasedLabels: ['🎉 released'],
        addReleases: false,
      },
    ],
    // 提交生成的文件到 git
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'package-lock.json', 'pnpm-lock.yaml'],
        message: 'chore(release): 🎉 ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
