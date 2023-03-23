# @cgxqd/monaco-editor
![npm](https://img.shields.io/npm/v/@cgxqd/monaco-editor)
![npm](https://img.shields.io/npm/dt/@cgxqd/ctable)
![NPM](https://img.shields.io/npm/l/@cgxqd/monaco-editor)

[Monaco Editor](https://github.com/Microsoft/monaco-editor) 是为 VS Code 提供支持的代码编辑器。

## 环境支持

@cgxqd/monaco-editor 可以在支持 ES2015 和 ResizeObserver 的浏览器上运行。 如果您确实需要支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill 。

由于 [monaco-editor 停止对 IE 的支持 #1790](https://github.com/microsoft/monaco-editor/issues/1790)，@cgxqd/monaco-editor 也不再支持 IE 浏览器。

## 安装

### 使用包管理器

```bash
# 选择一个你喜欢的包管理器

# NPM
$ npm install @cgxqd/monaco-editor --save

# Yarn
$ yarn add @cgxqd/monaco-editor

# pnpm
$ pnpm install @cgxqd/monaco-editor
```

###  浏览器直接引入

我们建议您使用CDN 引入，直接通过浏览器的 HTML 标签导入 @cgxqd/monaco-editor，然后就可以使用全局变量 monaco 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 unpkg 和 jsDelivr 举例。 你也可以使用其它的 CDN 供应商。

unpkg
``` html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="https://unpkg.com/@cgxqd/monaco-editor/dist/index.css" />
  <!-- Import @cgxqd/monaco-editor -->
  <script src="https://unpkg.com/@cgxqd/monaco-editor"></script>
</head>
```

jsDelivr
``` html
<head>
  <!-- Import style -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@cgxqd/monaco-editor/dist/index.css" />
  <!-- jsDelivr + Github 加速 -->
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cgxqd/monaco-editor/dist/index.css" /> -->
  
  <!-- Import @cgxqd/monaco-editor -->
  <script src="https://cdn.jsdelivr.net/npm/@cgxqd/monaco-editor"></script>
  <!-- jsDelivr + Github 加速 -->
  <!-- <script src="https://cdn.jsdelivr.net/gh/cgxqd/monaco-editor/dist/index.global.js"></script> -->
  
</head>
```

## 项目中使用

### CDN
``` js
// 引入样式
import 'https://cdn.jsdelivr.net/npm/@cgxqd/monaco-editor/dist/index.css'

function loadScript (url, name) {
  // 需要自己实现
}

const { editor } = await loadScript(
  "https://cdn.jsdelivr.net/npm/@cgxqd/monaco-editor",
  "monaco"
);
// 创建编辑器
editor.create(DOMElement, option)
```

### ESM

```js
import { editor } from '@cgxqd/monaco-editor'
import '@cgxqd/monaco-editor/dist/index.css'

// 创建编辑器
editor.create(DOMElement, option)
```
