<template>
  <nav class="BookmarkManagementViewNav">
    <el-row>
      <el-col :span="24">
        <!-- <el-button type="primary">同步书签</el-button>
        <el-button type="warning">删除</el-button> -->
        <el-button-group>
          <el-button type="primary" title="同步浏览器书签" color="#6191D3" size="large">
            <el-icon><Connection /></el-icon>
          </el-button>

          <el-button type="primary" color="#6191D3" title="全选/反选" size="large">
            <el-icon><CircleCheck /></el-icon>
            <!-- <el-icon><CircleClose /></el-icon> -->
          </el-button>

          <el-button type="primary" color="#6191D3" size="large" title="新增书签">
            <el-icon><AddLocation /></el-icon>
          </el-button>

          <el-button type="primary" color="#6191D3" size="large" title="新增目录">
            <el-icon><FolderAdd /></el-icon>
          </el-button>

          <el-button type="primary" color="#6191D3" title="编辑" size="large">
            <el-icon><Edit /></el-icon>
          </el-button>

          <el-button type="primary" title="删除" color="#6191D3" size="large">
            <el-icon><Delete /></el-icon>
          </el-button>
        </el-button-group>

        <!-- <el-button>新建</el-button> -->
      </el-col>
    </el-row>
  </nav>

  <main class="BookmarkManagementViewMain">
    <div>Bookmark Management view</div>
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
      <template #default="{ node, data }">
        <div class="custom-tree-node">
          <span>{{ node.label }}</span>
          <div>
            <el-button type="primary" link @click="append(data)"> Append </el-button>
            <el-button style="margin-left: 4px" type="danger" link @click="remove(node, data)">
              Delete
            </el-button>
          </div>
        </div>
      </template>
    </el-tree>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { RenderContentContext, TreeInstance } from 'element-plus'

interface Tree {
  label: string
  children?: Tree[]
}

type Data = RenderContentContext['data']

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}

let id = 1000
const treeRef1 = ref<TreeInstance>()
const treeRef2 = ref<TreeInstance>()

const append = (data: Data) => {
  const newChild = { id: id++, label: 'testtest', children: [] }
  treeRef1.value?.append(newChild, data)
  treeRef2.value?.append(newChild, data)
}

const remove = (node: Node, data: Data) => {
  treeRef1.value?.remove(data)
  treeRef2.value?.remove(data)
}
</script>

<style scoped>
.BookmarkManagementViewNav {
  margin: 5px;

  .el-icon {
    color: #fff;
  }
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
