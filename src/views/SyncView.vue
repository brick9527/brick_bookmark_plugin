<template>
  <div class="sync">
    <h1>This is an sync page</h1>
  </div>
</template>

<script lang="ts" setup>
try {
  // 检查 Chrome 环境和 API 可用性
  if (!window.chrome || !chrome.bookmarks) {
    throw new Error('当前环境不支持书签 API')
  }
  const bookmarkTree = await chrome.bookmarks.getTree()
  console.log(bookmarkTree)
} catch (err) {
  console.error('获取书签失败：', err)
}
</script>
