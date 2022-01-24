<template>
  <div>
    <h3>n:{{ n }}</h3>
    <button @click="add">add</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const n = ref(1)
const add = () => {
  n.value++
}
</script>
