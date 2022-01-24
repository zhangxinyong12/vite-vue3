<template>
  <div>
    <h1 class="blue">vite vue3 ts</h1>
    <h3>n:{{ n }}</h3>
    <button @click="add">add</button>
    <span>{{ AppTitle }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
console.log(import.meta.env)

const AppTitle = import.meta.env.VITE_APP_TITLE
console.log(AppTitle)
console.log('import.meta.env.MODE=', import.meta.env.MODE)

const n = ref(1)
const add = () => {
  n.value++
}
</script>
<style lang="scss" scoped>
div {
  h3 {
    color: $red;
  }
}
</style>
