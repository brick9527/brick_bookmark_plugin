# chrome_bookmark_plugin

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 发布插件

### 打包项目

```sh
npm run build
```

### 拷贝打包后的文件到插件文件夹

```sh
cp -r dist/* ./chrome_bookmark_plugin/
```

将插件文件夹更新到chrome

## TODO

- [ ] [1.0.0]
  - [x] 引入Element Plus
  - [x] 完成侧边栏的UI开发
  - [ ] 完成书签管理页的UI开发
  - [ ] 使用IndexDB本地存储
  - [ ] 完成浏览器书签同步
  - [ ] 完成单机版
