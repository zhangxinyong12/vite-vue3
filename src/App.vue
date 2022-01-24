<template>
  <Layout />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Layout from './layout/index.vue'
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
