// 声明全局变量 `chrome`，类型指向 @types/chrome 提供的完整类型
// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare const chrome: typeof import('@types/chrome')

// src/types/global.d.ts（文件名任意，后缀必须是 .d.ts）
declare global {
  interface Window {
    // 声明 chrome 对象，类型指向 @types/chrome 提供的 Chrome 类型
    chrome: typeof chrome
  }
}

// 注意：必须添加这行，让 TypeScript 识别为模块声明
export {}
