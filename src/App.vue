<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper" id="top_wrapper">
    <el-splitter>
      <el-splitter-panel collapsible="true" size="30%" :max="50">
        <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/bookmarkManagement">
            <el-icon><icon-menu /></el-icon>
            <span>书签管理</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <el-icon><icon-menu /></el-icon>
            <span>About</span>
          </el-menu-item>
          <el-menu-item index="/sync">
            <el-icon><icon-menu /></el-icon>
            <span>同步</span>
          </el-menu-item>
        </el-menu>
      </el-splitter-panel>
      <el-splitter-panel size="70%" :min="150">
        <RouterView />
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

<style>
#top_wrapper {
  /* min-width: 500px; */
  height: 100vh;
}
</style>
