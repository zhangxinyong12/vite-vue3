<template>
  <div class="box">
    <div>
      <span>count:</span>
      <span>{{ count }}</span>
      <br />
      <span>double:</span>
      <span>{{ double }}</span>
      <a-button @click="add">+1</a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const count = computed(() => store.state.count)
const double = computed(() => store.getters.double)
function add() {
  store.commit('add')
}
</script>
<style lang="scss" scoped>
.box {
}
</style>
