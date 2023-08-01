# js-utils-template

## 概述：

开箱即用的 javascript 工具库开发模板。

## 特征：

- 使用 vite4 库模式构建。
- 集成 typedoc，根据注释内容打包为 markdown 文件并自动生成 vitepress 侧边栏配置。
- 使用 release-it 实现一键发布，并自动生成 CHANGELOG 日志文件。
- 集成了 vitest，使单元测试变得更简单。

## 快速开始：

📦 打包工具库：

```sh
npm run build
```

📦 打包文档

```sh
npm run build:docs
```

文档 dev 模式：

```sh
npm run dev:docs
```

运行单元测试：

```sh
npm run test
```

所有测试用例代码都应存放在 test 目录下，且文件名命名规则需要以 `.spec.ts` 作为结尾。

启动测试可视化 ui

```sh
npm run test:ui
```

发布工具库：

```sh
npm run release
```

## LICENSE

[MIT](/LICENSE)
