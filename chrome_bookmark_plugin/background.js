/**
 * @file 编写侧边与浏览器的交互
 */
// 监听插件图标的点击事件
chrome.action.onClicked.addListener(async (tab) => {
  // 打开侧边栏（指定当前标签页，sidePanel 会和标签页绑定）
  await chrome.sidePanel.open({ tabId: tab.id });
  // 可选：设置侧边栏的默认宽度（Chrome 116+ 支持）
  chrome.sidePanel.setOptions({
    tabId: tab.id,
    size: { width: 350 } // 宽度范围：240px ~ 800px
  });
});

// 可选：限制侧边栏仅在特定网站打开（如仅在 Google 打开）
// chrome.sidePanel.setPanelBehavior({
//   openPanelOnActionClick: true,
//   defaultPath: "sidepanel.html",
//   matchOriginHosts: ["*.google.com"] // 仅匹配指定域名
// });