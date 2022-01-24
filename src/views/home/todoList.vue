<template>
  <div class="todo-list">
    <div>
      <input type="text" v-model="title" />
      <button @click="addTodo">添加</button>
      <button v-if="active < all" @click="clear">清理</button>
      <span>
        全选
        <input type="checkbox" v-model="allDone" />
        <span>{{ active }}/{{ all }}</span>
      </span>
    </div>
    <ul v-if="todos.length">
      <li v-for="(item, index) of todos" :key="item.title + index">
        <input type="checkbox" v-model="item.done" />
        <span>{{ item.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>当前鼠标位置 x:{{ x }},y:{{ y }}</div>
    <div
      class="mouse"
      :style="{ transform: `translate(${x}px, ${y}px)` }"
    ></div>
  </div>
</template>
<script lang="ts" setup>
import { useMouse } from '@/utils'
import { computed, ref } from 'vue'
import useTodos from './useTodos'

const { title, todos, addTodo, clear, active, all, allDone } = useTodos()
const { x, y } = useMouse()
</script>
<style lang="scss" scoped>
.todo-list {
  text-align: left;
  padding: 16px;
}
.mouse {
  width: 10px;
  height: 10px;
  background: $red;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
