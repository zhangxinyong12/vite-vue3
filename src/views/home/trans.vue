<template>
  <div class="box">
    <div :style="{ width: `${widthN}px` }"></div>
    <button @click="addWidth">+1</button>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
const widthN = ref(10)
function addWidth() {
  widthN.value = widthN.value + 100 < 1920 ? widthN.value + 100 : 1920
  console.log(widthN.value)
}
</script>
<style lang="scss" scoped>
.box {
  > div {
    background: red;
    height: 100px;
    transition: all 0.3s linear;
  }
}
</style>
